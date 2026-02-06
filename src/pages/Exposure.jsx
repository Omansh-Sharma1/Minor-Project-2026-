export default function Exposure() {
  return (
    <div className="container">
      <div className="card">
        <h2>Exposure Estimation</h2>
        <p><strong>Fetched AQI Data:</strong> 180 (Simulated)</p>
        <p><strong>PM2.5 Level:</strong> High</p>
        <p><strong>Weather Condition:</strong> Dry</p>
      </div>

      <div className="card">
        <h3>Estimated Exposure Level: Moderate</h3>
        <p>Daily Pollution Burden: Medium</p>
        <p className="notice">* Simulated data for conceptual demo.</p>
      </div>
    </div>
  )
}
