# CSS Kararları

## 1. Breakpoint Seçimi
- **640px** ve **1024px** breakpoint'lerini seçtim çünkü içeriğim bu noktalarda doğal olarak değişiyor: 640px altında navigasyon ve hakkımda bölümü dikey yığılırken, 640px üzerinde yatay düzene geçiyor.
- 1024px üzerinde içerik genişliğini 1200px ile sınırladım ve proje kartlarını 3 sütuna çıkardım; böylece geniş ekranlarda boş alan kalmıyor.

## 2. Layout Tercihleri
- **Header için Flexbox** seçtim çünkü tek boyutlu bir düzen: logo sol, navigasyon sağ. `flex-wrap: wrap` ile mobilde dikey yığılmayı, tablette yatay düzeni sağladım.
- **Proje kartları için CSS Grid** seçtim çünkü iki boyutlu bir ızgara düzeni gerekiyordu. `repeat(auto-fit, minmax(280px, 1fr))` ile media query yazmadan otomatik responsive grid elde ettim.
- **auto-fit** kullandım çünkü boş sütun kaldığında mevcut kartların genişlemesini istedim.

## 3. Design Tokens
- **Renk paleti** olarak koyu mavi (`#1E3A8A`) ana renk seçtim — profesyonel ve güvenilir bir izlenim veriyor. Accent olarak mor (`#7C3AED`) ile görsel çeşitlilik sağladım.
- **Spacing skalası** `0.25rem`'den `4rem`'e kadar 7 kademeli bir sistem oluşturdum (xs, sm, md, lg, xl, 2xl, 3xl). Bu tutarlı boşluk sistemi sayesinde tüm bileşenlerde aynı aralıklar kullanılıyor.
- **Fluid typography** için `clamp()` fonksiyonunu kullandım: `rem + vw` karışımı ile yazı boyutları ekran genişliğine göre akıcı şekilde ölçekleniyor. Minimum değerleri 1rem altına düşürmedim — erişilebilirlik açısından önemli.

## 4. Responsive Stratejiler
- **Mobile-first** yaklaşımı uyguladım: tüm CSS varsayılan olarak mobil (dar ekran) için yazıldı, ardından `min-width` media query'leri ile tablet ve masaüstü düzenleri eklendi.
- Breakpoint'lerde değişen elemanlar: header yönü (column → row), navigasyon yönü (column → row), hakkımda bölümü (column → row), proje grid sütun sayısı (1 → auto-fit → 3), submit butonu genişliği (full → auto).
- Görsel boyutlarını `max-width: 100%` ve `object-fit: cover` ile yönettim; avatar için `aspect-ratio: 1` kullandım.
