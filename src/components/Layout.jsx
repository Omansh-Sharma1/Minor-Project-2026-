import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/input">Activity Input</Link>
        <Link to="/exposure">Exposure</Link>
        <Link to="/health">Health Insights</Link>
        <Link to="/alerts">Alerts</Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  )
}
