const skills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'TypeScript', level: 70 },
  { name: 'Swift', level: 65 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'Git', level: 75 },
]

export default function Skills() {
  return (
    <section
      id="yetenekler"
      className="py-16 px-4 bg-gray-50 dark:bg-gray-900"
      aria-labelledby="yetenekler-title"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="yetenekler-title"
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
        >
          Yetenekler
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map(skill => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${skill.name} ${skill.level}%`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
