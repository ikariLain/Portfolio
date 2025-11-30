import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaDocker, FaAws, FaPython, FaPhp, FaWordpress,
  FaDatabase
} from "react-icons/fa";

import {
  SiTypescript, SiDotnet, SiMongodb, SiMysql, SiPostgresql,
  SiTailwindcss, SiFlutter, SiSharp,

} from "react-icons/si";

export default function Skills() {

  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: ".NET", icon: <SiDotnet /> },
        { name: "Python", icon: <FaPython /> },
        { name: "PHP", icon: <FaPhp /> },
        { name: "WordPress", icon: <FaWordpress /> },
      ]
    },
    {
  title: "Mobile",
  skills: [
    { name: "Flutter", icon: <SiFlutter /> }
  ]
  },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "AWS", icon: <FaAws /> },
      ]
    },
    {
  title: "Microsoft / .NET",
  skills: [
    { name: "C#", icon: <SiSharp /> },
    { name: ".NET", icon: <SiDotnet /> },
    { name: "ASP.NET MVC", icon: <SiDotnet /> },
    { name: "Entity Framework", icon: <FaDatabase /> }
  ]
}

  ];

  return (
    <section id="Skills" className="w-full px-6 py-20 flex flex-col items-center text-center">

      <h1 className="text-4xl font-bold mb-6 text-white">Skills</h1>
      <p className="text-white/70 max-w-2xl mb-16">
        En översikt över alla tekniker, språk och verktyg jag arbetat med.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full max-w-5xl">

        {categories.map((category, i) => (
          <div key={i}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-md">

            <h2 className="text-xl font-semibold text-white mb-4">
              {category.title}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {category.skills.map((skill, index) => (
                <div key={index}
                  className="flex flex-col items-center justify-center gap-2
                  p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10
                  transition">

                  <div className="text-3xl text-white">{skill.icon}</div>
                  <p className="text-sm text-white/80">{skill.name}</p>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
