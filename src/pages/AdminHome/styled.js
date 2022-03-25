import styled from 'styled-components'

export const Home = styled.div`
  background-color: #3E86F5; 
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

export const SocialNetworks= styled.div`
  display: flex;
  flex-direction: column;

    .icons{
      flex: 1;
      margin: 0.5em;
      color:white;
      font-size: 1em;
    }
`
export const Nav= styled.nav`
  background: white; 
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
 

  .icon{
    font-size:1.5em;
  }
`

export const Button =styled.button`
  position: relative;
  display: flex;
  align-items: center;
  border:none;
  border-radius: 10em;
  padding: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  font-size:0,8em;
  text-align: center;
  color: #3E86F5;
  cursor: pointer;
  background-color: white;
  box-shadow: 0 0 40px 40px transparent inset, 0 0 0 0 white;
  -webkit-transition: all 150ms ease-in-out;
  transition: transform 0.9s;
    :hover {
      box-shadow: 0 0 4px 0 #3E86F5 inset, 0 0 4px 2px #3E86F5;
    }
    :active{
      box-shadow: 0 0 4px 0 #3E86F5 inset, 0 0 4px 2px #3E86F5;
      background-color: white;
      color: black;
    }
`

export const ButtonBack =styled.button`
  position: relative;
  border: none;
  right: 50px;
  background-color: transparent;
  color:#3E86F5 ;
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
      box-shadow: 0 0 4px 0 #3E86F5 inset, 0 0 4px 2px #3E86F5;
      height: 20px;
    }
`
export const Img= styled.img`
 width: 10%;
 
`

export const ButtonCreate =styled.button`
  position: relative;
  display: flex;
  right: 40px;
  align-items: center;
  border:none;
  border-radius: 10em;
  padding: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  font-size:0,8em;
  text-align: center;
  color: #3E86F5;
  cursor: pointer;
  background-color: white;
  box-shadow: 0 0 40px 40px transparent inset, 0 0 0 0 white;
  -webkit-transition: all 150ms ease-in-out;
  transition: transform 0.9s;
    :hover {
     box-shadow: 0 0 4px 0 #3E86F5 inset, 0 0 4px 2px #3E86F5;
    }
    :active{
      background-color: white;
      color: black;
      box-shadow: 0 0 4px 0  inset, 0 0 4px 2px #3E86F5;
    }
`

export const DivList= styled.div`
  background-color:white;
  border:solid 1px white;
  padding:10px;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 30px;
  font-size: 12px;  
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  
`

export const DivListTrip= styled.div`
  position: relative;
  top: 20%;
  overflow-y: scroll;
  width: 30%;
  border:solid 1px #F8F8FF;
  height: 470px;
  padding-right: 15px;
  padding-bottom: 10px;
  color:black;
`


export const ContainerList= styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  width: 100%;
  margin: -80px;
  padding-bottom: 10px;
`

export const H3= styled.h3`
  position: relative;
  top: 18%;
  color: white;
`

export const ButtonReset = styled.div `
    border: 1px solid transparent;
    background-color: transparent;
    color: transparent;
    transition: 0.2s ease;
    align-self: center; 
    font-size: 0.8em;
    margin-left: 0.2em;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.5s;
        :hover{
        background-color: transparent;
        color:transparent;
        transform: scale(1.5);
      }
      :active{
        background-color: transparent;
      
      }
`

export const DivName = styled.div`
  display: flex;

`
export const PName = styled.div`
  padding-left: 10px;

`