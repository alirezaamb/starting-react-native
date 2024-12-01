import { useState } from 'react';

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const request = async (...args) => {
    setLoading(true);
    const res = await apiFunc(...args);
    setLoading(false);

    if (!res.ok) return setError(true);

    setError(false);
    setData(res.data);
    // try {
    //   console.log('try');
    //   const res = await listingsApi.getListings();
    //   console.log(res, 'trryyyyy');
    //   setListings(res.data);
    //   setError(false);
    // } catch (error) {
    //   console.log('catch');
    //   setError(true);
    //   console.error('Error fetching listings:', error);
    // }
  };

  return { data, error, loading, request };
};
