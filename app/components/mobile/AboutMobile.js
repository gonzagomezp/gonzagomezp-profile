/** @format */

export default function AboutMobile() {
  return (
    <div className="px-4 py-6 bg-gray-900">
      <div className="text-2xl font-bold mb-6 text-center text-gray-100">
        About Me
      </div>
      
      <div className="space-y-4">
        <div className="rounded-xl p-4 shadow-lg bg-gray-800">
          <div className="text-lg font-semibold text-gray-100 mb-3">Profile Summary</div>
          <div className="text-sm text-gray-300 leading-relaxed space-y-2">
            <div>
              Advanced Systems Engineering student and Junior Full-Stack Developer with hands-on experience in React.js, Python, and TypeScript.
            </div>
            <div>
              Skilled in building scalable web applications with FastAPI and Next.js. Experienced in database management using MongoDB, SQL, and Firestore.
            </div>
            <div>
              Proficient in REST API development, Docker, and cloud services (GCP and AWS).
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
            <div className="text-lg font-semibold text-gray-100 mb-3">Personal Info</div>
            <div className="text-sm text-gray-300 space-y-2">
              <div>📍 Location: Argentina</div>
              <div>💼 Status: DevOps Trainee at Epam Systems</div>
              <div>🎓 Student: Systems Engineering</div>
              <div>🌍 Languages: Spanish (Native), English (Advanced)</div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
            <div className="text-lg font-semibold text-gray-100 mb-3">Key Strengths</div>
            <div className="text-sm text-gray-300 space-y-2">
              <div>⚡ Proactive</div>
              <div>🤝 Problem Solving</div>
              <div>🔄 Adaptable</div>
              <div>😌 Calm under pressure</div>
              <div>🎯 Focused</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl p-4 text-white shadow-lg bg-blue-700">
          <div className="text-lg font-semibold mb-3 text-center">Career Goals</div>
          <div className="text-sm leading-relaxed text-center space-y-2">
            <div>Seeking opportunities in full-stack development</div>
            <div>Open to remote work and international collaboration</div>
          </div>
        </div>
      </div>
    </div>
  );
}
