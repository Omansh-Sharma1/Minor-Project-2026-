export default function Alerts() {
  return (
    <div className="container">
      <div className="card alert">⚠ High pollution expected during evening hours</div>
      <div className="card alert" style={{ borderColor: '#10b981', backgroundColor: '#d1fae5' }}>
        ✔ Prefer indoor activities today
      </div>
      <div className="card alert" style={{ borderColor: '#3b82f6', backgroundColor: '#dbeafe' }}>
        ✔ Stay hydrated and monitor symptoms
      </div>
    </div>
  )
}
