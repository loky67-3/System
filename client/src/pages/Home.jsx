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
         <div className="chapter-nav" ref={categoryRef} style={{ justifyContent: 'center', flexWrap: 'wrap', maxWidth: 1024, margin: '0 auto' }}>
            <Link to="/store/cing" className="chapter-item">
               <img src="https://cdn-icons-png.flaticon.com/512/2357/2357127.png" alt="Ropa" className="chapter-icon" />
               <span>Ropa</span>
            </Link>
            <Link to="/store/phones" className="chapter-item">
               <img src="https://media.istockphoto.com/id/2182945818/es/foto/beautiful-mid-adult-hispanic-female-in-yellow-jacket-hiking.webp?a=1&b=1&s=612x612&w=0&k=20&c=LX3fCyWSwUkYd9UPUmUGbSQhQ4wf1SashTFauYfapN8=" alt="Celulares" className="chapter-icon" />
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
        <div style={{maxWidth: 1024, margin: '0 auto', padding: '0 22px'}}>
            <h2 className="section-heading" style={{textAlign: 'left', paddingLeft: 0}}>Lo último. <span className="text-gray">Novedades frescas.</span></h2>
        </div>
        
        <button className="scroll-arrow left" onClick={() => handleScroll(productsRef, 'left')}><FaChevronLeft size={20} /></button>
        <button className="scroll-arrow right" onClick={() => handleScroll(productsRef, 'right')}><FaChevronRight size={20} /></button>

        <div className="carousel-container" ref={productsRef} style={{paddingLeft: 'max(22px, calc(50% - 512px))', paddingRight: 'max(22px, calc(50% - 512px))'}}>
            
            {/* Card 1: Streetwear */}
            <div className="round-card large" style={{background: '#000'}}>
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80" alt="Streetwear" style={{opacity: 0.8}} />
                <div className="round-content">
                    <span style={{fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: '#ccc'}}>Colección Urbana</span>
                    <h3 style={{color: '#fff'}}>Oversize.</h3>
                    <p style={{color: '#fff'}}>Comodidad y estilo en cada prenda.</p>
                </div>
            </div>

            {/* Card 2: Phone */}
            <div className="round-card large" style={{background: '#f5f5f7'}}>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/012/648/677/small_2x/happy-young-people-group-have-fun-on-beach-free-photo.jpg" alt="Smartphone" />
                <div className="round-content">
                    <span style={{fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: '#86868b'}}>Tecnología</span>
                    <h3 style={{color: '#1d1d1f'}}>Smartphones Pro.</h3>
                    <p style={{color: '#1d1d1f'}}>Potencia en tu bolsillo.</p>
                </div>
            </div>

            {/* Card 3: Sneakers */}
            <div className="round-card large" style={{background: '#1d1d1f'}}>
                <img src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80" alt="Sneakers" style={{opacity: 0.9}} />
                <div className="round-content">
                    <span style={{fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: '#86868b'}}>Calzado</span>
                    <h3 style={{color: '#fff'}}>Sneakers Air.</h3>
                    <p style={{color: '#fff'}}>Diseño icónico para caminar.</p>
                </div>
            </div>

            {/* Card 4: Sunglasses */}
            <div className="round-card large" style={{background: '#fff'}}>
                <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80" alt="Gafas" />
                <div className="round-content">
                    <span style={{fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: '#86868b'}}>Verano</span>
                    <h3 style={{color: '#1d1d1f'}}>Gafas de Sol.</h3>
                    <p style={{color: '#1d1d1f'}}>Protección con estilo.</p>
                </div>
            </div>

        </div>
      </section>

      {/* --- SECTION 3: THE APPLE DIFFERENCE (Grid) --- */}
      <div style={{padding: '40px 22px 100px', maxWidth: 1024, margin: '0 auto'}}>
        <h2 className="section-heading" style={{textAlign: 'left', paddingLeft: 0}}>Ayuda aquí y ahora. <span className="text-gray">Cuando y como la necesites.</span></h2>
        
        <div className="apple-grid" style={{padding: 0}}>
            {/* Specialist */}
            <div className="promo-card white-bg" style={{height: 500, borderRadius: 24, overflow: 'hidden', alignItems: 'flex-start', textAlign: 'left', padding: 40}}>
                 <div style={{zIndex: 10, maxWidth: 350}}>
                    <span style={{fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: '#86868b'}}>Asesor de Estilo</span>
                    <h4 style={{fontSize: 32, marginBottom: 10}}>Compra con la ayuda de un Experto.</h4>
                    <p style={{fontSize: 17, color: '#1d1d1f'}}>Online o en nuestra tienda física.</p>
                 </div>
                 <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', position: 'absolute', top: 0, left: 0, zIndex: 0, transform: 'scale(1)'}} alt="Specialist" />
            </div>
            
            {/* Business */}
            <div className="promo-card white-bg" style={{height: 500, borderRadius: 24, overflow: 'hidden', alignItems: 'flex-start', textAlign: 'left', padding: 40, background: '#f5f5f7'}}>
                 <div style={{zIndex: 10}}>
                    <span style={{fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: '#86868b'}}>Envíos</span>
                    <h4 style={{fontSize: 32, marginBottom: 10}}>Logística Global.</h4>
                    <p style={{fontSize: 17, color: '#1d1d1f'}}>Llevamos tus compras a donde estés.</p>
                 </div>
                 <img src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', position: 'absolute', top: 0, left: 0, zIndex: 0, transform: 'scale(1)'}} alt="Business" />
            </div>
        </div>
      </div>

      {/* --- SECTION 4: ACCESSORIES (Carousel) --- */}
      <section className="carousel-section" style={{background: '#fff', paddingTop: 0}}>
        <div style={{maxWidth: 1024, margin: '0 auto', padding: '0 22px'}}>
            <h2 className="section-heading" style={{textAlign: 'left', paddingLeft: 0}}>Accesorios. <span className="text-gray">Esenciales que combinan perfecto.</span></h2>
        </div>
        
        <button className="scroll-arrow left" onClick={() => handleScroll(helpRef, 'left')}><FaChevronLeft size={20} /></button>
        <button className="scroll-arrow right" onClick={() => handleScroll(helpRef, 'right')}><FaChevronRight size={20} /></button>

        <div className="carousel-container" ref={helpRef} style={{paddingLeft: 'max(22px, calc(50% - 512px))', paddingRight: 'max(22px, calc(50% - 512px))'}}>
            
            {/* Card 1: Fundas */}
            <div className="round-card" style={{height: 480, width: 310, background: '#000'}}>
                <div style={{padding: 30, position: 'absolute', top: 0, left: 0, zIndex: 10}}>
                    <span style={{fontSize: 12, fontWeight: 700, color: '#f5f5f7', textTransform: 'uppercase', marginBottom: 5, display: 'block'}}>Fundas</span>
                    <h3 style={{fontSize: 24, color: '#fff'}}>Protección.</h3>
                    <p style={{color: '#a1a1a6'}}>Estilo para tu celular.</p>
                </div>
                <img src="https://img.freepik.com/fotos-premium/uvas-verdes-plato-sobre-fondo-blanco_1108314-126514.jpg" style={{width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9}} alt="Fundas" />
            </div>

            {/* Card 2: Relojes */}
            <div className="round-card" style={{height: 480, width: 310, background: '#f5f5f7'}}>
                 <div style={{padding: 30, position: 'absolute', top: 0, left: 0, zIndex: 10}}>
                    <span style={{fontSize: 12, fontWeight: 700, color: '#1d1d1f', textTransform: 'uppercase', marginBottom: 5, display: 'block'}}>Smartwatch</span>
                    <h3 style={{fontSize: 24, color: '#1d1d1f'}}>Conectado siempre.</h3>
                </div>
                <img src="https://img.freepik.com/premium-photo/fish-with-yellow-tail-is-aquarium_1212225-2963.jpg" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="Smartwatch" />
            </div>

            {/* Card 3: Audio */}
            <div className="round-card" style={{height: 480, width: 310, background: '#1d1d1f'}}>
                 <div style={{padding: 30, position: 'absolute', top: 0, left: 0, zIndex: 10}}>
                    <span style={{fontSize: 12, fontWeight: 700, color: '#86868b', textTransform: 'uppercase', marginBottom: 5, display: 'block'}}>Audio</span>
                    <h3 style={{fontSize: 24, color: '#fff'}}>Sonido Premium.</h3>
                </div>
                <img src="https://img.freepik.com/premium-photo/refreshing-latte-coffee-white-glass_842717-21583.jpg" style={{width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9}} alt="Audio" />
            </div>
            
            {/* Card 4: Gorras */}
            <div className="round-card" style={{height: 480, width: 310, background: '#fff'}}>
                 <div style={{padding: 30, position: 'absolute', top: 0, left: 0, zIndex: 10}}>
                    <span style={{fontSize: 12, fontWeight: 700, color: '#1d1d1f', textTransform: 'uppercase', marginBottom: 5, display: 'block'}}>Headwear</span>
                    <h3 style={{fontSize: 24, color: '#1d1d1f'}}>Gorras Urbanas.</h3>
                </div>
                <img src="https://mentoria.japancase.com/wp-content/uploads/2024/05/jim-rickhards-gold.jpg" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="Gorras" />
            </div>

            {/* Card 5: Setup */}
            <div className="round-card" style={{height: 480, width: 310, background: '#fafafa'}}>
                 <div style={{padding: 30, position: 'absolute', top: 0, left: 0, zIndex: 10}}>
                    <span style={{fontSize: 12, fontWeight: 700, color: '#1d1d1f', textTransform: 'uppercase', marginBottom: 5, display: 'block'}}>Setup</span>
                    <h3 style={{fontSize: 24, color: '#1d1d1f'}}>Trabaja Mejor.</h3>
                </div>
                <img src="https://img.freepik.com/fotos-premium/garrafa-roxa-magenta-em-um-fundo-magenta-design-limpo-e-minimalista_800563-2624.jpg" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="iPad Setup" />
            </div>

        </div>
      </section>

      {/* --- FOOTER DETALLADO --- */}
      <footer style={{background: '#f5f5f7', padding: '40px 22px', fontSize: 12, color: '#86868b', borderTop: '1px solid #d2d2d7'}}>
         <div style={{maxWidth: 1024, margin: '0 auto'}}>
            
            {/* Footer Breadcrumbs */}
            <div style={{marginBottom: 20, display:'flex', alignItems:'center', gap: 10, paddingBottom: 20, borderBottom: '1px solid #d2d2d7'}}>
                <FaHome size={14} color="#424245" /> <FaChevronRight size={10} /> 
                <span style={{color: '#1d1d1f'}}>System24 Store</span>
            </div>

            {/* Footer Columns (5 Columns) */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 20, alignItems: 'start'}}>
                
                {/* Col 1 */}
                <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                    <h4 style={{color: '#1d1d1f', fontWeight: 600, marginBottom: 4}}>Explorar Tienda</h4>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Novedades</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Ropa y Moda</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Tecnología</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Calzado</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Relojes</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Accesorios</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Hogar y Estilo</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Tarjetas de Regalo</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Ofertas</Link>
                </div>

                {/* Col 2 */}
                <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                     <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                        <h4 style={{color: '#1d1d1f', fontWeight: 600, marginBottom: 4}}>Mi Cuenta</h4>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Administrar mi cuenta</Link>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Historial de Pedidos</Link>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Mi Lista de Deseos</Link>
                     </div>
                     <div style={{display: 'flex', flexDirection: 'column', gap: 8, marginTop: 15}}>
                        <h4 style={{color: '#1d1d1f', fontWeight: 600, marginBottom: 4}}>Servicios System24</h4>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>System24+</Link>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Garantía Extendida</Link>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Soporte Técnico</Link>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Financiamiento</Link>
                     </div>
                </div>
                
                {/* Col 3 */}
                <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                    <h4 style={{color: '#1d1d1f', fontWeight: 600, marginBottom: 4}}>Nuestra Tienda</h4>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Encontrar una tienda</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Reservar una cita</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Eventos y Talleres</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Programa de Reciclaje</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Financiación</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Plan de Canje</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Estado del pedido</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Ayuda para comprar</Link>
                    <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Opciones de envío</Link>
                </div>

                {/* Col 4 */}
                <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                    <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                        <h4 style={{color: '#1d1d1f', fontWeight: 600, marginBottom: 4}}>Para Empresas</h4>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>System24 para Negocios</Link>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Comprar para tu empresa</Link>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Soluciones Corporativas</Link>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: 8, marginTop: 15}}>
                        <h4 style={{color: '#1d1d1f', fontWeight: 600, marginBottom: 4}}>Para Educación</h4>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>System24 y la Educación</Link>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Descuentos para estudiantes</Link>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Compras para Instituciones</Link>
                    </div>
                </div>

                {/* Col 5 */}
                <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                    <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                        <h4 style={{color: '#1d1d1f', fontWeight: 600, marginBottom: 4}}>Nuestros Valores</h4>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Accesibilidad</Link>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Medio ambiente</Link>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Privacidad y Datos</Link>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Responsabilidad Social</Link>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: 8, marginTop: 15}}>
                        <h4 style={{color: '#1d1d1f', fontWeight: 600, marginBottom: 4}}>Acerca de System24</h4>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Sala de Prensa</Link>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Nuestro Equipo</Link>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Trabaja con nosotros</Link>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Ética y cumplimiento</Link>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Inversionistas</Link>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Contacto</Link>
                    </div>
                </div>
            </div>
            
            <div style={{marginTop: 30, paddingTop: 20, borderTop: '1px solid #d2d2d7', fontSize: 11, color: '#86868b'}}>
                <p style={{marginBottom: 10}}>Más formas de comprar: <Link to="#" style={{color: '#0071e3', textDecoration: 'none'}}>Encuentra una tienda</Link> o <Link to="#" style={{color: '#0071e3', textDecoration: 'none'}}>un distribuidor</Link> cerca de ti. O llama al 800-SYSTEM24.</p>
                <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, borderTop: '1px solid #d2d2d7', paddingTop: 10}}>
                    <div style={{display: 'flex', gap: 20, flexWrap: 'wrap'}}>
                        <span>Copyright © 2024 System24 Inc. Todos los derechos reservados.</span>
                    </div>
                    <div style={{display: 'flex', gap: 15, flexWrap: 'wrap'}}>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none', borderRight: '1px solid #d2d2d7', paddingRight: 10}}>Política de privacidad</Link>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none', borderRight: '1px solid #d2d2d7', paddingRight: 10}}>Uso de cookies</Link>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none', borderRight: '1px solid #d2d2d7', paddingRight: 10}}>Condiciones de uso</Link>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none', borderRight: '1px solid #d2d2d7', paddingRight: 10}}>Ventas y reembolsos</Link>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none', borderRight: '1px solid #d2d2d7', paddingRight: 10}}>Aviso legal</Link>
                        <Link to="#" style={{color: '#424245', textDecoration: 'none'}}>Mapa del sitio</Link>
                    </div>
                    <div style={{color: '#424245'}}>México</div>
                </div>
            </div>
         </div>
      </footer>

    </div>
  )
}