import moxios from 'moxios';
import API from './API';

describe('moxios tests', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('Makes API request to correct URL', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200
      });
    });
    await API.fetchTransitData('Routes');
    expect(moxios.requests.mostRecent().url).toBe('https://svc.metrotransit.org/NexTrip/Routes?format=json');
  });
});