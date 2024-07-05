import React from 'react'


export default function Header() {
    const headerStyle = 
    {
        background: '#333',
        color: '#fff',
        padding: '10px'
    }

    const containerStyle ={
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 2rem'
    }

    const logoStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold'
    }

    const navStyle = {
       marginLeft: '1rem',
       color: '#fff',
       fontSize: '1.2rem',
       textDecoration: 'none',
       transition: 'color 0.3s ease'
    }

    const handleHover = (e) => {
        e.target.style.color = '#CDB5E0';

    }
    const handleLeave = (e) => {
        e.target.style.color = '#fff';
    }

  return (
   <header style={headerStyle}>
    <div style={containerStyle}>
        <div style={logoStyle}>MicroFrontend</div>
        <nav>
            <a style={navStyle} href="/" onMouseEnter={handleHover} onMouseLeave={handleLeave}>Home</a>
            <a style={navStyle} href="/about" onMouseEnter={handleHover} onMouseLeave={handleLeave}>About</a>
            <a style={navStyle} href="/contact" onMouseEnter={handleHover} onMouseLeave={handleLeave}>Contact</a>
            <a style={navStyle} href="/products" onMouseEnter={handleHover} onMouseLeave={handleLeave}>Products</a>
        </nav>
    </div>
    </header>
  )
}
