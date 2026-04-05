import { Code, Users, Lightbulb, Target } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Architecture",
      description: "Writing maintainable, scalable Swift code following industry best practices."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborator",
      description: "Thriving in agile environments and cross-functional teams."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Engineering creative solutions to complex mobile challenges."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "User-Centric",
      description: "Obsessed with delivering pixel-perfect, liquid-smooth UX."
    }
  ]

  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/5 bg-background/20 backdrop-blur-sm">
      <div className="container-max section-padding">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              About Me
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Passionate iOS developer with expertise in Swift, SwiftUI, and UIKit,
              committed to creating exceptional mobile experiences for Apple platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in-up animation-delay-200">
              <div className="glass-card w-full h-[450px] overflow-hidden p-2">
                <img
                  src="/profile-photo.jpg"
                  alt="Satrio Bagaskoro with team"
                  className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            
            <div className="glass-card p-10 animate-fade-in-up animation-delay-400">
              <h3 className="text-2xl font-bold text-white mb-6">
                My Journey
              </h3>
              <div className="space-y-4 text-gray-400 font-light leading-relaxed mb-8">
                <p>
                  As a dedicated iOS developer, I specialize in building native iOS applications
                  using Swift and SwiftUI. My experience spans across the entire iOS development
                  lifecycle, from concept to App Store deployment.
                </p>
                <p>
                  I'm passionate about staying up-to-date with the latest iOS technologies,
                  Apple's Human Interface Guidelines, and continuously improving my skills
                  to deliver high-quality mobile applications.
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/satrio-teleng-bagaskoro-077473126"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View LinkedIn
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up animation-delay-600">
            {highlights.map((item, index) => (
              <div key={index} className="glass-card p-8 group">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/5 text-primary-400 rounded-2xl mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary-500/20">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
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