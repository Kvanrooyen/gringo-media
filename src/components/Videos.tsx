'use client';
import { useState, useEffect } from 'react';

interface VideoData {
  id: string;
  url: string;
  title: string;
  thumbnailUrl?: string;
}

const videos: VideoData[] = [
  { id: '872188465', url: 'https://vimeo.com/872188465', title: 'Journey to Partner' },
  { id: '926669134', url: 'https://vimeo.com/926669134', title: 'Client Testimonial: Zirona & Clearspace' },
  { id: '935446343', url: 'https://vimeo.com/935446343', title: 'The Future Beauty Show | BTL Ireland Highlight Reel' },
  { id: '1023237436', url: 'https://vimeo.com/1023237436', title: 'Ubuntu Family Chiropractic Testimonial' }
];

export default function VideoGallery() {
  const [videoData, setVideoData] = useState<VideoData[]>(videos);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const fetchThumbnails = async () => {
      const updatedVideos = await Promise.all(
        videos.map(async (video) => {
          try {
            const response = await fetch(`https://vimeo.com/api/v2/video/${video.id}.json`);
            const data = await response.json();
            return {
              ...video,
              thumbnailUrl: data[0].thumbnail_large
            };
          } catch (error) {
            console.error(`Error fetching Vimeo thumbnail for ${video.id}:`, error);
            return video;
          }
        })
      );
      setVideoData(updatedVideos);
    };

    fetchThumbnails();
  }, []);

  const handleMouseEnter = (videoId: string) => {
    const overlay = document.getElementById(`overlay-${videoId}`);
    if (overlay) {
      overlay.classList.add('opacity-100');
    }
  };

  const handleMouseLeave = (videoId: string) => {
    const overlay = document.getElementById(`overlay-${videoId}`);
    if (overlay) {
      overlay.classList.remove('opacity-100');
    }
  };

  // Return loading state during SSR and initial client render
  if (!mounted) {
    return (
      <section id="video-gallery" className="py-20 bg-primary">
        <h2 className="text-4xl font-semibold text-center mb-12 text-accent px-4">
          Our Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full">
          {videos.map((video) => (
            <div
              key={video.id}
              className="aspect-video overflow-hidden"
            >
              <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
                <span className="text-gray-500">Loading video...</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Return actual component after mounting on client
  return (
    <section id="video-gallery" className="py-20 bg-primary">
      <h2 className="text-4xl font-semibold text-center mb-12 text-accent px-4">
        Our Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
        {videoData.map((video) => (
          <div key={video.id} className="w-full">
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => handleMouseEnter(video.id)}
              onMouseLeave={() => handleMouseLeave(video.id)}
            >
              <div className="relative overflow-hidden group" style={{ paddingBottom: '56.25%' }}>
                {video.thumbnailUrl ? (
                  <img
                    src={video.thumbnailUrl}
                    alt={`Vimeo Video ${video.id}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
                    <span className="text-gray-500">Loading thumbnail...</span>
                  </div>
                )}
                <div
                  id={`overlay-${video.id}`}
                  className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-50 hover:opacity-100"
                >
                  <div className="text-white text-base font-bold">{video.title}</div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}