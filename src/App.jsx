import React from 'react'
import { BrowserRouter, Router, Routes , Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ReferralForm from './components/ReferralForm'
import AuthPage from './components/AuthPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element = {<Dashboard/>}/>
        <Route path="/refer" element={<ReferralForm />} />
        <Route path="/" element={<AuthPage />} />
      </Routes>
    </Router>
  )
}

export default App