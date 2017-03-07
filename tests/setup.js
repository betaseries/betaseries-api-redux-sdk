import { expect, assert } from 'chai';
import proxyquire from 'proxyquire';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

global.expect = expect;
global.assert = assert;
global.proxyquire = proxyquire;
global.mockStore = mockStore;
