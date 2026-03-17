import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error')
      return
    }
    setFormStatus('success')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      <header role="banner">
        <h1>Sena Kose</h1>
        <p className="subtitle">Yazilim Muhendisligi Ogrencisi</p>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content" role="main">
        <section id="hakkimda" aria-labelledby="hakkimda-title">
          <h2 id="hakkimda-title">Hakkimda</h2>
          <p>
            Firat Universitesi Yazilim Muhendisligi bolumunde okuyan bir ogrenciyim.
            Web gelistirme, mobil uygulama tasarimi ve yapay zeka alanlarina ilgi duyuyorum.
          </p>
          <ul className="info-list">
            <li><strong>Ogrenci No:</strong> 235542006</li>
            <li><strong>Bolum:</strong> Yazilim Muhendisligi</li>
            <li><strong>Universite:</strong> Firat Universitesi</li>
          </ul>
        </section>

        <section id="projeler" aria-labelledby="projeler-title">
          <h2 id="projeler-title">Projeler</h2>
          <div className="projects-grid">
            <article className="project-card" aria-labelledby="project-1-title">
              <h3 id="project-1-title">Petify</h3>
              <p>Yapay zeka destekli evcil hayvan bakim platformu. SwiftUI ve React ile gelistirildi.</p>
              <span className="tech-tag">React</span>
              <span className="tech-tag">SwiftUI</span>
              <span className="tech-tag">Firebase</span>
            </article>
            <article className="project-card" aria-labelledby="project-2-title">
              <h3 id="project-2-title">Web Lab Hello</h3>
              <p>Web Tasarimi ve Programlama dersi kapsaminda olusturulan portfolyo sayfasi.</p>
              <span className="tech-tag">React</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">Vite</span>
            </article>
          </div>
        </section>

        <section id="iletisim" aria-labelledby="iletisim-title">
          <h2 id="iletisim-title">Iletisim</h2>

          {formStatus === 'success' && (
            <div role="alert" className="form-alert success">
              Mesajiniz basariyla gonderildi!
            </div>
          )}
          {formStatus === 'error' && (
            <div role="alert" className="form-alert error">
              Lutfen tum alanlari doldurun.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate aria-label="Iletisim formu">
            <div className="form-group">
              <label htmlFor="name">Ad Soyad <span aria-hidden="true">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                required
                aria-required="true"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Adinizi girin"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-posta <span aria-hidden="true">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                required
                aria-required="true"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="ornek@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mesaj <span aria-hidden="true">*</span></label>
              <textarea
                id="message"
                name="message"
                required
                aria-required="true"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mesajinizi yazin"
              />
            </div>
            <button type="submit">Gonder</button>
          </form>
        </section>
      </main>

      <footer role="contentinfo">
        <p>&copy; 2025 Sena Kose | Firat Universitesi - Yazilim Muhendisligi</p>
        <p>Web Tasarimi ve Programlama - LAB 2</p>
      </footer>
    </>
  )
}

export default App
