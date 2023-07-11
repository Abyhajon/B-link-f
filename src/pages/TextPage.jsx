import React, { useState } from 'react';

const TextPage = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    fetch('http://localhost:3002/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: inputText,
      }),
    })
      .then(response => response.json())
      .then(json => setTranslatedText(json.brailleTranslation))
      .catch(error => console.error(error));
  };

  const handleInputChange = e => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="w-3/5 bg-gray-100 p-4 rounded-lg">
          <textarea
            className="w-full h-32 mb-4 p-2 border border-gray-300 rounded"
            placeholder="Enter text"
            value={inputText}
            onChange={handleInputChange}
          ></textarea>
          <button
            className="bg-[#FCD600] w-full py-2 px-4 rounded-md font-medium mb-4"
            onClick={handleTranslate}
          >
            Translate
          </button>
          <div className="w-full p-2 border border-gray-300 rounded bg-white">
            <p style={{ wordWrap: 'break-word' }}>{translatedText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextPage;
