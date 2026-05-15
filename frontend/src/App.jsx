import Navbar from './components/Navbar'
import FeatureCard from './components/FeatureCard'
import HighlightFeature from './components/HighlightFeature'
import TestimonialCard from './components/TestimonialCard'

function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Section 1: Hero */}
      <div id="home" style={{ backgroundColor: '#e3f2fd', paddingBottom: '100px', borderRadius: '0 0 50% 50% / 0 0 10% 10%' }}>
        <Navbar />
        <header style={{ textAlign: 'center', marginTop: '60px', padding: '0 20px' }}>
          <h1 style={{ fontSize: '3rem', color: '#002d72', marginBottom: '10px' }}>Adaptive Mathematics</h1>
          <h2 style={{ fontSize: '2.5rem', color: '#007bff', marginTop: '0' }}>Analysis & Teaching Interactive</h2>
          <p style={{ color: '#555', maxWidth: '600px', margin: '20px auto', lineHeight: '1.6' }}>
            AMATI adalah platform interaktif untuk analisis dan pembelajaran matematika Sekolah Menengah Pertama kelas 7.
          </p>
          <button style={{ padding: '15px 40px', backgroundColor: '#ffcc00', border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }}>
            Get Started →
          </button>
        </header>
      </div>

      {/* Section 2: Kenapa AMATI */}
      <section id="features" style={{ padding: '80px 50px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '50px', color: '#333' }}>
          Kenapa <span style={{ color: '#007bff' }}>#TenangAjaAdaAMATI</span>
        </h2>
        
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <FeatureCard 
            title="Paham materi belajar lebih seru" 
            description="Video belajar yang bersumber dari platform YouTube dengan channel pilihan, dijamin buat belajar mu jadi menyenangkan." 
          />
          <FeatureCard 
            title="Lebih siap taklukkan ujian" 
            description="Latihan soal dan update hasil bantu persiapanmu hadapi ujian tengah dan akhir semester." 
          />
          <FeatureCard 
            title="Informasi pendidikan paling update" 
            description="Selalu menarik terkait kurikulum sekolah kita selalu update dan menyesuaikan dengan kurikulum nasional." 
          />
        </div>
      </section>

      {/* Section 3: Tentang Kami */}
      <section id="about" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '80px 10%', 
        gap: '50px',
        flexWrap: 'wrap',
        backgroundColor: '#fff' 
      }}>

        {/* Kolom Kiri: Gambar */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <div style={{ 
            backgroundColor: '#e3f2fd', 
            borderRadius: '30px', 
            padding: '20px',
            display: 'flex',
            justifyContent: 'center'
          }}>
            {/* Ganti URL gambar dengan aset Anda nanti */}
            <img 
              src="https://via.placeholder.com/400x300" 
              alt="Tentang AMATI" 
              style={{ width: '100%', borderRadius: '20px' }} 
            />
          </div>
        </div>

        {/* Kolom Kanan: Teks */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2 style={{ color: '#007bff', marginBottom: '20px' }}>Tentang Kami</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
            Selamat datang di platform belajar Matematika. **AMATI** adalah platform pembelajaran adaptif berbasis web yang dirancang khusus untuk mata pelajaran matematika siswa kelas VII SMP dengan mengikuti Kurikulum Merdeka[cite: 30, 31].
          </p>
          <p style={{ lineHeight: '1.8', color: '#555' }}>
            <strong>Tujuan Kami:</strong> Kami berfokus pada pengembangan AMATI untuk memperkuat pemahaman konsep dasar matematika siswa secara menyeluruh, sehingga siswa memiliki fondasi yang kokoh untuk mengikuti proses pembelajaran di tahap selanjutnya[cite: 28].
          </p>
        </div>
      </section>

      {/* Section 4: Fitur Utama & Keunggulan */}
      <section style={{ 
        backgroundColor: '#007bff', 
        padding: '80px 10%', 
        textAlign: 'center',
        borderRadius: '50px 50px 0 0' // Memberikan efek lengkungan di bagian atas
      }}>
        <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '60px' }}>Fitur Utama & Keunggulan</h2>
        
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'space-between',
          gap: '20px'
        }}>
          <HighlightFeature 
            title="Analisis Data-Driven" 
            description="Menggunakan hasil pre-test dan data historis pengerjaan siswa untuk menentukan jalur belajar yang paling sesuai." 
          />
          <HighlightFeature 
            title="Integrated Video Content" 
            description="Menyediakan materi pembelajaran dalam bentuk video berkualitas yang bersumber dari YouTube." 
          />
          <HighlightFeature 
            title="Sistem Rekomendasi Adaptif" 
            description="Secara otomatis menyusun roadmap belajar prasyarat jika siswa terdeteksi belum menguasai konsep dasar." 
          />
          <HighlightFeature 
            title="Evaluasi Performa Longitudinal" 
            description="Memberikan evaluasi yang jujur dan personal berdasarkan perkembangan siswa dari waktu ke waktu." 
          />
          </div>
        </section>

        {/* Section 5: Testimoni */}
        <section style={{ padding: '80px 10%', textAlign: 'center', backgroundColor: '#f8fbff' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '50px', color: '#002d72' }}>Apa Kata Mereka?</h2>
          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
            <TestimonialCard
              quote="AMATI membantu saya memahami konsep aljabar yang sebelumnya sulit. Roadmap belajarnya sangat personal!" 
              name="Jessica" 
              role="Siswa Kelas VII" 
            />
            <TestimonialCard 
              quote="Sangat membantu sebagai bahan ajar tambahan. Video YouTube yang dipilih sangat relevan dengan kurikulum." 
              name="David" 
              role="Guru Matematika" 
            />
            <TestimonialCard 
              quote="Saya bisa memantau perkembangan anak saya secara longitudinal. Evaluasinya sangat jujur." 
              name="Sarah" 
              role="Orang Tua Siswa" 
            />
          </div>
        </section>

        {/* Section 6: Call to Action */}
        <section style={{ 
          display: 'flex', 
          alignItems: 'center', 
          padding: '80px 10%', 
          gap: '50px', 
          flexWrap: 'wrap', 
          backgroundColor: '#e3f2fd' 
        }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ color: '#002d72', fontSize: '2rem' }}>Pahami Prosesnya, Kuasai Hasilnya</h2>
            <p style={{ color: '#555', margin: '20px 0' }}>
              Mari belajar matematika dengan cara yang lebih personal. Platform AMATI tidak hanya memberikan skor, tapi membantu kamu menutup setiap celah kompetensi agar siap lanjut ke materi berikutnya[cite: 21, 28].
            </p>
            <button style={{ padding: '15px 30px', backgroundColor: '#ffcc00', border: 'none', borderRadius: '30px', fontWeight: 'bold' }}>
              Register Now !!
            </button>
          </div>
          <div style={{ flex: '1', minWidth: '300px', textAlign: 'right' }}>
            {/* Placeholder Statis sesuai desain */}
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '15px', display: 'inline-block', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                <h4 style={{ margin: 0, color: '#007bff' }}>99% Satisfaction Score</h4>
                <p style={{ margin: 0, fontSize: '0.8rem' }}>Based on student feedback</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" style={{ backgroundColor: '#001a33', color: '#fff', padding: '60px 10% 20px 10%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px', marginBottom: '40px' }}>
            <div style={{ maxWidth: '300px' }}>
              <h3 style={{ color: '#007bff' }}>AMATI</h3>
              <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Adaptive Mathematics Analysis & Teaching Interactive. Solusi pembelajaran untuk masa depan Indonesia[cite: 6].</p>
            </div>
            <div>
              <h4>Useful Info</h4>
              <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Insights</p>
              <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Support</p>
              <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Privacy Policy</p>
            </div>
            <div>
              <h4>Contact Us</h4>
              <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Email: support@amati.id</p>
              <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Phone: +62 812 3456 789</p>
            </div>
          </div>
          <hr style={{ borderColor: '#222' }} />
          <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#555', marginTop: '20px' }}>
            © 2026 AMATI - All rights reserved.
          </p>
        </footer>

    </div>
  )
}



export default App