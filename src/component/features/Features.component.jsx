import {
    CODIcon,
    FeaturesContainer,
    FeaturesItemInfo,
    FeaturesItemsContainer,
    OrderIcon,
    ReturnIcon,
    ShippingIcon
} from "./features.style"



const Features = () => {


    return (
        <FeaturesContainer>

            <FeaturesItemsContainer>
                <ShippingIcon />
                <FeaturesItemInfo>FREE SHIPPING</FeaturesItemInfo>
            </FeaturesItemsContainer>

            <FeaturesItemsContainer>
                <CODIcon />
                <FeaturesItemInfo>CASH ON DELIVERY</FeaturesItemInfo>
            </FeaturesItemsContainer>

            <FeaturesItemsContainer>
                <ReturnIcon />
                <FeaturesItemInfo>30 DAYS RETURN</FeaturesItemInfo>
            </FeaturesItemsContainer>

            <FeaturesItemsContainer>
                <OrderIcon />
                <FeaturesItemInfo>ORDER ANYTIME</FeaturesItemInfo>
            </FeaturesItemsContainer>

        </FeaturesContainer>
    )
}

export default Features