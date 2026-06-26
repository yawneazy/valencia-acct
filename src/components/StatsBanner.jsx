import { FaAward, FaShieldAlt, FaHandshake } from "react-icons/fa";

export default function StatsBanner() {
  const stats = [
    { icon: <FaAward />, value: "10+", label: "Years Experience" },
    { icon: <FaShieldAlt />, value: "CTEC", label: "Licensed Professional" },
    { icon: <FaHandshake />, value: "Free", label: "Initial Consultation" },
  ];

  return (
    <div className="stats-banner">
      {stats.map((stat, index) => (
        <div key={index} className="stats-item">
          <span className="stats-icon">{stat.icon}</span>
          <div className="stats-text">
            <span className="stats-value">{stat.value}</span>
            <span className="stats-label">{stat.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}