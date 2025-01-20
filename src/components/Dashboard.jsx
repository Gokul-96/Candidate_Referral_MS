import React, { useEffect, useState } from 'react';
import CandidateCard from './CandidateCard';
import { fetchCandidates } from '../api/api';

const Dashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchCandidates()
      .then((response) => setCandidates(response.data))
      .catch((error) => console.error('Error fetching candidates:', error));
  }, []);

  const filteredCandidates = candidates.filter((candidate) =>
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
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {filteredCandidates.map((candidate) => (
          <CandidateCard key={candidate._id} candidate={candidate} setCandidates={setCandidates} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

