import { Heart, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">
                Satrio Bagaskoro
              </h3>
              <p className="text-gray-400 dark:text-gray-500 mb-4 transition-colors duration-300">
                iOS Developer passionate about creating exceptional mobile experiences 
                and building beautiful, intuitive applications for Apple platforms.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/satrio-teleng-bagaskoro-077473126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-500 hover:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/bagasstb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-500 hover:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:satrio.bagaskoro@email.com"
                  className="text-gray-400 dark:text-gray-500 hover:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors duration-200">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors duration-200">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors duration-200">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors duration-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-gray-400 dark:text-gray-500 transition-colors duration-300">
                <p>Bogor, Indonesia</p>
                <p>bagasstb@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 dark:border-gray-700 pt-8 transition-colors duration-300">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 dark:text-gray-500 text-sm mb-4 md:mb-0 transition-colors duration-300">
                © {currentYear} Satrio Teleng Bagaskoro. All rights reserved.
              </p>
              <p className="text-gray-400 dark:text-gray-500 text-sm flex items-center transition-colors duration-300">
                Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer