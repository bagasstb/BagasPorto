const Skills = () => {
  const skillCategories = [
    {
      title: "iOS Development",
      skills: [
        { name: "Swift", level: 95 },
        { name: "SwiftUI", level: 90 },
        { name: "UIKit", level: 85 },
        { name: "Xcode", level: 90 },
        { name: "Core Data", level: 80 },
        { name: "Combine", level: 75 }
      ]
    },
    {
      title: "Apple Frameworks",
      skills: [
        { name: "Foundation", level: 90 },
        { name: "AVFoundation", level: 75 },
        { name: "Core Animation", level: 80 },
        { name: "MapKit", level: 70 },
        { name: "CloudKit", level: 65 },
        { name: "Core Location", level: 80 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90 },
        { name: "RESTful APIs", level: 85 },
        { name: "Firebase", level: 75 },
        { name: "TestFlight", level: 85 },
        { name: "App Store Connect", level: 80 },
        { name: "CocoaPods/SPM", level: 75 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              A comprehensive overview of my iOS development skills and proficiency levels 
              across various Apple technologies and frameworks.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="card p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium transition-colors duration-300">{skill.name}</span>
                        <span className="text-primary-600 dark:text-primary-400 text-sm font-medium transition-colors duration-300">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 transition-colors duration-300">
                        <div
                          className="bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills