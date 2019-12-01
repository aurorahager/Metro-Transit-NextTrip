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
    const mockSetData = jest.fn();
    await API.fetchTransitData('Routes', mockSetData);
    expect(moxios.requests.mostRecent().url).toBe('https://svc.metrotransit.org/NexTrip/Routes?format=json');
  });
  test('Calls the setData callback when gets response', async () => {
    const transitData = [{ id: 1, direction: 'northbound' }, { id: 2, direction: 'southbound' }]
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: transitData
      });
    });
    const mockSetData = jest.fn();
    await API.fetchTransitData('Routes', mockSetData);
    expect(mockSetData).toHaveBeenCalledWith(transitData);
  });
});