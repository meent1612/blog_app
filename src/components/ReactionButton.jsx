import React from 'react';
import { 
  Favorite,   // love
  ThumbUp,    // like
  ThumbDown,  // dislike
  MoodBad,    // angry
  SentimentVeryDissatisfied // sad
} from '@mui/icons-material';
import '../styles/reactionStyles.css';

const ReactionButton = ({ type, count, active, onClick }) => {
  const icons = {
    like: <ThumbUp />,
    love: <Favorite />,
    angry: <MoodBad />,
    sad: <SentimentVeryDissatisfied />,
    dislike: <ThumbDown />
  };

  return (
    <button 
      className={`reaction-button ${type} ${active ? 'active' : ''}`}
      onClick={onClick}
      aria-label={type}
    >
      {icons[type]}
      <span className="count">{count}</span>
    </button>
  );
};

export default ReactionButton;