import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (author.trim() !== '' && content.trim() !== '') {
      const newPost = {
        id: Date.now(),
        author,
        content,
        comments: [],
      };
      addPost(newPost);
      setAuthor('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow mb-4">
      <input 
        type="text" 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)} 
        placeholder="Your name" 
        className="border p-2 rounded w-full mb-2"
      />
      <textarea 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        placeholder="What's on your mind?" 
        className="border p-2 rounded w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Post</button>
    </form>
  );
}

export default PostForm;
