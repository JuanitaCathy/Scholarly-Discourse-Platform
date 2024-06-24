// File: /api/uploadPaper.js
import permitClient from '@/lib/permit';

export default async function handler(req, res) {
  try {
    const { userId, title, content } = req.body; // Extract userId, title, content from request

    // Check permission using Permit.io client
    const permitted = await permitClient.check({
      key: userId,
    }, 'upload', {
      type: 'paper',
    });

    if (!permitted) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    // Proceed with uploading paper logic...
    // Example: Save paper to database
    const paper = await db.paper.create({
      data: {
        title,
        content,
        userId,
      },
    });

    res.status(200).json({ message: 'Paper uploaded successfully', paper });
  } catch (error) {
    console.error('Error uploading paper:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
