import React, { useState } from 'react';
import axiosInstance from '../apis/axios'; // Adjust the import path as needed

const VideoForm = ({ onUpload }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      description,
      url,
      category,
    };

    try {
      const response = await axiosInstance.post('/videos/upload', data);
      onUpload(response.data.video);
      alert('Video uploaded successfully');
    } catch (error) {
      console.error('Error uploading video:', error);
      // Handle upload error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label className="block mb-1">Video Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Video URL</label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="">Select a category</option>
          <option value="Education">Education</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Sports">Sports</option>
          <option value="Music">Music</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded">Upload</button>
    </form>
  );
};

export default VideoForm;
