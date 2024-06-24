// File: /api/getPapers.js
import db from '@/lib/db';

export default async function handler(req, res) {
  try {
    // Fetch papers from database (assuming all authenticated users can view)
    const papers = await db.paper.findMany();

    res.status(200).json({ papers });
  } catch (error) {
    console.error('Error fetching papers:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
