import styled from "styled-components";


export const FilterContainer = styled.div`
width:15rem;  
height: 23rem;
top: 160px;
box-shadow: 5px 0 5px -2px #888;
background-color: white;
padding:10px;

@media screen and (max-width:800px) {
    position: fixed; 
    transform:  ${props=>props.isFilterMenuOpen? "translateX(0%)" : "translateX(-105%)"};
    transition: transform 0.5s ease-in;
    z-index: 99999999999999999;
}
`
export const FilterHeadingContainer = styled.div`
display:flex;
flex-direction: row;
align-items: center;

span{
    display:none;
    font-weight: bold;

    @media screen and (max-width:800px) {
        display:block;
    }
}
`

export const FilterHeading = styled.span`
display: table;
margin: 0 auto;
font-size: 23px;
font-weight: bold;
letter-spacing: 0.5px;
`

export const FiltersContainer = styled.div`
display: flex;
flex-direction: column;
gap:10px
`

export const FilterName = styled.span`
font-size: 16px;
font-weight: bold;
letter-spacing: 0.5px;
`

export const InnerContainer = styled.div`
display: flex;
flex-direction: column;
`
export const SliderPriceContainer = styled.div`
display: flex;
flex-direction: column;

input{
    margin-left: 15px;
    width:95%;
}

div{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    margin-left: 15px;

    span{
        font-weight: bold;
        font-size: smaller;
    }
}

`

export const RatingContainer = styled.div`
display: flex;
flex-direction: column;
gap:5px;
padding-top:10px;
text-align: center;

span{
    margin-left: 15px;
    width: 150px;
    font-size: 13px;
    border: 1px solid black;
    padding: 3px;
    cursor: pointer;
    border-radius: 10px;
    }
    
    span:nth-child(${props=>props.ratingValue}){
        background-color: black;
        color: white;
    }
`