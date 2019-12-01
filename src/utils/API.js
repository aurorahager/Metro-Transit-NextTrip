import Axios from 'axios';
export default {
  // function to get data from metro transit API
  fetchTransitData: async (url, setData) => {
    const res = await Axios.get(`https://svc.metrotransit.org/NexTrip/${url}?format=json`);
    const data = res.data;
    setData(data);
  }
}