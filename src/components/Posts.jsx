import React, { useState } from 'react';

const Post = ({ post, addComment }) => {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      addComment(post.id, comment);
      setComment('');
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <h2 className="text-xl font-bold">{post.author}</h2>
      <p className="mt-2">{post.content}</p>
      <form onSubmit={handleCommentSubmit} className="mt-4">
        <input 
          type="text" 
          value={comment} 
          onChange={(e) => setComment(e.target.value)} 
          placeholder="Add a comment..." 
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Post</button>
      </form>
      <div className="mt-4">
        {post.comments.map((comment, index) => (
          <p key={index} className="bg-gray-100 p-2 rounded mt-2">{comment}</p>
        ))}
      </div>
    </div>
  );
}

export default Post;
