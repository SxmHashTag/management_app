import { useState } from "react";
import { createCase } from "../services/api";

export default function CaseForm() {
  const [formData, setFormData] = useState({
    name: "",
    casenumber: "",
    description: "",
    receivedBy: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await createCase(formData);
      console.log("Case created:", response.data);
    } catch (error) {
      console.error("Error creating case:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Case Name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="casenumber" placeholder="Case Number" value={formData.casenumber} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required></textarea>
      <input type="text" name="receivedBy" placeholder="Received By" value={formData.receivedBy} onChange={handleChange} required />
      <button type="submit">Create Case</button>
    </form>
  );
}