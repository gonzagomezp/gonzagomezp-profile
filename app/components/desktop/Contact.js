/** @format */

import { useState } from "react";

export default function Contact() {
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
    <div className="text-center">
      {/* Toast notification */}
      {copiedItem && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg text-[30px] z-50 shadow-lg">
          {copiedItem} copied to clipboard!
        </div>
      )}

      <div className="text-[60px] mb-8 text-green-400">
        {'> CONTACT INFORMATION'}
      </div>
      
      <div className="space-y-8">
        <div className="bg-gray-950 p-8 rounded-lg">
          <div className="text-[45px] text-green-400 mb-6">Get In Touch</div>
          <div className="text-[40px] text-gray-300 space-y-4">
            <div className="flex items-center justify-center space-x-4">
              <span>📧 gonzalogomezpizarro@gmail.com</span>
              <button
                onClick={() => copyToClipboard("gonzalogomezpizarro@gmail.com", "Email")}
                className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-[30px] transition-all duration-300 hover:shadow-lg"
              >
                📋 Copy
              </button>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <span>📱 +54 351 2546510</span>
              <button
                onClick={() => copyToClipboard("+54 351 2546510", "Phone")}
                className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-[30px] transition-all duration-300 hover:shadow-lg"
              >
                📋 Copy
              </button>
            </div>
            <div>📍 Argentina</div>
            <div>💼 Remote Contractor</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-950 p-6 rounded-lg">
            <div className="text-[40px] text-green-400 mb-4">Professional Links</div>
            <div className="text-[40px] text-gray-300 space-y-3">
              <div>🔗 LinkedIn: <a href="https://www.linkedin.com/in/gonzagomezp/" target="blank" className="text-green-400 hover:text-green-300">Click here</a></div>
              <div>💻 GitHub: <a href="https://github.com/gonzagomezp" target="blank" className="text-green-400 hover:text-green-300">Click here</a></div>
              <div className="flex items-center space-x-3">
                <span>📧 Email: gonzalogomezpizarro@gmail.com</span>
                <button
                  onClick={() => copyToClipboard("gonzalogomezpizarro@gmail.com", "Email")}
                  className="bg-green-700 hover:bg-green-600 text-white px-3 py-1 rounded text-[25px] transition-all duration-300"
                >
                  📋
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-950 p-6 rounded-lg">
            <div className="text-[40px] text-green-400 mb-4">Availability</div>
            <div className="text-[40px] text-gray-300 space-y-3">
              <div>✅ Open to opportunities</div>
              <div>🌍 Remote work preferred</div>
              <div>🕒 GMT-3 Timezone (Argentina)</div>
              <div>💼 Full-time/Contract/Freelance</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-950 p-6 rounded-lg">
          <div className="text-[50px] text-green-400 mb-4">About Me</div>
          <div className="text-[40px] text-gray-300 mb-4 leading-relaxed">
            "Advanced Systems Engineering student passionate about full-stack development. 
            Strong problem-solving skills and adaptability to project requirements. 
            Looking for opportunities to contribute to innovative solutions in a dynamic team environment."
          </div>
          <div className="text-[50px] text-green-400">
            {'> READY FOR NEW CHALLENGES'}
          </div>
        </div>
      </div>
    </div>
  );
}
