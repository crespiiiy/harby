import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ModelCard = ({ title, description, imageUrl, chatLink, modelLink, badge, badgeColor, buttonColor }) => {
  // Default colors if not provided
  const defaultBadgeColor = 'bg-red-600/20 text-red-400';
  const defaultButtonColor = 'bg-accent hover:bg-accent-dark';
  
  // Use provided colors or defaults
  const badgeColorClass = badgeColor || defaultBadgeColor;
  const buttonColorClass = buttonColor || defaultButtonColor;
  
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-accent transition-colors">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="relative w-12 h-12 mr-4 rounded-full overflow-hidden border border-gray-700">
            <Image
              src={imageUrl}
              alt={`${title} Logo`}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            {badge && (
              <span className={`px-2 py-0.5 text-xs font-bold rounded ${badgeColorClass} mt-1 inline-block`}>
                {badge}
              </span>
            )}
          </div>
        </div>
        <p className="text-gray-400 mb-6">{description}</p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={chatLink}
            className={`inline-flex items-center ${buttonColorClass} text-white px-4 py-2 rounded-md transition-colors`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Try {title}
          </Link>
          
          {modelLink && (
            <Link
              href={modelLink}
              className="inline-flex items-center border border-gray-700 hover:border-gray-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
