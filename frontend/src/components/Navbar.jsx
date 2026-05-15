const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 50px', alignItems: 'center', backgroundColor: '#fff' }}>
      <div className="logo" style={{ fontWeight: 'bold', fontSize: '24px', color: '#007bff' }}>
        AMATI
      </div>
      <div className="menu" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <a href="#home" style={{ textDecoration: 'none', color: '#333' }}>Home Page</a>
        <a href="#about" style={{ textDecoration: 'none', color: '#333' }}>About Us</a>
        <a href="#contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</a>
        <button style={{ padding: '8px 20px', borderRadius: '20px', border: '1px solid #ccc', backgroundColor: 'transparent', cursor: 'pointer' }}>
          Login
        </button>
        <button style={{ padding: '8px 20px', borderRadius: '20px', border: 'none', backgroundColor: '#ffcc00', fontWeight: 'bold', cursor: 'pointer' }}>
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;