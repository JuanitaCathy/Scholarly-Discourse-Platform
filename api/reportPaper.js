// File: /api/reportPaper.js
import permitClient from '@/lib/permit';
import db from '@/lib/db';

export default async function handler(req, res) {
  try {
    const { userId, paperId, reason } = req.body; // Extract userId, paperId, reason from request

    // Check permission using Permit.io client
    const permitted = await permitClient.check({
      key: userId,
    }, 'report', {
      type: 'paper',
    });

    if (!permitted) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    // Proceed with reporting paper logic...
    // Example: Create report entry in database
    await db.report.create({
      data: {
        paperId,
        reporterId: userId,
        reason,
      },
    });

    res.status(200).json({ message: 'Paper reported successfully' });
  } catch (error) {
    console.error('Error reporting paper:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
