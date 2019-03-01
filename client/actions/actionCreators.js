// Increment Likes
export function incrementLikes(i) {
  return {
    type: 'INCREMENT_LIKES',
    i
  };
}

// Add Comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  };
}

// Remove Comment
export function increment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    i
  };
}
