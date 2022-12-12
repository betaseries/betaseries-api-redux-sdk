import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Post member socio demo info
 *
 **Dispatch**: `POST_MEMBER_SOCIO_DEMO`
 *
 * @alias module:Members.doPostMemberSocioDemo
 * @category actions
 *
 * @example
 * BetaSeries.getAction('members', 'doPostMemberSocioDemo')({
 *   genre: 2,
 *   csp: 3,
 *   birthday: 2000-01-01,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.genre]       Genre (1 : homme, 2 : femme, 3 : non-binaire, 4 : transgenre, 5 : intersexe, 0 : confidentiel)
 * @param {Number}  [obj.csp]         CSP (7 : étudiant, 5 : employé, 3 : cadre, 4 : profession intermédiaire, 9 : inactif, 2 : artisan commerçant, 10 : retraité, 6 : ouvrier, 1 : agriculteur)
 * @param {String}  [obj.birthday]    Date de naissance (format Y-m-d)
 * @param {String}  [obj.firstname]   Prénom
 * @param {String}  [obj.lastname]    Nom de famille
 * @param {String}  [obj.address1]    Adresse ligne 1
 * @param {String}  [obj.address2]    Adresse ligne 2
 * @param {String}  [obj.zipcode]     Code postal
 * @param {String}  [obj.city]        Ville
 * @param {String}  [obj.country]     Pays
 * @param {Number}  [obj.hh_size]     Nombre de personnes dans le foyer
 * @param {Number}  [obj.hh_children] Nombre d’enfants personnes dans le foyer
 * @param {String}  [obj.hh_ages]     Age des enfants dans le foyer (peut être 0-5, 6-12, 13-15, 16-18 et si plusieurs alors séparés par une virgule)
 *
 * @returns {Promise}
 */
const doPostMemberSocioDemo = ({ ...props }) =>
  dispatch =>
    ApiFetch.post(
      'members/sociodemo',
      {},
      {
        ...props
      }
    ).then(response =>
      dispatch({
        type: constants.POST_MEMBER_SOCIO_DEMO,
        payload: {
          ...props,
          sociodemo: response.sociodemo || {},
          errors: response.errors || []
        }
      }));

export default doPostMemberSocioDemo;
