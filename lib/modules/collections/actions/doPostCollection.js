import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Post a new collection
 *
 * **Dispatch**: `ADD_COLLECTION`
 *
 * @alias module:Collections.doPostCollection
 * @category actions
 *
 * @example
 * BetaSeries.getAction('collections', 'doPostCollection')({
 *   name: 'Test',
 *   private: true,
 *   description: '',
 *   items: [{ id: 1, type: 'show', note: 'Test' }],
 * });
 *
 * @param {Object}    [obj]              Accept the following:
 * @param {String}    [obj.name]         Collection name
 * @param {Boolean}   [obj.private]      Collection is private or not
 * @param {String}    [obj.description]  Collection description (optional)
 * @param {Array}     [obj.items]        Collection items (show or movie)
 *
 * @returns {Promise}
 */
const doPostCollection = ({ ...props }) =>
  dispatch =>
    ApiFetch.post(
      'collections/collection',
      {},
      {
        ...props
      }
    ).then(response =>
      dispatch({
        type: constants.ADD_COLLECTION,
        payload: {
          ...props,
          collection: response.collection || {}
        }
      }));

export default doPostCollection;
