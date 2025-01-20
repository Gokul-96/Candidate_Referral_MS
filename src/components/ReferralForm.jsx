import React, { useState } from 'react';
import { addCandidate } from '../api/api';

const ReferralForm = ({ setCandidates }) => {
  const [formData, setFormData] = useState({
    candidateName: '',
    email: '',
    phoneNumber: '',
    jobTitle: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('candidateName', formData.candidateName);
    data.append('email', formData.email);
    data.append('phoneNumber', formData.phoneNumber);
    data.append('jobTitle', formData.jobTitle);
    if (formData.resume) {
      data.append('resume', formData.resume);
    }

    try {
      const response = await addCandidate(data);
      setCandidates((prev) => [...prev, response.data]);
      alert('Candidate referred successfully!');
    } catch (error) {
      console.error('Error referring candidate:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Refer a Candidate</h2>
      <input
        type="text"
        name="candidateName"
        placeholder="Candidate Name"
        value={formData.candidateName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="jobTitle"
        placeholder="Job Title"
        value={formData.jobTitle}
        onChange={handleChange}
        required
      />
      <input
        type="file"
        name="resume"
        accept=".pdf"
        onChange={handleFileChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReferralForm;
