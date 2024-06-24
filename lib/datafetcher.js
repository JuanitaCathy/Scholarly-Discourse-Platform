import { db } from './firebase';

export const fetchPapers = (callback) => {
  return db.collection('papers').onSnapshot((snapshot) => {
    const papers = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(papers);
  });
};

export const fetchComments = (paperId, callback) => {
  return db
    .collection('papers')
    .doc(paperId)
    .collection('comments')
    .onSnapshot((snapshot) => {
      const comments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      callback(comments);
    });
};

// Example usage:
// Assuming you have a paperId and a callback function defined somewhere else
const paperId = 'your_paper_id_here';
const handleCommentsUpdate = (comments) => {
  console.log('Updated comments:', comments);
};

// Start listening to comments for a specific paper
const unsubscribeComments = fetchComments(paperId, handleCommentsUpdate);

// Later, if you want to stop listening
// unsubscribeComments();
