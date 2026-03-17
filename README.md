# Web Tasarimi ve Programlama - LAB Odevleri

## Gelistirici
- **Ad Soyad:** Sena Kose
- **Ogrenci No:** 235542006
- **Bolum:** Yazilim Muhendisligi
- **Universite:** Firat Universitesi

## Kullanilan Teknolojiler
- React 19
- TypeScript
- Vite 6

## Kurulum
```bash
npm install
```

## Calistirma
```bash
npm run dev
```
Tarayicida http://localhost:5173 adresini ac.

---

## LAB-1: Proje Kurulumu ve Kisisellesitirme

**Branch:** `feature/personalize-ui`

**Konu:** Vite + React + TypeScript ile proje olusturma, Git workflow, GitHub'a push

**Yapilan Isler:**
- Vite + React + TypeScript projesi olusturuldu
- Kisisel bilgiler (ad, ogrenci no, bolum, universite) eklendi
- Gradient arkaplan ve kart tasarimi ile stillendirme yapildi
- Git workflow: branch olusturma, commit, merge, push

---

## LAB-2: Semantic HTML5 ve Erisilebilirlik

**Branch:** `feature/semantic-portfolio`

**Konu:** Semantic HTML5 yapisi, web erisilebilirligi (a11y), erisilebilir form tasarimi

**Yapilan Isler:**
- **Semantic HTML5:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` etiketleri
- **Erisilebilirlik:** `lang="tr"`, skip navigation linki, ARIA attribute'lari
- **Erisilebilir Form:** `<label>`, `required`, `aria-required`, `role="alert"` ile dogrulama
- **3 Bolum:** Hakkimda, Projeler, Iletisim (formlu)
- Focus gorunurlugu (`:focus-visible` stilleri)

---

## Proje Yapisi
```
web-lab-hello/
├── public/          # Statik dosyalar
├── src/
│   ├── App.tsx      # Ana bilesen
│   ├── App.css      # Bilesen stilleri
│   ├── main.tsx     # Uygulama giris noktasi
│   └── index.css    # Global stiller
├── index.html       # HTML giris dosyasi (lang="tr")
├── package.json     # Proje bagimliliklari
├── tsconfig.json    # TypeScript ayarlari
└── vite.config.ts   # Vite yapilandirmasi
```
