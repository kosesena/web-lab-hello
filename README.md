<p align="center">
  <h1 align="center">Web Tasarımı ve Programlama</h1>
  <p align="center">Fırat Üniversitesi — Yazılım Mühendisliği</p>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
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

### LAB-3: Modern CSS ve Responsive Layout

> **Branch:** `feature/responsive-layout`

**Konu:** CSS değişkenleri (design tokens), fluid typography, Flexbox, CSS Grid, mobile-first responsive tasarım

**Yapılanlar:**
- **Design Tokens:** `:root` içinde renk, boşluk, radius, tipografi, gölge ve geçiş değişkenleri
- **Fluid Typography:** `clamp()` ile akıcı font boyutları (rem + vw karışımı)
- **Flexbox:** Header ve navigasyon çubuğu, beceri etiketleri (skill-tags) toolbar
- **CSS Grid:** `repeat(auto-fit, minmax(280px, 1fr))` ile responsive proje kartları ızgarası
- **Mobile-First:** 3 breakpoint (mobil < 640px, tablet 640px+, masaüstü 1024px+)
- **CSS Kararları Notu:** Tasarım tercihlerinin belgelenmesi

---

### LAB-4: Tailwind CSS ve Component Yaklaşımı

> **Branch:** `feature/tailwind-ui-kit`

**Konu:** Tailwind CSS v4 entegrasyonu, utility-first CSS, component yaklaşımı, dark mode, UI Kit

**Yapılanlar:**
- **Tailwind CSS v4:** Vite plugin entegrasyonu, `@theme` ile özel renk/font tanımlama
- **Component Kütüphanesi:** Button (4 renk × 3 boyut), Input (normal/hata/help/disabled), Card (elevated/outlined/filled), Alert (info/success/warning/error)
- **Dark Mode:** `dark:` prefix ile karanlık tema, toggle butonu
- **Responsive Prefix:** `sm:`, `md:`, `lg:` ile mobile-first responsive tasarım
- **UI Kit Sayfası:** 8+ component varyantını tek sayfada sergileyen bölüm
- **Portföy Taşıma:** Saf CSS'ten Tailwind utility class'larına geçiş

---

## Proje Yapısı

```
web-lab-hello/
├── public/              # Statik dosyalar
├── src/
│   ├── components/
│   │   ├── Alert.tsx    # Alert bileşeni (4 varyant)
│   │   ├── Button.tsx   # Button bileşeni (4 renk × 3 boyut)
│   │   ├── Card.tsx     # Card bileşeni (3 varyant)
│   │   └── Input.tsx    # Input bileşeni (4 durum)
│   ├── styles/
│   │   └── tokens.css   # Design tokens (LAB-3)
│   ├── App.tsx          # Ana bileşen + UI Kit
│   ├── App.css          # Eski CSS (LAB-3)
│   ├── main.tsx         # Uygulama giriş noktası
│   └── index.css        # Tailwind import + @theme
├── CSS-KARARLARI.md     # CSS tasarım kararları notu
├── index.html           # HTML giriş dosyası (lang="tr")
├── package.json         # Proje bağımlılıkları
├── tsconfig.json        # TypeScript ayarları
└── vite.config.ts       # Vite + Tailwind yapılandırması
```

---

<p align="center">
  <sub>Fırat Üniversitesi — Yazılım Mühendisliği — 2025</sub>
</p>
