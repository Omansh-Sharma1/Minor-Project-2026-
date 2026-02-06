import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ActivityInput from './pages/ActivityInput'
import Exposure from './pages/Exposure'
import HealthInsights from './pages/HealthInsights'
import Alerts from './pages/Alerts'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="input" element={<ActivityInput />} />
        <Route path="exposure" element={<Exposure />} />
        <Route path="health" element={<HealthInsights />} />
        <Route path="alerts" element={<Alerts />} />
      </Route>
    </Routes>
  )
}
