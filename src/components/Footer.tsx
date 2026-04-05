import { Heart, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-white/5 text-white py-12 relative z-10">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">
                Satrio Bagaskoro
              </h3>
              <p className="text-gray-400 mb-6 font-light leading-relaxed">
                iOS Developer passionate about creating exceptional mobile experiences 
                and building beautiful, intuitive applications for Apple platforms.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/satrio-teleng-bagaskoro-077473126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-white/5 border border-white/10 text-gray-400 rounded-full hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300 "
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com/bagasstb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-white/5 border border-white/10 text-gray-400 rounded-full hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  <Github size={18} />
                </a>
                <a
                  href="mailto:satrio.bagaskoro@email.com"
                  className="flex items-center justify-center w-10 h-10 bg-white/5 border border-white/10 text-gray-400 rounded-full hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white tracking-wide">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-gray-400 font-light hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-gray-400 font-light hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 font-light hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 font-light hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 font-light hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white tracking-wide">Get In Touch</h4>
              <div className="space-y-3 text-gray-400 font-light">
                <p>Bogor, Indonesia</p>
                <p>bagasstb@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0 font-light">
                © {currentYear} Satrio Teleng Bagaskoro. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm flex items-center font-light">
                Made with <Heart className="w-4 h-4 mx-1.5 text-primary-500 animate-pulse" /> using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer