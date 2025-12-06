import { ArrowDown, Github, Linkedin, Mail, Download, Check, CloudRain } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = "Hi, I'm Bagas"
  const [showCursor, setShowCursor] = useState(true)
  const [showSuccess, setShowSuccess] = useState(false)
  const [downloaded, setDownloaded] = useState(false)

  // Typewriter effect
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  // Cursor blink effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => clearInterval(cursorTimer)
  }, [])

  // Handle CV download
  const handleDownload = () => {
    setDownloaded(true)
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
    }, 3000)
    // Reset icon back to download after 2 seconds
    setTimeout(() => {
      setDownloaded(false)
    }, 2000)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-24 right-6 z-50 animate-slide-in-right">
          <div className="bg-green-500 dark:bg-green-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-lg">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Check size={20} />
            </div>
            <div>
              <p className="font-semibold">CV Downloaded!</p>
              <p className="text-sm text-white/90">Thank you for your interest</p>
            </div>
          </div>
        </div>
      )}

      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-gray-50 to-gray-50 dark:from-blue-950/30 dark:via-gray-900 dark:to-gray-900 animate-gradient-shift"></div>

      {/* Realistic Rain Effect - Apple Weather Style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => {
          const left = Math.random() * 100;
          const animationDuration = 0.5 + Math.random() * 0.8; // 0.5-1.3 seconds (faster, more realistic)
          const animationDelay = Math.random() * 5;
          const opacity = 0.3 + Math.random() * 0.4; // 0.3-0.7 opacity
          const length = 15 + Math.random() * 25; // 15-40px length
          const thickness = Math.random() > 0.7 ? 2 : 1; // Mostly 1px, some 2px

          return (
            <div
              key={i}
              className="absolute animate-realistic-rain"
              style={{
                left: `${left}%`,
                top: '-100px',
                width: `${thickness}px`,
                height: `${length}px`,
                background: `linear-gradient(to bottom, 
                  rgba(96, 165, 250, 0) 0%, 
                  rgba(96, 165, 250, ${opacity * 0.4}) 20%,
                  rgba(96, 165, 250, ${opacity}) 100%)`,
                animationDuration: `${animationDuration}s`,
                animationDelay: `${animationDelay}s`,
                filter: 'blur(0.5px)',
              }}
            ></div>
          );
        })}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>

      <div className="container-max section-padding text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile photo with 3D effect */}
          <div className="mb-8 animate-fade-in-up">
            <div className="group w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 overflow-hidden shadow-2xl ring-4 ring-white/50 dark:ring-gray-700/50 transition-all duration-500 hover:scale-110 hover:rotate-3 hover:ring-primary-400/50 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="/BAGAS-05365.jpg"
                alt="Satrio Teleng Bagaskoro"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                style={{
                  objectPosition: '50% 20%'
                }}
              />
            </div>
          </div>

          {/* Typewriter title */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300 animate-fade-in-up animation-delay-200 min-h-[4rem] md:min-h-[5rem]">
            {text}
            <span className={`inline-block w-1 h-12 md:h-16 bg-primary-600 dark:bg-primary-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
          </h1>

          {/* Subtitle with gradient */}
          <div className="relative mb-8 animate-fade-in-up animation-delay-400">
            <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 dark:from-primary-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4 flex items-center justify-center gap-2 flex-wrap">
              <span>iOS Developer</span>
              <span className="text-base md:text-lg flex items-center gap-1">
                from <CloudRain className="text-primary-600 dark:text-primary-400" size={18} /> rain city
              </span>
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Passionate about creating beautiful, intuitive mobile applications
              and delivering exceptional user experiences on Apple platforms
            </p>
          </div>

          {/* Glassmorphism buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-600">
            <a
              href="/satrio-teleng-bagaskoro.pdf"
              download
              onClick={handleDownload}
              className="group relative btn-primary overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2 justify-center text-white">
                {downloaded ? <Check size={20} /> : <Download size={20} />}
                Download CV
              </span>
            </a>
            <a href="#experience" className="group relative btn-secondary overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 bg-primary-600 dark:bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative group-hover:text-white transition-colors duration-300">
                Work Experience
              </span>
            </a>
          </div>

          {/* Social links with hover effects */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up animation-delay-800">
            <a
              href="https://www.linkedin.com/in/satrio-teleng-bagaskoro-077473126"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 text-primary-600 hover:text-white dark:text-primary-400 hover:scale-110 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Linkedin size={24} className="relative z-10" />
            </a>
            <a
              href="https://github.com/bagasstb"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 text-gray-700 hover:text-white dark:text-gray-300 hover:scale-110 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Github size={24} className="relative z-10" />
            </a>
            <a
              href="mailto:satrio.bagaskoro@email.com"
              className="group p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 text-primary-600 hover:text-white dark:text-primary-400 hover:scale-110 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Mail size={24} className="relative z-10" />
            </a>
          </div>

          {/* Scroll indicator */}
          <a
            href="#about"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 animate-bounce-slow animate-fade-in-up animation-delay-1000"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero