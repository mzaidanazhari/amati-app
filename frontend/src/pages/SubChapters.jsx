// src/pages/SubChapters.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoAmati from '/src/assets/logo2.png';
import Sidebar from '../components/Sidebar';

const SubChapters = () => {
  const navigate = useNavigate();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  // Mock data sub-chapter sesuai dengan desain image_b3e1d9.png Anda
  const subChaptersData = [
    { id: 'sub1', title: 'Sub Chapter 1', name: 'A. Memahami Bilangan Bulat', progress: 95, status: 'In-Progress' },
    { id: 'sub2', title: 'Sub Chapter 2', name: 'B. Operasi Hitung Bilangan Bulat', progress: 0, status: 'Not Started' },
  ];

  return (
    <div style={{ display: 'flex', backgroundColor: '#f4f6f9', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      
<Sidebar activeMenu="Courses" />

      {/* ================= MAIN CONTENT (KANAN) ================= */}
      <main style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
        
        {/* TOP BAR */}
        <header style={{ backgroundColor: '#fff', padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e0e0e0' }}>
          <div style={{ position: 'relative', width: '300px', display: 'flex', alignItems: 'center' }}>
            <span style={{ position: 'absolute', left: '12px', display: 'flex', alignItems: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </span>
            <input type="text" placeholder="Search or type" style={{ width: '100%', padding: '10px 10px 10px 40px', borderRadius: '10px', border: '1px solid #e0e0e0', backgroundColor: '#f8f9fa', outline: 'none' }} />
          </div>
          <div onClick={() => setShowProfileDropdown(!showProfileDropdown)} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#ffcc00', overflow: 'hidden', border: '2px solid #007bff', cursor: 'pointer' }}>
            <img src="https://via.placeholder.com/40" alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </header>

        {/* KONTEN SUB CHAPTER */}
        <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '25px', overflowY: 'auto', flex: '1' }}>
          <div>
            <h1 style={{ margin: 0, color: '#002d72', fontSize: '1.8rem', fontWeight: '700' }}>All Sub Chapter</h1>
            <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '0.95rem' }}>Browse and manage your enrolled sub chapter</p>
          </div>

          {/* BAR FILTER */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
            <div style={{ position: 'relative', width: '350px', display: 'flex', alignItems: 'center' }}>
              <span style={{ position: 'absolute', left: '15px', display: 'flex', alignItems: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </span>
              <input type="text" placeholder="Search or type" style={{ width: '100%', padding: '12px 15px 12px 45px', borderRadius: '12px', border: '1px solid #e5e5e5', outline: 'none' }} />
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              {['All', 'Not Started', 'In-Progress', 'Done'].map((filter) => (
                <button key={filter} onClick={() => setActiveFilter(filter)} style={{ padding: '10px 25px', borderRadius: '12px', border: 'none', backgroundColor: activeFilter === filter ? '#007bff' : '#e5e5e5', color: activeFilter === filter ? '#fff' : '#555', fontWeight: activeFilter === filter ? 'bold' : 'normal', cursor: 'pointer' }}>
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* ACTION BAR: TOMBOL BACK & BREADCRUMB BADGE */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '5px' }}>
            {/* Tombol Back SVG Elegan */}
            <button 
              onClick={() => navigate('/courses')} 
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '10px', border: '1px solid #e0e0e0', backgroundColor: '#fff', cursor: 'pointer' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            {/* Badge Nama Bab */}
            <div style={{ padding: '10px 20px', backgroundColor: '#e5e5e5', borderRadius: '10px', color: '#555', fontSize: '0.9rem', fontWeight: '500' }}>
              Chapter 1: Bilangan Bulat
            </div>
          </div>

          {/* LIST BARIS SUB CHAPTER (VERTICAL STACK) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', marginTop: '10px' }}>
                {subChaptersData.map((sub) => (
                <div 
                    key={sub.id}
                    onClick={() => sub.id === 'sub1' && navigate('/material')} // <-- TAMBAHKAN AKSI KLIK INI
                    style={{ 
                    backgroundColor: '#fff', 
                    borderRadius: '20px', 
                    overflow: 'hidden', 
                    boxShadow: '0 8px 25px rgba(0,0,0,0.02)', 
                    border: '1px solid #f0f0f0', 
                    display: 'flex', 
                    flexDirection: 'column',
                    cursor: sub.id === 'sub1' ? 'pointer' : 'default' // <-- Ubah cursor khusus sub1
                    }}
                >
                {/* Garis Aksen Biru di Bagian Atas Card Sesuai Desain */}
                <div style={{ height: '15px', backgroundColor: '#5584f2' }}></div>
                
                {/* Detail Konten Card */}
                <div style={{ padding: '25px 30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div>
                    <span style={{ color: '#007bff', fontSize: '0.85rem', fontWeight: 'bold' }}>{sub.title}</span>
                    <h3 style={{ margin: '4px 0 0 0', color: '#002d72', fontSize: '1.2rem', fontWeight: '700' }}>{sub.name}</h3>
                  </div>

                  {/* Progress Line */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#888', marginBottom: '6px' }}>
                      <span>My Progress</span>
                      <span style={{ fontWeight: 'bold', color: '#333' }}>{sub.progress}/100</span>
                    </div>
                    <div style={{ width: '100%', height: '8px', backgroundColor: '#f0f0f0', borderRadius: '10px', overflow: 'hidden' }}>
                      <div style={{ width: `${sub.progress}%`, height: '100%', backgroundColor: '#ff3366', borderRadius: '10px' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

    </div>
  );
};

export default SubChapters;