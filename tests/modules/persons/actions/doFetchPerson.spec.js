import personsReducer from '../../../../lib/modules/persons/reducers/persons';

const actionFile = '../lib/modules/persons/actions/doFetchPerson';
const personsFixture = require('../../../fixtures/persons.json');

describe('Retrieve person', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with person ID', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        person: personsFixture[0]
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ personId: 10212 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_PERSON');
      expect(action.payload.personId).to.deep.equal(10212);
      expect(action.payload.person).to.be.an('object');
    });

    it('validate persons reducer', () => {
      const statePersonsReducer = personsReducer(undefined, action);
      expect(Object.keys(statePersonsReducer)).to.deep.equal(['10212']);
    });
  });
});
