export default function StatsBanner() {
    const stats = [
      { value: "10+", label: "Years Experience" },
      { value: "CTEC", label: "Licensed Professional" },
      { value: "Free", label: "Initial Consultation" },
    ];
  
    return (
      <div className="stats-banner">
        {stats.map((stat, index) => (
          <div key={index} className="stats-item">
            <span className="stats-value">{stat.value}</span>
            <span className="stats-label">{stat.label}</span>
          </div>
        ))}
      </div>
    );
  }