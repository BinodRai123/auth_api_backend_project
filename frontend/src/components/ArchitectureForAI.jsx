import { useState , useEffect} from "react";

const ArchitectureForAI = () => {
const [images, setImages] = useState([]);

  // Fetch random images from a placeholder service
  useEffect(() => {
    const fetchImages = async () => {
      const imageUrls = [
        'https://picsum.photos/300/400?random=1',
        'https://picsum.photos/400/300?random=2',
        'https://picsum.photos/300/300?random=3',
        'https://picsum.photos/300/300?random=4'
      ];
      setImages(imageUrls);
    };

    fetchImages();
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white p-6 md:p-12 font-sans overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 z-0 opacity-50" style={{
        background: 'radial-gradient(ellipse at 50% 50%, rgba(20, 20, 100, 0.8) 0%, transparent 100%)',
        animation: 'pulse 10s infinite'
      }} />

      {/* Main container with some blur effect */}
      <div className="relative z-10 backdrop-filter backdrop-blur-3xl bg-opacity-10 rounded-3xl p-4">
        {/* Navbar */}
        <header className="flex justify-between items-center py-4 px-6 md:px-0">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg">GEN</span>
            <div className="text-sm font-light text-gray-400">
              <span className="text-gray-200">AI PLATFORM</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-purple-400 transition-colors">Home</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Canvas</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Enterprise</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Community</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-purple-400 hidden sm:block transition-colors">Sign-up</a>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full transition-colors hidden sm:block">Log-in</button>
          </div>
        </header>

        {/* Hero section */}
        <main className="flex flex-col md:flex-row items-center md:items-start pt-16 pb-8 md:pb-16 space-y-8 md:space-y-0">
          {/* Left content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Architecture For AI Influence. Engine For Lasting IP.
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-400">
              GEN projects blends an crafts mind-mapping short videos in minutes.
            </p>
            <div className="mt-8">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full transition-colors">
                Join a waiting list
              </button>
            </div>
          </div>
          {/* Right image grid */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mt-12 md:mt-0">
            <div className="relative flex-col space-y-4">
              {/* Profile bubble */}
              <div className="relative mb-8">
                <div className="absolute -top-12 -left-12 bg-white bg-opacity-20 backdrop-filter backdrop-blur-xl rounded-full p-2 flex items-center space-x-2 border border-gray-600">
                  <img src="https://i.pravatar.cc/40?img=1" alt="Profile" className="w-8 h-8 rounded-full" />
                  <div className="text-xs text-white">
                    <p>@natashamuleng</p>
                    <p>Wrote her bio on a whim</p>
                  </div>
                </div>
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-semibold py-1 px-3 rounded-full">
                  Follow
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <img src={images[0]} alt="Random" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-75 transition-opacity"></div>
                </div>
                <div className="relative group overflow-hidden rounded-xl shadow-lg mt-8">
                  <img src={images[1]} alt="Random" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-75 transition-opacity"></div>
                </div>
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <img src={images[2]} alt="Random" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-75 transition-opacity"></div>
                </div>
                <div className="relative group overflow-hidden rounded-xl shadow-lg mt-8">
                  <img src={images[3]} alt="Random" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-75 transition-opacity"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* Keyframes for animation */}
      <style>
        {`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        `}
      </style>
    </div>
  );
  
};

export default ArchitectureForAI;