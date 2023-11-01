import styled from "styled-components"

export const CheckoutContainer = styled.div`
width: 55%;
min-height: 90vh;
display: flex;
flex-direction: column;
align-items: center;
margin: 50px auto 0;

@media screen and (max-width:800px) {
  width: 100%;
}
`;

export const CheckoutHeader = styled.div`
width: 100%;
padding: 10px 0;
display: flex;
justify-content: space-between;
border-bottom: 1px solid darkgrey;

@media screen and (max-width:550px) {
  width: 85%;
}

`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
    }

    @media screen and (max-width:550px) {
      span {
        font-size: 14px;
      }
    }

      @media screen and (max-width:400px) {
        span {
          font-size: 13px;
        }
      }

      
      @media screen and (max-width:350px) {
        span {
          font-size: 11px;
        }
      }
   
`;

export const TotalAmount = styled.span`  
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media screen and (max-width:550px) {
    font-size: 30px;
    margin-right: 10px;
  }

  @media screen and (max-width:400px) {
    font-size: 25px;
  }

  @media screen and (max-width:350px) {
    font-size: 23px;
  }
  
`;