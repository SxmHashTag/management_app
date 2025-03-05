import { useState } from "react";
import { createCase } from "../services/api";

export default function CaseForm() {
  const [formData, setFormData] = useState({
    name: "",
    casenumber: "",
    description: "",
    receivedBy: "",
    dateReceived: "",
    status: "",
    priority: "",
    assignedTo: "",
    dateAssigned: "",
    dueDate: "",
    category: "",
    location: "",
    notes: "",
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
      <input type="date" name="dateReceived" placeholder="Date Received" value={formData.dateReceived} onChange={handleChange} required />
      <input type="text" name="status" placeholder="Status" value={formData.status} onChange={handleChange} required />
      <input type="text" name="priority" placeholder="Priority" value={formData.priority} onChange={handleChange} required />
      <input type="text" name="assignedTo" placeholder="Assigned To" value={formData.assignedTo} onChange={handleChange} required />
      <input type="date" name="dateAssigned" placeholder="Date Assigned" value={formData.dateAssigned} onChange={handleChange} required />
      <input type="date" name="dueDate" placeholder="Due Date" value={formData.dueDate} onChange={handleChange} required />
      <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
      <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
      <textarea name="notes" placeholder="Notes" value={formData.notes} onChange={handleChange}></textarea>
      <button type="submit">Create Case</button>
    </form>
  );
}