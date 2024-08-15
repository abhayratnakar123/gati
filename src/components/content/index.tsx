import React, { useState } from 'react';

const Content = ({ tab } :any ) => {
  const content :any  = {
    Python: [
      'Introduction to Python',
      'Python Objects, Number & Booleans, Strings.',
      'Container Objects, Mutability Of Objects',
      'Operators',
      'Python Type Conversion',
      'Conditions (If Else, If-Elif-Else)',
      'Loops (While, For)',
      'Break And Continue Statement And Range Function',
    ],
    Statistics: [
      'Introduction to Statistics',
      'Descriptive Statistics',
      'Inferential Statistics',
      'Probability Distributions',
      'Hypothesis Testing',
    ],
    // Add content for other tabs here...
  };

  const videos :any = {
    'Introduction to Python': [
      { title: 'Python Introduction', url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
      { title: 'Python Basics', url: 'https://www.youtube.com/embed/WGJJIrtnfpk' },
    ],
    'Python Objects, Number & Booleans, Strings.': [
      { title: 'Python Data Types', url: 'https://www.youtube.com/embed/WGJJIrtnfpk' },
      { title: 'Python Numbers and Booleans', url: 'https://www.youtube.com/embed/t8pPdKYpowI' },
    ],
    // Add video links for other topics here...
  };

  const [selectedTopic, setSelectedTopic] = useState('');

  const handleTopicClick = (topic :any ) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="mt-4 flex">
      <div className="w-2/3 bg-gray-900 p-4 rounded-lg shadow-lg mr-4 ">
        {content[tab]?.map((item :any , index :any ) => (
          <div
            key={index}
            className="py-2 border-b border-gray-700 last:border-0 cursor-pointer"
            onClick={() => handleTopicClick(item)}
          >
            <p className="text-lg font-semibold hover:text-gray-300">{item}</p>
          </div>
        ))}
      </div>
      <div className="w-1/3 bg-gray-900 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">{selectedTopic ? `Related Videos for ${selectedTopic}` : 'Select a topic to see related videos'}</h2>
        {selectedTopic && videos[selectedTopic]?.map((video :any , index :any ) => (
          <div key={index} className="mb-4">
            <p className="text-lg font-semibold mb-2">{video.title}</p>
            <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
