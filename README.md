# Web LAB-2 - Semantic HTML5 Portfolio

## Hakkinda
Bu proje, Web Tasarimi ve Programlama dersi LAB-2 kapsaminda
semantic HTML5 yapisi, web erisilebilirligi (a11y) ve erisilebilir form tasarimi
konularini uygulamali olarak gostermek icin olusturulmustur.

## Gelistirici
- **Ad Soyad:** Sena Kose
- **Ogrenci No:** 235542006
- **Bolum:** Yazilim Muhendisligi
- **Universite:** Firat Universitesi

## LAB-2 Konulari
- **Semantic HTML5:** header, nav, main, section, article, footer etiketleri
- **Web Erisilebilirligi (a11y):** Skip navigation, ARIA attribute'lari, lang="tr"
- **Erisilebilir Form:** label, required, aria-required, role="alert" ile dogrulama

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

## Proje Yapisi
```
web-lab-hello/
├── public/          # Statik dosyalar
├── src/
│   ├── App.tsx      # Portfolio sayfasi (semantic HTML5)
│   ├── App.css      # Bilesen stilleri
│   ├── main.tsx     # Uygulama giris noktasi
│   └── index.css    # Global stiller
├── index.html       # HTML giris dosyasi (lang="tr")
├── package.json     # Proje bagimliliklari
├── tsconfig.json    # TypeScript ayarlari
└── vite.config.ts   # Vite yapilandirmasi
```

## Erisilebilirlik Ozellikleri
- `lang="tr"` ile Turkce dil tanimlamasi
- Skip navigation linki (Tab ile gorunur)
- ARIA etiketleri: `aria-label`, `aria-labelledby`, `aria-required`, `role="alert"`
- Tum form alanlari `<label>` ile iliskilendirilmis
- Focus gorunurlugu (`:focus-visible` stilleri)
