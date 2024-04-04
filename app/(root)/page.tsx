import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import React from 'react';

const Home = () => {
  return (
    <div className="text-white">
      <SignedIn>
        <SignOutButton>out</SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton>in</SignInButton>
      </SignedOut>
    </div>
  );
};

export default Home;
