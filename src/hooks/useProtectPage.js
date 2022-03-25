import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useProtectPage = () => {
  const navigate = useNavigate()

  useEffect(()=>{
      const token = localStorage.getItem("token")
      if (token === null){
        navigate('/login')
        console.log("Você não está logado")
      }
    },[navigate])
}