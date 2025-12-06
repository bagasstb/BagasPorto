import { Calendar, MapPin, Laptop } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "iOS Engineer",
      company: "TIX.ID",
      location: "Jakarta, Indonesia",
      period: "Nov 22 - Present",
      sections: [
        {
          title: "Feature:",
          items: [
            "Create share feature including share movie, attractions, events, and movie rating. Share platform including to Instagram story, Instagram Feed, Facebook Story, Facebook Feed, Tiktok Story, X, download share content feature, and share with native iOS share sheet.",
            "Create in-house shortlink feature to replace Firebase Dynamic Link.",
            "Create TIX Fun feature collaborate with Tiket.com.",
            "Create TIX Food feature collaborate with XXI Cafe.",
            "Event Ticketing on mobile app.",
            "New Payment Gateway integrate from DANA PG API. The feature including connect with e-wallet (Gopay, Shopee Pay, DANA, OVO), QRIS, and Virtual Account.",
            "Integrate MoEngage.",
            "Implement Firebase Remote Config."
          ]
        },
        {
          title: "Improvement:",
          items: [
            "Migrate from old project folder to Buildable Folder to solve conflict in .pbxproj file.",
            "Implement Swift Package Manager to modularize the project and eliminate dependency.",
            "Create and initiate Github template."
          ]
        },
        {
          title: "Day to day:",
          items: [
            "Do sprint task from Jira and submit PR to Github.",
            "Writing unit test using Swift Test.",
            "Review PR from iOS squad team and help to review another squad PR if needed. Also deliver the app into QA with Firebase distribution, help iOS lead to prepare app distribution to App Store Connect."
          ]
        }
      ]
    },
    {
      title: "Lead iOS Engineer / iOS Engineer",
      company: "Sekolah.mu",
      location: "Jakarta, Indonesia",
      period: "Jun 2021 - Nov 2022",
      sections: [
        {
          title: "Lead iOS Engineer:",
          items: [
            "Manage list of OKR targets for 2022 every quarter",
            "Work closely with the product team to manage the design system",
            "Work closely with the technical writer team to manage app documentation",
            "Help iOS team manage MVP feature and app improvement"
          ]
        },
        {
          title: "iOS Engineer:",
          items: [
            "Develop and implement Karier.mu iOS App from scratch",
            "Create iOS project architecture such as resource management, reusable component, localization string, data model, and networking based on the module",
            "Build an app with VIPER Design Pattern",
            "Setup environment and app distribution to QA with Testflight and Firebase App Distribution",
            "Write Unit Test, Core Data example to implement later after MVP release",
            "Conduct an interview with the candidate"
          ]
        }
      ]
    },
    {
      title: "iOS Engineer",
      company: "Inspigo",
      location: "Jakarta, Indonesia",
      period: "Jun 2019 - Jun 2021",
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
      company: "TALARIAX PTE LTD",
      location: "Jakarta, Indonesia",
      period: "Oct 2017 - Jan 2019",
      description: [
        "Design, create and develop the ChrgeOn iOS app from scratch using Google Maps",
        "Tested and refined app",
        "Released app to Beta and Production environment"
      ]
    },
    {
      title: "Software Developer Internship",
      company: "Indonesian Institute of Science (LIPI)",
      location: "Jakarta, Indonesia",
      period: "Feb 2017 - Jul 2017",
      description: [
        "Develop and maintain TIX.ID iOS app using Swift and modern iOS frameworks",
        "Collaborate with design and product teams to implement user-friendly interfaces",
        "Develop TIX Food feature from scratch until release to production",
        "Conduct code reviews to ensure code quality and best practices",
        "Work with cross-functional teams to deliver high-quality mobile experiences"
      ]
    }
  ]

  const projects = [
    {
      title: "iOS Engineer",
      company: "Reka Cipta Digital",
      location: "Jakarta, Indonesia",
      period: "Aug 2021 - Jun 2022",
      description: [
        "Develop the Jalan Kita application from scratch until publish to Appstore",
        "Implement worker tracking feature with Google Maps polylines",
        "Using VIPER as a design pattern",
        "Link: https://apps.apple.com/id/app/jalan-kita-2-0/id1600748345"
      ]
    },
    {
      title: "Android Engineer",
      company: "Arjuna Media Nusantara",
      location: "Jakarta, Indonesia",
      period: "Aug 2017 - Aug 2018",
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
    <>
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
                        {exp.company}
                      </h3>
                      <div className="flex items-center text-primary-600 dark:text-primary-400 mb-2 transition-colors duration-300">
                        <Laptop className="w-4 h-4 mr-2" />
                        <span className="font-medium">{exp.title}</span>
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

                  {exp.sections ? (
                    <div className="space-y-6">
                      {exp.sections.map((section, sectionIdx) => (
                        <div key={sectionIdx}>
                          <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-3 transition-colors duration-300">
                            {section.title}
                          </h4>
                          <ul className="space-y-2">
                            {section.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="text-gray-600 dark:text-gray-300 flex items-start transition-colors duration-300">
                                <span className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0 transition-colors duration-300"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {exp.description?.map((item, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start transition-colors duration-300">
                          <span className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0 transition-colors duration-300"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                Project
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
                Freelance and project-based work, delivering custom solutions
                for various clients and organizations.
              </p>
            </div>

            <div className="space-y-8">
              {projects.map((exp, index) => (
                <div key={index} className="card p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                        {exp.company}
                      </h3>
                      <div className="flex items-center text-primary-600 dark:text-primary-400 mb-2 transition-colors duration-300">
                        <Laptop className="w-4 h-4 mr-2" />
                        <span className="font-medium">{exp.title}</span>
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
                    {exp.description?.map((item, idx) => (
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
    </>
  )
}

export default Experience