import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  FaChevronRight, 
  FaChevronLeft, 
  FaHome,
  FaShoppingBag,
} from "react-icons/fa";

export default function Home() {
  const categoryRef = useRef(null);
  const productsRef = useRef(null);
  const helpRef = useRef(null);

  // Función de scroll genérica con dirección
  const handleScroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">
      
      {/* --- HEADER STORE STYLE --- */}
      <div className="home-header" style={{padding: '80px 22px 40px', maxWidth: 1024, margin: '0 auto'}}>
          <h1 style={{fontSize: 48, fontWeight: 700, lineHeight: 1.1}}>
            Estilo. <span style={{color: '#86868b'}}>La mejor forma de encontrar tu look.</span>
          </h1>
      </div>

      {/* Botones de Acceso Rápido (Solo Móvil) */}
      <div className="mobile-home-actions">
          <Link to="/login" className="mobile-action-btn primary">Iniciar Sesión</Link>
          <Link to="/register" className="mobile-action-btn secondary">Registrarse</Link>
      </div>

      {/* --- SECTION 1: CATEGORY ICONS --- */}
      <div className="category-section">
         <div className="chapter-nav" ref={categoryRef} style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/store/clothing" className="chapter-item">
               <img src="https://cdn-icons-png.flaticon.com/512/2357/2357127.png" alt="Ropa" className="chapter-icon" />
               <span>Ropa</span>
            </Link>
            <Link to="/store/phones" className="chapter-item">
               <img src="https://cdn-icons-png.flaticon.com/512/644/644458.png" alt="Celulares" className="chapter-icon" />
               <span>Celulares</span>
            </Link>
            <Link to="/store/shoes" className="chapter-item">
               <img src="https://cdn-icons-png.flaticon.com/512/2742/2742674.png" alt="Zapatos" className="chapter-icon" />
               <span>Zapatos</span>
            </Link>
            <Link to="/store/watches" className="chapter-item">
               <img src="https://cdn-icons-png.flaticon.com/512/3109/3109860.png" alt="Relojes" className="chapter-icon" />
               <span>Relojes</span>
            </Link>
            <Link to="/store/glasses" className="chapter-item">
               <img src="https://cdn-icons-png.flaticon.com/512/862/862075.png" alt="Gafas" className="chapter-icon" />
               <span>Lentes</span>
            </Link>
            <Link to="/store/hats" className="chapter-item">
               <img src="https://cdn-icons-png.flaticon.com/512/1867/1867635.png" alt="Gorras" className="chapter-icon" />
               <span>Gorras</span>
            </Link>
            <Link to="/store/bags" className="chapter-item">
               <img src="https://cdn-icons-png.flaticon.com/512/2852/2852503.png" alt="Bolsos" className="chapter-icon" />
               <span>Mochilas</span>
            </Link>
            <Link to="/store/accessories" className="chapter-item">
               <img src="https://cdn-icons-png.flaticon.com/512/864/864685.png" alt="Accesorios" className="chapter-icon" />
               <span>Accesorios</span>
            </Link>
         </div>
      </div>

      {/* --- SECTION 2: THE LATEST (Horizontal Carousel) --- */}
      <section className="carousel-section">
        <h2 className="section-heading" style={{textAlign: 'left', paddingLeft: 22}}>Lo último. <span className="text-gray">Novedades frescas.</span></h2>
        
        <button className="scroll-arrow left" onClick={() => handleScroll(productsRef, 'left')}><FaChevronLeft size={20} /></button>
        <button className="scroll-arrow right" onClick={() => handleScroll(productsRef, 'right')}><FaChevronRight size={20} /></button>

        <div className="carousel-container" ref={productsRef}>
            
            {/* Card 1: Streetwear */}
            <div className="round-card large" style={{background: '#000'}}>
                <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80" alt="Streetwear" style={{opacity: 0.8}} />
                <div className="round-content">
                    <span style={{fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: '#ccc'}}>Colección Urbana</span>
                    <h3 style={{color: '#fff'}}>Oversize.</h3>
                    <p style={{color: '#fff'}}>Comodidad y estilo en cada prenda.</p>
                </div>
            </div>

            {/* Card 2: Phone */}
            <div className="round-card large" style={{background: '#f5f5f7'}}>
                <img src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=80" alt="Smartphone" />
                <div className="round-content">
                    <span style={{fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: '#86868b'}}>Tecnología</span>
                    <h3 style={{color: '#1d1d1f'}}>Smartphones Pro.</h3>
                    <p style={{color: '#1d1d1f'}}>Potencia en tu bolsillo.</p>
                </div>
            </div>

            {/* Card 3: Sneakers */}
            <div className="round-card large" style={{background: '#1d1d1f'}}>
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80" alt="Sneakers" style={{opacity: 0.9}} />
                <div className="round-content">
                    <span style={{fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: '#86868b'}}>Calzado</span>
                    <h3 style={{color: '#fff'}}>Sneakers Air.</h3>
                    <p style={{color: '#fff'}}>Diseño icónico para caminar.</p>
                </div>
            </div>

            {/* Card 4: Sunglasses */}
            <div className="round-card large" style={{background: '#fff'}}>
                <img src="https://images.unsplash.com/photo-1572635196237-14b3f281e960?auto=format&fit=crop&w=1200&q=80" alt="Gafas" />
                <div className="round-content">
                    <span style={{fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: '#86868b'}}>Verano</span>
                    <h3 style={{color: '#1d1d1f'}}>Gafas de Sol.</h3>
                    <p style={{color: '#1d1d1f'}}>Protección con estilo.</p>
                </div>
            </div>

        </div>
      </section>

      {/* --- SECTION 3: THE APPLE DIFFERENCE (Grid) --- */}
      <div style={{padding: '40px 22px 100px'}}>
        <h2 className="section-heading" style={{textAlign: 'left'}}>Ayuda aquí y ahora. <span className="text-gray">Cuando y como la necesites.</span></h2>
        
        <div className="apple-grid">
            {/* Specialist */}
            <div className="promo-card white-bg" style={{height: 500, borderRadius: 24, overflow: 'hidden', alignItems: 'flex-start', textAlign: 'left', padding: 40}}>
                 <div style={{zIndex: 10, maxWidth: 350}}>
                    <span style={{fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: '#86868b'}}>Asesor de Estilo</span>
                    <h4 style={{fontSize: 32, marginBottom: 10}}>Compra con la ayuda de un Experto.</h4>
                    <p style={{fontSize: 17, color: '#1d1d1f'}}>Online o en nuestra tienda física.</p>
                 </div>
                 <img src="https://media.licdn.com/dms/image/v2/D5610AQFBZ0NGS8jlFQ/image-shrink_1280/image-shrink_1280/0/1694793686241?e=2147483647&v=beta&t=61svPpKVwRjY-xZdKh4IAkU917oxmvFTK7QB6IYiowA" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', position: 'absolute', top: 0, left: 0, zIndex: 0, transform: 'scale(1)'}} alt="Specialist" />
            </div>
            
            {/* Business */}
            <div className="promo-card white-bg" style={{height: 500, borderRadius: 24, overflow: 'hidden', alignItems: 'flex-start', textAlign: 'left', padding: 40, background: '#f5f5f7'}}>
                 <div style={{zIndex: 10}}>
                    <span style={{fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: '#86868b'}}>Envíos</span>
                    <h4 style={{fontSize: 32, marginBottom: 10}}>Logística Global.</h4>
                    <p style={{fontSize: 17, color: '#1d1d1f'}}>Llevamos tus compras a donde estés.</p>
                 </div>
                 <img src="https://img1.wallspic.com/crops/4/0/1/2/2/122104/122104-carretera-semi_remolque_de_camion-transporte-exterior_del_automotor-el_transporte_de_mercancias-1920x1080.jpg" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', position: 'absolute', top: 0, left: 0, zIndex: 0, transform: 'scale(1)'}} alt="Business" />
            </div>
        </div>
      </div>

      {/* --- SECTION 4: ACCESSORIES (Carousel) --- */}
      <section className="carousel-section" style={{background: '#fff', paddingTop: 0}}>
        <h2 className="section-heading" style={{textAlign: 'left', paddingLeft: 22}}>Accesorios. <span className="text-gray">Esenciales que combinan perfecto.</span></h2>
        
        <button className="scroll-arrow left" onClick={() => handleScroll(helpRef, 'left')}><FaChevronLeft size={20} /></button>
        <button className="scroll-arrow right" onClick={() => handleScroll(helpRef, 'right')}><FaChevronRight size={20} /></button>

        <div className="carousel-container" ref={helpRef}>
            
            {/* Card 1: Fundas */}
            <div className="round-card" style={{height: 480, width: 310, background: '#000'}}>
                <div style={{padding: 30, position: 'absolute', top: 0, left: 0, zIndex: 10}}>
                    <span style={{fontSize: 12, fontWeight: 700, color: '#f5f5f7', textTransform: 'uppercase', marginBottom: 5, display: 'block'}}>Fundas</span>
                    <h3 style={{fontSize: 24, color: '#fff'}}>Protección.</h3>
                    <p style={{color: '#a1a1a6'}}>Estilo para tu celular.</p>
                </div>
                <img src="https://images.unsplash.com/photo-1541876020-f5979929831d?auto=format&fit=crop&w=800&q=80" style={{width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9}} alt="Fundas" />
            </div>

            {/* Card 2: Relojes */}
            <div className="round-card" style={{height: 480, width: 310, background: '#f5f5f7'}}>
                 <div style={{padding: 30, position: 'absolute', top: 0, left: 0, zIndex: 10}}>
                    <span style={{fontSize: 12, fontWeight: 700, color: '#1d1d1f', textTransform: 'uppercase', marginBottom: 5, display: 'block'}}>Smartwatch</span>
                    <h3 style={{fontSize: 24, color: '#1d1d1f'}}>Conectado siempre.</h3>
                </div>
                <img src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="Smartwatch" />
            </div>

            {/* Card 3: Audio */}
            <div className="round-card" style={{height: 480, width: 310, background: '#1d1d1f'}}>
                 <div style={{padding: 30, position: 'absolute', top: 0, left: 0, zIndex: 10}}>
                    <span style={{fontSize: 12, fontWeight: 700, color: '#86868b', textTransform: 'uppercase', marginBottom: 5, display: 'block'}}>Audio</span>
                    <h3 style={{fontSize: 24, color: '#fff'}}>Sonido Premium.</h3>
                </div>
                <img src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80" style={{width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9}} alt="Audio" />
            </div>
            
            {/* Card 4: Gorras */}
            <div className="round-card" style={{height: 480, width: 310, background: '#fff'}}>
                 <div style={{padding: 30, position: 'absolute', top: 0, left: 0, zIndex: 10}}>
                    <span style={{fontSize: 12, fontWeight: 700, color: '#1d1d1f', textTransform: 'uppercase', marginBottom: 5, display: 'block'}}>Headwear</span>
                    <h3 style={{fontSize: 24, color: '#1d1d1f'}}>Gorras Urbanas.</h3>
                </div>
                <img src="https://images.unsplash.com/photo-1588850561407-ed78c282e89f?auto=format&fit=crop&w=800&q=80" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="Gorras" />
            </div>

            {/* Card 5: Setup */}
            <div className="round-card" style={{height: 480, width: 310, background: '#fafafa'}}>
                 <div style={{padding: 30, position: 'absolute', top: 0, left: 0, zIndex: 10}}>
                    <span style={{fontSize: 12, fontWeight: 700, color: '#1d1d1f', textTransform: 'uppercase', marginBottom: 5, display: 'block'}}>Setup</span>
                    <h3 style={{fontSize: 24, color: '#1d1d1f'}}>Trabaja Mejor.</h3>
                </div>
                <img src="https://images.unsplash.com/photo-1542393545-facac326b133?auto=format&fit=crop&w=800&q=80" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="iPad Setup" />
            </div>

        </div>
      </section>

      {/* --- FOOTER DETALLADO --- */}
      <footer style={{background: '#f5f5f7', padding: '60px 22px 40px', fontSize: 12, color: '#86868b', borderTop: '1px solid #d2d2d7'}}>
         <div style={{maxWidth: 1024, margin: '0 auto'}}>
            
            {/* Footer Breadcrumbs */}
            <div style={{marginBottom: 30, display:'flex', alignItems:'center', gap: 10}}>
                <FaHome size={14} color="#424245" /> <FaChevronRight size={8} /> <span>Inicio</span>
            </div>

            {/* Footer Columns */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 40, marginBottom: 40}}>
                <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                    <h4 style={{color: '#1d1d1f', fontWeight: 600}}>Descubrir y Comprar</h4>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Novedades</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Ropa</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Calzado</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Celulares</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Relojes</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Accesorios</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Ofertas</Link>
                </div>
                
                <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                    <h4 style={{color: '#1d1d1f', fontWeight: 600}}>Cuenta</h4>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Mi Perfil</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Mis Pedidos</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Lista de Deseos</Link>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                    <h4 style={{color: '#1d1d1f', fontWeight: 600}}>Sobre Nosotros</h4>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Buscar una tienda</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Ayuda</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Envíos y Devoluciones</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Sostenibilidad</Link>
                </div>
            </div>
            
            {/* Footer Bottom */}
            <div style={{borderTop: '1px solid #d2d2d7', paddingTop: 20, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20}}>
                <p>Copyright © 2024 System24. Todos los derechos reservados.</p>
                <div style={{display: 'flex', gap: 20}}>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Política de privacidad</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Términos de uso</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Ventas y reembolsos</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Aviso legal</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Mapa del sitio</Link>
                </div>
            </div>
         </div>
      </footer>

    </div>
  )
}