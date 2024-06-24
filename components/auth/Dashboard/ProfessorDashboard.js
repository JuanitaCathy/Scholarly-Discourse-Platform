import React, { useState, useEffect } from 'react';
import ReviewIcon from '../../public/icons/review-icon.svg';
import ReportIcon from '../../public/icons/report-icon.svg';
import { auth, db } from '../../lib/firebase';
import { checkPermission } from '../../lib/permit';
import { useRouter } from 'next/router';

const ProfessorDashboard = () => {
  const [user, setUser] = useState(null);
  const [papersToReview, setPapersToReview] = useState([]);
  const [canReview, setCanReview] = useState(false);
  const [canReport, setCanReport] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = auth.currentUser;
      setUser(currentUser);

      if (currentUser) {
        // Check permissions
        const permissions = await checkPermission(currentUser.uid, 'professor');
        setCanReview(permissions.canReview);
        setCanReport(permissions.canReport);

        // Fetch papers to review
        const papersSnapshot = await db.collection('papers')
          .where('reviewed', '==', false)
          .get();

        const papers = papersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPapersToReview(papers);
      }
    };

    fetchUser();
  }, [router]);

  const handleReview = async (paperId) => {
    try {
      // Check permission to review
      const allowed = await checkPermission(user.uid, 'review', 'paper');
      if (!allowed) {
        console.error('You do not have permission to review papers.');
        return;
      }

      // Perform review action
      await db.collection('papers').doc(paperId).update({ reviewed: true });

      // Optionally update local state or fetch fresh data
    } catch (error) {
      console.error('Error reviewing paper:', error);
    }
  };

  const handleReport = async (paperId) => {
    try {
      // Check permission to report
      const allowed = await checkPermission(user.uid, 'report', 'paper');
      if (!allowed) {
        console.error('You do not have permission to report papers.');
        return;
      }

      // Perform report action
      await db.collection('papers').doc(paperId).update({ reported: true });

      // Optionally update local state or fetch fresh data
    } catch (error) {
      console.error('Error reporting paper:', error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-beige min-h-screen p-8">
      <h2 className="text-3xl font-bold text-green-900 mb-4">Professor Dashboard</h2>
      <h3 className="text-2xl font-bold mt-6">Papers to Review:</h3>
      <ul>
        {papersToReview.map(paper => (
          <li key={paper.id} className="flex justify-between items-center p-2 border-b border-gray-200">
            {paper.title}
            <div className="flex space-x-2">
              {canReview && <ReviewIcon className="h-6 w-6 cursor-pointer" onClick={() => handleReview(paper.id)} />}
              {canReport && <ReportIcon className="h-6 w-6 cursor-pointer" onClick={() => handleReport(paper.id)} />}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfessorDashboard;
