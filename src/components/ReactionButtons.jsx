import { useState } from 'react'

const postReactions = [
  { name: 'like', emoji: '👍', label: 'Like' },
  { name: 'love', emoji: '❤️', label: 'Love' },
  { name: 'sad', emoji: '😢', label: 'Sad' },
  { name: 'angry', emoji: '😠', label: 'Angry' }
]

const commentReactions = [
  { name: 'like', emoji: '👍', label: 'Like' },
  { name: 'dislike', emoji: '👎', label: 'Dislike' }
]

function ReactionButtons({ reactions, postId, type }) {
  const [activeReaction, setActiveReaction] = useState(null)
  const [localReactions, setLocalReactions] = useState(reactions)
  
  const reactionConfig = type === 'post' ? postReactions : commentReactions

  const handleReaction = (reactionName) => {
    if (activeReaction === reactionName) {
      // If clicking the same reaction, remove it
      setLocalReactions(prev => ({
        ...prev,
        [reactionName]: prev[reactionName] - 1
      }))
      setActiveReaction(null)
    } else {
      // If clicking a different reaction
      if (activeReaction) {
        // Decrement previous reaction
        setLocalReactions(prev => ({
          ...prev,
          [activeReaction]: prev[activeReaction] - 1
        }))
      }
      // Set new reaction
      setActiveReaction(reactionName)
      setLocalReactions(prev => ({
        ...prev,
        [reactionName]: (prev[reactionName] || 0) + 1
      }))
    }
  }

  return (
    <div className="reaction-buttons">
      {reactionConfig.map((reaction) => (
        <button
          key={reaction.name}
          className={`reaction-btn ${activeReaction === reaction.name ? 'active' : ''}`}
          onClick={() => handleReaction(reaction.name)}
          aria-label={reaction.label}
        >
          <span className="emoji">{reaction.emoji}</span>
          <span className="count">{localReactions[reaction.name] || 0}</span>
        </button>
      ))}
      {type === 'comment' && (
        <>
          <button className="comment-action-btn" aria-label="Reply">
            <span className="emoji">↩️</span>
          </button>
          <button className="comment-action-btn" aria-label="Report">
            <span className="emoji">⚠️</span>
          </button>
        </>
      )}
    </div>
  )
}

export default ReactionButtons