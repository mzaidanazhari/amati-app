// src/pages/MaterialView.jsx
import React, { useState } from 'react'; // Sudah menyertakan useState agar tidak error
import { useNavigate } from 'react-router-dom';

const MaterialView = () => {
  const navigate = useNavigate();
  
  // State untuk mengontrol buka-tutup sidebar kanan (default: true agar langsung terlihat seperti desain)
  const [showRightSidebar, setShowRightSidebar] = useState(true);

  // State simulasi untuk membuka/menutup accordion sub-chapter di panel kanan
  const [isSub1Expanded, setIsSub1Expanded] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f4f6f9', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      
      {/* ================= HEADER TOP BAR ================= */}
      <header style={{ backgroundColor: '#fff', padding: '15px 40px', display: 'flex', alignItems: 'center', gap: '20px', borderBottom: '1px solid #e0e0e0', zIndex: 10 }}>
        <button 
          onClick={() => navigate('/sub-chapters')} 
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', padding: '5px' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
        <span style={{ fontWeight: '700', fontSize: '1.1rem', color: '#002d72' }}>
          Chapter 1 - Bilangan Bulat
        </span>
      </header>

      {/* WADAH UTAMA DI BAWAH HEADER (FLEX ROW UNTUK MENAMPUNG MATERI & SIDEBAR KANAN) */}
      <div style={{ display: 'flex', flex: '1', overflow: 'hidden', position: 'relative' }}>
        
        {/* ================= AREA KONTEN MATERI (KOLOM KIRI) ================= */}
        <div style={{ flex: '1', padding: '40px 5%', display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto' }}>
          
          {/* Sub-Header Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
            <div>
              <span style={{ color: '#007bff', fontSize: '0.85rem', fontWeight: 'bold' }}>Sub Chapter 1</span>
              <h2 style={{ margin: '4px 0 0 0', color: '#002d72', fontSize: '1.3rem', fontWeight: '700' }}>A. Memahami Bilangan Bulat</h2>
            </div>
            
            {/* TOMBOL HAMBURGER INTERAKTIF (Bisa diklik untuk buka-tutup sidebar kanan) */}
            <button 
              onClick={() => setShowRightSidebar(!showRightSidebar)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#333', padding: '8px', borderRadius: '8px', backgroundColor: showRightSidebar ? '#e3f2fd' : 'transparent', transition: 'all 0.2s' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={showRightSidebar ? '#007bff' : 'currentColor'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* KERTAS PUTIH UTAMA (CONTENT CARD) */}
          <div style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '45px', boxShadow: '0 10px 30px rgba(0,0,0,0.01)', border: '1px solid #f0f0f0', lineHeight: '1.8', color: '#555' }}>
            <h1 style={{ margin: '0 0 25px 0', color: '#002d72', fontSize: '1.8rem', fontWeight: '700' }}>
              Pengertian Bilangan Bulat
            </h1>
            <p style={{ fontSize: '1rem', marginBottom: '35px', color: '#666' }}>
              Bilangan adalah suatu konsep matematika yang digunakan untuk merepresentasikan jumlah, ukuran, atau urutan suatu objek.
            </p>

            {/* GARIS BILANGAN MATEMATIKA */}
            <div style={{ margin: '40px 0', textAlign: 'center', padding: '20px', border: '1px dashed #e0e0e0', borderRadius: '15px', backgroundColor: '#fafafa' }}>
              <div style={{ position: 'relative', width: '80%', height: '2px', backgroundColor: '#333', margin: '40px auto', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ position: 'absolute', left: '-5px', top: '-6px', transform: 'rotate(135deg)', width: '8px', height: '8px', borderTop: '2px solid #333', borderRight: '2px solid #333' }}></span>
                {[-3, -2, -1, 0, 1, 2, 3].map((num) => (
                  <div key={num} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '2px', height: '10px', backgroundColor: '#333', marginTop: '-4px' }}></div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 'bold', marginTop: '5px', color: num === 0 ? '#007bff' : '#333' }}>{num}</span>
                  </div>
                ))}
                <span style={{ position: 'absolute', right: '-5px', top: '-6px', transform: 'rotate(45deg)', width: '8px', height: '8px', borderTop: '2px solid #333', borderRight: '2px solid #333' }}></span>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'green', margin: '15px 0 0 0', fontWeight: 'bold' }}>Gambar 1.1 Pembagian Bilangan Bulat</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '0.95rem', color: '#666' }}>
              <p>AMATI merupakan platform adaptif yang membantu para pendidik dan siswa kelas VII dalam memetakan serta memantau perkembangan kompetensi matematika secara komprehensif.</p>
              <p>Dengan menyelaraskan kebutuhan materi prasyarat secara otomatis, siswa yang mengalami kesulitan pada fondasi konsep dasar akan diarahkan menuju jalur akselerasi pemahaman.</p>
            </div>
          </div>

          {/* TOMBOL NAVIGASI BAWAH */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px', marginTop: '10px' }}>
            <button onClick={() => navigate('/sub-chapters')} style={{ padding: '10px 30px', backgroundColor: '#002d72', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Previous</button>
            <button onClick={() => alert('Lanjut ke materi berikutnya!')} style={{ padding: '10px 35px', backgroundColor: '#002d72', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Next</button>
          </div>
        </div>

        {/* ================= SIDEBAR STRUKTUR DAFTAR ISI (KOLOM KANAN) ================= */}
        {showRightSidebar && (
          <aside style={{ width: '350px', backgroundColor: '#fff', borderLeft: '1px solid #e0e0e0', display: 'flex', flexDirection: 'column', overflowY: 'auto', animation: 'fadeIn 0.2s ease-in-out' }}>
            
            {/* Header Sidebar Kanan */}
            <div style={{ padding: '30px 25px 20px 25px' }}>
              <h3 style={{ margin: 0, color: '#002d72', fontSize: '1.25rem', fontWeight: '700' }}>
                Chapter 1 - Bilangan Bulat
              </h3>
              <hr style={{ border: 'none', height: '1px', backgroundColor: '#e0e0e0', marginTop: '20px', marginBottom: '10px' }} />
            </div>

            {/* Daftar Dropdown Accordion Menu */}
            <div style={{ display: 'flex', flexDirection: 'column', padding: '0 10px' }}>
              
              {/* 1. Item Tujuan Pembelajaran */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 15px', color: '#555', fontSize: '0.95rem', fontWeight: '600', cursor: 'pointer' }}>
                <span>Tujuan Pembelajaran</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              </div>

              {/* 2. Item Sub Chapter 1 - EXPANDED (Sesuai Screenshot) */}
              <div>
                <div 
                  onClick={() => setIsSub1Expanded(!isSub1Expanded)}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 15px', color: '#002d72', fontSize: '0.95rem', fontWeight: '700', cursor: 'pointer' }}
                >
                  <span>A, Memahami Bilangan Bulat</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points={isSub1Expanded ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}/>
                  </svg>
                </div>

                {/* Anak List di Dalam Sub Chapter A (Tampil jika isSub1Expanded bernilai true) */}
                {isSub1Expanded && (
                  <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '20px', marginBottom: '10px' }}>
                    
                    {/* Sub-item 1: Pengertian Bilangan Bulat (ACTIVE) */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 15px', color: '#5b6e85', fontSize: '0.9rem', fontWeight: '500', cursor: 'pointer' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span style={{ color: '#007bff', fontWeight: '600' }}>Pengertian Bilangan Bulat</span>
                    </div>

                    {/* Sub-item 2: Membandingkan Bilangan Bulat */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 15px', color: '#555', fontSize: '0.9rem', cursor: 'pointer' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span>Membandingkan Bilangan Bulat</span>
                    </div>

                    {/* Sub-item 3: Latihan 1.1 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 15px', color: '#555', fontSize: '0.9rem', cursor: 'pointer' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span>Latihan 1.1</span>
                    </div>

                  </div>
                )}
              </div>

              {/* 3. Item Sub Chapter B */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 15px', color: '#555', fontSize: '0.95rem', fontWeight: '600', cursor: 'pointer' }}>
                <span>B. Operasi Bilangan Bulat</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              </div>

              {/* 4. Item Sub Chapter C */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 15px', color: '#555', fontSize: '0.95rem', fontWeight: '600', cursor: 'pointer' }}>
                <span>C. Faktor Bilangan Bulat</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              </div>

            </div>
          </aside>
        )}

      </div>
    </div>
  );
};

export default MaterialView;