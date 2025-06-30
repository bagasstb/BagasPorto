import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-16 transition-colors duration-300">
      <div className="container-max section-padding text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 overflow-hidden shadow-xl ring-4 ring-white/50 dark:ring-gray-700/50 transition-transform duration-300 hover:scale-105">
              <img
                src="/BAGAS-05365.jpg"
                alt="Satrio Teleng Bagaskoro"
                className="w-full h-full object-cover object-top"
                style={{
                  objectPosition: '50% 20%'
                }}
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Hi, I'm <span className="gradient-text">Bagas</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto transition-colors duration-300">
            iOS Developer passionate about creating beautiful, intuitive mobile applications 
            and delivering exceptional user experiences on Apple platforms
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#contact" className="btn-primary">
              <Mail size={20} />
              Get In Touch
            </a>
            <a href="#projects" className="btn-secondary">
              View My Apps
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://www.linkedin.com/in/satrio-teleng-bagaskoro-077473126"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/bagasstb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:satrio.bagaskoro@email.com"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <a
            href="#about"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 animate-bounce"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero