import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 2500);
    const removeTimer = setTimeout(() => setVisible(false), 3000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-500 ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="loader">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="text">
            <span>Loading</span>
          </div>
        ))}
        <div className="line"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
