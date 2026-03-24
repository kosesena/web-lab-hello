import { useState, useEffect } from 'react'
import type { Project, Category, SortField, SortOrder } from './types/project'
import { fetchProjects } from './services/projectService'
import { applyFilters } from './utils/projectHelpers'
import Button from './components/Button'
import Input from './components/Input'
import Card from './components/Card'
import Alert from './components/Alert'
import './index.css'

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isDark, setIsDark] = useState(false)

  // --- PROJE STATE ---
  const [projects, setProjects] = useState<Project[]>([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<Category | 'all'>('all')
  const [sortField, setSortField] = useState<SortField>('year')
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc')
  const [loading, setLoading] = useState(true)
  const [fetchError, setFetchError] = useState<string | null>(null)

  // --- VERİ ÇEKME ---
  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        setFetchError(null)
        const data = await fetchProjects()
        setProjects(data)
      } catch (err) {
        setFetchError(
          err instanceof Error ? err.message : 'Bilinmeyen hata'
        )
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  // --- TÜRETİLMİŞ VERİ ---
  const filtered = applyFilters(projects, search, category, sortField, sortOrder)
  const categories: (Category | 'all')[] = ['all', 'frontend', 'fullstack', 'backend']

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error')
      return
    }
    setFormStatus('success')
    setFormData({ name: '', email: '', message: '' })
  }

  const toggleDark = () => {
    document.documentElement.classList.toggle('dark')
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50"
      >
        Ana içeriğe atla
      </a>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDark}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Sena Köse
          </span>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a href="#hakkimda" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                  Hakkımda
                </a>
              </li>
              <li>
                <a href="#projeler" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                  Projeler
                </a>
              </li>
              <li>
                <a href="#iletisim" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                  İletişim
                </a>
              </li>
              <li>
                <a href="#ui-kit" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                  UI Kit
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main id="main-content" role="main">
        {/* Hakkımda */}
        <section id="hakkimda" className="py-16 px-4" aria-labelledby="hakkimda-title">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-800 to-violet-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                SK
              </div>
            </figure>
            <div>
              <h2 id="hakkimda-title" className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                Hakkımda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Fırat Üniversitesi Yazılım Mühendisliği bölümünde okuyan bir öğrenciyim.
                Web geliştirme, mobil uygulama tasarımı ve yapay zekâ alanlarına ilgi duyuyorum.
              </p>
              <ul className="mb-4 space-y-1 text-gray-700 dark:text-gray-300">
                <li><strong className="text-blue-800 dark:text-blue-300">Öğrenci No:</strong> 235542006</li>
                <li><strong className="text-blue-800 dark:text-blue-300">Bölüm:</strong> Yazılım Mühendisliği</li>
                <li><strong className="text-blue-800 dark:text-blue-300">Üniversite:</strong> Fırat Üniversitesi</li>
              </ul>
              <ul className="flex flex-wrap gap-2" role="list" aria-label="Beceri etiketleri">
                {['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Swift', 'Tailwind', 'Git'].map((skill) => (
                  <li key={skill} className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium dark:bg-blue-600">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Projeler */}
        <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900" aria-labelledby="projeler-title">
          <div className="max-w-6xl mx-auto">
            <h2 id="projeler-title" className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Projelerim
            </h2>

            {/* HATA DURUMU */}
            {fetchError && (
              <Alert variant="error" title="Hata" dismissible onDismiss={() => setFetchError(null)}>
                {fetchError}
              </Alert>
            )}

            {/* FİLTRELER */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 mt-4">
              <div className="flex-1">
                <Input
                  id="project-search"
                  placeholder="Proje veya teknoloji ara..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className="flex gap-2 flex-wrap">
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant={category === cat ? 'primary' : 'ghost'}
                    size="sm"
                    onClick={() => setCategory(cat)}
                  >
                    {cat === 'all' ? 'Tümü' : cat}
                  </Button>
                ))}
              </div>

              <div className="flex gap-2 items-center">
                <select
                  value={sortField}
                  onChange={(e) => setSortField(e.target.value as SortField)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Sıralama alanı"
                >
                  <option value="year">Yıl</option>
                  <option value="title">Başlık</option>
                </select>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSortOrder((o) => (o === 'asc' ? 'desc' : 'asc'))}
                  aria-label="Sıralama yönünü değiştir"
                >
                  {sortOrder === 'asc' ? '↑ Artan' : '↓ Azalan'}
                </Button>
              </div>
            </div>

            {/* YÜKLENİYOR */}
            {loading && (
              <p className="text-center text-gray-500 dark:text-gray-400 py-8">
                Projeler yükleniyor...
              </p>
            )}

            {/* SONUÇ YOK */}
            {!loading && filtered.length === 0 && !fetchError && (
              <p className="text-center text-gray-500 dark:text-gray-400 py-8">
                Eşleşen proje bulunamadı.
              </p>
            )}

            {/* PROJE LİSTESİ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <Card
                  key={project.id}
                  variant="elevated"
                  title={project.title}
                  footer={
                    project.sourceUrl ? (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 dark:text-blue-400 text-sm font-medium hover:underline"
                      >
                        GitHub'da Gör →
                      </a>
                    ) : undefined
                  }
                >
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    {project.year} &middot; {project.category}
                    {project.featured && (
                      <span className="ml-2 text-amber-500 font-medium">★ Öne çıkan</span>
                    )}
                  </p>
                </Card>
              ))}
            </div>

            {/* SONUÇ SAYISI */}
            {!loading && projects.length > 0 && (
              <p className="text-sm text-gray-400 text-center mt-6">
                {filtered.length} / {projects.length} proje gösteriliyor
              </p>
            )}
          </div>
        </section>

        {/* İletişim */}
        <section id="iletisim" className="py-16 px-4" aria-labelledby="iletisim-title">
          <div className="max-w-lg mx-auto">
            <h2 id="iletisim-title" className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              İletişim
            </h2>

            {formStatus === 'success' && (
              <Alert variant="success" title="Başarılı" dismissible onDismiss={() => setFormStatus('idle')}>
                Mesajınız başarıyla gönderildi!
              </Alert>
            )}
            {formStatus === 'error' && (
              <Alert variant="error" title="Hata" dismissible onDismiss={() => setFormStatus('idle')}>
                Lütfen tüm alanları doldurun.
              </Alert>
            )}

            <form onSubmit={handleSubmit} noValidate aria-label="İletişim formu" className="space-y-4 mt-4">
              <Input
                id="name"
                label="Ad Soyad"
                required
                aria-required="true"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Adınızı girin"
              />
              <Input
                id="email"
                label="E-posta"
                type="email"
                required
                aria-required="true"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="örnek@email.com"
              />
              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  required
                  aria-required="true"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mesajınızı yazın"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 transition-colors"
                />
              </div>
              <Button variant="primary" size="lg" type="submit">
                Gönder
              </Button>
            </form>
          </div>
        </section>

        {/* UI Kit */}
        <section id="ui-kit" className="py-16 px-4 bg-gray-50 dark:bg-gray-900" aria-labelledby="uikit-title">
          <div className="max-w-6xl mx-auto space-y-12">
            <h2 id="uikit-title" className="text-3xl font-bold text-center text-gray-900 dark:text-white">
              UI Kit
            </h2>

            {/* Buttons */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold border-b border-gray-300 dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
                Butonlar
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Renk varyantları</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Boyut varyantları</p>
              <div className="flex flex-wrap items-end gap-3">
                <Button size="sm">Küçük</Button>
                <Button size="md">Orta</Button>
                <Button size="lg">Büyük</Button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Devre dışı durumu</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" disabled>Devre Dışı</Button>
                <Button variant="danger" disabled>Devre Dışı</Button>
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-4 max-w-md">
              <h3 className="text-2xl font-semibold border-b border-gray-300 dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
                Giriş Alanları
              </h3>
              <Input id="ui-name" label="Normal Giriş" placeholder="Bir şey yazın..." />
              <Input id="ui-err" label="Hatalı Giriş" error="Bu alan zorunludur" />
              <Input id="ui-help" label="Yardım Metni" type="email" helpText="E-posta adresinizi girin" />
              <Input id="ui-dis" label="Devre Dışı" disabled value="Düzenlenemez" />
            </div>

            {/* Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold border-b border-gray-300 dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
                Kartlar
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card variant="elevated" title="Yükseltilmiş Kart">
                  <p>Gölge ile yükseltilmiş kart.</p>
                </Card>
                <Card variant="outlined" title="Çerçeveli Kart">
                  <p>Kenarlık ile çerçeveli kart.</p>
                </Card>
                <Card variant="filled" title="Dolgulu Kart" footer={<Button size="sm">Detay</Button>}>
                  <p>Dolgulu arka planlı kart.</p>
                </Card>
              </div>
            </div>

            {/* Alerts */}
            <div className="space-y-4 max-w-xl">
              <h3 className="text-2xl font-semibold border-b border-gray-300 dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
                Uyarılar
              </h3>
              <Alert variant="info" title="Bilgi">Bilgilendirme mesajı.</Alert>
              <Alert variant="success" title="Başarılı">İşlem tamamlandı.</Alert>
              <Alert variant="warning" title="Uyarı">Dikkat edilmesi gereken durum.</Alert>
              <Alert variant="error" title="Hata" dismissible onDismiss={() => console.log('kapatıldı')}>
                Bir hata oluştu.
              </Alert>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-700 dark:text-gray-300 text-sm">
        <p>&copy; 2026 Sena Köse | Fırat Üniversitesi — Yazılım Mühendisliği</p>
        <p className="mt-1">Web Tasarımı ve Programlama — LAB 5</p>
      </footer>
    </div>
  )
}

export default App
