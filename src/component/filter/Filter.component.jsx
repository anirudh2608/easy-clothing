import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categories.selector";

import {
    FilterContainer,
    FilterHeading,
    FilterHeadingContainer,
    FilterName,
    FiltersContainer,
    InnerContainer,
    RatingContainer,
    SliderPriceContainer
} from "./filter.style"




function getMinY(data) {
    if (data.length > 0) {
        return data.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
    }
}

function getMaxY(data) {
    if (data.length > 0) {
        return data.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    }
}



const Filter = ({ filterProductsHandler, filterMenuHandler, isFilterMenuOpen }) => {

    const products = useSelector(selectCategoriesMap)

    const [ratingValue, setRatingValue] = useState(5)
    const [sliderValue, setSliderValue] = useState(Number)

    const [priceMinValue, setPriceMinValue] = useState(Number)
    const [priceMaxValue, setPriceMaxValue] = useState(Number)


    const onChangeSliderHandler = (event) => {
        const { value } = event.target
        setSliderValue(value)
    }

    const onChangeRatingHandler = (value) => {
        setRatingValue(value)
    }


    useEffect(() => {
        if (products.length > 0) {
            setPriceMinValue(getMinY(products).price)
            setPriceMaxValue(getMaxY(products).price)
            setSliderValue(getMaxY(products).price)
        }

    }, [products])

    useEffect(() => {
        if (products) {
            let filter_result = products.filter((product) => {
                return (sliderValue >= product.price && product.rating <= ratingValue)
            })
            filterProductsHandler(filter_result)
        }

    }, [sliderValue, ratingValue])



    return (

        <FilterContainer isFilterMenuOpen={isFilterMenuOpen} >
            <FilterHeadingContainer>
                <FilterHeading>Filter</FilterHeading>
                <span onClick={() => filterMenuHandler(false)}>x</span>
            </FilterHeadingContainer>
            <FiltersContainer>

                <InnerContainer>
                    <FilterName>
                        Price
                    </FilterName>
                    <SliderPriceContainer>
                        <input
                            type="range"
                            min={priceMinValue}
                            max={priceMaxValue}
                            value={sliderValue}
                            onChange={onChangeSliderHandler}
                        />
                        <div>
                            <span>{priceMinValue}</span>
                            <span>{priceMaxValue}</span>
                        </div>
                    </SliderPriceContainer>

                </InnerContainer>

                <InnerContainer>
                    <FilterName>
                        Rating
                    </FilterName>
                    <RatingContainer ratingValue={ratingValue}>
                        <span onClick={() => onChangeRatingHandler(1)}>1 star and Below</span>
                        <span onClick={() => onChangeRatingHandler(2)}>2 star and Below</span>
                        <span onClick={() => onChangeRatingHandler(3)}>3 star and Below</span>
                        <span onClick={() => onChangeRatingHandler(4)}>4 star and Below</span>
                        <span onClick={() => onChangeRatingHandler(5)}>5 star and Below</span>
                    </RatingContainer>
                </InnerContainer>

            </FiltersContainer>
        </FilterContainer>
    )
}

export default Filter