import styled from 'styled-components';

export const Home = styled.div`
  background-color:#3E86F5;
  background-repeat: no-repeat;
  position: relative;
  width: 100vw; 
  height: 100vh;
  background-size: cover;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  
`

export const Img= styled.img`
 width: 50%;
 margin: 0;
 border-radius: 0px 60px 60px 0px;
`
export const ImgLogo= styled.img`
 width: 50%;
`

export const DivLogo= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
    .h3{
      padding-top:50px;
      color: white;
    }
`

export const Div= styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  position: relative;
  width: 50vw;
  justify-content: flex-end;
  align-items: stretch;
  height: 100vh;
  padding-left: 8em;
  padding-right: 8em;
  padding-bottom: 8em;
 `

export const DivInput= styled.div`
  display: flex;
  flex-direction: column;
 `

export const DivButton= styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`

export const Input= styled.input`
  margin-top: 20px;
  height: 50px; 
  border-radius: 30px;
  border: none;
  outline: 0;
  font-size: 15px;
  padding:10px;
`

export const Button = styled.button`
  position: relative;
  border-color: white;
  border-radius: 10em;
  border: 1px solid;
  margin: 20px; 
  padding: 1em;
  padding-left: 2em;
  padding-right: 2em;
  font-size:1em;
  font-weight: bold;
  text-align: center;
  color: white;
  cursor: pointer;
  margin-top: 50px;
  background-color: transparent;
  box-shadow: 0 0 40px 40px transparent inset, 0 0 0 0 white;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
    :hover {
     box-shadow: 0 0 10px 0 white inset, 0 0 10px 4px white;
    }
`