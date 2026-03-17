<p align="center">
  <h1 align="center">Web Tasarımı ve Programlama</h1>
  <p align="center">Fırat Üniversitesi — Yazılım Mühendisliği</p>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white" alt="Vite" />
</p>

---

## Geliştirici

| Bilgi | Detay |
|-------|-------|
| **Ad Soyad** | Sena Köse |
| **Öğrenci No** | 235542006 |
| **Bölüm** | Yazılım Mühendisliği |
| **Üniversite** | Fırat Üniversitesi |

---

## Kurulum ve Çalıştırma

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcıda [http://localhost:5173](http://localhost:5173) adresini aç.

---

## LAB Ödevleri

### LAB-1: Proje Kurulumu ve Kişiselleştirme

> **Branch:** `feature/personalize-ui`

**Konu:** Vite + React + TypeScript ile proje oluşturma, Git iş akışı, GitHub'a yükleme

**Yapılanlar:**
- Vite + React + TypeScript projesi oluşturuldu
- Kişisel bilgiler (ad, öğrenci no, bölüm, üniversite) eklendi
- Gradient arka plan ve kart tasarımı ile stillendirme yapıldı
- Git iş akışı: branch oluşturma, commit, merge, push

---

### LAB-2: Semantik HTML5 ve Erişilebilirlik

> **Branch:** `feature/semantic-portfolio`

**Konu:** Semantik HTML5 yapısı, web erişilebilirliği (a11y), erişilebilir form tasarımı

**Yapılanlar:**
- **Semantik HTML5:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` etiketleri
- **Erişilebilirlik:** `lang="tr"`, skip navigation bağlantısı, ARIA öznitelikleri
- **Erişilebilir Form:** `<label>`, `required`, `aria-required`, `role="alert"` ile doğrulama
- **Portfolyo Bölümleri:** Hakkımda, Projeler, İletişim (formlu)
- Odak görünürlüğü (`:focus-visible` stilleri)

---

## Proje Yapısı

```
web-lab-hello/
├── public/              # Statik dosyalar
├── src/
│   ├── App.tsx          # Ana bileşen
│   ├── App.css          # Bileşen stilleri
│   ├── main.tsx         # Uygulama giriş noktası
│   └── index.css        # Global stiller
├── index.html           # HTML giriş dosyası (lang="tr")
├── package.json         # Proje bağımlılıkları
├── tsconfig.json        # TypeScript ayarları
└── vite.config.ts       # Vite yapılandırması
```

---

<p align="center">
  <sub>Fırat Üniversitesi — Yazılım Mühendisliği — 2025</sub>
</p>
