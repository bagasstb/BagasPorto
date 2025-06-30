import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "iOS Engineer",
      company: "TIX.ID",
      location: "Jakarta, Indonesia",
      period: "2022 - Present",
      description: [
        "Develop and maintain TIX.ID iOS app using Swift and modern iOS frameworks",
        "Collaborate with design and product teams to implement user-friendly interfaces",
        "Develop TIX Food feature from scratch until release to production",
        "Conduct code reviews to ensure code quality and best practices",
        "Work with cross-functional teams to deliver high-quality mobile experiences"
      ]
    },
    {
      title: "iOS Engineer",
      company: "Sekolahmu",
      location: "Jakarta, Indonesia",
      period: "2020 - 2022",
      description: [
        "Develop and maintain TIX.ID iOS app using Swift and modern iOS frameworks",
        "Collaborate with design and product teams to implement user-friendly interfaces",
        "Develop TIX Food feature from scratch until release to production",
        "Conduct code reviews to ensure code quality and best practices",
        "Work with cross-functional teams to deliver high-quality mobile experiences"
      ]
    },
    {
      title: "iOS Engineer",
      company: "Reka Cipta Digital",
      location: "Jakarta, Indonesia",
      period: "2021 - 2022",
      description: [
        "Develop and maintain TIX.ID iOS app using Swift and modern iOS frameworks",
        "Collaborate with design and product teams to implement user-friendly interfaces",
        "Develop TIX Food feature from scratch until release to production",
        "Conduct code reviews to ensure code quality and best practices",
        "Work with cross-functional teams to deliver high-quality mobile experiences"
      ]
    },
    {
      title: "iOS Engineer",
      company: "Inspigo",
      location: "Jakarta, Indonesia",
      period: "2019 - 2021",
      description: [
        "Developed and implemented Inspigo iOS application based on client requirements",
        "Write code with Swift programming language and XIB as the application interface",
        "Manage iOS frameworks such as Alamofire, Kingfisher, etc with Cocoapods",
        "Commit and push code to GitHub",
        "Released application to Testflight and Appstore",
      ]
    },
    {
      title: "iOS Engineer",
      company: "Talariax",
      location: "Jakarta, Indonesia",
      period: "2017 - 2019",
      description: [
        "Develop and maintain TIX.ID iOS app using Swift and modern iOS frameworks",
        "Collaborate with design and product teams to implement user-friendly interfaces",
        "Develop TIX Food feature from scratch until release to production",
        "Conduct code reviews to ensure code quality and best practices",
        "Work with cross-functional teams to deliver high-quality mobile experiences"
      ]
    },
    {
      title: "Android Engineer",
      company: "Arjuna Media Nusantara",
      location: "Jakarta, Indonesia",
      period: "2017 - 2018",
      description: [
        "Develop and maintain TIX.ID iOS app using Swift and modern iOS frameworks",
        "Collaborate with design and product teams to implement user-friendly interfaces",
        "Develop TIX Food feature from scratch until release to production",
        "Conduct code reviews to ensure code quality and best practices",
        "Work with cross-functional teams to deliver high-quality mobile experiences"
      ]
    },
    {
      title: "Software Developer Internship",
      company: "Indonesian Institute of Science (LIPI)",
      location: "Jakarta, Indonesia",
      period: "2017 - 2017",
      description: [
        "Develop and maintain TIX.ID iOS app using Swift and modern iOS frameworks",
        "Collaborate with design and product teams to implement user-friendly interfaces",
        "Develop TIX Food feature from scratch until release to production",
        "Conduct code reviews to ensure code quality and best practices",
        "Work with cross-functional teams to deliver high-quality mobile experiences"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Work Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              My professional journey in iOS development, building innovative
              mobile applications and growing expertise in Apple technologies.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="card p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-primary-600 dark:text-primary-400 mb-2 transition-colors duration-300">
                      <Building className="w-4 h-4 mr-2" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm transition-colors duration-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start transition-colors duration-300">
                      <span className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0 transition-colors duration-300"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience