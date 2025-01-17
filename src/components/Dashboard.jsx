import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CandidateCard from './CandidateCard';

function Dashboard() {
  const [candidates, setCandidates] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/candidates')
      .then(response => setCandidates(response.data))
      .catch(error => console.error('Error fetching candidates:', error));
  }, []);

  const filteredCandidates = candidates.filter(candidate =>
    candidate.jobTitle.toLowerCase().includes(search.toLowerCase()) ||
    candidate.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Candidate Dashboard</h1>
      <input
        type="text"
        placeholder="Search by job title or status"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div>
        {filteredCandidates.map(candidate => (
          <CandidateCard key={candidate._id} candidate={candidate} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
