import { ArrowDown, Github, Linkedin, Mail, Download, Check } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = "Bagas"
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
    }, 150)

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
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-24 right-6 z-50 animate-slide-in-right">
          <div className="glass-card px-6 py-4 flex items-center gap-3 border-green-500/30">
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-500/20 text-green-400">
              <Check size={20} />
            </div>
            <div>
              <p className="font-semibold text-white">CV Downloaded</p>
              <p className="text-sm text-gray-400">Thank you for your interest</p>
            </div>
          </div>
        </div>
      )}

      <div className="container-max section-padding text-center relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Subtle Tagline */}
          <div className="mb-6 animate-fade-in-up">
             <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium tracking-wide text-gray-300 shadow-xl inline-flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
               Available for work
             </span>
          </div>

          {/* Typewriter title */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4 animate-fade-in-up animation-delay-200 min-h-[4.5rem] md:min-h-[7rem] flex items-center justify-center">
            {text}
            <span className={`inline-block w-2 h-16 md:h-24 bg-primary-500 ml-2 rounded-full ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
          </h1>

          {/* Subtitle with gradient */}
          <div className="relative mb-10 animate-fade-in-up animation-delay-400">
            <h2 className="text-2xl md:text-4xl font-semibold gradient-text mb-6 tracking-tight flex items-center justify-center gap-3 flex-wrap">
              iOS Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Crafting premium, intuitive mobile experiences for the Apple ecosystem.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16 animate-fade-in-up animation-delay-600 w-full sm:w-auto">
            <a
              href="/satrio-teleng-bagaskoro.pdf"
              download
              onClick={handleDownload}
              className="btn-primary w-full sm:w-auto"
            >
              {downloaded ? <Check size={20} /> : <Download size={20} />}
              Download Resume
            </a>
            <a href="#projects" className="btn-secondary w-full sm:w-auto">
              View Projects
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center items-center gap-8 mb-16 animate-fade-in-up animation-delay-800">
            <a href="https://www.linkedin.com/in/satrio-teleng-bagaskoro-077473126" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 duration-300">
              <Linkedin size={28} />
            </a>
            <a href="https://github.com/bagasstb" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 duration-300">
              <Github size={28} />
            </a>
            <a href="mailto:satrio.bagaskoro@email.com" className="text-gray-400 hover:text-white transition-colors hover:scale-110 duration-300">
              <Mail size={28} />
            </a>
          </div>

        </div>
      </div>

      {/* Floating scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <a href="#about" className="text-gray-500 hover:text-white transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  )
}

export default Hero