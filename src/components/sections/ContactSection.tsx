import ContactForm from '../forms/ContactForm'

export default function ContactSection() {
  return (
    <section id="iletisim" className="py-16 px-4" aria-labelledby="iletisim-title">
      <div className="max-w-lg mx-auto">
        <h2
          id="iletisim-title"
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
        >
          Iletisim
        </h2>
        <ContactForm />
      </div>
    </section>
  )
}
