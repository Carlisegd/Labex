import React, { useState, useEffect } from 'react';
import { useNavigate} from "react-router-dom";
import {Div, ButtonReset, Home, PName, Img, DivListTrip,DivName, DivList, ContainerList, H3, ButtonBack, Nav, ButtonCreate, SocialNetworks, Button} from './styled';
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import {BsFillArrowLeftCircleFill, BsWhatsapp} from 'react-icons/bs';
import {BiLogIn} from 'react-icons/bi';
import {MdOutlineAddLocationAlt} from 'react-icons/md';
import axios from "axios";
import {BsFillTrashFill} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import {IoIosEye} from 'react-icons/io'



export default function HomeAdm() {
  const [id, setTripId] = useState("")
  const [nameTrips, setTrips] = useState([]);
  

  const getTrips = ()=>{
      axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:carlise-debona-moreira/trips`)
      .then((res) => {setTrips(res.data.trips);
        console.log(res)
      })
      .catch((err) => {console.log(err);
      })
  };

  const deleteTrip = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:carlise-debona-moreira/trips/${id}`
    const headers = { auth: localStorage.getItem("token")}
    axios
      .delete( url, {headers})
        .then((res) => {
          setTripId(res.data)
          alert("Removido")
          getTrips()
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.response);
          alert("Erro, tente novamente")
        });
  }
    
  useEffect(() => {getTrips()}, []);

  const receiveId = (id) => {
    console.log('guarda id',id);
    localStorage.setItem('id', id)
  }

  const tripList = nameTrips.map((trip) =>{
    return (
    <DivList key={trip.id}>
      <DivName>
        <Link to="/adminTrips/:id">
          <ButtonReset onClick={() => receiveId(trip.id)}> 
            <IoIosEye color="#3E86F5" fontSize="20"/>
          </ButtonReset> 
        </Link>
           <PName>  <strong> Nome: </strong>{trip.name}</PName>
      </DivName>
        
        <ButtonReset onClick={()=>{deleteTrip(trip.id)}}>
          <BsFillTrashFill color="black" fontSize="1.6em"/>
        </ButtonReset>
      
    </DivList>
    )
  });

  const routes = useNavigate()

  const goToLogin = () => {
    routes("/login")
  }

  const goToCreateTrip = () => {
    routes("/adminTripsCreate")
  }

  const goToHome = () => {
    routes("/")
  }

    return (
      <Home>
        <header>
          <Nav>
            <ButtonBack onClick={() => goToHome()}>
              <BsFillArrowLeftCircleFill className="icon"/>
            </ButtonBack>
            
            <Img src="https://i.postimg.cc/FHsyZcBR/Logo-Est-tica-5.png"/>
            <Div>
              <ButtonCreate onClick={() => goToCreateTrip()}><MdOutlineAddLocationAlt className="icone"/>Criar Viagem</ButtonCreate> 
              <div><Button onClick={() => goToLogin()}><BiLogIn className="icon"/>Logout</Button></div>     
            </Div>       
          </Nav>
        </header>

        <ContainerList>
          <H3>Lista de Viagens</H3>
          <DivListTrip>
          {tripList}
          </DivListTrip>
        </ContainerList>
           
        <Div>                
          <SocialNetworks>
            <BsWhatsapp className="icons"/>
            <FaFacebookF className="icons" />
            <BsInstagram className="icons" />
            <BsTwitter className="icons" />
            <BsYoutube className="icons" />
            </SocialNetworks>
        </Div>
        
              
      </Home>
    );
}



