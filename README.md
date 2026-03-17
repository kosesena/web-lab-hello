<div align="center">

<br />
<br />

<img src="https://img.shields.io/badge/%E2%80%8B-Web%20Tasar%C4%B1m%C4%B1%20ve%20Programlama-0d1117?style=for-the-badge&labelColor=0d1117" />

<br />
<br />

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://readme-typing-svg.demolab.com?font=Inter&weight=300&size=16&duration=4000&pause=1000&color=8B949E&center=true&vCenter=true&width=435&lines=Ki%C5%9Fisel+Portf%C3%B6y+%26+UI+Kit+Projesi" />
  <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=300&size=16&duration=4000&pause=1000&color=57606A&center=true&vCenter=true&width=435&lines=Ki%C5%9Fisel+Portf%C3%B6y+%26+UI+Kit+Projesi" />
</picture>

<br />
<br />

<a href="https://web-lab-hello-rq1d.vercel.app">
  <img src="https://img.shields.io/badge/Canl%C4%B1%20Site-0d1117?style=flat-square&logo=vercel&logoColor=white" height="28" />
</a>
&nbsp;&nbsp;
<img src="https://img.shields.io/badge/React_19-0d1117?style=flat-square&logo=react&logoColor=58C4DC" height="28" />
&nbsp;&nbsp;
<img src="https://img.shields.io/badge/TypeScript_5-0d1117?style=flat-square&logo=typescript&logoColor=3178C6" height="28" />
&nbsp;&nbsp;
<img src="https://img.shields.io/badge/Tailwind_4-0d1117?style=flat-square&logo=tailwindcss&logoColor=06B6D4" height="28" />
&nbsp;&nbsp;
<img src="https://img.shields.io/badge/Vite_8-0d1117?style=flat-square&logo=vite&logoColor=646CFF" height="28" />

<br />
<br />

</div>

<br />

<table align="center">
<tr><td align="right"><strong>Geliştirici</strong></td><td>Sena Köse</td></tr>
<tr><td align="right"><strong>Öğrenci No</strong></td><td>235542006</td></tr>
<tr><td align="right"><strong>Bölüm</strong></td><td>Yazılım Mühendisliği</td></tr>
<tr><td align="right"><strong>Üniversite</strong></td><td>Fırat Üniversitesi</td></tr>
</table>

<br />

<div align="center">
<sub>◈</sub>
</div>

<br />

### Başlangıç

```bash
npm install && npm run dev
```

> Canlı site: **[web-lab-hello-rq1d.vercel.app](https://web-lab-hello-rq1d.vercel.app)**

<br />

### Hakkında

Web Tasarımı ve Programlama dersi kapsamında her hafta eklenen laboratuvar ödevlerinin birikimli olarak geliştirildiği kişisel portföy ve UI bileşen kütüphanesidir.

```
LAB-1 ─── Temel Kurulum
  └── LAB-2 ─── Semantik HTML + Erişilebilirlik
        └── LAB-3 ─── CSS Değişkenleri + Flexbox/Grid + Responsive
              └── LAB-4 ─── Tailwind CSS + Component Kütüphanesi + Dark Mode
```

<br />

<div align="center">
<sub>◈</sub>
</div>

<br />

### LAB Geçmişi

<details>
<summary>&nbsp;<code>01</code>&nbsp;&nbsp;Proje Kurulumu ve Kişiselleştirme</summary>

<br />

> `feature/personalize-ui`

| | |
|:--|:--|
| Araçlar | Vite · React · TypeScript |
| İş Akışı | Git branch → commit → merge → push |
| Tasarım | Gradient arka plan, kart düzeni |

</details>

<details>
<summary>&nbsp;<code>02</code>&nbsp;&nbsp;Semantik HTML5 ve Erişilebilirlik</summary>

<br />

> `feature/semantic-portfolio`

| | |
|:--|:--|
| Semantik Yapı | `header` · `nav` · `main` · `section` · `article` · `footer` |
| Erişilebilirlik | `lang="tr"` · skip link · ARIA öznitelikleri |
| Form | `label` · `required` · `aria-required` · `role="alert"` |

</details>

<details>
<summary>&nbsp;<code>03</code>&nbsp;&nbsp;Modern CSS ve Responsive Layout</summary>

<br />

> `feature/responsive-layout`

| | |
|:--|:--|
| Design Tokens | `:root` CSS değişkenleri |
| Fluid Typography | `clamp()` ile akıcı font boyutları |
| Layout | Flexbox + CSS Grid |
| Responsive | Mobil → Tablet (640px) → Masaüstü (1024px) |

</details>

<details open>
<summary>&nbsp;<code>04</code>&nbsp;&nbsp;Tailwind CSS ve Component Yaklaşımı</summary>

<br />

> `feature/tailwind-ui-kit`

| | |
|:--|:--|
| Tailwind CSS v4 | Vite plugin · `@theme` ile özel tema |
| Bileşen Kütüphanesi | Button · Input · Card · Alert |
| Dark Mode | `dark:` prefix · toggle ile tema geçişi |
| Responsive | `sm:` · `md:` · `lg:` ile mobile-first |
| UI Kit | 8+ bileşen varyantı |

<br />

| Bileşen | Varyantlar |
|:--------|:-----------|
| **Button** | `primary` · `secondary` · `danger` · `ghost` — `sm` · `md` · `lg` |
| **Input** | Normal · Hatalı · Yardım metni · Devre dışı |
| **Card** | `elevated` · `outlined` · `filled` |
| **Alert** | `info` · `success` · `warning` · `error` · kapatılabilir |

</details>

<br />

<div align="center">
<sub>◈</sub>
</div>

<br />

### Dosya Yapısı

```
src/
├── components/
│   ├── Alert.tsx              4 renk varyantı
│   ├── Button.tsx             4 renk × 3 boyut
│   ├── Card.tsx               3 stil varyantı
│   └── Input.tsx              4 durum
│
├── styles/
│   └── tokens.css             Design tokens
│
├── App.tsx                    Ana bileşen + Portföy + UI Kit
├── App.css                    Saf CSS stilleri
├── index.css                  Tailwind import + @theme
└── main.tsx                   Giriş noktası
```

<br />

### Teknolojiler

| Katman | Teknoloji | Sürüm |
|:-------|:----------|------:|
| Framework | React | 19 |
| Dil | TypeScript | 5 |
| Stil | Tailwind CSS | 4 |
| Build | Vite | 8 |
| Versiyon | Git + GitHub | — |
| Deploy | Vercel | — |

<br />

---

<div align="center">
<br />

<sub>Fırat Üniversitesi · Yazılım Mühendisliği · 2026</sub>

<br />
<br />
</div>
