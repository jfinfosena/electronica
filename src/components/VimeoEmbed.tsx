import React from 'react';

interface VimeoEmbedProps {
  videoId: string;
  title: string;
  autoplay?: boolean;
  controls?: boolean;
}

const VimeoEmbed: React.FC<VimeoEmbedProps> = ({ 
  videoId, 
  title,
  autoplay = false,
  controls = true 
}) => {
  const baseUrl = 'https://player.vimeo.com/video';
  const queryParams = new URLSearchParams({
    badge: '0',
    autopause: '0',
    player_id: '0',
    app_id: '58479',
    autoplay: autoplay ? '1' : '0',
    controls: controls ? '1' : '0'
  });

  const containerStyle: React.CSSProperties = {
    padding: '56.25% 0 0 0',
    position: 'relative'
  };

  const iframeStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  };

  return (
    <div style={containerStyle}>
      <iframe
        src={`${baseUrl}/${videoId}?${queryParams.toString()}`}
        style={iframeStyle}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        title={title}
        allowFullScreen
      />
    </div>
  );
};

export default VimeoEmbed;