import { useState, useEffect, useRef } from "react";

async function fetchNews(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(response.statusText);
    return await response.json();
  }

export default function usePolling( url, interval, initialData ) {
  const [data, setData] = useState(initialData);
  const [isLoading, setLoading] = useState(false)
  const [hasError, setError] = useState(null);
  const currentController = useRef();

  useEffect(() => {

    const fetchData = async () => {
      if (currentController.current) currentController.current.abort();

      const controller = new AbortController();
      currentController.current = controller;
      setLoading(true);

      try {
        const news = await fetchNews(url, { signal: controller.signal });

        if (!controller.signal.aborted) {
          setData(news);
          setError(null);
        }  
      } catch (e) {
        if (!controller.signal.aborted) setError(e);

      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, interval);

    return () => {
      clearInterval(intervalId);
      if (currentController.current) {
        currentController.current.abort();
      }
    }
  },[url, interval]);

  return {data, isLoading, hasError}
}