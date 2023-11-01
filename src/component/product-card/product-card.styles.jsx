import styled from "styled-components"

export const ProductImage = styled.div`
width: 100%;
height: 85%;
margin-bottom: 5px;

@media screen and (max-width:550px)
{
  height: 87%;
}

@media screen and (max-width:450px)
{
  height: 87%;
}

`;

export const ProductCardContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
height: 300px;
align-items: center;
position: relative;
padding: 10px;
border-radius: 10px;
background-color: #e9e9e9;

button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 240px;
    display: none;
  }

  &:hover {
      ${ProductImage} {
        opacity: 0.8;
      }
  
      button {
        opacity: 0.85;
        display: flex;
      }
    }


    @media screen and (max-width:1001px){

      button {
        top: 170px;
      }
      
    @media screen and (max-width:800px){
      width: 100%;

      button {
        display: block;
        opacity: 0.9;
        min-width: unset;
        padding: 0 10px;

        &:hover {
          img{
            opacity: unset;
          }
          button {
            opacity: unset;
          }
        }

      }
      

      @media screen and (max-width:400px)
      {
        button {
          width: 100%;
          top: 150px;
          font-size: 14px
        }
      }

      @media screen and (max-width:350px)
      {
        button {
          width: 90%;
          top: 200px;
          font-size: 12px
        }
      }

   }

`;

export const Footer = styled.div`
width: 100%;
height: 5%;
padding:5px;
display: flex;
justify-content: space-between;
font-size: 18px;
`;

export const ProductName = styled.span`
margin-bottom: 15px;

@media screen and (max-width:550px)
{
  font-size:15px;
}

@media screen and (max-width:400px)
{
  font-size:14px;
}

@media screen and (max-width:350px)
{
  font-size:12px;
}
`;

export const ProductPrice = styled.span`

@media screen and (max-width:550px)
{
  font-size:15px;
}

@media screen and (max-width:400px)
{
  font-size:14px;
}

@media screen and (max-width:350px)
{
  font-size:12px;
}
`;
