import React from 'react';
import { updateCandidateStatus } from '../api/api';

const CandidateCard = ({ candidate, setCandidates }) => {
  const handleStatusChange = (newStatus) => {
    updateCandidateStatus(candidate._id, newStatus)
      .then(() => {
        setCandidates((prev) =>
          prev.map((item) =>
            item._id === candidate._id ? { ...item, status: newStatus } : item
          )
        );
        alert('Status updated successfully!');
      })
      .catch((error) => console.error('Error updating status:', error));
  };

  return (
    <div>
      <h2>{candidate.candidateName}</h2>
      <p>Job Title: {candidate.jobTitle}</p>
      <p>Status: {candidate.status}</p>
      <select
        value={candidate.status}
        onChange={(e) => handleStatusChange(e.target.value)}
      >
        <option value="Pending">Pending</option>
        <option value="Reviewed">Reviewed</option>
        <option value="Hired">Hired</option>
      </select>
    </div>
  );
};

export default CandidateCard;




