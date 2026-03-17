import { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import Card from './components/Card'
import Alert from './components/Alert'
import './index.css'

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isDark, setIsDark] = useState(false)

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
        Ana iceriye atla
      </a>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDark}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Sena Kose
          </span>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a href="#hakkimda" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                  Hakkimda
                </a>
              </li>
              <li>
                <a href="#projeler" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                  Projeler
                </a>
              </li>
              <li>
                <a href="#iletisim" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                  Iletisim
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
        {/* Hakkimda */}
        <section id="hakkimda" className="py-16 px-4" aria-labelledby="hakkimda-title">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-800 to-violet-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                SK
              </div>
            </figure>
            <div>
              <h2 id="hakkimda-title" className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                Hakkimda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Firat Universitesi Yazilim Muhendisligi bolumunde okuyan bir ogrenciyim.
                Web gelistirme, mobil uygulama tasarimi ve yapay zeka alanlarina ilgi duyuyorum.
              </p>
              <ul className="mb-4 space-y-1 text-gray-700 dark:text-gray-300">
                <li><strong className="text-blue-800 dark:text-blue-300">Ogrenci No:</strong> 235542006</li>
                <li><strong className="text-blue-800 dark:text-blue-300">Bolum:</strong> Yazilim Muhendisligi</li>
                <li><strong className="text-blue-800 dark:text-blue-300">Universite:</strong> Firat Universitesi</li>
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
            <h2 id="projeler-title" className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card variant="elevated" title="Petify">
                <p>Yapay zeka destekli evcil hayvan bakim platformu. SwiftUI ve React ile gelistirildi.</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="bg-blue-800 text-white px-2 py-0.5 rounded-full text-xs dark:bg-blue-600">React</span>
                  <span className="bg-blue-800 text-white px-2 py-0.5 rounded-full text-xs dark:bg-blue-600">SwiftUI</span>
                  <span className="bg-blue-800 text-white px-2 py-0.5 rounded-full text-xs dark:bg-blue-600">Firebase</span>
                </div>
              </Card>
              <Card variant="outlined" title="Web Lab Hello">
                <p>Web Tasarimi ve Programlama dersi kapsaminda olusturulan portfolyo sayfasi.</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="bg-blue-800 text-white px-2 py-0.5 rounded-full text-xs dark:bg-blue-600">React</span>
                  <span className="bg-blue-800 text-white px-2 py-0.5 rounded-full text-xs dark:bg-blue-600">TypeScript</span>
                  <span className="bg-blue-800 text-white px-2 py-0.5 rounded-full text-xs dark:bg-blue-600">Vite</span>
                </div>
              </Card>
              <Card variant="filled" title="KK Law" footer={<Button size="sm" variant="ghost">Detay</Button>}>
                <p>Hukuk burosu icin tasarlanmis profesyonel web sitesi.</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="bg-blue-800 text-white px-2 py-0.5 rounded-full text-xs dark:bg-blue-600">HTML</span>
                  <span className="bg-blue-800 text-white px-2 py-0.5 rounded-full text-xs dark:bg-blue-600">CSS</span>
                  <span className="bg-blue-800 text-white px-2 py-0.5 rounded-full text-xs dark:bg-blue-600">JavaScript</span>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Iletisim */}
        <section id="iletisim" className="py-16 px-4" aria-labelledby="iletisim-title">
          <div className="max-w-lg mx-auto">
            <h2 id="iletisim-title" className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Iletisim
            </h2>

            {formStatus === 'success' && (
              <Alert variant="success" title="Basarili" dismissible onDismiss={() => setFormStatus('idle')}>
                Mesajiniz basariyla gonderildi!
              </Alert>
            )}
            {formStatus === 'error' && (
              <Alert variant="error" title="Hata" dismissible onDismiss={() => setFormStatus('idle')}>
                Lutfen tum alanlari doldurun.
              </Alert>
            )}

            <form onSubmit={handleSubmit} noValidate aria-label="Iletisim formu" className="space-y-4 mt-4">
              <Input
                id="name"
                label="Ad Soyad"
                required
                aria-required="true"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Adinizi girin"
              />
              <Input
                id="email"
                label="E-posta"
                type="email"
                required
                aria-required="true"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="ornek@email.com"
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
                  placeholder="Mesajinizi yazin"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 transition-colors"
                />
              </div>
              <Button variant="primary" size="lg" type="submit">
                Gonder
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
                Buttons
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Renk varyantlari</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Boyut varyantlari</p>
              <div className="flex flex-wrap items-end gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Disabled durumu</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" disabled>Disabled</Button>
                <Button variant="danger" disabled>Disabled</Button>
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-4 max-w-md">
              <h3 className="text-2xl font-semibold border-b border-gray-300 dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
                Inputs
              </h3>
              <Input id="ui-name" label="Normal Input" placeholder="Bir sey yazin..." />
              <Input id="ui-err" label="Hatali Input" error="Bu alan zorunludur" />
              <Input id="ui-help" label="Help Text" type="email" helpText="E-posta adresinizi girin" />
              <Input id="ui-dis" label="Disabled" disabled value="Duzenlenemez" />
            </div>

            {/* Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold border-b border-gray-300 dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
                Cards
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card variant="elevated" title="Elevated Card">
                  <p>Golge ile yukseltilmis kart.</p>
                </Card>
                <Card variant="outlined" title="Outlined Card">
                  <p>Cerceveli kart.</p>
                </Card>
                <Card variant="filled" title="Filled Card" footer={<Button size="sm">Detay</Button>}>
                  <p>Dolgulu arka plan.</p>
                </Card>
              </div>
            </div>

            {/* Alerts */}
            <div className="space-y-4 max-w-xl">
              <h3 className="text-2xl font-semibold border-b border-gray-300 dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
                Alerts
              </h3>
              <Alert variant="info" title="Bilgi">Bilgilendirme mesaji.</Alert>
              <Alert variant="success" title="Basarili">Islem tamamlandi.</Alert>
              <Alert variant="warning" title="Uyari">Dikkat edilmesi gereken durum.</Alert>
              <Alert variant="error" title="Hata" dismissible onDismiss={() => console.log('kapatildi')}>
                Bir hata olustu.
              </Alert>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; 2025 Sena Kose | Firat Universitesi - Yazilim Muhendisligi</p>
        <p className="mt-1">Web Tasarimi ve Programlama - LAB 4</p>
      </footer>
    </div>
  )
}

export default App
