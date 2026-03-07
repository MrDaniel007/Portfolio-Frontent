import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
  <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-700">
      <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-gray-300">404</h1>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 mt-4">Page Not Found</h2>
      <p className="text-gray-500 mt-2 text-sm md:text-base lg:text-2xl">Sorry, the page you are looking for does not exist.</p>
      <a
        href="/"
        className="mt-6 px-10 py-3 text-black bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
      >
        Go Home
      </a>
    </div>
  )
}
