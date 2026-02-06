export default function ActivityInput() {
  return (
    <>
      <div className="card">
        <h2>Activity Input</h2>
        <p>Log your daily activities to track exposure and health impact.</p>
        <form>
          <label>Activity Name</label>
          <input type="text" placeholder="Enter activity" />
          
          <label>Duration (minutes)</label>
          <input type="number" placeholder="e.g. 30" />
          
          <label>Exposure Level</label>
          <select>
            <option>Low</option>
            <option>Moderate</option>
            <option>High</option>
          </select>
          
          <button type="submit">Add Activity</button>
        </form>
      </div>
    </>
  )
}
