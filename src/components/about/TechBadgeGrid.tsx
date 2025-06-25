'use client';

import React from 'react';
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiDart,
  SiGo,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFlutter,
  SiFirebase,
  SiSupabase,
  SiMysql,
  SiSqlite,
  SiMongodb,
  SiNeo4J,
  SiHeroku,
  SiVercel,
  SiDocker,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiPostman,
  SiOpencv,
  SiUnity,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiNumpy,
  SiScikitlearn,
  SiScipy,
  SiJirasoftware,
  SiFigma,
  SiLatex,
  SiLinux,
  SiGnubash,
  SiPandas,
  SiPlotly,
  SiApachespark,
  SiApachemaven,
  SiChatbot,
  SiAlpinedotjs,
} from 'react-icons/si';
import { FaJava, FaMicrosoft, FaAws } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';

const techCategories = {
  'Languages & Platforms': [
    { name: 'Python', icon: <SiPython />, color: '#3776AB' },
    { name: 'Java', icon: <FaJava />, color: '#007396' },
    { name: 'C#', icon: <TbBrandCSharp />, color: '#239120' },
    { name: 'Go', icon: <SiGo />, color: '#00ADD8' },
    { name: 'Dart', icon: <SiDart />, color: '#0175C2' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
  ],
  'Frameworks & UI': [
    { name: 'React', icon: <SiReact />, color: '#61DAFB' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
    { name: 'Flutter', icon: <SiFlutter />, color: '#02569B' },
  ],
  'Backend & DevOps': [
    { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
    { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
    { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
    { name: 'Heroku', icon: <SiHeroku />, color: '#430098' },
    { name: 'Vercel', icon: <SiVercel />, color: '#000000' },
  ],
  Databases: [
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'SQLite', icon: <SiSqlite />, color: '#003B57' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'Microsoft SQL Server', icon: <FaMicrosoft />, color: '#CC2927' },
    { name: 'Neo4j', icon: <SiNeo4J />, color: '#008CC1' },
  ],
  'Machine Learning & AI': [
    { name: 'TensorFlow', icon: <SiTensorflow />, color: '#FF6F00' },
    { name: 'PyTorch', icon: <SiPytorch />, color: '#EE4C2C' },
    { name: 'Keras', icon: <SiKeras />, color: '#D00000' },
    { name: 'scikit-learn', icon: <SiScikitlearn />, color: '#F7931E' },
    { name: 'XGBoost', icon: <SiApachespark />, color: '#F77F00' },
    { name: 'NLP: NLTK', icon: <SiChatbot />, color: '#76AADB' },
    { name: 'spaCy', icon: <SiAlpinedotjs />, color: '#4A8DB7' },
    { name: 'Albumentations', icon: <SiAlpinedotjs />, color: '#282C34' },
  ],
  'Data & Viz': [
    { name: 'NumPy', icon: <SiNumpy />, color: '#013243' },
    { name: 'Pandas', icon: <SiPandas />, color: '#150458' },
    { name: 'Matplotlib', icon: <SiPlotly />, color: '#3F4F75' },
    { name: 'Plotly', icon: <SiPlotly />, color: '#3F4F75' },
  ],
  'Tools & Dev Environment': [
    { name: 'Git', icon: <SiGit />, color: '#F05032' },
    { name: 'GitHub', icon: <SiGithub />, color: '#181717' },
    { name: 'Bitbucket', icon: <SiBitbucket />, color: '#0052CC' },
    { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
    { name: 'Jira', icon: <SiJirasoftware />, color: '#0052CC' },
    { name: 'Apache Maven', icon: <SiApachemaven />, color: '#C71A36' },
    { name: 'LaTeX', icon: <SiLatex />, color: '#008080' },
    { name: 'Linux', icon: <SiLinux />, color: '#FCC624' },
    { name: 'Bash', icon: <SiGnubash />, color: '#4EAA25' },
  ],
  'Design & Other': [
    { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
    { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
    { name: 'Supabase', icon: <SiSupabase />, color: '#3ECF8E' },
    { name: 'Unity', icon: <SiUnity />, color: '#000000' },
    { name: 'OpenCV', icon: <SiOpencv />, color: '#5C3EE8' },
  ],
};

function hexToRgba(hex: string, alpha = 0.7) {
  const bigint = parseInt(hex.replace('#', ''), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function TechBadgeGrid() {
  return (
    <div className="flex flex-col gap-14 mt-8">
      {Object.entries(techCategories).map(([category, techs]) => (
        <div key={category}>
          <br></br>
          <h3 className="text-xl font-semibold mb-6">{category}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {techs.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-white text-sm font-medium shadow-sm"
                style={{
                  backgroundColor: hexToRgba(tech.color, 0.6),
                  backdropFilter: 'blur(4px)',
                }}
              >
                <span className="text-lg">{tech.icon}</span>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
