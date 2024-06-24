// File: /api/deletePaper.js
import permitClient from '@/lib/permit';
import db from '@/lib/db';

export default async function handler(req, res) {
  try {
    const { userId, paperId } = req.body; // Extract userId, paperId from request

    // Check permission using Permit.io client
    const permitted = await permitClient.check({
      key: userId,
    }, 'delete', {
      type: 'paper',
    });

    if (!permitted) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    // Proceed with deleting paper logic...
    // Example: Delete paper from database
    await db.paper.delete({
      where: { id: paperId },
    });

    res.status(200).json({ message: 'Paper deleted successfully' });
  } catch (error) {
    console.error('Error deleting paper:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
