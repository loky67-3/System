import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaApple, FaSearch, FaShoppingBag } from "react-icons/fa";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Muestra el menú al pasar el mouse
  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  // Oculta el menú cuando el mouse sale del área de navegación
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Cierra el menú al hacer clic en un enlace
  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const navItems = ["Home", "Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "Entertainment"];

  return (
    <>
      <nav className="navbar apple-navbar" onMouseLeave={handleMouseLeave}>
        <div className="navbar-content">
          {/* Logo Apple (Home) */}
          <Link to="/" className="nav-logo" onMouseEnter={() => handleMouseEnter("Home")} onClick={closeDropdown}>
            <FaApple size={18} />
          </Link>

          {/* Enlaces Centrales */}
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item} className="nav-item" onMouseEnter={() => handleMouseEnter(item)}>
                {item === "Home" ? (
                  <Link to="/" className="nav-text" onClick={closeDropdown} style={{textDecoration: "none", color: "inherit"}}>{item}</Link>
                ) : (
                  <span className="nav-text">{item}</span>
                )}
              </li>
            ))}
          </ul>

          {/* Iconos y Auth a la derecha */}
          <div className="nav-actions">
            <div className="nav-action-item"><FaSearch /></div>
            <div className="nav-action-item"><FaShoppingBag /></div>
            <Link to="/login" className="nav-auth-link" onMouseEnter={() => handleMouseEnter("Login")} onClick={closeDropdown}>Login</Link>
            <Link to="/register" className="nav-auth-link" onMouseEnter={() => handleMouseEnter("Register")} onClick={closeDropdown}>Register</Link>
          </div>
        </div>

        {/* Mega Menú (Desplegable que cubre la pantalla) */}
        <div className={`mega-menu-container ${activeDropdown ? 'visible' : ''}`}>
          <div className="mega-menu-content">
             {/* Contenido dinámico según la selección */}
             <div className="menu-column">
                <h3>Explore {activeDropdown}</h3>
                <Link to="#">Explore All {activeDropdown}</Link>
                <Link to="#">New Arrivals</Link>
                <Link to="#">Pro Models</Link>
             </div>
             <div className="menu-column">
                <h3>Shop {activeDropdown}</h3>
                <Link to="#">Buy New</Link>
                <Link to="#">Accessories</Link>
                <Link to="#">Trade In</Link>
             </div>
             {/* Imagen de ejemplo simulando producto */}
             <div className="menu-image-preview">
                 <div className="placeholder-image">Image of {activeDropdown}</div>
             </div>
          </div>
        </div>
      </nav>
      {/* Fondo oscuro para el resto de la página cuando el menú está abierto */}
      {activeDropdown && <div className="blur-overlay"></div>}
    </>
  );
}