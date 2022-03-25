import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"

import {DivS, ContainerDetails, ButtonReset, Home, Div, Img, DivListTrip,DivName, DivList, ContainerList, H3, ButtonBack, Nav, ButtonCreate, SocialNetworks, ButtonLogout} from './styled';
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram, BsTwitter, BsYoutube, BsWhatsapp, BsFillArrowLeftCircleFill} from 'react-icons/bs'
import axios from "axios";
import {BiLogIn} from 'react-icons/bi'
import {FaUserPlus} from 'react-icons/fa';
import {BsFillPersonXFill} from 'react-icons/bs';


export default function TripDetailsPage() {
  
      const routes = useNavigate();

      const goToHomeAdm = () => {
         routes("/adminTripsList")
      };

      const goToLogin = () => {
        routes("/login")
      };
      
  const [ id, setId ] = useState(localStorage.getItem('id'));
  const [ tripDetails, setTripDetails ] = useState({});
  const [candidateTrip, setCandidateTrip] = useState([])
  const [approvedCandidate, setApproved] = useState()

  useEffect(() => {getCandidate()}, []);

const getCandidate = () => {
  const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:carlise-debona-moreira/trip/${id}`
  axios
    .get(`${url}`, {
      headers: {
        auth: localStorage.getItem('token')
      }
    })
    .then((res) => {
      setTripDetails(res.data.trip);
      setCandidateTrip(res.data.trip.candidates);
      setApproved(res.data.trip.approved);
    })
    .catch((err) => {
      console.log(err.data);
    });
};

const putApprovedCandidate = (candidateId) => {
  const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:carlise-debona-moreira/trips/${id}/candidates/${candidateId}/decide`
  const body = {
    approve: true,
  }
  axios.put(url, body, {
    headers: {
      auth: localStorage.getItem('token')
    }
  })
  .then((res) => {
    getCandidate()
    
  })
  .catch((err) => {
    alert('Candidato não foi aprovado!')
    console.log(err.response);
  })
}

const putDisaPproveCandidate = (reproveId) => {
  const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:carlise-debona-moreira/trips/${id}/candidates/${reproveId}/decide`
  const body = {
    approve: false
  }
  axios.put(url, body, {
    headers: {
      auth: localStorage.getItem('token')
    }
  })
  .then((res) => {
  
    alert("Removido na viagem!")
  
    getCandidate()
  })
  .catch((err) => {
    alert('Candidato não foi aprovado!')
  })

}





    return (
      <Home>
         <header>
          <Nav>
            <ButtonBack onClick={() => goToHomeAdm()}>
              <BsFillArrowLeftCircleFill className="icon"/>
            </ButtonBack>
            <Img src="https://i.postimg.cc/FHsyZcBR/Logo-Est-tica-5.png"/>
            <div>
              <div><ButtonLogout onClick={() => goToLogin()}>
                <BiLogIn className="icon"/>Logout</ButtonLogout>
              </div>     
            </div>       
          </Nav>
        </header>

        <ContainerDetails>
        <ContainerList>
            <H3>Lista de Viagem</H3>
              <DivListTrip>
                <DivList >
                  <p><strong>Nome: </strong>{tripDetails.name}</p>
                  <p><strong>Descrição: </strong>{tripDetails.description}</p>
                  <p><strong>Planeta: </strong>{tripDetails.planet}</p>
                  <p><strong>Duração: </strong>{tripDetails.durationInDays}</p>
                  <p><strong>Data: </strong>{tripDetails.date}</p>
                </DivList>
              </DivListTrip>
          </ContainerList>

          <ContainerList>
            <H3>Lista de candidatos Pendentes</H3>
              <DivListTrip>
              
              {candidateTrip && candidateTrip.length > 0 ? candidateTrip.map((item) => {
			        	return <DivList key={item.id}>
					    <p><strong>Nome: </strong>{item.name}</p>
              <p><strong>Descrição: </strong>{item.applicationText}</p>
              <p><strong>Profissão: </strong>{item.profession}</p>
              <p><strong>Idade: </strong>{item.age}</p>
              <p><strong>País: </strong>{item.country}</p>
            <Div>
            <ButtonReset onClick={()=>{putApprovedCandidate(item.id)}}><FaUserPlus color="#3E86F5" fontSize="1.6em"/></ButtonReset>
            
            <ButtonReset onClick={()=>{putDisaPproveCandidate(item.id)}}><BsFillPersonXFill color="red" fontSize="1.6em"/></ButtonReset>
            </Div>
            </DivList>}) : <p>Não tem candidatos pendente</p>}
              
              </DivListTrip>
            </ContainerList>

            <ContainerList>
            <H3>Lista de candidatos Aprovados</H3>
              <DivListTrip>
                {approvedCandidate && approvedCandidate.length > 0 ? approvedCandidate.map((item) => {
                  return <DivList key={item.id}>
                <p><strong>Nome: </strong>{item.name}</p>
                <p><strong>Idade: </strong>{item.age}</p>
                <p><strong>País: </strong>{item.country}</p>
              </DivList>}) : <p>Não tem candidatos pendente</p>}
            </DivListTrip>
        </ContainerList>
        </ContainerDetails>
        
        <DivS>                
          <SocialNetworks>
            <BsWhatsapp className="icons"/>
            <FaFacebookF className="icons" />
            <BsInstagram className="icons" />
            <BsTwitter className="icons" />
            <BsYoutube className="icons" />
            </SocialNetworks>
        </DivS>
    </Home>
    );
}

