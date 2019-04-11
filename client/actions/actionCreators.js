// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index // index: index
  }
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId, // postId: postId
    author, //author: author,
    comment //comment: comment
  }
}

// remove comment
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    postId, // postId: postId
    i // i: i
  }
}
