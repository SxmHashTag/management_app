import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { caseId, evidenceDetails, file } = req.body;
      const accessToken = req.headers.authorization;

      // Validate Authentication
      const authResponse = await axios.get('https://auth.example.com/validate', {
        headers: { Authorization: accessToken },
      });

      if (authResponse.status !== 200) throw new Error('Unauthorized');

      // Upload File to Secure Storage
      const fileUploadResponse = await axios.post('https://storage.example.com/upload', file, {
        headers: { Authorization: accessToken, 'Content-Type': file.type },
      });
      const fileUrl = fileUploadResponse.data.url;

      // Store Evidence in Database
      const evidenceResponse = await axios.post('https://api.example.com/evidence', {
        caseId,
        evidenceDetails,
        fileUrl,
      }, { headers: { Authorization: accessToken } });

      res.status(201).json({ message: 'Evidence added successfully', evidenceId: evidenceResponse.data.id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
