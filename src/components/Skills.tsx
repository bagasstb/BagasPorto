import { SiSwift, SiXcode, SiApple, SiFirebase, SiGithub, SiCocoapods, SiAppstore, SiMapbox, SiApollographql, SiGooglemaps, SiJenkins, SiCircleci } from "react-icons/si";
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
    "CircleCi": <SiCircleci className="w-5 h-5 mr-2 text-white" />,
    "Proxyman": <GiAstronautHelmet className="w-5 h-5 mr-2 text-teal-400" />,
    "Swift": <SiSwift className="w-5 h-5 mr-2 text-orange-500" />,
    "SwiftUI": <SiSwift className="w-5 h-5 mr-2 text-blue-500" />,
    "UIKit": <SiApple className="w-5 h-5 mr-2 text-gray-300" />,
    "Xcode": <SiXcode className="w-5 h-5 mr-2 text-blue-500" />,
    "Core Data": <SiApple className="w-5 h-5 mr-2 text-gray-300" />,
    "Foundation": <SiApple className="w-5 h-5 mr-2 text-gray-300" />,
    "AVFoundation": <SiApple className="w-5 h-5 mr-2 text-gray-300" />,
    "Core Animation": <SiApple className="w-5 h-5 mr-2 text-gray-300" />,
    "Google Maps API": <SiGooglemaps className="w-5 h-5 mr-2 text-green-500" />,
    "Snapkit": <FaSnapchatGhost className="w-5 h-5 mr-2 text-yellow-400" />,
    "Core Location": <SiMapbox className="w-5 h-5 mr-2 text-green-500" />,
    "Git": <SiGithub className="w-5 h-5 mr-2 text-white" />,
    "RESTful APIs": <SiApollographql className="w-5 h-5 mr-2 text-purple-500" />,
    "Firebase": <SiFirebase className="w-5 h-5 mr-2 text-yellow-500" />,
    "TestFlight": <FaFan className="w-5 h-5 mr-2 text-blue-400" />,
    "App Store Connect": <SiAppstore className="w-5 h-5 mr-2 text-blue-500" />,
    "CocoaPods/SPM": <SiCocoapods className="w-5 h-5 mr-2 text-red-500" />,
    "Jenkins": <SiJenkins className="w-5 h-5 mr-2 text-red-500" />,
    "XCTest": <FaCheckCircle className="w-5 h-5 mr-2 text-green-400" />,
    "Swift Testing": <FaCheckCircle className="w-5 h-5 mr-2 text-blue-400" />,
    "In-App Purchase": <SiApple className="w-5 h-5 mr-2 text-gray-300" />,
    "UI Test": <FaRegEye className="w-5 h-5 mr-2 text-indigo-400" />,
    "RxSwift": <GiSnake className="w-5 h-5 mr-2 text-red-400" />,
    "Midtrans": <FaStream className="w-5 h-5 mr-2 text-blue-500" />
  }

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-white/5 bg-background/20 backdrop-blur-sm">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              A comprehensive overview of my iOS development skills and proficiency levels
              across various Apple technologies and frameworks.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="glass-card p-8 lg:p-10 hover:scale-[1.02] transition-transform duration-500 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <h3 className="text-2xl font-bold text-white mb-8 text-center text-opacity-90 tracking-wide">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="flex items-center px-4 py-2 bg-white/5 text-gray-200 text-sm rounded-full font-medium border border-white/10 shadow-sm hover:border-primary-500/50 hover:bg-primary-500/10 hover:text-white transition-all duration-300"
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