/** @format */

export default function ContactMobile() {
  return (
    <div className="px-4 py-6 bg-gray-900">
      <div className="text-2xl font-bold mb-6 text-center text-gray-100">
        Contact Information
      </div>
      
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl p-4 text-white text-center shadow-lg">
          <div className="text-lg font-semibold mb-3">Get In Touch</div>
          <div className="text-sm space-y-2">
            <div>📧 gonzalogomezpizarro@gmail.com</div>
            <div>📱 +54 351 2546510</div>
            <div>📍 Argentina</div>
            <div>💼 Remote Contractor</div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-4 shadow-lg ">
          <div className="text-lg font-semibold text-gray-100 mb-3">Professional Links</div>
          <div className="space-y-3">
            <a 
              href="https://www.linkedin.com/in/gonzagomezp/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-blue-900 rounded-lg hover:bg-blue-800 transition-colors"
            >
              <span className="text-sm text-blue-300">🔗 LinkedIn Profile</span>
              <span className="text-xs text-blue-400">→</span>
            </a>
            <a 
              href="https://github.com/gonzagomezp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <span className="text-sm text-gray-200">💻 GitHub Profile</span>
              <span className="text-xs text-gray-400">→</span>
            </a>
            <a 
              href="mailto:gonzalogomezpizarro@gmail.com"
              className="flex items-center justify-between p-3 bg-green-900 rounded-lg hover:bg-green-800 transition-colors"
            >
              <span className="text-sm text-green-300">📧 Send Email</span>
              <span className="text-xs text-green-400">→</span>
            </a>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-4 shadow-lg ">
          <div className="text-lg font-semibold text-gray-100 mb-3">Availability</div>
          <div className="text-sm text-gray-300 space-y-2">
            <div>✅ Open to opportunities</div>
            <div>🌍 Remote work preferred</div>
            <div>🕒 GMT-3 Timezone (Argentina)</div>
            <div>💼 Full-time/Contract/Freelance</div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-4 shadow-lg ">
          <div className="text-lg font-semibold text-gray-100 mb-3">About Me</div>
          <div className="text-sm text-gray-300 leading-relaxed mb-3">
            Advanced Systems Engineering student passionate about full-stack development. 
            Strong problem-solving skills and adaptability to project requirements. 
            Looking for opportunities to contribute to innovative solutions.
          </div>
          <div className="text-center">
            <span className="inline-block px-3 py-1 bg-blue-900 text-blue-300 text-sm rounded-full">
              Ready for new challenges
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
