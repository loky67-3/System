import { useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"
import { useNavigate, Link } from "react-router-dom"
import { FaCheckDouble, FaGoogle } from "react-icons/fa"

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
        <div className="auth-card" style={{animation: 'slideDown 0.5s ease-out'}}>
            <div className="auth-header">
                <div className="auth-logo">
                    <FaCheckDouble size={44} />
                </div>
                <h1>Iniciar Sesión</h1>
                <p>Usa tu ID de System24 para continuar.</p>
            </div>

            <form onSubmit={loginUser} className="auth-form">
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    className="auth-input"
                    autoFocus
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                    className="auth-input"
                />
                <button type="submit" className="auth-button" disabled={!data.email || !data.password}>
                    Iniciar sesión
                </button>
            </form>

            <div className="auth-divider"><span>O</span></div>

            <div className="auth-social-column" style={{ width: '100%', gap: 12 }}>
                <button className="social-btn-long">
                    <FaGoogle style={{ fontSize: 18, color: '#DB4437' }} />
                    <span>Continuar con Google</span>
                </button>
            </div>

            <div className="auth-footer">
                <p>¿No tienes una cuenta? <Link to="/register">Crea una ahora.</Link></p>
            </div>
        </div>
    </div>
  )
}