"use client";

import { motion } from "framer-motion";

export function AffinityMapping() {
  const categories = [
    {
      title: "Navigation Pain Points",
      color: "bg-red-100 border-red-300",
      items: [
        "Can't find routes to new places",
        "Relies on asking strangers",
        "Route information is inconsistent",
        "Fear of getting lost"
      ]
    },
    {
      title: "Payment Issues",
      color: "bg-blue-100 border-blue-300", 
      items: [
        "Need exact change ($0.25)",
        "Can't calculate multi-trip costs",
        "No digital payment options",
        "Worried about running out of cash"
      ]
    },
    {
      title: "Time & Anxiety",
      color: "bg-yellow-100 border-yellow-300",
      items: [
        "No real-time arrival info",
        "Arrive early to be safe",
        "Long waits with no updates",
        "Stress about transfer timing"
      ]
    },
    {
      title: "Safety Concerns",
      color: "bg-purple-100 border-purple-300",
      items: [
        "Waiting alone at night",
        "Unfamiliar bus stops",
        "Concerns about crowded buses",
        "Navigation in dangerous areas"
      ]
    },
    {
      title: "Digital Constraints",
      color: "bg-green-100 border-green-300",
      items: [
        "Limited data plans",
        "Poor connectivity in some areas",
        "Battery drain concerns",
        "Previous apps were unreliable"
      ]
    },
    {
      title: "User Behaviors",
      color: "bg-orange-100 border-orange-300",
      items: [
        "Take photos of route info",
        "Save important locations",
        "Travel in groups when possible",
        "Use landmarks for navigation"
      ]
    }
  ];

  return (
    <div className="my-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-neutral-50 rounded-2xl p-8"
      >
        <h3 className="text-2xl text-neutral-900 mb-6" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
          Affinity Mapping: User Insights
        </h3>
        <p className="text-neutral-600 mb-8">
          Key themes emerged from 42 interviews, revealing interconnected challenges across the user journey
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${category.color} border-2 rounded-xl p-4`}
            >
              <h4 className=" font-semibold text-neutral-900 mb-3">{category.title}</h4>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-neutral-700 flex items-start gap-2">
                    <span className="text-neutral-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-white rounded-xl border border-neutral-200">
          <p className="text-sm text-neutral-600">
            <strong>Key Insight:</strong> Users trade time for certainty—arriving early and asking multiple people 
            to compensate for lack of reliable information. This creates significant daily friction and anxiety.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
