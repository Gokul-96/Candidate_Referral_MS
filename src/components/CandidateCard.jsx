function CandidateCard({ candidate }) {
  const updateStatus = (newStatus) => {
    axios.put(`http://localhost:5000/candidates/${candidate._id}/status`, { status: newStatus })
      .then(() => alert('Status updated'))
      .catch(error => console.error('Error updating status:', error));
  };

  return (
    <div>
      <h2>{candidate.name}</h2>
      <p>Job Title: {candidate.jobTitle}</p>
      <p>Status: {candidate.status}</p>
      <select onChange={e => updateStatus(e.target.value)} value={candidate.status}>
        <option value="Pending">Pending</option>
        <option value="Reviewed">Reviewed</option>
        <option value="Hired">Hired</option>
      </select>
    </div>
  );
}



