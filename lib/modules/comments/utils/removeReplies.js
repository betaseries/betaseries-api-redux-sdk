export default (comments = []) =>
  comments.filter(comment => parseInt(comment.in_reply_to || 0, 10) === 0);
