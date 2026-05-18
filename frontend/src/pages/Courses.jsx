// src/pages/Courses.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar'; // 1. IMPORT TOPBAR MODULAR

const Courses = () => {
  const navigate = useNavigate();
  
  // State filter kategori aktif
  const [activeFilter, setActiveFilter] = useState('All');

  // Mock data kurikulum matematika AMATI
  const chaptersData = [
    { id: 'ch1', title: 'Chapter 1', name: 'Bilangan Bulat', progress: 95, status: 'In-Progress' },
    { id: 'ch2', title: 'Chapter 2', name: 'Bilangan Rasional', progress: 0, status: 'Not Started' },
    { id: 'ch3', title: 'Chapter 3', name: 'Rasio', progress: 10, status: 'In-Progress' },
    { id: 'ch4', title: 'Chapter 4', name: 'Bentuk Aljabar', progress: 20, status: 'In-Progress' },
    { id: 'ch5', title: 'Chapter 5', name: 'Kesebangunan', progress: 20, status: 'In-Progress' },
    { id: 'ch6', title: 'Chapter 6', name: 'Data Diagram', progress: 20, status: 'In-Progress' },
  ];

  // 2. LOGIKA AKTIF FILTER: Menyaring data bab berdasarkan tombol yang diklik
  const filteredChapters = chaptersData.filter((chapter) => {
    if (activeFilter === 'All') return true;
    return chapter.status === activeFilter;
  });

  return (
    <div style={{ display: 'flex', backgroundColor: '#f4f6f9', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      
      {/* SIDEBAR TUNGGAL */}
      <Sidebar activeMenu="Courses" />

      {/* ================= MAIN CONTENT (KANAN) ================= */}
      <main style={{ flex: '1', display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
        
        {/* 3. PANGGIL TOPBAR DI SINI (Menggantikan elemen <header> dan dropdown lama) */}
        <Topbar />

        {/* KONTEN ALL COURSES */}
        <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '25px', overflowY: 'auto', flex: '1' }}>
          <div>
            <h1 style={{ margin: 0, color: '#002d72', fontSize: '1.8rem', fontWeight: '700' }}>All Courses</h1>
            <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '0.95rem' }}>Browse and manage your enrolled courses</p>
          </div>

          {/* BAR FILTER DAN URBAN SEARCH INTERNAL */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
            {/* Inner Search Card */}
            <div style={{ position: 'relative', width: '350px', display: 'flex', alignItems: 'center' }}>
              <span style={{ position: 'absolute', left: '15px', display: 'flex', alignItems: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input type="text" placeholder="Search or type" style={{ width: '100%', padding: '12px 15px 12px 45px', borderRadius: '12px', border: '1px solid #e5e5e5', backgroundColor: '#fff', outline: 'none' }} />
            </div>

            {/* Tombol-Tombol Kategori Progress */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {['All', 'Not Started', 'In-Progress', 'Done'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  style={{
                    padding: '10px 25px',
                    borderRadius: '12px',
                    border: 'none',
                    backgroundColor: activeFilter === filter ? '#007bff' : '#e5e5e5',
                    color: activeFilter === filter ? '#fff' : '#555',
                    fontWeight: activeFilter === filter ? 'bold' : 'normal',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* GRID CARD CHAPTER - 4. MEMAKAI DATA YANG SUDAH DIFILTER */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px', marginTop: '10px' }}>
            {filteredChapters.map((chapter) => (
              <div 
                key={chapter.id}
                onClick={() => chapter.id === 'ch1' && navigate('/sub-chapters')}
                style={{ 
                  backgroundColor: '#fff', borderRadius: '20px', overflow: 'hidden', 
                  boxShadow: '0 8px 25px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0', 
                  display: 'flex', flexDirection: 'column', cursor: chapter.id === 'ch1' ? 'pointer' : 'default' 
                }}
              >
                {/* Bagian Atas: Wadah Thumbnail Gambar */}
                <div style={{ height: '160px', backgroundColor: '#5b86e5', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyCONtent: 'center' }}>
                  {chapter.id === 'ch1' ? (
                    <div style={{ color: '#fff', textAlign: 'center', padding: '20px', fontWeight: 'bold' }}>
                      <span style={{ fontSize: '0.8rem', display: 'block', opacity: 0.8 }}>Bab 1</span>
                      <span style={{ fontSize: '1.4rem' }}>Bilangan Bulat</span>
                    </div>
                  ) : (
                    <div style={{ width: '100%', height: '100%', backgroundColor: '#5584f2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>
                      <div style={{ textAlign: 'center' }}>
                        <span style={{ fontSize: '0.8rem', display: 'block', opacity: 0.8 }}>{chapter.title}</span>
                        <span style={{ fontSize: '1.3rem' }}>{chapter.name}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bagian Bawah: Informasi Detail Teks */}
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <span style={{ color: '#007bff', fontSize: '0.85rem', fontWeight: 'bold' }}>{chapter.title}</span>
                    <h3 style={{ margin: '4px 0 0 0', color: '#002d72', fontSize: '1.15rem', fontWeight: '700' }}>{chapter.name}</h3>
                  </div>

                  {/* Progress Bar Line */}
                  <div style={{ marginTop: '5px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#888', marginBottom: '6px' }}>
                      <span>My Progress</span>
                      <span style={{ fontWeight: 'bold', color: '#333' }}>{chapter.progress}/100</span>
                    </div>
                    <div style={{ width: '100%', height: '8px', backgroundColor: '#f0f0f0', borderRadius: '10px', overflow: 'hidden' }}>
                      <div style={{ width: `${chapter.progress}%`, height: '100%', backgroundColor: '#ff3366', borderRadius: '10px' }}></div>
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

export default Courses;