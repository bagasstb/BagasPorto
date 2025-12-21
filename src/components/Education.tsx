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
        <section id="education" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="container-max section-padding">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                            Education
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
                            My academic background and educational achievements that laid the foundation for my career in technology.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {educations.map((edu, index) => (
                            <div key={index} className="card p-8">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                    <div className="flex items-start mb-4 md:mb-0">
                                        <div className="w-16 h-16 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center mr-4 flex-shrink-0 shadow-md transition-colors duration-300">
                                            <img
                                                src={edu.logo}
                                                alt={`${edu.institution} logo`}
                                                className="w-12 h-12 object-contain"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.style.display = 'none';
                                                    const parent = target.parentElement;
                                                    if (parent) {
                                                        const icon = document.createElement('div');
                                                        icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary-600 dark:text-primary-400"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>';
                                                        parent.appendChild(icon.firstChild!);
                                                    }
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                                                {edu.institution}
                                            </h3>
                                            <div className="flex items-center text-primary-600 dark:text-primary-400 mb-2 transition-colors duration-300">
                                                <GraduationCap className="w-4 h-4 mr-2" />
                                                <span className="font-medium">{edu.degree}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm transition-colors duration-300">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        <span>{edu.period}</span>
                                    </div>
                                </div>

                                <div className="flex items-center text-gray-700 dark:text-gray-300 mt-4 transition-colors duration-300">
                                    <Award className="w-4 h-4 mr-2 text-primary-600 dark:text-primary-400" />
                                    <span className="font-medium">Grade: {edu.grade}</span>
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
