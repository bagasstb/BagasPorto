import { SiSwift, SiXcode, SiApple, SiFirebase, SiGithub, SiCocoapods, SiAppstore, SiMapbox, SiTestinglibrary, SiApollographql, SiGooglemaps, SiJenkins, SiCircleci } from "react-icons/si";
import { FaCheckCircle, FaSnapchatGhost, FaRegEye, FaStream, FaFan } from "react-icons/fa";
import { GiSnake, GiAstronautHelmet } from "react-icons/gi";

const Skills = () => {
  const skillCategories = [
    {
      title: "iOS Development",
      skills: [
        { name: "Swift" },
        { name: "SwiftUI" },
        { name: "UIKit" },
        { name: "Xcode" },
        { name: "Core Data" },
        { name: "XCTest" },
        { name: "Swift Testing" },
        { name: "UI Test" }
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "Foundation" },
        { name: "AVFoundation" },
        { name: "Core Animation" },
        { name: "In-App Purchase" },
        { name: "Google Maps API" },
        { name: "Snapkit" },
        { name: "Core Location" },
        { name: "Midtrans" },
        { name: "RxSwift" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git" },
        { name: "RESTful APIs" },
        { name: "Firebase" },
        { name: "TestFlight" },
        { name: "App Store Connect" },
        { name: "CocoaPods/SPM" },
        { name: "Jenkins" },
        { name: "Proxyman" },
        { name: "CircleCi" }
      ]
    }
  ]

  const skillIconMap: { [key: string]: JSX.Element | undefined } = {
    "CircleCi": <SiCircleci className="w-5 h-5 mr-2 text-black dark:text-white" />, 
    "Proxyman": <GiAstronautHelmet className="w-5 h-5 mr-2 text-teal-500" />, 
    "Swift": <SiSwift className="w-5 h-5 mr-2 text-orange-500" />,
    "SwiftUI": <SiSwift className="w-5 h-5 mr-2 text-blue-500" />,
    "UIKit": <SiApple className="w-5 h-5 mr-2 text-gray-700 dark:text-gray-300" />,
    "Xcode": <SiXcode className="w-5 h-5 mr-2 text-blue-700" />,
    "Core Data": <SiApple className="w-5 h-5 mr-2 text-gray-700 dark:text-gray-300" />,
    "Foundation": <SiApple className="w-5 h-5 mr-2 text-gray-700 dark:text-gray-300" />,
    "AVFoundation": <SiApple className="w-5 h-5 mr-2 text-gray-700 dark:text-gray-300" />,
    "Core Animation": <SiApple className="w-5 h-5 mr-2 text-gray-700 dark:text-gray-300" />,
    "Google Maps API": <SiGooglemaps className="w-5 h-5 mr-2 text-green-600" />,
    "Snapkit": <FaSnapchatGhost className="w-5 h-5 mr-2 text-yellow-500" />,
    "Core Location": <SiMapbox className="w-5 h-5 mr-2 text-green-600" />,
    "Git": <SiGithub className="w-5 h-5 mr-2 text-black dark:text-white" />,
    "RESTful APIs": <SiApollographql className="w-5 h-5 mr-2 text-purple-600" />,
    "Firebase": <SiFirebase className="w-5 h-5 mr-2 text-yellow-500" />,
    "TestFlight": <FaFan className="w-5 h-5 mr-2 text-blue-400" />, 
    "App Store Connect": <SiAppstore className="w-5 h-5 mr-2 text-blue-600" />,
    "CocoaPods/SPM": <SiCocoapods className="w-5 h-5 mr-2 text-red-500" />,
    "Jenkins": <SiJenkins className="w-5 h-5 mr-2 text-red-600" />,
    "XCTest": <FaCheckCircle className="w-5 h-5 mr-2 text-green-500" />,
    "Swift Testing": <FaCheckCircle className="w-5 h-5 mr-2 text-blue-500" />,
    "In-App Purchase": <SiApple className="w-5 h-5 mr-2 text-gray-700 dark:text-gray-300" />,
    "UI Test": <FaRegEye className="w-5 h-5 mr-2 text-indigo-500" />,
    "RxSwift": <GiSnake className="w-5 h-5 mr-2 text-red-500" />,
    "Midtrans": <FaStream className="w-5 h-5 mr-2 text-blue-600" />
  }

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
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="flex items-center px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium transition-colors duration-300 border border-primary-200 dark:border-primary-800"
                    >
                      {skillIconMap[skill.name] ?? null}
                      {skill.name}
                    </span>
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