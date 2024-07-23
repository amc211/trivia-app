import { useState, useEffect } from 'react';
import axios from 'axios';

function useAxiosGet() {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const callApi = async (apiUrl) => {
    try {
      const payload = await axios.get(apiUrl)
      setData(payload.data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError({
        status: error.response.status,
        message: error.message
      })

      setData(null);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (isLoading) callApi(url);
  }, [isLoading, url]);


  return [data, setUrl, isLoading, setIsLoading, error]
}


export default useAxiosGet;