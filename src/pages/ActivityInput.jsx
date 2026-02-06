export default function ActivityInput() {
  return (
    <div className="container">
      <div className="card">
        <h2>User Activity Input</h2>

        <label>Location</label>
        <input type="text" placeholder="City / Area" />

        <label>Time Spent Outdoors (hours)</label>
        <input type="number" />

        <label>Activity Type</label>
        <select>
          <option>Walking</option>
          <option>Commuting</option>
          <option>Outdoor Work</option>
          <option>Indoor</option>
        </select>

        <p className="notice">* Conceptual input interface for demonstration.</p>
      </div>
    </div>
  )
}
