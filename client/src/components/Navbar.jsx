import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaShoppingBag, FaBars, FaTimes, FaTshirt } from "react-icons/fa";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Muestra el menú al pasar el mouse
  const handleMouseEnter = (menu) => {
    if (!isMobileOpen) setActiveDropdown(menu);
  };

  // Oculta el menú cuando el mouse sale del área de navegación
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Cierra el menú al hacer clic en un enlace
  const closeDropdown = () => {
    setActiveDropdown(null);
    setIsMobileOpen(false);
  };

  // Alternar menú móvil
  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
    setActiveDropdown(null); // Asegura que el mega menú de escritorio esté cerrado
  };

  const navItems = [
    { label: "Inicio", key: "Home", path: "/" },
    { label: "Novedades", key: "New", path: "/new" },
    { label: "Ropa", key: "Clothing", path: "/clothing" },
    { label: "Celulares", key: "Phones", path: "/phones" },
    { label: "Zapatos", key: "Shoes", path: "/shoes" },
    { label: "Accesorios", key: "Accessories", path: "/accessories" },
    { label: "Ofertas", key: "Sale", path: "/sale" },
  ];

  // Imágenes High-Res para el Mega Menú
  const menuImages = {
    Home: "https://images.unsplash.com/photo-1556656793-02715d8dd6f8?auto=format&fit=crop&w=800&q=80",
    New: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    Clothing: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80",
    Phones: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    Shoes: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    Accessories: "https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?auto=format&fit=crop&w=800&q=80",
    Sale: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80",
    Login: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80",
    Register: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  };

  return (
    <>
      <nav className={`navbar apple-navbar ${isMobileOpen ? 'mobile-active' : ''}`} onMouseLeave={handleMouseLeave}>
        <div className="navbar-content">
          {/* Logo Apple (Home) */}
          <Link to="/" className="nav-logo" onMouseEnter={() => handleMouseEnter("Home")} onClick={closeDropdown}>
            <FaShoppingBag size={20} />
          </Link>

          {/* Enlaces Centrales (Desktop) */}
          <ul className="nav-links desktop-only">
            {navItems.map((item) => (
              <li key={item.key} className="nav-item" onMouseEnter={() => handleMouseEnter(item.key)}>
                {item.key === "Home" ? (
                  <Link to={item.path} className="nav-text" onClick={closeDropdown} style={{textDecoration: "none", color: "inherit"}}>{item.label}</Link>
                ) : (
                  <span className="nav-text">{item.label}</span>
                )}
              </li>
            ))}
          </ul>

          {/* Iconos y Auth a la derecha */}
          <div className="nav-actions">
            <div className="nav-action-item"><FaSearch /></div>
            <div className="nav-action-item"><FaShoppingBag /></div>
            <Link to="/login" className="nav-auth-link desktop-only" onMouseEnter={() => handleMouseEnter("Login")} onClick={closeDropdown}>Entrar</Link>
            <Link to="/register" className="nav-auth-link desktop-only" onMouseEnter={() => handleMouseEnter("Register")} onClick={closeDropdown}>Registrarse</Link>
            
            {/* Botón Hamburguesa (Móvil) */}
            <div className="nav-mobile-toggle" onClick={toggleMobileMenu}>
              {isMobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </div>
          </div>
        </div>

        {/* Mega Menú (Desplegable que cubre la pantalla) */}
        <div className={`mega-menu-container ${activeDropdown ? 'visible' : ''}`}>
          <div className="mega-menu-content">
             {/* Contenido dinámico según la selección */}
             <div className="menu-column">
                <h3>Explorar {navItems.find(i => i.key === activeDropdown)?.label}</h3>
                <Link to="#">Explorar todo {navItems.find(i => i.key === activeDropdown)?.label}</Link>
                <Link to="#">Novedades</Link>
                <Link to="#">Modelos Pro</Link>
             </div>
             <div className="menu-column">
                <h3>Comprar {navItems.find(i => i.key === activeDropdown)?.label}</h3>
                <Link to="#">Ver Colección</Link>
                <Link to="#">Más Vendidos</Link>
                <Link to="#">Ofertas</Link>
             </div>
             {/* Imagen dinámica de producto */}
             <div className="menu-image-preview">
                 {activeDropdown && menuImages[activeDropdown] && (
                    <img src={menuImages[activeDropdown]} alt={activeDropdown} className="nav-menu-image" />
                 )}
             </div>
          </div>
        </div>

        {/* --- MENÚ MÓVIL (Slide Down Style) --- */}
        <div className={`mobile-menu-overlay ${isMobileOpen ? 'open' : ''}`}>
            <div className="mobile-menu-inner">
                {navItems.map((item) => (
                    <Link key={item.key} to={item.path} className="mobile-nav-link" onClick={closeDropdown}>
                        {item.label}
                    </Link>
                ))}
                <div className="mobile-auth-section">
                    <Link to="/login" className="mobile-nav-link small" onClick={closeDropdown}>Iniciar sesión</Link>
                    <Link to="/register" className="mobile-nav-link small" onClick={closeDropdown}>Registrarse</Link>
                </div>
            </div>
        </div>
      </nav>
      
      {/* Fondo oscuro para el resto de la página cuando el menú está abierto */}
      {activeDropdown && !isMobileOpen && <div className="blur-overlay"></div>}
    </>
  );
}