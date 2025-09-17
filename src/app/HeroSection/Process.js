import React from 'react'
import { Home, Hammer, CheckCircle2 } from "lucide-react"

const Process = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            How I Work
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A simple, personal approach from start to finish
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Free Consultation",
              desc: "I visit your home or office to discuss your project and provide a precise estimate.",
              icon: Home,
              bgColor: "#dbeafe", // Tailwind blue-100
              gradientEnd: "#bfdbfe",
              textColor: "#1e40af",
            },
            {
              step: "2",
              title: "Crafting the Work",
              desc: "I personally handle your project with care and quality materials.",
              icon: Hammer,
              bgColor: "#dcfce7", // Tailwind green-100
              gradientEnd: "#b6f3ce",
              textColor: "#15803d",
            },
            {
              step: "3",
              title: "Final Walkthrough",
              desc: "Together, we review the results to make sure everything meets your expectations.",
              icon: CheckCircle2,
              bgColor: "#ede9fe", // Tailwind purple-100
              gradientEnd: "#ddd6fe",
              textColor: "#6d28d9", // Dark purple
            },
          ].map((process, index) => (
            <div key={index} className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm font-bold text-base"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${process.bgColor}, ${process.gradientEnd})`,
                  color: process.textColor,
                }}
              >
                {process.step}
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {process.title}
              </h3>
              <p className="text-gray-600">{process.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
