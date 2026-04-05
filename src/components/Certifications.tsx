import { Award, Calendar, ExternalLink, FileCheck } from 'lucide-react'

const Certifications = () => {
    const certifications = [
        {
            title: "Belajar Prinsip Pemrograman SOLID",
            issuer: "Dicoding Academy",
            issued: "Sep 2025",
            expires: "Sep 2028",
            credentialId: "RVZKGJ54OXD5",
            credentialUrl: "https://www.dicoding.com/certificates/RVZKGJ54OXD5",
            logo: "/images/dicoding-logo.png"
        },
        {
            title: "Belajar Membuat Aplikasi iOS untuk Pemula",
            issuer: "Dicoding Academy",
            issued: "Aug 2021",
            expires: "Aug 2024",
            credentialId: "ERZR4KYGWZYV",
            credentialUrl: "https://www.dicoding.com/certificates/ERZR4KYGWZYV",
            logo: "/images/dicoding-logo.png"
        },
        {
            title: "Memulai Pemrograman Dengan Swift",
            issuer: "Dicoding Academy",
            issued: "Aug 2021",
            expires: "Aug 2024",
            credentialId: "L4PQ38844PO1",
            credentialUrl: "https://www.dicoding.com/certificates/L4PQ38844PO1",
            logo: "/images/dicoding-logo.png"
        }
    ]

    const handleCredentialClick = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    return (
        <section id="certifications" className="py-24 relative z-10 border-t border-white/5 bg-background/30 backdrop-blur-md">
            <div className="container-max section-padding">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            Licenses & Certifications
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                            Professional certifications and continuous learning achievements that demonstrate my commitment to staying current with industry best practices.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {certifications.map((cert, index) => (
                            <div key={index} className="glass-card p-8 lg:p-10 hover:scale-[1.01] transition-transform duration-500 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="flex flex-col md:flex-row md:items-start mb-4">
                                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mr-6 mb-6 md:mb-0 flex-shrink-0 shadow-xl overflow-hidden p-1 border border-white/10">
                                        <img
                                            src={cert.logo}
                                            alt={`${cert.issuer} logo`}
                                            className="w-full h-full object-contain rounded-xl"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                                const parent = target.parentElement;
                                                if (parent) {
                                                    const icon = document.createElement('div');
                                                    icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary-500"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>';
                                                    parent.appendChild(icon.firstChild!);
                                                }
                                            }}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {cert.title}
                                        </h3>
                                        <div className="flex items-center text-primary-400 mb-4">
                                            <Award className="w-5 h-5 mr-2" />
                                            <span className="font-semibold tracking-wide">{cert.issuer}</span>
                                        </div>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                                            <div className="flex items-center text-gray-400 text-sm bg-white/5 border border-white/5 px-3 py-2 rounded-lg">
                                                <Calendar className="w-4 h-4 mr-2 text-primary-500" />
                                                <span>Issued {cert.issued} · Expires {cert.expires}</span>
                                            </div>
                                            <div className="flex items-center text-gray-400 text-sm bg-white/5 border border-white/5 px-3 py-2 rounded-lg">
                                                <FileCheck className="w-4 h-4 mr-2 text-primary-500" />
                                                <span>ID: {cert.credentialId}</span>
                                            </div>
                                        </div>
                                        
                                        <button
                                            onClick={() => handleCredentialClick(cert.credentialUrl)}
                                            className="inline-flex items-center px-5 py-2.5 border border-white/10 rounded-full text-white font-medium hover:border-primary-500 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-300 group"
                                        >
                                            <span>Show credential</span>
                                            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certifications
