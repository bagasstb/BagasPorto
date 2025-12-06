import { Code, Users, Lightbulb, Target } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, efficient Swift code following best practices"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "Collaborative approach to iOS app development"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Creative solutions to complex mobile development challenges"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "User Focused",
      description: "Focused on delivering intuitive and delightful user experiences"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              Passionate iOS developer with expertise in Swift, SwiftUI, and UIKit,
              committed to creating exceptional mobile experiences for Apple platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="rounded-lg shadow-lg w-full h-96 overflow-hidden">
                <img
                  src="/profile-photo.jpg"
                  alt="Satrio Bagaskoro with team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                As a dedicated iOS developer, I specialize in building native iOS applications
                using Swift and SwiftUI. My experience spans across the entire iOS development
                lifecycle, from concept to App Store deployment.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                I'm passionate about staying up-to-date with the latest iOS technologies,
                Apple's Human Interface Guidelines, and continuously improving my skills
                to deliver high-quality mobile applications.
              </p>
              <a
                href="https://www.linkedin.com/in/satrio-teleng-bagaskoro-077473126"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mb-4 transition-colors duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About