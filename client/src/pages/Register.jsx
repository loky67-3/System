import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { FaCheckDouble } from "react-icons/fa";

export default function Register() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const registerUser = async (e) => {
        e.preventDefault();

        const { name, email, password } = data;

        try {
            const { data } = await axios.post('/register', {
                name,
                email,
                password
            });

            if (data.error) {
                toast.error(data.error);
            } else {
                setData({
                    name: "",
                    email: "",
                    password: ""
                });
                toast.success('Login successful! Welcome');
                navigate('/login');
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="auth-container auth-register-container">
            <div className="auth-card-split" style={{animation: 'slideDown 0.5s ease-out'}}>

                {/* Columna Izquierda: Formulario de Registro */}
                <div className="auth-split-form-section">
                    <div className="auth-header" style={{textAlign: 'left', alignItems: 'flex-start', marginBottom: 30}}>
                        <div className="auth-logo" style={{marginBottom: 15}}>
                            <FaCheckDouble size={38} />
                        </div>
                        <h1>Crea tu cuenta</h1>
                        <p>Una cuenta para todos los servicios de System24.</p>
                    </div>

                    <form onSubmit={registerUser} className="auth-form" style={{gap: 15}}>
                        <input 
                            type="text" 
                            placeholder="Nombre completo" 
                            value={data.name} 
                            onChange={(e) => setData({ ...data, name: e.target.value })} 
                            className="auth-input"
                        />
                        <input 
                            type="email" 
                            placeholder="Correo electrónico" 
                            value={data.email} 
                            onChange={(e) => setData({ ...data, email: e.target.value })} 
                            className="auth-input"
                        />
                        <input 
                            type="password" 
                            placeholder="Contraseña" 
                            value={data.password} 
                            onChange={(e) => setData({ ...data, password: e.target.value })} 
                            className="auth-input"
                        />
                        <button type="submit" className="auth-button" disabled={!data.email || !data.password || !data.name}>
                            Crear cuenta
                        </button>
                    </form>

                    <div className="auth-footer" style={{textAlign: 'left', marginTop: 'auto', paddingTop: 20}}>
                        <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión.</Link></p>
                    </div>
                </div>

                {/* Columna Derecha: Imagen Decorativa */}
                <div className="auth-register-visual">
                    <div className="visual-content">
                        <h2 style={{fontSize: 28, fontWeight: 600}}>Un universo de posibilidades.</h2>
                        <p style={{fontSize: 16, opacity: 0.8}}>Gestiona proyectos, equipos y mucho más. Todo en un solo lugar.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}