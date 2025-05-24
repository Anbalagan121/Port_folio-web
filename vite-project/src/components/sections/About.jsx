// src/components/About.jsx
import RevealOnScroll from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = ["React", "TailwindCSS", "JavaScript", "CSS", "HTML"];
    const backendSkills = ["Python", "Django", "MongoDB", "AWS", "MySQL"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Passionate developer with expertise in building scalable web applications and creating innovative solutions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-green-500/10 text-green-400 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>MCA in Computer Application</strong> – Bharathidasan University (2024–2026)
                                </li>
                                <li>
                                    Relevant Coursework: Data Structures, Web Development, Cloud Computing
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Technical Experience</h3>
                            <div className="space-y-6 text-gray-300">
                                <div>
                                    <h4 className="font-semibold text-lg">ShopKart – E-Commerce Website</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li><strong>Stack:</strong> Python, Django, MySQL, HTML, CSS, Bootstrap 5</li>
                                        <li>Developed a full-stack e-commerce website with category-wise product listing.</li>
                                        <li>Implemented user login, cart management, and admin product control panel.</li>
                                        <li>Designed a responsive UI using Bootstrap 5.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
