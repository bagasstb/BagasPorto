import { GraduationCap, Calendar, Award } from 'lucide-react'

const Education = () => {
    const educations = [
        {
            institution: "BINUS University",
            degree: "Bachelor's degree, Information System",
            period: "2018 - 2020",
            grade: "3,59",
            logo: "/images/binus-logo.jpg"
        },
        {
            institution: "IPB University",
            degree: "High School Diploma, Management Information Systems, General",
            period: "2014 - 2017",
            grade: "3,48",
            logo: "/images/ipb-logo.png"
        }
    ]

    return (
        <section id="education" className="py-24 relative z-10 border-t border-white/5 bg-background/20 backdrop-blur-sm">
            <div className="container-max section-padding">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            Education
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                            My academic background and educational achievements that laid the foundation for my career in technology.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {educations.map((edu, index) => (
                            <div key={index} className="glass-card p-8 lg:p-10 hover:scale-[1.01] transition-transform duration-500 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                                    <div className="flex items-start mb-4 md:mb-0">
                                        <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mr-5 flex-shrink-0 shadow-xl overflow-hidden p-1 border border-white/10">
                                            <img
                                                src={edu.logo}
                                                alt={`${edu.institution} logo`}
                                                className="w-full h-full object-contain"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.style.display = 'none';
                                                    const parent = target.parentElement;
                                                    if (parent) {
                                                        const icon = document.createElement('div');
                                                        icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary-500"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>';
                                                        parent.appendChild(icon.firstChild!);
                                                    }
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                {edu.institution}
                                            </h3>
                                            <div className="flex items-center text-primary-400 mb-2">
                                                <GraduationCap className="w-5 h-5 mr-2" />
                                                <span className="font-semibold tracking-wide">{edu.degree}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-gray-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-medium shadow-sm backdrop-blur-sm mt-2 md:mt-0">
                                        <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                                        <span>{edu.period}</span>
                                    </div>
                                </div>

                                <div className="flex items-center text-gray-300 font-medium pl-[84px] md:pl-[84px]">
                                    <Award className="w-5 h-5 mr-3 text-primary-500 drop-shadow-[0_0_8px_rgba(20,184,166,0.6)]" />
                                    <span>Grade: {edu.grade}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education
