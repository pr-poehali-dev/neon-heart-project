import React, { useEffect, useState } from 'react';

interface NeonHeartProps {
  message: string;
}

const NeonHeart: React.FC<NeonHeartProps> = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="heart-container">
        <svg
          className="heart-animate"
          width="280"
          height="260"
          viewBox="0 0 280 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M140 260L119.7 241.95C47.6 177.95 0 135.95 0 80.5C0 35.7 34.3 0 77 0C101.5 0 125.3 13.3 140 34.3C154.7 13.3 178.5 0 203 0C245.7 0 280 35.7 280 80.5C280 135.95 232.4 177.95 160.3 241.95L140 260Z"
            stroke="#ff0080"
            strokeWidth="6"
            fill="transparent"
            className="neon-heart-stroke"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-black text-2xl md:text-4xl font-bold tracking-wide font-playfair bg-white/80 px-4 py-2 rounded-lg shadow-md">
              {message}
            </h1>
          </div>
        </div>
      </div>

      <style jsx>{`
        .neon-heart-stroke {
          filter: drop-shadow(0 0 8px #ff0080) drop-shadow(0 0 12px #ff0080);
          animation: pulse 2s infinite alternate;
        }

        @keyframes pulse {
          0% { filter: drop-shadow(0 0 5px #ff0080) drop-shadow(0 0 8px #ff0080); }
          100% { filter: drop-shadow(0 0 15px #ff0080) drop-shadow(0 0 20px #ff0080); }
        }

        .heart-animate {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </div>
  );
};

export default NeonHeart;
