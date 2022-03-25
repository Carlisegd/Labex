import React, { Component } from 'react';
import { useNavigate} from "react-router-dom";
import {Div, Input, DivForm, Home, Form, Img, Option, Button, Select, ButtonBack, Nav, RedesSociais, DivImg, Foto, Pharase} from './styled';
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram, BsTwitter, BsYoutube  } from 'react-icons/bs'
import {BsFillArrowLeftCircleFill, BsWhatsapp} from 'react-icons/bs';
import useForm from '../../hooks/useForm'
import { useState } from "react";
import useRequestData from '../../hooks/useRequestData';
import { countries } from '../../Constants/Countries';
import axios from 'axios';
import {IoIosRocket} from 'react-icons/io'

export default function FormAplication() {
  const [idTrip, setTripId] = useState("");
  const [success, setSuccess] = useState(false)
  const [trips] = useRequestData("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:carlise-debona-moreira/trips", {})

  const onChangeTripId = (event) => {
    setTripId(event.target.value)
}

   const routes = useNavigate()
 

  const goToHome = () => {
    routes("/tripsList")
  }

  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country:""
  });

  const clearInput = () => {
    cleanFields()
    setTripId("")
}
  const register = (event) => {
    event.preventDefault();
    sendApplication(form, idTrip, clearInput)
    console.log("Formulário enviado!", form);
    cleanFields();
  };

  const OptionTrip = trips && trips.trips.map((nome)=>{
    return <option key={nome.id} value={nome.id}>{nome.name}</option>
  })

  const sendApplication = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:carlise-debona-moreira/trips/${idTrip}/apply`
    const headers = { "Content-Type": "application/json"}
    axios
    .post( url, form, {headers})
    .then((res) => { 
          if(!setSuccess(res.data.success))
          alert("Incrição enviada com sucesso!")
          cleanFields()
          console.log(res.data)          
    })
    .catch((err) => 
          console.log(err.response.message))
  }


    return (
      <Home>
        <header>
          <Nav>
            <ButtonBack onClick={() => goToHome()}>
              <BsFillArrowLeftCircleFill className="icone"/>
            </ButtonBack>
              <Img src="https://i.postimg.cc/D0VBZZ5T/Logo-Est-tica-6.png"/>
          </Nav>
        </header>
        <Div>
        <DivForm>
          <h3>Inscreva-se para uma viagem</h3>
          <Form onSubmit={register}>
            <Select  
            defaultValue="" 
            onChange={onChangeTripId}>
              <Option value="" disabled>Escolha uma viagem</Option>
              {OptionTrip}
            </Select>
            <Input
              name={"name"}
              value={form.name}
              placeholder="Nome"
              onChange={onChange}
              required
              pattern={"^.{3,}"}
              title={"O nome deve ter no mínimo 3 letras"}
            />
            <Input
              name={"age"}
              value={form.age}
              placeholder="Idade"
              onChange={onChange}
              type={"number"}
              min={18}
              required
            />
            <Input
              name={"applicationText"}
              value={form.applicationText}
              placeholder="Texto de Candidatura"
              onChange={onChange}
              pattern={"^.{3,}"}
              required
              title={"O texto deve ter no mínimo 3 caracteres"}
            />
            <Input
              name={"profession"}
              value={form.profession}
              placeholder="Profissão"
              onChange={onChange}
              pattern={"^.{10,}"}
              required
              title={"A profissão deve ter no mínimo 10 caracteres"}
            />
            <Select
              name={"country"}
              value={form.country}
              placeholder="País"
              onChange={onChange}
              required
            >
          <Option value={""} disabled>Escolha um País</Option>
            {countries.map((item)=>{
              return <option value={item} key={item}>{item}</option>
            })}
          </Select>
          <Button type="submit"><IoIosRocket fontSize="20"/> Enviar</Button>
          </Form>
        </DivForm>
        
        
          <Pharase>
            <h3>Vem conosco e saiba tudo sobre como viver essa experiência incrível!</h3><br></br>
            <h4>Vamos montar algo personalizado? Nós te auxiliamos!</h4>
          </Pharase>
          <DivImg>
            <Foto src="https://i.postimg.cc/8CfD2QZn/Post-Facebook-Promo-o-Pacote-de-Turismo-Capad-cia-1.png"/>
          </DivImg>
        </Div>        
               

               
        <div>                
          <RedesSociais>
            <BsWhatsapp className="icone"/>
            <FaFacebookF className="icone" />
            <BsInstagram className="icone" />
            <BsTwitter className="icone" />
            <BsYoutube className="icone" />
          </RedesSociais>
        </div>
              
    </Home>
  );
}



