import React from 'react';
import MobileMessage from './components/MobileMessage';

function App() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      setIsMobile(isMobileDevice);
    };

    // Check on initial load
    checkMobile();
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

export default App;