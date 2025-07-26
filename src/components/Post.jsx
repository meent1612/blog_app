import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactionButton from './ReactionButton';
import CommentList from './CommentList';
import { authors } from '../data/authors';
import Avatar from '@mui/material/Avatar';

const Post = ({ post, isDetailed = false }) => {
  const [activeReaction, setActiveReaction] = useState(null);
  const [reactionCounts, setReactionCounts] = useState({
    like: post.likes || 0,
    love: 0,
    angry: 0,
    sad: 0
  });

  const author = authors.find(a => a.id === post.authorId);

  const handleReactionClick = (type) => {
    setReactionCounts(prev => {
      const newCounts = {...prev};
      
      if (activeReaction === type) {
        newCounts[type] -= 1;
        setActiveReaction(null);
      } else {
        if (activeReaction) {
          newCounts[activeReaction] -= 1;
        }
        newCounts[type] += 1;
        setActiveReaction(type);
      }
      
      return newCounts;
    });
  };

  return (
    <article className={`post ${isDetailed ? 'detailed' : ''}`}>
      <div className="post-author-header">
        <Link to={`/author/${author.id}`} className="author-link">
          <Avatar 
            src={author.avatar} 
            alt={author.name}
            className="post-author-avatar"
          />
          <span className="post-author-name">{author.name}</span>
        </Link>
        <span className="post-date">{post.date}</span>
      </div>

      {!isDetailed ? (
        <Link to={`/post/${post.id}`} className="post-title-link">
          <h2 className="post-title">{post.title}</h2>
        </Link>
      ) : (
        <h2 className="post-title">{post.title}</h2>
      )}

      {isDetailed && (
        <div className="post-content">
          {post.content.split('\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      )}

      <div className="post-reactions">
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
          type="angry" 
          count={reactionCounts.angry} 
          active={activeReaction === 'angry'}
          onClick={() => handleReactionClick('angry')}
        />
        <ReactionButton 
          type="sad" 
          count={reactionCounts.sad} 
          active={activeReaction === 'sad'}
          onClick={() => handleReactionClick('sad')}
        />
      </div>

      {isDetailed && <CommentList postId={post.id} />}
    </article>
  );
};

export default Post;