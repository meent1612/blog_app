import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux'; // Assuming you have auth state

const CommentForm = ({ postId }) => {
  const [commentText, setCommentText] = useState('');
  // const currentUser = useSelector(state => state.auth.user);
  const currentUser = { id: 1, name: 'Current User', avatar: '' }; // Mock user

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    
    // Handle comment submission
    console.log('New comment:', {
      postId,
      text: commentText,
      author: currentUser.id
    });
    
    setCommentText('');
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <div className="comment-form-header">
        <Avatar 
          src={currentUser.avatar} 
          alt={currentUser.name}
          className="comment-form-avatar"
        />
        <span>Write a comment...</span>
      </div>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Share your thoughts..."
        rows="3"
      />
      <div className="comment-form-actions">
        <button type="submit">Post Comment</button>
      </div>
    </form>
  );
};

export default CommentForm;