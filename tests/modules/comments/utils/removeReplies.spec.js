import removeRepliesProxy
  from '../../../../lib/modules/comments/utils/removeReplies';

describe('Remove replies comments elements from array', () => {
  it('without replies', () => {
    const comments = [
      {
        id: 1,
        in_reply_to: null
      },
      {
        id: 2,
        in_reply_to: 0
      },
      {
        id: 3,
        in_reply_to: '0'
      }
    ];

    expect(
      removeRepliesProxy(comments).map(comment => comment.id)
    ).to.deep.equal([1, 2, 3]);
  });

  it('with one replies', () => {
    const comments = [
      {
        id: 1,
        in_reply_to: null
      },
      {
        id: 2,
        in_reply_to: '1'
      },
      {
        id: 3,
        in_reply_to: '0'
      }
    ];

    expect(
      removeRepliesProxy(comments).map(comment => comment.id)
    ).to.deep.equal([1, 3]);
  });

  it('with all is replies', () => {
    const comments = [
      {
        id: 1,
        in_reply_to: '4'
      },
      {
        id: 2,
        in_reply_to: 1
      },
      {
        id: 3,
        in_reply_to: '2'
      }
    ];

    expect(
      removeRepliesProxy(comments).map(comment => comment.id)
    ).to.deep.equal([]);
  });
});
