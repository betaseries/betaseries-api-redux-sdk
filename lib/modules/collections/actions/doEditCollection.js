import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Edit an existing collection
 *
 * **Dispatch**: `UPDATE_COLLECTION`
 *
 * @alias module:Collections.doEditCollection
 * @category actions
 *
 * @example
 * BetaSeries.getAction('collections', 'doEditCollection')({
 *   id: 456,
 *   name: 'Test',
 *   private: true,
 *   description: '',
 *   items: [{ id: 1, type: 'show', note: 'Test' }],
 * });
 *
 * @param {Object}    [obj]              Accept the following:
 * @param {Number}    [obj.id]           Collection id for edit
 * @param {String}    [obj.name]         Collection name
 * @param {Boolean}   [obj.private]      Collection is private or not
 * @param {String}    [obj.description]  Collection description (optional)
 * @param {Array}     [obj.items]        Collection items (show or movie)
 *
 * @returns {Promise}
 */
const doEditCollection = ({ ...props }) =>
  dispatch =>
    ApiFetch.post(
      'collections/update',
      {},
      {
        ...props
      }
    ).then(response =>
      dispatch({
        type: constants.UPDATE_COLLECTION,
        payload: {
          ...props,
          collection: response.collection || {}
        }
      }));

export default doEditCollection;
