import React from 'react';
import MobileMessage from './components/MobileMessage';

function App() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on initial load
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Show mobile message if on mobile device
  if (isMobile) {
    return <MobileMessage />;
  }

  return (
    <div>
      <h1>Welcome to the App!</h1>
      {/* Add your existing app content here */}
    </div>
  );
}