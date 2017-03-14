import BetaSeries from '../lib/betaseries';
import { expect, assert } from 'chai';
import sinon from 'sinon';
import proxyquire from 'proxyquire';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

BetaSeries.setUser({
  userId: 1,
});

global.expect = expect;
global.assert = assert;
global.sinon = sinon;
global.proxyquire = proxyquire;
global.mockStore = mockStore;
