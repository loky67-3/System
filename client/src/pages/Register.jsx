import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

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
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f5f5f7',
            padding: '20px'
        }}>
            <div style={{width: '100%', maxWidth: '360px'}}>
                
                {/* Flechita Atrás */}
                <div style={{marginBottom: '30px'}}>
                    <Link to="/" style={{color: '#1d1d1f', fontSize: '20px', display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none'}}>
                        <FaArrowLeft />
                    </Link>
                </div>

                {/* Texto Arriba */}
                <div style={{textAlign: 'center', marginBottom: '40px'}}>
                    <h1 style={{fontSize: '32px', fontWeight: '700', color: '#1d1d1f', marginBottom: '10px', letterSpacing: '-0.5px'}}>Crear cuenta</h1>
                    <p style={{color: '#86868b', fontSize: '16px'}}>Regístrate para empezar.</p>
                </div>

                {/* Inputs y Botón */}
                <form onSubmit={registerUser} style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
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
                    
                    <button type="submit" className="auth-button" disabled={!data.email || !data.password || !data.name} style={{marginTop: '10px'}}>
                        Registrarse
                    </button>
                </form>

                <div style={{marginTop: '40px', textAlign: 'center', fontSize: '14px', color: '#86868b'}}>
                    ¿Ya tienes cuenta? <Link to="/login" style={{color: '#0071e3', fontWeight: '600', textDecoration: 'none'}}>Inicia sesión</Link>
                </div>
            </div>
        </div>
    );
}