import React, { useState } from 'react';
import axios from 'axios';

const CandidateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobTitle: '',
    resume: null,
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));

    try {
      await axios.post('http://localhost:5000/candidates', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage('Candidate referred successfully!');
      setFormData({ name: '', email: '', phone: '', jobTitle: '', resume: null });
    } catch (err) {
      setMessage('Failed to refer candidate. Please try again.');
    }
  };

  return (
    <div>
      <h2>Refer a Candidate</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
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
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
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
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CandidateForm;
