import React, { useState } from 'react';
import Post from '../components/Posts';
import PostForm from '../components/PostForm';

const PostPage = () => {
  const [posts, setPosts] = useState([
    { id: 1, author: 'Shubham Jangle', content: 'NextJS The React Framework for the Web Used by some of the world\'s largest companies...', comments: [] },
    { id: 2, author: 'Chândan Kumar M', content: 'helllo', comments: [] },
  ]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  const addComment = (postId, comment) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
    ));
  };

  return (
    <div className="container mx-auto p-4">
      <PostForm addPost={addPost} />
      <div className="mt-4">
        {posts.map(post => (
          <Post key={post.id} post={post} addComment={addComment} />
        ))}
      </div>
    </div>
  );
}

export default PostPage;
