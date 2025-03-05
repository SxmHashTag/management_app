import { useState } from "react";
import { addEvidence } from "../services/api";

export default function UploadEvidence() {
  const [formData, setFormData] = useState({
    caseId: "",
    name: "",
    evidencenumber: "",
    description: "",
    brand: "",
    model: "",
    color: "",
    serial_number: "",
    status: "",
    damages: "",
    damage_description: "",
    state: "",
  });
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const evidenceData = { ...formData };
      const response = await addEvidence(evidenceData);
      console.log("Evidence added:", response.data);
    } catch (error) {
      console.error("Error adding evidence:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="caseId" placeholder="Case ID" value={formData.caseId} onChange={handleChange} required />
      <input type="text" name="name" placeholder="Evidence Name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="evidencenumber" placeholder="Evidence Number" value={formData.evidencenumber} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required></textarea>
      <input type="text" name="brand" placeholder="Brand" value={formData.brand} onChange={handleChange} />
      <input type="text" name="model" placeholder="Model" value={formData.model} onChange={handleChange} />
      <input type="text" name="color" placeholder="Color" value={formData.color} onChange={handleChange} />
      <input type="text" name="serial_number" placeholder="Serial Number" value={formData.serial_number} onChange={handleChange} />
      <input type="text" name="status" placeholder="Status" value={formData.status} onChange={handleChange} required />
      <input type="text" name="damages" placeholder="Damages" value={formData.damages} onChange={handleChange} />
      <textarea name="damage_description" placeholder="Damage Description" value={formData.damage_description} onChange={handleChange}></textarea>
      <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} required />
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload Evidence</button>
    </form>
  );
}
