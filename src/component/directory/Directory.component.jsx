import DirectoryItem from "../directory-item/DirectoryItem.component"

import { DirectoryContainer } from "./directory.style"

const categories = [
    {
        id: 1,
        title: "laptop",
        imageUrl: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        route: 'shop/laptops'
    },
    {
        id: 2,
        title: "sunglasses",
        imageUrl: "https://images.unsplash.com/photo-1552337557-45792b252a2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        route: 'shop/sunglasses'
    },
    {
        id: 3,
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        route: 'shop/mens-shoes'
    },
    {
        id: 4,
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        route: 'shop/womens-dresses'
    },
    {
        id: 5,
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        route: 'shop/mens-watches'
    }
]


const Directory = () => {
    return (
        <DirectoryContainer>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </DirectoryContainer>
    )
}

export default Directory