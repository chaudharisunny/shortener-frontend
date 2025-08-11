import React, { useState } from 'react';
import axios from 'axios';

function Shorten() {
  const [originUrl, setOriginUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:3000/api/shorten', { originUrl });
      setShortUrl(data.shortUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          URL Shortener
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={originUrl}
            onChange={(e) => setOriginUrl(e.target.value)}
            placeholder="Enter your URL"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Shorten
          </button>
        </form>

        {shortUrl && (
          <div className="mt-6 text-center">
            <p className="text-gray-600">Your Short URL:</p>
            <a
              href={shortUrl}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-500 font-semibold hover:underline"
            >
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shorten
