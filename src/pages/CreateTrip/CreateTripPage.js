import React, { useState } from 'react';
import { useNavigate} from "react-router-dom";
import {Input, DivForm, GoButton, InputDate, Form, Option, Select, Div,  Home, Img, ButtonBack, Nav, SocialNetworks, Button} from './styled';
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import {BsFillArrowLeftCircleFill, BsWhatsapp} from 'react-icons/bs';
import {BiLogIn} from 'react-icons/bi';
import axios from "axios";
import useForm from '../../hooks/useForm'
import {planets} from '../../Constants/Planets';
import{IoIosRocket} from 'react-icons/io';

export default function HomeAdm() {
  
  const [idTrip, setTripId] = useState("");
  const [trips, setTrips] = useState();
  
   const routes = useNavigate()
 

  const goToHome = () => {
    routes("/adminTripsList")
  }

  const { form, onChange, cleanFields } = useForm({
    name: "",
    description: "",
    planet: "",
    durationInDays: "",
    date:""
  });

  const clearInput = () => {
    cleanFields()
    setTripId("")
}
  const cadastrar = (event) => {
    event.preventDefault();
    sendApplication(form, idTrip, clearInput)
    console.log("Formulário enviado!", form);
    cleanFields();
  };

   const sendApplication = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:carlise-debona-moreira/trips`
    const headers = { auth: localStorage.getItem("token")}
    axios
    .post( url, form, {headers})
    .then((res) => { 
          setTrips(res.data.trip)
          alert("Viagem Registrada!")
          cleanFields()
          console.log(res.data)          
    })
    .catch((err) => 
          console.log(err.response.message))
  }



  const goToLogin = () => {
    routes("/login")
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
              <div><Button onClick={() => goToLogin()}><BiLogIn className="icon"/>Logout</Button></div>     
            </Div>       
          </Nav>
        </header>

        <DivForm>
          <h3>Criar Viagem</h3>
          <Form onSubmit={cadastrar}>
          <Input
              name={"name"}
              value={form.name}
              placeholder="Nome"
              onChange={onChange}
              required
              pattern={"^.{3,}"}
              title={"O nome deve ter no mínimo 3 letras"}
            />
             <Select
              name={"planet"}
              value={form.planet}
              placeholder="Planeta"
              onChange={onChange}
              required
            >
          <Option value={""} disabled>Escolha um Planeta</Option>
            {planets.map((item)=>{
              return <option value={item} key={item}>{item}</option>
            })}
          </Select>
          

            <InputDate
              name={"date"}
              value={form.date}
              placeholder="Texto de Candidatura"
              onChange={onChange}
              pattern={"^.{3,}"}
              required
              type={"date"}
            />
            
            <Input
              name={"description"}
              value={form.description}
              placeholder="Descrição"
              onChange={onChange}
              pattern={"^.{3,}"}
              required
              title={"A descrição deve ter no mínimo 3 caracteres"}
            />
            <Input
              name={"durationInDays"}
              value={form.durationInDays}
              placeholder="Duração da viagem"
              onChange={onChange}
              type="number"
              required
            />
          <GoButton type="submit"><IoIosRocket fontSize="20"/>Criar</GoButton>
          </Form>
        </DivForm>
        
        
                
              
              
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



