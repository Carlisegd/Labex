import styled from 'styled-components'

export const Home = styled.div`
  background-image: url("https://i.postimg.cc/C1Dfc8Gd/Black-Blue-Universe-Desktop-Wallpaper-2.png"); 
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
  
`
export const Div =styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    
`

export const RedesSociais= styled.div`
  display: flex;
  flex-direction: column;

    .icone{
      flex: 1;
      margin: 0.5em;
      color:#3E86F5;
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
  justify-content: space-between;
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

export const ButtonVoltar =styled.button`
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

export const DivList= styled.div`
  border:solid 1px #3E86F5;
  padding:10px;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 30px;
  font-size: 12px;  
`

export const DivListTrip= styled.div`
  position: relative;
  top: 20%;
  overflow-y: scroll;
  width: 40%;
  border:solid 1px #F8F8FF;
  height: 470px;
  padding-right: 10px;
  padding-bottom: 10px;
`


export const ContainerList= styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  width: 80%;
  margin: -80px;
  padding-bottom: 10px;
`

export const H3= styled.h3`
  position: relative;
  top: 18%;
`