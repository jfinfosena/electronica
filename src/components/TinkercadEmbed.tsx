import React from 'react';

interface TinkercadEmbedProps {
  projectUrl: string;
  width?: string | number;
  height?: string | number;
}

const TinkercadEmbed: React.FC<TinkercadEmbedProps> = ({ 
  projectUrl, 
  width = '100%', 
  height = '480' 
}) => {
  return (
    <div className="tinkercad-embed" style={{ width, height }}>
      <iframe 
        src={`${projectUrl}?embed`}
        width="100%"
        height="100%"   
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TinkercadEmbed;