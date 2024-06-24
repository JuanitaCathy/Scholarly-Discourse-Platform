import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark-academia-bg text-dark-academia-text">
      <div className="p-8 text-center">
        <h1 className="text-5xl font-serif mb-6">Welcome to Scholar's Haven</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          A sanctuary for the intellectually curious. Scholar's Haven is a platform dedicated to fostering academic collaboration and innovation. Whether you're a student, professor, or researcher, join us to share and explore scholarly works.
        </p>
        <div className="flex space-x-4 justify-center">
          <Link href="/signin">
            <a className="px-6 py-3 text-lg font-semibold bg-dark-academia-button text-white rounded-lg hover:bg-dark-academia-button-hover transition">
              Sign In
            </a>
          </Link>
          <Link href="/signup">
            <a className="px-6 py-3 text-lg font-semibold bg-dark-academia-button text-white rounded-lg hover:bg-dark-academia-button-hover transition">
              Sign Up
            </a>
          </Link>
        </div>
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-serif mb-6">Our Mission</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          At Scholar's Haven, our mission is to provide a space where scholars can come together to share knowledge, inspire one another, and push the boundaries of their fields. We believe in the power of collaboration and the pursuit of knowledge for the betterment of society.
        </p>
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-serif mb-6">For Students</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          As a student, you will find a wealth of resources to help you with your studies, including access to research papers, collaborative tools, and mentorship opportunities with professors and researchers from around the world.
        </p>
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-serif mb-6">For Professors</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Professors can utilize Scholar's Haven to share their research, find collaborators for new projects, and provide guidance to the next generation of scholars. Engage with a vibrant community of academics and expand your influence.
        </p>
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-serif mb-6">For Researchers</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Researchers will find an unparalleled platform to disseminate their findings, connect with peers, and explore interdisciplinary collaborations. Scholar's Haven is your gateway to cutting-edge research and innovative ideas.
        </p>
      </div>
    </div>
  );
};

export default Home;
