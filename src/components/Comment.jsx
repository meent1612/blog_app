import React, { useState } from 'react';
import ReactionButton from './ReactionButton';
import { authors } from '../data/authors';

const Comment = ({ comment }) => {
  const [activeReaction, setActiveReaction] = useState(null);
  const [reactionCounts, setReactionCounts] = useState({
    like: comment.likes,
    love: 0,
    dislike: 0
  });

  const author = authors.find(a => a.id === comment.authorId);

  const handleReactionClick = (type) => {
    setReactionCounts(prev => {
      const newCounts = {...prev};
      
      // If clicking the same reaction, remove it
      if (activeReaction === type) {
        newCounts[type] -= 1;
        setActiveReaction(null);
      } else {
        // If another reaction was active, decrease its count
        if (activeReaction) {
          newCounts[activeReaction] -= 1;
        }
        // Increase the new reaction count
        newCounts[type] += 1;
        setActiveReaction(type);
      }
      
      return newCounts;
    });
  };

  return (
    <div className="comment">
      <div className="comment-header">
        <span className="comment-author">{author.name}</span>
        <span className="comment-date">{comment.date}</span>
      </div>
      <div className="comment-content">{comment.content}</div>
      <div className="comment-reactions">
        <ReactionButton 
          type="like" 
          count={reactionCounts.like} 
          active={activeReaction === 'like'}
          onClick={() => handleReactionClick('like')}
        />
        <ReactionButton 
          type="love" 
          count={reactionCounts.love} 
          active={activeReaction === 'love'}
          onClick={() => handleReactionClick('love')}
        />
        <ReactionButton 
          type="dislike" 
          count={reactionCounts.dislike} 
          active={activeReaction === 'dislike'}
          onClick={() => handleReactionClick('dislike')}
        />
      </div>
    </div>
  );
};

export default Comment;