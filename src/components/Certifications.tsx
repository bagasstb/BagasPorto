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
        <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container-max section-padding">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                            Licenses & Certifications
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
                            Professional certifications and continuous learning achievements that demonstrate my commitment to staying current with industry best practices.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {certifications.map((cert, index) => (
                            <div key={index} className="card p-8">
                                <div className="flex items-start mb-4">
                                    <div className="w-16 h-16 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center mr-4 flex-shrink-0 shadow-md transition-colors duration-300">
                                        <img
                                            src={cert.logo}
                                            alt={`${cert.issuer} logo`}
                                            className="w-12 h-12 object-contain rounded-full"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                                const parent = target.parentElement;
                                                if (parent) {
                                                    const icon = document.createElement('div');
                                                    icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary-600 dark:text-primary-400"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>';
                                                    parent.appendChild(icon.firstChild!);
                                                }
                                            }}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                                            {cert.title}
                                        </h3>
                                        <div className="flex items-center text-primary-600 dark:text-primary-400 mb-3 transition-colors duration-300">
                                            <Award className="w-4 h-4 mr-2" />
                                            <span className="font-medium">{cert.issuer}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2 transition-colors duration-300">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            <span>Issued {cert.issued} · Expires {cert.expires}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4 transition-colors duration-300">
                                            <FileCheck className="w-4 h-4 mr-2" />
                                            <span>Credential ID {cert.credentialId}</span>
                                        </div>
                                        <button
                                            onClick={() => handleCredentialClick(cert.credentialUrl)}
                                            className="inline-flex items-center px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 font-medium hover:border-primary-600 hover:text-primary-600 dark:hover:border-primary-400 dark:hover:text-primary-400 transition-all duration-300 group"
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
