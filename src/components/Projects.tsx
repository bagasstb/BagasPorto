import { ExternalLink, Github, Calendar, Code, Database } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "TIX.ID",
      description: "TIX.ID is entertainment application that provides movie and event ticket booking services. It allows users to browse movies, check schedules, book tickets, and manage their bookings. The app also features a user-friendly interface, secure payment options, and personalized recommendations based on user preferences.",
      icon:<img src="https://asset.tix.id/wp-content/uploads/2024/07/7289a31a-b446-44a1-b75d-93c300ee7173.webp" alt="TIXID Logo" className="w-full h-full object-contain rounded-lg shadow" />,
      technologies: ["SwiftUI", "Core Data", "CloudKit", "Combine", "UserNotifications"],
      liveUrl: "https://apps.apple.com/id/app/tix-id/id1362497752",
      date: "2024"
    },
    {
      title: "Inspigo",
      description: "Inspigo is a learning application that provides audio content in the form of inspiring podcasts from professionals and experts in various fields. This content focuses on self-development and career, covering a variety of topics around relevant skills and knowledge. Inspigo aims to provide a flexible and easily accessible learning experience, allowing users to listen to podcasts anytime and anywhere.",
      icon: <img src="https://cdn.inspigo.id/public/meta-image.png" alt="Inspigo Logo" className="w-full h-full object-contain rounded-lg shadow" />,
      technologies: ["UIKit", "XIB", "In-app Purchase", "Cocoapods", "Core Data", "AVKit"],
      liveUrl: "https://apps.apple.com/id/app/inspigo-learning-experience/id1294193080",
      date: "2022"
    },
    {
      title: "Fitness Tracker",
      description: "A health and fitness tracking app that integrates with HealthKit to monitor workouts, steps, and health metrics with beautiful data visualizations.",
      icon: <Database className="w-12 h-12" />,
      technologies: ["SwiftUI", "HealthKit", "Charts", "Core Data", "WatchKit"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023"
    },
    {
      title: "Recipe Finder",
      description: "A recipe discovery app with ingredient-based search, meal planning, and shopping list features. Built with modern iOS architecture patterns.",
      icon: <Code className="w-12 h-12" />,
      technologies: ["SwiftUI", "Combine", "Core Data", "Vision", "Camera"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2024"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Featured iOS Apps
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              A showcase of my recent iOS applications, demonstrating my skills in 
              Swift, SwiftUI, and modern iOS development practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900/30 dark:to-blue-900/30 flex items-center justify-center group-hover:from-primary-200 group-hover:to-blue-200 dark:group-hover:from-primary-800/40 dark:group-hover:to-blue-800/40 transition-all duration-300">
                    <div className="text-primary-600 dark:text-primary-400 transition-colors duration-300">
                      {project.icon}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      App Store
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 font-medium transition-colors duration-200"
                      >
                        <Github size={16} />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects