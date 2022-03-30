//import useEffect here
import { useEffect } from 'react';

export default function GuestGreeting() {
  // Create DidMount & WillUnmount with useEffect
  // inside it can print "Guest Greeting Component Did Mount" & "Guest Greeting Component Will Unmount"

  useEffect(() => {
    console.log('Guest Greeting Component Did Mount');

    return () => {
      console.log('Guest Greeting Component Will Unmount');
    };
  }, []);

  return (
    <div className="text-center h1 bg-secondary text-light py-5">
      Please Login !
    </div>
  );
}
