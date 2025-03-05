import { useState } from "react";
import { createSuspect } from "../services/api";

export default function SuspectForm() {
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    phoneNumber: "",
    nationality: "",
    identificationNumber: "",
    occupation: "",
    knownAliases: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await createSuspect(formData);
      console.log("Suspect created:", response.data);
    } catch (error) {
      console.error("Error creating suspect:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="date" name="dateOfBirth" placeholder="Date of Birth" value={formData.dateOfBirth} onChange={handleChange} required />
      <input type="text" name="gender" placeholder="Gender" value={formData.gender} onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
      <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
      <input type="text" name="nationality" placeholder="Nationality" value={formData.nationality} onChange={handleChange} required />
      <input type="text" name="identificationNumber" placeholder="Identification Number" value={formData.identificationNumber} onChange={handleChange} required />
      <input type="text" name="occupation" placeholder="Occupation" value={formData.occupation} onChange={handleChange} required />
      <input type="text" name="knownAliases" placeholder="Known Aliases" value={formData.knownAliases} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required></textarea>
      <button type="submit">Create Suspect</button>
    </form>
  );
}