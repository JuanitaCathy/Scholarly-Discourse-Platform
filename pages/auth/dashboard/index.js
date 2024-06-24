// pages/dashboard/index.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { auth } from '../../lib/firebase';

const DashboardPage = () => {
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const user = auth.currentUser;
      if (!user) {
        router.push('/auth/signin');
      } else {
        // Check user role (you need to implement this logic based on your backend setup)
        const userRole = await getUserRoleFromBackend(user.uid);
        if (userRole === 'student') {
          router.push('/student');
        } else if (userRole === 'professor') {
          router.push('/professor');
        } else if (userRole === 'researcher') {
          router.push('/researcher');
        } else {
          router.push('/'); // Redirect to homepage 
        }
      }
    };

    checkUser();
  }, [router]);

  return <div>Loading...</div>;
};

export default DashboardPage;
