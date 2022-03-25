import React from "react";
import { useNavigate} from "react-router-dom";
import {H3, Div, Img, DivP, Home, DivButton, Button, RedesSociais} from './styled';
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram, BsTwitter, BsYoutube, BsWhatsapp } from 'react-icons/bs'



export default function HomePage(){
  const routes = useNavigate()

  const goToListPage = () => {
    routes("/tripsList")
  }

  const goToLoginPage = () => {
    routes("/login")
  }

  return (

    <Home>
      
      <Img src="https://i.postimg.cc/D0VBZZ5T/Logo-Est-tica-6.png"/>

              <H3> As melhores aventuras Intergalácticas você encontra aqui,
                venha fazer uma incrível viagem pelo nosso universo e muita mais...
              </H3>
              <DivButton>
                <Button onClick={() => goToListPage()}>Ver viagens</Button>
                <Button onClick={() => goToLoginPage()}>Área Adm</Button>
              </DivButton>
              <DivP>
                <p> Temos os melhores pacotes de viagens aproveite e faça um ótimo passeio!</p>
              </DivP>
              <Div>                
                <RedesSociais>
                 <BsWhatsapp className="icone"/>
                  <FaFacebookF className="icone" />
                  <BsInstagram className="icone" />
                  <BsTwitter className="icone" />
                  <BsYoutube className="icone" />
                </RedesSociais>
              </Div>
              

         
    </Home>
    


  );
}


