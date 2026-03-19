import { useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"
import { useNavigate, Link } from "react-router-dom"
import { FaApple, FaGoogle, FaFacebook } from "react-icons/fa"

export default function Login() {

  const navigate = useNavigate()

  const [data, setData] = useState({
    email: "",
    password: "",
  })

  const loginUser = async (e) => {
    e.preventDefault()

    const { email, password } = data

    try {

      const res = await axios.post("/login", {
        email,
        password
      })

      if(res.data.error){
        toast.error(res.data.error)
      }else{

        toast.success("Login successful")

        setData({
          email: "",
          password: ""
        })

        navigate("/dashboard")
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="auth-container">
      {/* Tarjeta de Login Estilo Apple Original */}
      <div className="auth-card">
            <div className="auth-header">
              <FaApple size={50} className="auth-logo" />
              <h1>Inicia sesión</h1>
              <p>Usa tu Apple ID para acceder</p>
            </div>
            
            <form onSubmit={loginUser} className="auth-form">
                <input
                className="auth-input"
                type="email"
                placeholder="Correo electrónico"
                value={data.email}
                onChange={(e)=>setData({...data,email:e.target.value})}
                />
                <input
                className="auth-input"
                type="password"
                placeholder="Contraseña"
                value={data.password}
                onChange={(e)=>setData({...data,password:e.target.value})}
                />
                <button type="submit" className="auth-button">Continuar</button>
            </form>

            <div className="auth-divider"><span>o continúa con</span></div>
            <div className="auth-social">
                <button className="social-btn"><FaGoogle /></button>
                <button className="social-btn"><FaApple /></button>
                <button className="social-btn"><FaFacebook /></button>
            </div>
          
            <div className="auth-footer">
                <p>¿Nuevo aquí? <Link to="/register">Crear cuenta</Link></p>
            </div>
      </div>
    </div>
  )
}