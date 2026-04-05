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
          title: "Feature",
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
          title: "Improvement",
          items: [
            "Migrate from old project folder to Buildable Folder to solve conflict in .pbxproj file.",
            "Implement Swift Package Manager to modularize the project and eliminate dependency.",
            "Create and initiate Github template."
          ]
        },
        {
          title: "Day to day",
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
          title: "Lead iOS Engineer",
          items: [
            "Manage list of OKR targets for 2022 every quarter",
            "Work closely with the product team to manage the design system",
            "Work closely with the technical writer team to manage app documentation",
            "Help iOS team manage MVP feature and app improvement"
          ]
        },
        {
          title: "iOS Engineer",
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
        "Improved Sistem Informasi Pengadaan (SIPA) at LIPI",
        "Created approval workflow system for procurement processes",
        "Implemented PDF download and document printing features",
        "Developed complex form input functionality for data entry"
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
      <section id="experience" className="py-24 relative z-10 border-t border-white/5 bg-background/30 backdrop-blur-md">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Work Experience
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                My professional journey in iOS development, building innovative
                mobile applications and growing expertise in Apple technologies.
              </p>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="glass-card p-8 lg:p-10 hover:scale-[1.01] transition-transform duration-500 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {exp.company}
                      </h3>
                      <div className="flex items-center text-primary-400 mb-3">
                        <Laptop className="w-5 h-5 mr-2" />
                        <span className="font-semibold tracking-wide">{exp.title}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-medium shadow-sm backdrop-blur-sm">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {exp.sections ? (
                    <div className="space-y-8">
                      {exp.sections.map((section, sectionIdx) => (
                        <div key={sectionIdx}>
                          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 opacity-80">
                            {section.title}
                          </h4>
                          <ul className="space-y-3">
                            {section.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="text-gray-400 font-light text-[15px] leading-relaxed flex items-start">
                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-4 flex-shrink-0 shadow-[0_0_8px_rgba(20,184,166,0.6)]"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-3">
                      {exp.description?.map((item, idx) => (
                        <li key={idx} className="text-gray-400 font-light text-[15px] leading-relaxed flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-4 flex-shrink-0 shadow-[0_0_8px_rgba(20,184,166,0.6)]"></span>
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

      <section id="projects" className="py-24 relative z-10">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Projects
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                Freelance and project-based work, delivering custom solutions
                for various clients and organizations.
              </p>
            </div>

            <div className="space-y-8">
              {projects.map((exp, index) => (
                <div key={index} className="glass-card p-8 lg:p-10 hover:scale-[1.01] transition-transform duration-500 animate-fade-in-up">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {exp.company}
                      </h3>
                      <div className="flex items-center text-primary-400 mb-3">
                        <Laptop className="w-5 h-5 mr-2" />
                        <span className="font-semibold tracking-wide">{exp.title}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-medium shadow-sm backdrop-blur-sm">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.description?.map((item, idx) => {
                      if (item.startsWith('Link:')) {
                        const link = item.replace('Link: ', '');
                        return (
                          <li key={idx} className="text-primary-400 font-light text-[15px] leading-relaxed flex items-center mt-4">
                            <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                              {link}
                            </a>
                          </li>
                        )
                      }
                      return (
                      <li key={idx} className="text-gray-400 font-light text-[15px] leading-relaxed flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-4 flex-shrink-0 shadow-[0_0_8px_rgba(20,184,166,0.6)]"></span>
                        {item}
                      </li>
                      )
                    })}
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