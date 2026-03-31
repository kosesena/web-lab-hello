export default function About() {
  return (
    <section id="hakkimda" className="py-16 px-4" aria-labelledby="hakkimda-title">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        <figure className="shrink-0">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-800 to-violet-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
            SK
          </div>
        </figure>
        <div>
          <h2
            id="hakkimda-title"
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left"
          >
            Hakkimda
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Firat Universitesi Yazilim Muhendisligi bolumunde okuyan bir ogrenciyim.
            Web gelistirme, mobil uygulama tasarimi ve yapay zeka alanlarina ilgi duyuyorum.
          </p>
          <ul className="mb-4 space-y-1 text-gray-700 dark:text-gray-300">
            <li>
              <strong className="text-blue-800 dark:text-blue-300">Ogrenci No:</strong> 235542006
            </li>
            <li>
              <strong className="text-blue-800 dark:text-blue-300">Bolum:</strong> Yazilim Muhendisligi
            </li>
            <li>
              <strong className="text-blue-800 dark:text-blue-300">Universite:</strong> Firat Universitesi
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
