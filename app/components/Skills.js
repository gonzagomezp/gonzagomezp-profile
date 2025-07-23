/** @format */

export default function Skills() {
  return (
    <div className="text-left">
      <div className="text-[60px] mb-8 text-green-300 text-center">
        {'> TECHNICAL SKILLS'}
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-green-950 border border-green-600 p-6 rounded-lg">
          <div className="text-[45px] text-green-400 mb-4">Frontend</div>
          <div className="text-[30px] text-green-500 space-y-2">
            <div>• React.js / Next.js ████████████ 90%</div>
            <div>• TypeScript ███████████░ 85%</div>
            <div>• HTML / CSS ████████████ 95%</div>
            <div>• Tailwind CSS ████████████ 90%</div>
            <div>• Three.js █░░░░░░░░░░ 5%</div>
          </div>
        </div>

        <div className="bg-green-950 border border-green-600 p-6 rounded-lg">
          <div className="text-[45px] text-green-400 mb-4">Backend</div>
          <div className="text-[30px] text-green-500 space-y-2">
            <div>• Python / FastAPI ████████████ 95%</div>
            <div>• Node.js / Express ███████████░ 85%</div>
            <div>• C++ ██████████░░ 80%</div>
            <div>• Golang ████████░░░░ 70%</div>
            <div>• REST APIs ████████████ 90%</div>
          </div>
        </div>

        <div className="bg-green-950 border border-green-600 p-6 rounded-lg">
          <div className="text-[45px] text-green-400 mb-4">Database</div>
          <div className="text-[30px] text-green-500 space-y-2">
            <div>• MongoDB ████████████ 90%</div>
            <div>• SQL ███████████░ 85%</div>
            <div>• Firestore (NoSQL) ████████████ 90%</div>
            <div>• Database Design ██████████░░ 80%</div>
          </div>
        </div>

        <div className="bg-green-950 border border-green-600 p-6 rounded-lg">
          <div className="text-[45px] text-green-400 mb-4">Cloud & DevOps</div>
          <div className="text-[30px] text-green-500 space-y-2">
            <div>• Google Cloud Platform ████████████ 85%</div>
            <div>• Amazon Web Services ████████░░░░ 75%</div>
            <div>• Docker ███████████░ 85%</div>
            <div>• Git / GitHub ████████████ 95%</div>
            <div>• CI/CD Pipelines ████████░░░░ 80%</div>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-8">
        <div className="bg-green-950 border border-green-600 p-6 rounded-lg">
          <div className="text-[45px] text-green-400 mb-4 text-center">Education</div>
          <div className="text-[30px] text-green-500 space-y-2">
            <div>🎓 Bachelor's in Systems Engineering</div>
            <div className="ml-8 text-[25px]">Universidad Católica de Córdoba (2021 - July 2025)</div>
            <div>🎓 High School with Intensive English Program</div>
            <div className="ml-8 text-[25px]">Instituto María de Nazareth</div>
          </div>
        </div>

        <div className="bg-green-950 border border-green-600 p-6 rounded-lg">
          <div className="text-[45px] text-green-400 mb-4 text-center">Languages</div>
          <div className="text-[30px] text-green-500 space-y-2 text-center">
            <div>🇬🇧 English - Advanced (B2 - Cambridge First Certificate)</div>
            <div>🇦🇷 Spanish - Native</div>
          </div>
        </div>

        <div className="bg-green-950 border border-green-600 p-6 rounded-lg">
          <div className="text-[45px] text-green-400 mb-4 text-center">Soft Skills</div>
          <div className="text-[30px] text-green-500 space-y-2 text-center">
            <div>• Proactivity • Team Work • Adaptable • Calm • Focused</div>
          </div>
        </div>
      </div>
    </div>
  );
}
