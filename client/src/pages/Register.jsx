import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { FaApple, FaGoogle, FaFacebook, FaAmazon } from "react-icons/fa";

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
            const { data } = await axios.post('http://localhost:8000/register', {
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
        <div className="auth-container">
            <div className="auth-card">
                    <div className="auth-header">
                        <FaApple size={50} className="auth-logo" />
                        <h1>Apple ID</h1>
                        <p>Crea tu Apple ID para empezar.</p>
                    </div>

                    <form onSubmit={registerUser} className="auth-form">
                        <input
                            className="auth-input"
                            type="text"
                            placeholder="Nombre completo"
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                        />
                        <input
                            className="auth-input"
                            type="email"
                            placeholder="Correo electrónico"
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                        />
                        <input
                            className="auth-input"
                            type="password"
                            placeholder="Contraseña"
                            value={data.password}
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                        />
                        <button type="submit" className="auth-button">Continuar</button>
                    </form>

                    <div className="auth-divider"><span>o regístrate con</span></div>
                    
                    {/* Iconos de las mejores marcas */}
                    <div className="auth-social">
                        <button className="social-btn"><FaGoogle /></button>
                        <button className="social-btn"><FaFacebook /></button>
                        <button className="social-btn"><FaAmazon /></button>
                    </div>

                    <div className="auth-footer">
                        <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
                    </div>
            </div>
        </div>
    );
}