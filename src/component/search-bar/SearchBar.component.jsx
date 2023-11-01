import { useEffect, useState, useRef } from "react"
import { useSelector } from "react-redux"
import { useOnClickOutside } from 'usehooks-ts'

import { searchProductApi } from "../../api/search-product/searchProduct.api"

import useDebouce from "../../hooks/useDeboucer"

import SearchProduct from "../Seacrh-product/SearchProduct.component"
import SingleProduct from "../single-product/SingleProduct.component"
import PopUp from '../pop-up/PopUp.component'

import { selectIsPopUpOpen } from "../../store/user/user.selector"

import { POP_UP_TYPE } from '../pop-up/popUpTypes'

import { Containerr, SearchContainer, SearchInput } from "./search-bar.style"


const SearchBar = () => {

    const searchBarRef = useRef(null)

    const [searchText, setSearchText] = useState("")
    const [SearchResult, setSearchResult] = useState([])
    const [singleProductFlag, setSingleProductFlag] = useState(false)
    const [productData, setProductData] = useState({})

    const isSignIn = useSelector(selectIsPopUpOpen)

    const debouncedInput = useDebouce(searchText)

    const searchTextHandler = (event) => {
        const { value } = event.target
        setSearchText(value)
    }

    useEffect(() => {
        (async () => {
            if (debouncedInput.length > 0) {
                let result = await searchProductApi(debouncedInput)
                setSearchResult(result)
            } else {
                setSearchResult([])
            }
        }
        )()
    }, [debouncedInput])


    const productClickHandler = (product) => {
        setSearchText("")
        setSearchResult([])
        setProductData(product)
        setSingleProductFlag(true)
    }

    useOnClickOutside(searchBarRef, () => {
        setSearchResult([])
    })

    return (
        <>
            <SearchContainer ref={searchBarRef}>

                <SearchInput
                    type="text"
                    placeholder="Search..."
                    onChange={searchTextHandler}
                    value={searchText}
                />
                <Containerr>

                    {SearchResult.map((product) => (
                        <div key={product.id} onClick={() => productClickHandler(product)}>
                            <SearchProduct
                                searchResultHandler={setSearchResult}
                                product={product}
                            />
                        </div>
                    ))}
                </Containerr>
            </SearchContainer>
            {singleProductFlag && <SingleProduct
                productDataHandler={setProductData}
                singleProductHandler={setSingleProductFlag}
                productData={productData} />}

            {isSignIn && <PopUp popUpType={POP_UP_TYPE.SIGN_IN_POP_UP} />}
        </>
    )
}

export default SearchBar