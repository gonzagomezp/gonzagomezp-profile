/** @format */

export default function About() {
  return (
    <div className="text-left">
      <div className="text-[60px] mb-8 text-green-300 text-center">
        {'> ABOUT ME'}
      </div>
      
      <div className="space-y-8">
        <div className="bg-green-950 border border-green-600 p-8 rounded-lg">
          <div className="text-[45px] text-green-400 mb-6 text-center">Profile Summary</div>
          <div className="text-[28px] text-green-500 leading-relaxed space-y-4">
            <div>
              Advanced Systems Engineering student and Junior Full-Stack Developer with hands-on experience in <span className="text-green-300">React.js, Python, and TypeScript</span>.
            </div>
            <div>
              Skilled in building scalable web applications with <span className="text-green-300">FastAPI and Next.js</span>. 
              Experienced in database management using <span className="text-green-300">MongoDB, SQL, and Firestore (NoSQL)</span>.
            </div>
            <div>
              Proficient in <span className="text-green-300">REST API development, Docker products</span>, and cloud services 
              (<span className="text-green-300">Google Cloud Platform (GCP) and AWS interaction</span>).
            </div>
            <div>
              Strong problem-solving skills and adaptability to project requirements. Looking for opportunities to contribute to innovative solutions in a dynamic team environment.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-green-950 border border-green-600 p-6 rounded-lg">
            <div className="text-[40px] text-green-400 mb-4">Personal Info</div>
            <div className="text-[30px] text-green-500 space-y-3">
              <div>📍 Location: Argentina</div>
              <div>💼 Status: DevOps Trainee at Epam Systems</div>
              <div>🎓 Student: Systems Engineering</div>
              <div>🌍 Languages: Spanish (Native), English (Advanced)</div>
            </div>
          </div>

          <div className="bg-green-950 border border-green-600 p-6 rounded-lg">
            <div className="text-[40px] text-green-400 mb-4">Soft Strengths</div>
            <div className="text-[30px] text-green-500 space-y-3">
              <div>⚡ Proactivity</div>
              <div>🤝 problem Solving</div>
              <div>🔄 Adaptable</div>
              <div>😌 Calm under pressure</div>
              <div>🎯 Focused</div>
            </div>
          </div>
        </div>

        <div className="bg-green-950 border border-green-600 p-6 rounded-lg">
          <div className="text-[40px] text-green-400 mb-4 text-center">What Drives Me</div>
          <div className="text-[28px] text-green-500 leading-relaxed space-y-4">
            <div>
              I'm passionate about creating efficient, scalable solutions that solve real-world problems. 
              My experience ranges from financial trading to international customer service, 
              giving me a unique perspective on business needs and user experience.
            </div>
            <div>
              Currently completing my Systems Engineering degree while actively working on projects 
              that combine my academic knowledge with practical industry experience. 
              I thrive in environments that challenge me to learn and grow.
            </div>
          </div>
        </div>

        <div className="bg-green-950 border border-green-600 p-6 rounded-lg">
          <div className="text-[40px] text-green-400 mb-4 text-center">Career Goals</div>
          <div className="text-[28px] text-green-500 leading-relaxed text-center space-y-3">
            <div>
              Seeking opportunities to contribute to innovative projects in full-stack development
            </div>
            <div>
              Interested in roles that combine technical challenges with meaningful impact
            </div>
            <div>
              Open to remote work and international collaboration
            </div>
          </div>
        </div>

        <div className="text-center text-[35px] text-green-300 mt-8">
          {'> READY TO BUILD THE FUTURE TOGETHER'}
        </div>
      </div>
    </div>
  );
}
