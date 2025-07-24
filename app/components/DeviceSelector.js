/** @format */

"use client";

import { useState } from "react";

export default function DeviceSelector({ onDeviceChange, currentDevice, isCollapsed, onToggleCollapse }) {
  return (
    <div className="fixed top-4 right-4 bg-black/80 backdrop-blur-md border border-green-500/50 rounded-xl p-4 shadow-2xl transition-all duration-300"
      style={{
        padding: isCollapsed ? '8px' : '16px',
        minWidth: isCollapsed ? '40px' : '200px',
        zIndex: 10000, // Highest z-index but more reasonable
        position: 'fixed', // Ensure it's truly fixed positioning
      }}
    >
      <div className="flex items-center justify-between">
        {!isCollapsed && (
          <span className="text-white text-sm font-bold">
            Device View
          </span>
        )}
        <button
          onClick={onToggleCollapse}
          className="bg-transparent border-none text-white cursor-pointer text-lg p-1"
        >
          {isCollapsed ? '☰' : '✕'}
        </button>
      </div>
      
      {!isCollapsed && (
        <div className="mt-3">
          <button
            onClick={() => onDeviceChange('desktop')}
            className={`block w-full px-4 py-2 mb-2 rounded-lg font-mono text-sm transition-all duration-300 ${
              currentDevice === 'desktop'
                ? 'bg-green-600 text-white border-2 border-green-400 shadow-lg shadow-green-400/50'
                : 'bg-green-900/50 text-green-300 border-2 border-green-600 hover:bg-green-800/50 hover:border-green-400'
            }`}
            style={{
              textShadow: currentDevice === 'desktop' ? '0 0 10px rgba(0, 255, 0, 0.8)' : 'none',
            }}
          >
            🖥️ DESKTOP
          </button>
          <button
            onClick={() => onDeviceChange('mobile')}
            className={`block w-full px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
              currentDevice === 'mobile'
                ? 'bg-blue-600 text-white border-2 border-blue-400 shadow-lg shadow-blue-400/50'
                : 'bg-blue-900/50 text-blue-300 border-2 border-blue-600 hover:bg-blue-800/50 hover:border-blue-400'
            }`}
            style={{
              textShadow: currentDevice === 'mobile' ? '0 0 10px rgba(59, 130, 246, 0.8)' : 'none',
            }}
          >
            📱 MOBILE
          </button>
        </div>
      )}
    </div>
  );
}
