/** @format */

import { useState } from "react";

export default function ContactMobile() {
  const [copiedItem, setCopiedItem] = useState("");

  const copyToClipboard = async (text, itemName) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemName);
      setTimeout(() => setCopiedItem(""), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="px-4 py-6 relative">
      {/* Toast notification */}
      {copiedItem && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm z-50 shadow-lg">
          {copiedItem} copied!
        </div>
      )}

      <div className="text-2xl font-bold mb-6 text-center text-gray-100">
        Contact Information
      </div>
      
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl p-4 text-white text-center shadow-lg">
          <div className="text-lg font-semibold mb-3">Get In Touch</div>
          <div className="text-sm space-y-3">
            <div className="flex flex-col space-y-2">
              <span>gonzalogomezpizarro@gmail.com</span>
              <button
                onClick={() => copyToClipboard("gonzalogomezpizarro@gmail.com", "Email")}
                className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded text-xs transition-all duration-300 w-full"
              >
                📋 Copy Email
              </button>
            </div>
            <div className="flex flex-col space-y-2">
              <span>📱 +54 351 2546510</span>
              <button
                onClick={() => copyToClipboard("+54 351 2546510", "Phone")}
                className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded text-xs transition-all duration-300 w-full"
              >
                📋 Copy Phone
              </button>
            </div>
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
            <div className="flex items-center justify-between p-3 bg-green-900 rounded-lg">
              <a 
                href="mailto:gonzalogomezpizarro@gmail.com"
                className="flex-1"
              >
                <span className="text-sm text-green-300">📧 Send Email</span>
              </a>
              <button
                onClick={() => copyToClipboard("gonzalogomezpizarro@gmail.com", "Email")}
                className="bg-green-700 hover:bg-green-600 text-white px-2 py-1 rounded text-xs transition-all duration-300 ml-2"
              >
                📋 Copy
              </button>
            </div>
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
