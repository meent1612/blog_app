import React from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';

const PostList = ({ currentPosts }) => {
  if (!currentPosts || currentPosts.length === 0) {
    return <div className="no-posts">No posts to display</div>;
  }

  return (
    <div className="post-list">
      {currentPosts.map(post => (
        <Link 
          to={`/post/${post.id}`} 
          key={post.id} 
          className="post-link"
        >
          <Post post={post} />
        </Link>
      ))}
    </div>
  );
};

export default PostList;