import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FaChevronRight, 
  FaApple, 
  FaMobileAlt,
  FaLaptop,
  FaCar,
  FaClock,
  FaRunning
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="home-container">
      
      {/* --- Chapter Nav: Categories --- */}
      <div className="chapter-nav">
        <Link to="/store/mac" className="chapter-item">
           <FaLaptop className="chapter-icon" />
           <span>Mac</span>
        </Link>
        <Link to="/store/iphone" className="chapter-item">
           <FaMobileAlt className="chapter-icon" />
           <span>iPhone</span>
        </Link>
        <Link to="/store/auto" className="chapter-item">
           <FaCar className="chapter-icon" />
           <span>Auto & Moto</span>
        </Link>
        <Link to="/store/watch" className="chapter-item">
           <FaClock className="chapter-icon" />
           <span>Watch</span>
        </Link>
        <Link to="/store/lifestyle" className="chapter-item">
           <FaRunning className="chapter-icon" />
           <span>Lifestyle</span>
        </Link>
      </div>

      {/* --- HERO 1: iPhone 15 Pro (Tech) --- */}
      <section className="apple-unit black-bg">
        <div className="unit-content">
            <h2 className="headline">iPhone 15 Pro</h2>
            <h3 className="subheadline">Titanium. So strong. So light. So Pro.</h3>
            <div className="cta-links">
                <Link to="/iphone-pro">Learn more <FaChevronRight size={10} /></Link>
                <Link to="/buy-iphone">Buy <FaChevronRight size={10} /></Link>
            </div>
        </div>
        {/* Imagen oscura abstracta premium para el iPhone */}
        <img src="https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=2560&q=80" alt="iPhone 15 Pro" className="unit-image" />
      </section>

      {/* --- HERO 2: Future Transport (Moto) --- */}
      <section className="apple-unit white-bg">
        <div className="unit-content">
            <h2 className="headline">SuperLeggera</h2>
            <h3 className="subheadline">Speed redefining physics.</h3>
            <div className="cta-links">
                <Link to="/moto">Experience <FaChevronRight size={10} /></Link>
                <Link to="/buy-moto">Order now <FaChevronRight size={10} /></Link>
            </div>
        </div>
        {/* Imagen de moto deportiva de alta calidad */}
        <img src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=2560&q=80" alt="SuperCar" className="unit-image" />
      </section>

      {/* --- HERO 3: MacBook Pro --- */}
      <section className="apple-unit black-bg">
        <div className="unit-content">
            <h2 className="headline">MacBook Pro</h2>
            <h3 className="subheadline">Mind-blowing. Head-turning.</h3>
            <div className="cta-links">
                <Link to="/mac">Learn more <FaChevronRight size={10} /></Link>
                <Link to="/buy-mac">Buy <FaChevronRight size={10} /></Link>
            </div>
        </div>
        <img src="https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&w=2560&q=80" alt="MacBook Pro" className="unit-image" />
      </section>

      {/* --- APPLE GRID (2 Columns) --- */}
      <div className="apple-grid">
        
        {/* Luxury Car */}
        <div className="promo-card black-bg">
            <div className="promo-content">
                <h4>Electric GT</h4>
                <p className="promo-desc">Driving into the future.</p>
                 <div className="cta-links">
                    <Link to="/auto">Learn more <FaChevronRight size={10} /></Link>
                 </div>
            </div>
            <img src="https://images.unsplash.com/photo-1614200179396-2bdb74eb9874?auto=format&fit=crop&w=1200&q=80" alt="Electric Concept Car" /> 
        </div>

        {/* Shoes (Nike Style) */}
        <div className="promo-card white-bg">
             <div className="promo-content">
                <h4>Air Max</h4>
                <p className="promo-desc">Run on air. Fly on pavement.</p>
                 <div className="cta-links">
                    <Link to="/shoes">Shop <FaChevronRight size={10} /></Link>
                 </div>
            </div>
            <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=80" alt="Nike Shoes" />
        </div>

        {/* Luxury Watch */}
        <div className="promo-card white-bg">
             <div className="promo-content">
                 <h4>Apple Watch Ultra</h4>
                 <p className="promo-desc">Adventure awaits.</p>
                 <div className="cta-links">
                     <Link to="/watch">Buy <FaChevronRight size={10} /></Link>
                 </div>
            </div>
            <img src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=1200&q=80" alt="Watch" />
        </div>

        {/* Apple TV / Vision */}
        <div className="promo-card black-bg">
             <div className="promo-content">
                 <h4>Apple TV 4K</h4>
                 <p className="promo-desc">The cinematic experience.</p>
                 <div className="cta-links">
                     <Link to="/tv">Learn more <FaChevronRight size={10} /></Link>
                     <Link to="/buy-tv">Buy <FaChevronRight size={10} /></Link>
                 </div>
             </div>
             <img src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1200&q=80" alt="Apple TV" />
        </div>

      </div>
    </div>
  )
}