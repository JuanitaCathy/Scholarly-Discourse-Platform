import React, { useState, useEffect } from 'react';
import UploadIcon from '../../public/icons/upload-icon.svg';
import ViewIcon from '../../public/icons/view-icon.svg';
import { auth, db } from '../../lib/firebase';
import { checkPermission } from '../../lib/permit';
import { useRouter } from 'next/router';

const StudentDashboard = () => {
  const [user, setUser] = useState(null);
  const [myUploads, setMyUploads] = useState([]);
  const [canUpload, setCanUpload] = useState(false);
  const [canView, setCanView] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = auth.currentUser;
      setUser(currentUser);

      if (currentUser) {
        // Check permissions
        const permissions = await checkPermission(currentUser.uid, 'student');
        setCanUpload(permissions.canUpload);
        setCanView(permissions.canView);

        // Fetch uploads by the current student
        const uploadsSnapshot = await db.collection('papers')
          .where('uploadedBy', '==', currentUser.uid)
          .get();

        const uploads = uploadsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setMyUploads(uploads);
      }
    };

    fetchUser();
  }, [router]);

  const handleUpload = () => {
    // Placeholder for file upload logic
    console.log('File upload logic for students');
  };

  const handleView = () => {
    // Placeholder for file view logic
    console.log('File view logic for students');
  };

  const handleDelete = async (uploadId) => {
    try {
      // Check permission to delete
      const allowed = await checkPermission(user.uid, 'delete', 'paper');
      if (!allowed) {
        console.error('You do not have permission to delete papers.');
        return;
      }

      // Perform delete action
      await db.collection('papers').doc(uploadId).delete();

      // Optionally update local state or fetch fresh data
    } catch (error) {
      console.error('Error deleting upload:', error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-beige min-h-screen p-8">
      <h2 className="text-3xl font-bold text-green-900 mb-4">Student Dashboard</h2>
      <div className="space-y-4">
        {canUpload && (
          <div className="bg-green-200 p-4 rounded shadow-md flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">Upload Paper</h3>
            </div>
            <div>
              <UploadIcon className="h-6 w-6 cursor-pointer" onClick={handleUpload} />
            </div>
          </div>
        )}
        {canView && (
          <div className="bg-green-200 p-4 rounded shadow-md flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">My Uploads</h3>
            </div>
            <div>
              <ViewIcon className="h-6 w-6 cursor-pointer" onClick={handleView} />
            </div>
          </div>
        )}
      </div>
      <h3 className="text-2xl font-bold mt-6">My Uploads:</h3>
      <ul>
        {myUploads.map(upload => (
          <li key={upload.id} className="flex justify-between items-center p-2 border-b border-gray-200">
            {upload.title}
            <button onClick={() => handleDelete(upload.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
