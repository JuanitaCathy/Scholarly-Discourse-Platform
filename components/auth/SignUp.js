import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../../../lib/firebase';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [role, setRole] = useState('student'); // Default role

  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      await user.updateProfile({ displayName });
      // Optionally save role in the database or in user's profile
      router.push('/signin');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-beige">
      <form onSubmit={handleSignUp} className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-green-900">Sign Up</h2>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Display Name"
          required
          className="w-full px-4 py-2 mb-4 border rounded-lg"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full px-4 py-2 mb-4 border rounded-lg"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full px-4 py-2 mb-4 border rounded-lg"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-lg"
        >
          <option value="student">Student</option>
          <option value="professor">Professor</option>
          <option value="researcher">Researcher</option>
        </select>
        <button
          type="submit"
          className="w-full px-6 py-2 text-white bg-green-900 rounded-lg"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
