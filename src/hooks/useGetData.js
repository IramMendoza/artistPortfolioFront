import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(url)
      .then(response => setData(response.data))
      .catch(error => setError(error)); // Corregido para acceder a error.response
  }, []);

  return { data, error };
};

