import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {Home, Img, ImgLogo, Button, DivInput, Input, Div, DivButton, DivLogo} from './styled';
import axios from 'axios';


export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate=useNavigate();


  const onSubmitLogin = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/:carlise-debona-moreira/login'
    const headers = {"Content-Type":"application/json"}
    const body = {
        "email": email,
        "password": senha,
    }

    axios.post(url, body, {headers})
    .then(res => {
        localStorage.setItem("token", res.data.token);
        navigate("/adminTripsList")
    })
    .catch(error => {
        console.log(error.response);
        alert("Digite seu email e senha")
    })
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const onChangeSenha = (event) => {
    setSenha(event.target.value);
  }

  const routes = useNavigate()

  const goToHome = () => {
    routes("/")
  }

    return (
    <Home>
        <Img src="https://i.postimg.cc/mkkrTZN7/Post-Facebook-Promo-o-Pacote-de-Turismo-Capad-cia-2.png"/>
        <div>
          <Div>

              <DivInput>
                <DivLogo>
                  <ImgLogo src="https://i.postimg.cc/D0VBZZ5T/Logo-Est-tica-6.png"/>
                  <h3 className="h3">Login</h3>
                </DivLogo>
                  <Input
                  value={email}
                  placeholder="email"
                  onChange={onChangeEmail}
                  type="email"
                  />
                  <Input
                  value={senha}
                  placeholder="senha"
                  onChange={onChangeSenha}
                  type="password"
                  />
              </DivInput>
              <DivButton>
                  <Button onClick={onSubmitLogin}>Entrar</Button> 
                  <Button onClick={() => goToHome()}>Voltar</Button>
              </DivButton>  
          </Div>
        </div>
    </Home>
  );
}



