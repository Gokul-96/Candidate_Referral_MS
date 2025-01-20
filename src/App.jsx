import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import ReferralForm from './components/ReferralForm';

function App() {
  const [candidates, setCandidates] = useState([]);

  return (
    <div>
      <ReferralForm setCandidates={setCandidates} />
      <Dashboard candidates={candidates} setCandidates={setCandidates} />
    </div>
  );
}

export default App;
