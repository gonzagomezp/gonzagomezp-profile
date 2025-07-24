/** @format */

export default function SkillsMobile() {
  const skills = [
    { category: 'Frontend', items: [
      { name: 'React.js / Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'HTML / CSS', level: 95 },
      { name: 'Tailwind CSS', level: 90 }
    ]},
    { category: 'Backend', items: [
      { name: 'Python / FastAPI', level: 95 },
      { name: 'Node.js / Express', level: 85 },
      { name: 'C++', level: 80 },
      { name: 'REST APIs', level: 90 }
    ]},
    { category: 'Database', items: [
      { name: 'MongoDB', level: 90 },
      { name: 'SQL', level: 85 },
      { name: 'Firestore', level: 90 }
    ]},
    { category: 'Cloud & DevOps', items: [
      { name: 'GCP', level: 85 },
      { name: 'AWS', level: 75 },
      { name: 'Docker', level: 85 },
      { name: 'Git / GitHub', level: 95 }
    ]}
  ];

  return (
    <div className="px-4 py-6 bg-gray-900">
      <div className="text-2xl font-bold mb-6 text-center text-gray-100">
        Technical Skills
      </div>
      
      <div className="space-y-4">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="bg-gray-800 rounded-xl p-4 shadow-lg">
            <div className="text-lg font-semibold text-blue-400 mb-3">{skillGroup.category}</div>
            <div className="space-y-3">
              {skillGroup.items.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-200">{skill.name}</span>
                    <span className="text-xs text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
