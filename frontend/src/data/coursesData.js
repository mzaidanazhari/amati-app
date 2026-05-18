// src/data/coursesData.js
export const coursesData = [
  {
    id: 'ch1',
    title: 'Chapter 1',
    name: 'Bilangan Bulat',
    progress: 75,
    status: 'In-Progress',
    subChapters: [
      { id: 'sub1-0', title: 'Sub Chapter 1', name: 'Tujuan Pembelajaran', progress: 0, content: 'Isi materi lengkap Bab 1 bagian B...' },
      { id: 'sub1-1', title: 'Sub Chapter 1', name: 'A. Memahami Bilangan Bulat', progress: 95, 
        topics: [
          { id: 'top1-1-1', name: 'Pengertian Bilangan Bulat', content: 'Isi materi lengkap Pengertian...' },
          { id: 'top1-1-2', name: 'Membandingkan Bilangan Bulat', content: 'Isi materi lengkap Membandingkan...' },
          { id: 'top1-1-3', name: 'Latihan 1.1', content: 'Isi lembar soal Latihan 1.1...' }
        ]
       },
      { id: 'sub1-2', title: 'Sub Chapter 1', name: 'B. Operasi Hitung Bilangan Bulat', progress: 0, 
         topics: [
          { id: 'top1-2-1', name: 'Operasi Penjumlahan dan Pengurangan Bilangan Bulat', content: 'Isi materi lengkap Pengertian...' },
          { id: 'top1-2-2', name: 'Operasi Perkalian dan Pembagian Bilngan bulat', content: 'Isi materi lengkap Membandingkan...' },
          { id: 'top1-2-3', name: 'Latihan 1.2', content: 'Isi lembar soal Latihan 1.1...' }
        ]
       },
      { id: 'sub1-3', title: 'Sub Chapter 1', name: 'C. Faktor Bilangan Bulat', progress: 0, content: 'Isi materi lengkap Bab 1 bagian C...' }
    ]
  },
  {
    id: 'ch2',
    title: 'Chapter 2',
    name: 'Bilangan Rasional',
    progress: 0,
    status: 'Not Started',
    subChapters: [
      { id: 'sub2-0', title: 'Sub Chapter 2', name: 'Tujuan Pembelajaran', progress: 0, content: 'Isi materi lengkap Bab 1 bagian B...' },
      { id: 'sub2-1', title: 'Sub Chapter 2', name: 'A. Di Antara Dua Bilangan Bulat', progress: 0, content: 'Isi materi lengkap Bab 2 bagian A...' },
      { id: 'sub2-2', title: 'Sub Chapter 2', name: 'B. Membandingkan Bilangan Rasional', progress: 0, content: 'Isi materi lengkap Bab 2 bagian B...' },
      { id: 'sub2-3', title: 'Sub Chapter 2', name: 'C. Operasi Hitung Bilangan Rasional', progress: 0, content: 'Isi materi lengkap Bab 2 bagian C...' },
    ]
  },
  {
    id: 'ch3',
    title: 'Chapter 3',
    name: 'Rasio',
    progress: 10,
    status: 'In-Progress',
    subChapters: [
      { id: 'sub3-0', title: 'Sub Chapter 3', name: 'Tujuan Pembelajaran', progress: 0, content: 'Isi materi lengkap Bab 1 bagian B...' },
      { id: 'sub3-1', title: 'Sub Chapter 3', name: 'A. Konsep Rasio', progress: 10, content: 'Isi materi Bab 3 bagian A...' },
      { id: 'sub3-2', title: 'Sub Chapter 3', name: 'B. Skala', progress: 10, content: 'Isi materi Bab 3 bagian B...' },
      { id: 'sub3-3', title: 'Sub Chapter 3', name: 'C. Laju Perubahan Satuan', progress: 10, content: 'Isi materi Bab 3 bagian C...' }
    ]
  },
  {
    id: 'ch4',
    title: 'Chapter 4',
    name: 'Bentuk Aljabar',
    progress: 20,
    status: 'In-Progress',
    subChapters: [
      { id: 'sub4-0', title: 'Sub Chapter 4', name: 'Tujuan Pembelajaran', progress: 0, content: 'Isi materi lengkap Bab 1 bagian B...' },
      { id: 'sub4-1', title: 'Sub Chapter 4', name: 'A. Unsur-unsur Aljabar', progress: 20, content: 'Isi materi Bab 4 bagian A...' },
      { id: 'sub4-2', title: 'Sub Chapter 4', name: 'B. Sifat-Sifat dan Operasi Aljabar', progress: 20, content: 'Isi materi Bab 4 bagian B...' },
      { id: 'sub4-3', title: 'Sub Chapter 4', name: 'C. Pemodelan dengan Bentuk Aljabar', progress: 20, content: 'Isi materi Bab 4 bagian C...' }
    ]
  },
  {
    id: 'ch5',
    title: 'Chapter 5',
    name: 'Kesebangunan',
    progress: 20,
    status: 'In-Progress',
    subChapters: [
      { id: 'sub5-0', title: 'Sub Chapter 5', name: 'Tujuan Pembelajaran', progress: 0, content: 'Isi materi lengkap Bab 1 bagian B...' },
      { id: 'sub5-1', title: 'Sub Chapter 5', name: 'A. Hubungan Antar Sudut', progress: 20, content: 'Isi materi Bab 5 bagian A...' },
      { id: 'sub5-2', title: 'Sub Chapter 5', name: 'B. Arti Kesebangunan', progress: 20, content: 'Isi materi Bab 5 bagian B...' },
      { id: 'sub5-3', title: 'Sub Chapter 5', name: 'C. Kesebangunan pada Segitiga', progress: 20, content: 'Isi materi Bab 5 bagian C...' } 
    ]
  },
  {
    id: 'ch6',
    title: 'Chapter 6',
    name: 'Data Diagram',
    progress: 20,
    status: 'In-Progress',
    subChapters: [
      { id: 'sub6-0', title: 'Sub Chapter 6', name: 'Tujuan Pembelajaran', progress: 0, content: 'Isi materi lengkap Bab 1 bagian B...' },
      { id: 'sub6-1', title: 'Sub Chapter 6', name: 'A. Investigasi Statistika', progress: 20, content: 'Isi materi Bab 6 bagian A...' },
      { id: 'sub6-2', title: 'Sub Chapter 6', name: 'B. Macam-Macam Data', progress: 20, content: 'Isi materi Bab 6 bagian B...' },
      { id: 'sub6-3', title: 'Sub Chapter 6', name: 'C. Diagram dalam Statistika', progress: 20, content: 'Isi materi Bab 6 bagian C...' },
      { id: 'sub6-4', title: 'Sub Chapter 6', name: 'D. Diagram Batang', progress: 20, content: 'Isi materi Bab 6 bagian D...' },
      { id: 'sub6-5', title: 'Sub Chapter 6', name: 'E. Diagram Lingkaran', progress: 20, content: 'Isi materi Bab 6 bagian E...' },
      { id: 'sub6-6', title: 'Sub Chapter 6', name: 'F. Memilih Diagram yang Tepat', progress: 20, content: 'Isi materi Bab 6 bagian F...' },
    ]
  }
];