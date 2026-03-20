import { useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"
import { useNavigate, Link } from "react-router-dom"
import { FaShoppingBag, FaGoogle, FaFacebook, FaApple, FaMicrosoft } from "react-icons/fa"

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
    <div className="instagram-layout">
        {/* Columna Izquierda: Mensaje e Imagen */}
        <div className="instagram-left-section">
            <h1 style={{fontSize: 48, fontWeight: 800, color: '#1d1d1f', marginBottom: 15}}>System24</h1>
            <p style={{fontSize: 20, color: '#86868b', marginBottom: 30, lineHeight: 1.4}}>Conecta con tu equipo y gestiona tus proyectos de forma profesional.</p>
            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" alt="App Preview" className="left-hero-image" />
        </div>

        {/* Línea Divisoria */}
        <div className="layout-divider"></div>

        {/* Columna Derecha: Login */}
        <div className="instagram-right-col">
            {/* Caja Principal */}
            <div className="instagram-box">
                <h1 className="instagram-logo">System24</h1>
                
                <form onSubmit={loginUser} className="instagram-form">
                    <div className="instagram-field">
                        <input
                            type="email"
                            placeholder="Teléfono, usuario o correo electrónico"
                            value={data.email}
                            onChange={(e)=>setData({...data,email:e.target.value})}
                        />
                    </div>
                    <div className="instagram-field">
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={data.password}
                            onChange={(e)=>setData({...data,password:e.target.value})}
                        />
                    </div>
                    <button type="submit" className="instagram-btn" disabled={!data.email || !data.password}>
                        Iniciar sesión
                    </button>
                </form>

                <div className="instagram-divider">
                    <div className="line"></div>
                    <div className="text">O</div>
                    <div className="line"></div>
                </div>

                <div className="auth-social-column" style={{width: '100%', gap: 8, marginBottom: 15}}>
                    <button className="social-btn-long" style={{color: '#385185'}}><FaFacebook style={{fontSize: 20}}/><span>Iniciar sesión con Facebook</span></button>
                    <button className="social-btn-long" style={{color: '#4285F4'}}><FaGoogle style={{fontSize: 18}}/><span>Iniciar sesión con Google</span></button>
                </div>

                <a href="#" className="instagram-forgot">¿Olvidaste tu contraseña?</a>
            </div>

            {/* Caja Secundaria: Registrarse */}
            <div className="instagram-box switch-account">
                <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
            </div>

            {/* Descargar App */}
            <div className="instagram-app-section">
                <p>Descarga la app.</p>
                <div className="app-stores">
                    <img src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png" alt="App Store" />
                    <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="Google Play" />
                </div>
            </div>
        </div>
    </div>
  )
}