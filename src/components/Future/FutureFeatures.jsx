import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const FutureFeatures = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  const futureAdvancements = [
    {
      title: "Satellite Farm Monitoring",
      description: "Track your farm health from space using advanced satellite imagery",
      details: [
        "Real-time crop health monitoring via satellite",
        "Automated disease and pest detection",
        "Precision irrigation recommendations",
        "Yield prediction with 95% accuracy",
        "Integration with weather forecasting",
      ],
      benefits: "Save 30% on water usage and increase yields by 25%",
      timeline: "Q1 2026",
      impact: "High",
      icon: "🛰️",
      color: "from-purple-500 to-blue-500",
    },
    {
      title: "Blockchain Marketplace",
      description: "Transparent trading platform powered by blockchain.",
      details: [
        "Direct farmer-to-buyer sales",
        "Smart-contract payments",
        "Transparent pricing",
        "40% reduced middleman cost",
        "Crypto payments available",
      ],
      benefits: "Earn 40% more with direct sales",
      timeline: "Q2 2026",
      impact: "Very High",
      icon: "💳",
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "AI Voice Assistant",
      description: "Your personal farming assistant in your local language.",
      details: [
        "Supports 15+ Indian languages",
        "Hands-free farm management",
        "Weather updates",
        "Personalized farming guidance",
        "Works offline",
      ],
      benefits: "Instant information without typing",
      timeline: "Q2 2026",
      impact: "High",
      icon: "🎤",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const impactColors = {
    "Very High": "text-red-600",
    High: "text-orange-600",
    Medium: "text-yellow-600",
  };

  return (
    <div
      className={`min-h-screen p-4 sm:p-6 lg:p-8 ${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50"
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-8">

        {/* TOP HEADER */}
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6 rounded-2xl text-white shadow-xl">
          <h1 className="text-3xl font-black">🚀 Coming Soon to FarmLink</h1>
          <p className="text-sm opacity-90">
            Powerful new AI + IoT features launching in 2026
          </p>
        </div>

        {/* STATS */}
        <div
          className={`rounded-2xl p-6 shadow-lg ${
            theme === "dark" ? "bg-zinc-900" : "bg-white"
          }`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 text-center gap-4">
            <div>
              <p className="text-3xl font-black text-purple-600">9</p>
              <p className="text-xs opacity-70">New Features</p>
            </div>
            <div>
              <p className="text-3xl font-black text-blue-600">40%</p>
              <p className="text-xs opacity-70">Cost Savings</p>
            </div>
            <div>
              <p className="text-3xl font-black text-emerald-600">100%</p>
              <p className="text-xs opacity-70">Free Access</p>
            </div>
            <div>
              <p className="text-3xl font-black text-orange-600">2026</p>
              <p className="text-xs opacity-70">Launch Year</p>
            </div>
          </div>
        </div>

        {/* TIMELINE */}
        <div
          className={`rounded-2xl p-6 shadow-lg ${
            theme === "dark" ? "bg-zinc-900" : "bg-white"
          }`}
        >
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            📅 Release Timeline
          </h2>

          <div className="grid grid-cols-4 text-center">
            <div>
              <p className="text-xl font-black text-purple-600">Q1</p>
              <p className="text-xs opacity-70">Satellite + Sensors</p>
            </div>
            <div>
              <p className="text-xl font-black text-pink-600">Q2</p>
              <p className="text-xs opacity-70">AI + Blockchain</p>
            </div>
            <div>
              <p className="text-xl font-black text-red-600">Q3</p>
              <p className="text-xs opacity-70">Drones</p>
            </div>
            <div>
              <p className="text-xl font-black text-orange-600">Q4</p>
              <p className="text-xs opacity-70">Insurance</p>
            </div>
          </div>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {futureAdvancements.map((f, i) => (
            <div
              key={i}
              className={`rounded-2xl shadow-xl overflow-hidden ${
                theme === "dark" ? "bg-zinc-900" : "bg-white"
              }`}
            >
              <div className={`h-2 bg-gradient-to-r ${f.color}`}></div>

              <div className="p-6">
                <div className="flex justify-between mb-4">
                  <div className="text-4xl">{f.icon}</div>

                  <div className="text-right">
                    <p className="text-xs font-bold text-purple-500">
                      {f.timeline}
                    </p>
                    <p className={`text-xs font-semibold ${impactColors[f.impact]}`}>
                      {f.impact} Impact
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-xs opacity-80 mb-4">{f.description}</p>

                <div className="bg-emerald-50 text-emerald-700 text-xs p-3 rounded-lg mb-4">
                  💡 {f.benefits}
                </div>

                {(expandedCard === i ? f.details : f.details.slice(0, 3)).map(
                  (d, k) => (
                    <p key={k} className="text-xs mb-2 flex gap-2">
                      <span className="text-emerald-500">✓</span>
                      {d}
                    </p>
                  )
                )}

                {f.details.length > 3 && (
                  <button
                    onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                    className="text-xs font-bold text-purple-600 mt-2"
                  >
                    {expandedCard === i
                      ? "↑ Show Less"
                      : `↓ Show ${f.details.length - 3} More`}
                  </button>
                )}

                <div className="bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full px-3 py-1 mt-4 inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                  In Development
                </div>

                <button className="w-full mt-4 py-2 bg-gray-100 rounded-lg text-gray-700 text-sm font-semibold">
                  🔔 Notify Me When Ready
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* WHY FEATURES */}
        <div
          className={`rounded-2xl p-6 shadow-xl ${
            theme === "dark" ? "bg-zinc-900" : "bg-white"
          }`}
        >
          <h2 className="text-xl font-bold mb-4">🎯 Why These Features Matter</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-purple-50 text-purple-700">
              <h3 className="font-bold">📈 Increase Profits</h3>
              <p className="text-xs opacity-80">
                Better planning, higher yields, improved selling prices.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 text-blue-700">
              <h3 className="font-bold">⏱️ Save Time</h3>
              <p className="text-xs opacity-80">Automation reduces manual work.</p>
            </div>

            <div className="p-4 rounded-lg bg-emerald-50 text-emerald-700">
              <h3 className="font-bold">🛡️ Reduce Risk</h3>
              <p className="text-xs opacity-80">
                Better predictions = fewer losses.
              </p>
            </div>
          </div>
        </div>

        {/* SUBSCRIBE BOX (FIXED, ALWAYS SHOWS) */}
        <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-8 rounded-2xl text-white text-center shadow-2xl">
          <h2 className="text-xl font-black mb-2">📬 Stay Updated</h2>
          <p className="opacity-90 text-sm mb-4">
            Get notified when new features launch.
          </p>

          {subscribed ? (
            <div className="bg-white/20 p-4 rounded-lg font-bold">
              ✓ Successfully Subscribed!
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                className="flex-1 p-3 rounded-lg text-black"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={() => {
                  if (!email.includes("@")) return;
                  setSubscribed(true);
                }}
                className="bg-white text-emerald-700 px-6 font-bold rounded-lg"
              >
                Subscribe
              </button>
            </div>
          )}
        </div>

        {/* FAQ */}
        <div
          className={`rounded-2xl p-6 shadow-xl ${
            theme === "dark" ? "bg-zinc-900" : "bg-white"
          }`}
        >
          <h2 className="text-xl font-bold mb-4">❓ FAQ</h2>

          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg text-sm">
              <p className="font-bold mb-1">Are these features free?</p>
              <p className="opacity-75 text-xs">
                Yes, all major features will be free.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg text-sm">
              <p className="font-bold mb-1">Do I need equipment?</p>
              <p className="opacity-75 text-xs">
                Just a smartphone. Drones/sensors are optional.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg text-sm">
              <p className="font-bold mb-1">Does it work offline?</p>
              <p className="opacity-75 text-xs">
                Yes, many features support offline mode.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FutureFeatures;
