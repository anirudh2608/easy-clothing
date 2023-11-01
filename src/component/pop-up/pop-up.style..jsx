import styled from "styled-components"

export const PopUpContainer = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background: rgba(0, 0, 0, 0.7);
transition: opacity 500ms;
visibility: visible;
opacity: 1;
z-index: 99999999999999;
`
export const PopUpBox = styled.div`
display: flex;
flex-direction: column;
margin: 70px auto;
padding: 20px;
background: #fff;
border-radius: 5px;
width: 30%;
position: relative;
transition: all 5s ease-in-out;
align-items: center;

h2 {
    margin-top: 0;
}

@media screen and (max-width:550px) {
    padding: 5px;
    width: 60%;

    button {
        font-size: 13px;
        height: 45px;
        min-width: 100px;
    }

    h2 {
        font-size: 20px;   
    }

    }
    
@media screen and (max-width:400px) {

    button {
        font-size: 11px;
        height: 45px;
        min-width: 100px;
    }

    }

    
@media screen and (max-width:350px) {
    padding: 5px;
    width: 60%;

    button {
        font-size: 9px;
        height: 40px;
        min-width: 90px;
    }

    h2 {
        font-size: 18px;   
    }

    }
`