import { expect } from 'chai';
import proxyquire from 'proxyquire';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

global.expect = expect;
global.proxyquire = proxyquire;
global.mockStore = mockStore;
