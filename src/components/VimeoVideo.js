import React, { useEffect, useState } from 'react';

const VimeoVideo = ({ videoId, title }) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(null);

    useEffect(() => {
        const fetchThumbnail = async () => {
            try {
                const response = await fetch(`https://vimeo.com/api/v2/video/${videoId}.json`);
                const data = await response.json();
                // Use the thumbnail_large property from the Vimeo API response
                setThumbnailUrl(data[0].thumbnail_large);
            } catch (error) {
                console.error('Error fetching Vimeo thumbnail:', error);
            }
        };

        fetchThumbnail();
    }, [videoId]);

    if (!thumbnailUrl) {
        return null; // You can render a placeholder or loading state here
    }

    const videoUrl = `https://vimeo.com/${videoId}`;
    console.log('Title prop:', title); // Log the title prop

    return (
        <div className="w-full md:w-1/3">
            <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => {
                    document.getElementById(`overlay-${videoId}`).classList.add('opacity-100');
                }}
                onMouseLeave={() => {
                    document.getElementById(`overlay-${videoId}`).classList.remove('opacity-100');
                }}
            >
                <div className="relative overflow-hidden group" style={{ paddingBottom: '56.25%' }}>
                    <img
                        src={thumbnailUrl}
                        alt={`Vimeo Video ${videoId}`}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                        id={`overlay-${videoId}`}
                        className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-50 hover:opacity-100"
                    >
                        <div className="text-white text-base font-bold">{title}</div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default VimeoVideo;
