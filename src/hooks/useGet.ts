import {useEffect, useState} from 'react';

import axios, {AxiosRequestConfig} from 'axios';

export function useGet<T = unknown>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url, options)
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [url, options]);

  return {data, error, isFetching};
}
