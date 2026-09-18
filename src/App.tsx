import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TopAppBar } from './components/TopAppBar'
import BottomNav from './components/BottomNav'
import Beranda from './pages/Beranda'
import Leaderboard from './pages/Leaderboard'
import Dashboard from './pages/Dashboard'
import HallOfFame from './pages/HallOfFame'
import TentangKami from './pages/TentangKami'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-on-surface font-body-md">
        <TopAppBar />
        <main>
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/halloffame" element={<HallOfFame />} />
            <Route path="/tentang-kami" element={<TentangKami />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </BrowserRouter>
  )
}

export default App
