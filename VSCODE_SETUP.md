# Panduan Menjalankan di VS Code

Dokumen ini menjelaskan cara menjalankan portfolio website ini di Visual Studio Code.

## Prasyarat

Pastikan Anda sudah menginstall:
- **Node.js** (versi 16 atau lebih tinggi) - [Download di sini](https://nodejs.org/)
- **Visual Studio Code** - [Download di sini](https://code.visualstudio.com/)
- **Git** (opsional, untuk clone repository)

## Langkah-Langkah

### 1. Download/Clone Proyek

**Jika menggunakan Git:**
```bash
git clone https://github.com/ayuuudevani/portfolio-website.git
cd portfolio-website
```

**Jika download ZIP:**
- Download ZIP dari GitHub
- Extract ke folder pilihan Anda
- Buka folder tersebut

### 2. Buka Proyek di VS Code

Ada beberapa cara:

**Cara 1: Dari Terminal/Command Prompt**
```bash
cd portfolio-website
code .
```

**Cara 2: Dari VS Code**
- Buka VS Code
- Klik **File** > **Open Folder**
- Pilih folder `portfolio-website`
- Klik **Select Folder**

### 3. Install Ekstensi VS Code (Direkomendasikan)

Setelah membuka proyek, VS Code akan menampilkan notifikasi di pojok kanan bawah yang menanyakan apakah Anda ingin menginstall ekstensi yang direkomendasikan.

**Klik "Install All"** atau install manual dari Extensions panel (Ctrl+Shift+X):

1. **ESLint** - Mendeteksi dan memperbaiki masalah pada kode JavaScript
2. **Prettier** - Memformat kode secara otomatis
3. **Tailwind CSS IntelliSense** - Autocomplete untuk class Tailwind CSS
4. **ES7+ React/Redux/React-Native snippets** - Shortcut untuk kode React
5. **Auto Rename Tag** - Rename tag HTML/JSX secara otomatis
6. **Path Intellisense** - Autocomplete untuk path file

### 4. Install Dependencies

Buka terminal di VS Code (tekan `` Ctrl+` `` atau `Cmd+` di Mac), lalu jalankan:

```bash
npm install
```

Tunggu hingga proses selesai. Ini akan menginstall semua package yang dibutuhkan.

### 5. Jalankan Development Server

Ada 3 cara untuk menjalankan development server:

#### Cara 1: Menggunakan Terminal (Paling Mudah) ⭐

1. Tekan `` Ctrl+` `` (atau `Cmd+` di Mac) untuk membuka terminal
2. Ketik dan jalankan:
   ```bash
   npm run dev
   ```
3. Tunggu beberapa detik hingga muncul pesan seperti:
   ```
   VITE v5.0.8  ready in 500 ms
   
   ➜  Local:   http://localhost:3000/
   ➜  Network: use --host to expose
   ➜  press h to show help
   ```
4. Buka browser dan kunjungi: **http://localhost:3000**
5. Website Anda sekarang berjalan!

**Tips:** Setiap kali Anda menyimpan file, website akan otomatis reload (Hot Module Replacement).

#### Cara 2: Menggunakan Build Task

1. Tekan `Ctrl+Shift+B` (atau `Cmd+Shift+B` di Mac)
2. Pilih **"npm: dev"** dari menu
3. Development server akan berjalan di terminal
4. Buka browser dan kunjungi: **http://localhost:3000**

#### Cara 3: Menggunakan Debug Mode

1. Tekan `F5` atau
2. Klik ikon **Run and Debug** di sidebar kiri (atau tekan `Ctrl+Shift+D`)
3. Pilih **"Launch Chrome against localhost"** atau **"Launch Edge against localhost"**
4. Browser akan otomatis terbuka dengan debugging aktif
5. Anda bisa set breakpoint dan debug kode JavaScript/React Anda

### 6. Membuat Perubahan

Sekarang Anda bisa mulai mengedit kode:

1. **Informasi Personal:** Edit `src/components/sections/Hero.jsx`
2. **Tentang Saya:** Edit `src/components/sections/About.jsx`
3. **Skills:** Edit `src/data/skills.js`
4. **Projects:** Edit `src/data/projects.js`
5. **Kontak:** Edit `src/components/sections/Contact.jsx`

Setiap perubahan akan langsung terlihat di browser tanpa perlu reload manual!

### 7. Menghentikan Development Server

Untuk menghentikan server:
- Tekan `Ctrl+C` di terminal
- Atau tutup terminal

## Tips & Tricks VS Code

### Shortcut Berguna

- `` Ctrl+` `` - Buka/tutup terminal
- `Ctrl+P` - Quick open file
- `Ctrl+Shift+P` - Command palette
- `Ctrl+B` - Toggle sidebar
- `Ctrl+/` - Toggle comment
- `Alt+Up/Down` - Pindah baris
- `Shift+Alt+Up/Down` - Duplikat baris
- `Ctrl+D` - Select next occurrence
- `F2` - Rename symbol

### Tasks yang Tersedia

Tekan `Ctrl+Shift+P` dan ketik "Tasks: Run Task" untuk melihat tasks:

- **npm: dev** - Jalankan development server
- **npm: build** - Build untuk production
- **npm: preview** - Preview hasil build
- **npm: lint** - Check kode dengan ESLint

### Fitur VS Code yang Berguna

1. **IntelliSense** - Autocomplete otomatis saat mengetik
2. **Format on Save** - Kode otomatis diformat saat save (sudah dikonfigurasi)
3. **ESLint Auto Fix** - Error ESLint otomatis diperbaiki saat save
4. **Tailwind CSS Autocomplete** - Suggestion class Tailwind saat mengetik
5. **Emmet** - Shortcut untuk HTML/JSX (contoh: `div.container>ul>li*3` lalu Tab)

## Build untuk Production

Ketika siap untuk deploy:

```bash
npm run build
```

File hasil build akan ada di folder `dist/`. Upload folder ini ke hosting Anda.

## Troubleshooting

### Port 3000 sudah digunakan

Jika muncul error port sudah digunakan:
- Tutup aplikasi lain yang menggunakan port tersebut
- Atau edit `vite.config.js` untuk mengubah port

### Module not found

Jika ada error module tidak ditemukan:
```bash
rm -rf node_modules
npm install
```

### Perubahan tidak terlihat

- Hard refresh browser: `Ctrl+Shift+R` atau `Cmd+Shift+R`
- Atau clear cache browser

### ESLint error

Jalankan:
```bash
npm run lint
```
untuk melihat semua error dan perbaiki sesuai petunjuk.

## Dukungan

Jika ada pertanyaan atau masalah:
- Buka issue di GitHub
- Atau hubungi: ayudevani@example.com

---

Selamat coding! 🚀✨
