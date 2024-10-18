import React, { useState, useEffect } from 'react';
import { LoaderIcon, ExternalLinkIcon } from './icons';
import type { GoogleColabProps } from './types';

const GoogleColab: React.FC<GoogleColabProps> = ({ 
  notebookUrl,
  height = '600px',
  width = '100%',
  showOutputs = true,
  defaultTheme = 'light'
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [iframeUrl, setIframeUrl] = useState('');

  useEffect(() => {
    try {
      const processNotebookUrl = (url: string) => {
        if (url.includes('drive.google.com')) {
          const fileId = url.match(/[-\w]{25,}/);
          if (fileId) {
            return `https://colab.research.google.com/drive/${fileId}`;
          }
        }
        
        if (url.includes('github.com')) {
          return url.replace(
            'github.com',
            'colab.research.google.com/github'
          );
        }

        if (url.includes('colab.research.google.com')) {
          return url;
        }

        throw new Error('URL de notebook no válida');
      };

      const transformedUrl = processNotebookUrl(notebookUrl);
      const params = new URLSearchParams({
        height: height,
        outputonly: (!showOutputs).toString(),
        theme: defaultTheme,
      });

      setIframeUrl(`${transformedUrl}?${params.toString()}`);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      setLoading(false);
    }
  }, [notebookUrl, height, showOutputs, defaultTheme]);

  const openInColab = () => {
    window.open(iframeUrl, '_blank');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
        <LoaderIcon />
        <span className="text-gray-700">Cargando notebook...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">
              Error al cargar el notebook: {error}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
        <h3 className="text-lg font-semibold text-gray-800">Google Colab Notebook</h3>
        <button
          onClick={openInColab}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          <ExternalLinkIcon />
          Abrir en Colab
        </button>
      </div>
      <div className="relative" style={{ height }}>
        <iframe
          src={iframeUrl}
          width={width}
          height="100%"
          frameBorder="0"
          className="w-full"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"
        />
      </div>
    </div>
  );
};

export default GoogleColab;