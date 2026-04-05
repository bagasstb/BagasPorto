import { useState } from 'react'
import { Mail, MapPin, Send, Linkedin, Github } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "bagasstb@gmail.com",
      link: "mailto:bagasstb@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Bogor, Indonesia",
      link: "#"
    }
  ]

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              I'm always open to discussing new iOS projects, interesting app ideas, 
              or just having a chat about mobile development and Apple technologies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in-up animation-delay-200">
              <h3 className="text-signup text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-400 mb-8 font-light leading-relaxed">
                Feel free to reach out if you have any questions, want to collaborate 
                on an iOS project, or just want to say hello. I'll get back to you as soon as possible!
              </p>

              <div className="space-y-6 mb-10">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="flex items-center justify-center w-14 h-14 bg-white/5 border border-white/10 text-primary-400 rounded-2xl mr-5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-500/10">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                      <a
                        href={info.link}
                        className="text-gray-400 font-light hover:text-primary-400 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-5">
                <a
                  href="https://www.linkedin.com/in/satrio-teleng-bagaskoro-077473126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-white/5 border border-white/10 text-gray-300 rounded-2xl hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="https://github.com/bagasstb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-white/5 border border-white/10 text-gray-300 rounded-2xl hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
                >
                  <Github size={22} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-10 animate-fade-in-up animation-delay-400">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-200 outline-none placeholder-gray-600"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-200 outline-none placeholder-gray-600"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-200 outline-none placeholder-gray-600"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-200 outline-none resize-none placeholder-gray-600"
                    placeholder="Tell me about your iOS project or just say hello!"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary justify-center"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact