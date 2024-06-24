// File: /api/reviewPaper.js
import permitClient from '@/lib/permit';
import db from '@/lib/db';

export default async function handler(req, res) {
  try {
    const { userId, paperId, review } = req.body; // Extract userId, paperId, review from request

    // Check permission using Permit.io client
    const permitted = await permitClient.check({
      key: userId,
    }, 'review', {
      type: 'paper',
    });

    if (!permitted) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    // Proceed with reviewing paper logic...
    // Example: Update paper with review in database
    await db.paper.update({
      where: { id: paperId },
      data: {
        review,
      },
    });

    res.status(200).json({ message: 'Paper reviewed successfully' });
  } catch (error) {
    console.error('Error reviewing paper:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
