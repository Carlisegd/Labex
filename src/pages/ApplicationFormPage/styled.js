import styled from 'styled-components'

export const Home = styled.div`
  background-image: url("https://i.postimg.cc/ry5t25v9/Blue-Minimalist-Facts-You-Didn-t-Know-About-Space-Youtube-Thumbnail-4.png");
  background-repeat: no-repeat;
  position: relative;
  width: 100vw; 
  height: 100vh;
  background-size: cover;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: stretch;
  background-color: black;
`
export const Div =styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: center;
    justify-content: flex-end;
    align-items: center;
`

export const RedesSociais= styled.div`
  display: flex;
  flex-direction: column;

    .icone{
      flex: 1;
      margin: 0.5em;
      color:white;
      font-size: 1em;
    }
`
export const Nav= styled.nav`
  background: #3E86F5; 
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 60px;
  left: 0px;
  top: 0px;
  padding: 1em;

  .icone{
    font-size:1.5em;
  }
`

export const Button =styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20px;
  border:none;
  border-radius: 10em;
  padding: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  font-size:0,8em;
  text-align: center;
  color: white;
  cursor: pointer;
  background-color: #3E86F5;
  box-shadow: 0 0 40px 40px transparent inset, 0 0 0 0 white;
  -webkit-transition: all 150ms ease-in-out;
  transition: transform 0.9s;
    :hover {
     box-shadow: 0 0 14px 0 white inset, 0 0 4px 2px white;
    }
    :active{
      background-color: white;
      color: #3E86F5;
      box-shadow: 0 0 4px 0 white inset, 0 0 4px 2px white;
      
    }
`

export const ButtonBack =styled.button`
  position: relative;
  border: none;
  right: 50px;
  background-color: transparent;
  color: white;
  border-radius: 30px;
  transition: 0.2s ease;
  align-self: center; 
  font-size: 0.8em;
  margin-left: 5em;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.9s;
    :hover{
      background-color: transparent;
      box-shadow: 0 0 4px 0 white inset, 0 0 4px 2px white;
      height: 20px;
    }
`
export const Img= styled.img`
 width: 10%;
 
`

export const DivImg= styled.div`
  width: 35%;
 
`

export const Foto= styled.img`
 width: 100%;
 position: relative;
 top: 120px;

`

export const Pharase= styled.div`
 width: 20%;
 position: relative;
 top: 100px;
 left: 150px;
 color: white;
 background-color: black;
 opacity: 50%;
 padding:30px;
border-radius: 20px;
`

export const Input= styled.input`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  height: 50px; 
  border-radius: 30px;
  border: none;
  outline: 0;
  font-size: 15px;
  padding:10px;
  width: 100%;
`

export const DivForm = styled.div`
  display:flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
  position: relative;
  top: 60px;
  justify-content: center;
  align-content: center;
  color: white;
  
`

export const Form = styled.form`
  display:flex;
  flex-direction: column;
  align-items: stretch;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  width: 100%;
`

export const Select = styled.select`
  margin-top: 20px;
  border: none;
  height: 50px; 
  border-radius: 30px;
  outline: 0;
  font-size: 15px;
  padding:10px;
  cursor: pointer;
  width: 100%;
`
export const Option = styled.option`
  border: 1px solid #3E86F5;
  border-radius: 30px;
  background-color: white;
  width: 100%;
`

