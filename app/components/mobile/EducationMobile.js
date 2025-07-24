/** @format */

export default function EducationMobile() {
  return (
    <div className="px-4 py-6">
      <div className="text-2xl font-bold mb-6 text-center text-gray-100">
        Education & Certifications
      </div>
      
      <div className="space-y-4">
        <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
          <div className="text-lg font-semibold text-green-400 mb-2">Bachelor's in Systems Engineering</div>
          <div className="text-sm text-gray-400 mb-3">Universidad Católica de Córdoba • 2021 - December 2025</div>
          <div className="text-sm text-gray-300 space-y-1">
            <div>• Advanced coursework in software development</div>
            <div>• Focus on algorithms and data structures</div>
            <div>• Database management and system architecture</div>
            <div>• Currently completing final thesis project</div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
          <div className="text-lg font-semibold text-green-400 mb-2">High School with Intensive English</div>
          <div className="text-sm text-gray-400 mb-3">Instituto María de Nazareth • Completed</div>
          <div className="text-sm text-gray-300 space-y-1">
            <div>• Intensive English language program</div>
            <div>• Strong foundation in mathematics and sciences</div>
            <div>• Prepared for international academic standards</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl p-4 text-white shadow-lg border border-yellow-700">
          <div className="text-lg font-semibold mb-3 text-center">Language Certifications</div>
          <div className="text-sm text-center space-y-2">
            <div>🏆 Cambridge First Certificate (B2 Level)</div>
            <div>🌍 Advanced English Proficiency</div>
            <div>🇦🇷 Native Spanish Speaker</div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
          <div className="text-lg font-semibold text-green-400 mb-3 text-center">Continuous Learning</div>
          <div className="text-sm text-gray-300 space-y-1 text-center">
            <div>• Self-taught in modern web frameworks</div>
            <div>• Learning cloud technologies and DevOps</div>
            <div>• Staying updated with industry trends</div>
          </div>
        </div>
      </div>
    </div>
  );
}
