import React from 'react'

function MidBanner() {
  return (
    <div className="bg-gradient-to-r from-pink-400 to-blue-500 rounded-lg p-6 mb-6 text-white">
    <h2 className="text-xl font-semibold mb-2">Get Started</h2>
    <p className="mb-4">This guide helps you to get started with your project and walks you through each step from setting up your first topic to creating reports to be shared with your stakeholders.</p>
    <button className="bg-white text-pink-500 px-4 py-2 rounded-md mr-2">Get Started</button>
    <button className="bg-transparent border border-white px-4 py-2 rounded-md">Dismiss</button>
  </div>
  )
}

export default MidBanner