import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";


export const LoginPage = () => {
  
  const {login} = useContext(AuthContext)

  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPage') || '/';

    login('Sota')
    navigate(lastPath,{
      replace: true
    })
  }
  return (
    <>
      <h1>LoginPage</h1>
      <button
        className="btn btn-primary"
        onClick={ onLogin }
        >
          Login
      </button>
    </>
  )
}
