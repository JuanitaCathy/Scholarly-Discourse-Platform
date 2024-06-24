import mongoose from 'mongoose';

const PaperSchema = new mongoose.Schema({
  title: String,
  content: String,
  uploadedBy: String,
}, { timestamps: true });

export default mongoose.models.Paper || mongoose.model('Paper', PaperSchema);
