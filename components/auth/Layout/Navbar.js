// components/Layout/Navbar.js
import Link from 'next/link';
import { useAuth } from '../../lib/firebase'; // Assuming you have a custom hook for authentication

const Navbar = () => {
  const { currentUser } = useAuth(); // Fetch the current user from Firebase auth context

  return (
    <nav className="bg-green-900 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-semibold">Scholar's Haven</a>
        </Link>
        <ul className="flex space-x-4">
          {currentUser && currentUser.role === 'student' && (
            <>
              <li>
                <Link href="/dashboard/student">
                  <a className="hover:text-gray-300">Student Dashboard</a>
                </Link>
              </li>
              <li>
                <Link href="/upload">
                  <a className="hover:text-gray-300">Upload Paper</a>
                </Link>
              </li>
            </>
          )}
          {currentUser && currentUser.role === 'professor' && (
            <>
              <li>
                <Link href="/dashboard/professor">
                  <a className="hover:text-gray-300">Professor Dashboard</a>
                </Link>
              </li>
              <li>
                <Link href="/uploads-to-review">
                  <a className="hover:text-gray-300">Uploads to Review</a>
                </Link>
              </li>
            </>
          )}
          {currentUser && currentUser.role === 'researcher' && (
            <>
              <li>
                <Link href="/dashboard/researcher">
                  <a className="hover:text-gray-300">Researcher Dashboard</a>
                </Link>
              </li>
              <li>
                <Link href="/uploads-to-review">
                  <a className="hover:text-gray-300">Uploads to Review</a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
