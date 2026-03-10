import { useState, useRef } from 'react';
import { Play } from 'lucide-react';

const TIMESTAMPS = [
  { time: "0:00", seconds: 0, label: "Welcome & Portal Overview" },
  { time: "0:30", seconds: 30, label: "Logging Into Your Portal" },
  { time: "1:00", seconds: 60, label: "Navigating Your Dashboard" },
  { time: "1:45", seconds: 105, label: "Finding Your Listing & Media" },
  { time: "2:30", seconds: 150, label: "Downloading Photos (Web/MLS vs Print)" },
  { time: "3:15", seconds: 195, label: "Accessing Your Videos & 3D Tour" },
  { time: "3:50", seconds: 230, label: "Using Your Property Website" },
  { time: "4:30", seconds: 270, label: "Marketing Tools (Flyers, Social Posts)" },
  { time: "5:15", seconds: 315, label: "Downloading on Mobile" },
  { time: "5:45", seconds: 345, label: "Getting Help & Contacting Us" },
];

export default function VideoSection() {
  // Placeholder URL - in a real scenario, this would be the actual Loom ID
  // Since we don't have a real Loom ID, we'll use a placeholder that won't actually load a video but shows the structure
  // Or better, we can use a generic Loom video if available, but I'll stick to the requested placeholder format
  // To make the "seek" work, we need to update the src.
  
  const BASE_URL = "https://www.loom.com/embed/1ae9743295564b1c85a5badafd923e0c";
  const [videoSrc, setVideoSrc] = useState(BASE_URL);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSeek = (seconds: number) => {
    setVideoSrc(`${BASE_URL}?t=${seconds}`);
    containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section id="video" className="py-20 px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[32px] font-bold text-white mb-3">Portal Walkthrough</h2>
          <p className="text-[#999999] text-[16px]">
            A complete video guide to your Regalis customer portal — 6 minutes, 15 seconds
          </p>
        </div>

        {/* Video Container */}
        <div 
          ref={containerRef}
          className="video-container relative w-full aspect-video rounded-xl overflow-hidden border border-[#1a1a1a] shadow-[0_8px_32px_rgba(0,0,0,0.4)] mb-10 bg-black"
        >
          <iframe 
            src={videoSrc}
            frameBorder="0" 
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            title="Portal Walkthrough"
          ></iframe>
        </div>

        {/* Timestamps Card */}
        <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-7 md:p-8">
          <h3 className="text-[18px] font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-xl">📋</span> Video Chapters
          </h3>
          
          <div className="space-y-1">
            {TIMESTAMPS.map((item) => (
              <button
                key={item.seconds}
                onClick={() => handleSeek(item.seconds)}
                className="w-full flex items-center text-left p-2.5 rounded-lg hover:bg-[#c9a84c]/5 transition-colors group"
              >
                <span className="font-mono text-[14px] font-semibold text-[#c9a84c] min-w-[50px]">
                  {item.time}
                </span>
                <span className="text-[15px] text-[#D4D4D4] ml-4 group-hover:text-white transition-colors">
                  {item.label}
                </span>
                <Play className="ml-auto opacity-0 group-hover:opacity-100 text-[#c9a84c] w-3 h-3 fill-current transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
