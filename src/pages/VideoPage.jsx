import React, { useState, useEffect } from 'react';
import VideoForm from '../components/VideoForm'; // Adjust the import path as needed

const ParentComponent = () => {
  const [videos, setVideos] = useState([]);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const userRole = localStorage.getItem('userRole'); // Retrieve user role directly from localStorage
    setUserRole(userRole);
  }, []);

  const handleUpload = (newVideo) => {
    setVideos([...videos, newVideo]);
  };

  if (userRole !== 'admin' && userRole !== 'uploader') {
    return <div>You do not have permission to upload videos.</div>;
  }

  return (
    <div>
      <h1>Upload a Video</h1>
      <VideoForm onUpload={handleUpload} />
      <h2>Uploaded Videos</h2>
      <ul>
        {videos.map((video, index) => (
          <li key={index}>{video.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ParentComponent;
