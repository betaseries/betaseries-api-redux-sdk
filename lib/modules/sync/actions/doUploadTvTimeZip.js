import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Upload TVTime user zip file
 *
 * **Dispatch**: `USER_UPLOAD_TVTIME_ZIP`
 *
 * @alias module:Sync.doUploadTvTimeZip
 * @category actions
 *
 * @example
 * BetaSeries.getAction('sync', 'doUploadTvTimeZip')({ file: fileObject });
 *
 * @param {Object}  [obj]         Accept the following:
 * @param {Object}  [obj.file]    TVTime zip file from DocumentPicker (must contain uri, type, name)
 *
 * @returns {Promise}
 */
const doUploadTvTimeZip = ({ file, ...props }) =>
  dispatch => {
    const fileData = {
      key: 'zip',
      uri: file.uri,
      type: file.type || 'application/zip',
      name: file.name || 'tvtime.zip'
    };

    return ApiFetch.uploadFile(
      'sync/tvtime_zip',
      {},
      fileData,
      props
    ).then(response => {
      dispatch({
        type: constants.USER_UPLOAD_TVTIME_ZIP,
        payload: {
          ...props,
          ...response
        }
      });

      return response;
    });
  };

export default doUploadTvTimeZip;
