import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

const PostCard = ({ post }) => {
  return (
    <article className="post-card">
      <Link to={`/post/${post.id}`} className="post-link">
        <div className="post-meta">
          <Avatar src={post.author.avatar} alt={post.author.name} />
          <span>{post.author.name}</span>
          <time>{post.date}</time>
        </div>
        <h2>{post.title}</h2>
        <p className="excerpt">{post.excerpt}</p>
      </Link>
    </article>
  );
};

export default PostCard;