import { useEffect, useRef, useState } from "react";

interface ReturnedObject<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetch = <T, >(url: string, options: RequestInit = {}): ReturnedObject<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const abortController = useRef<AbortController | null>(null);
  useEffect(() => {
    abortController.current = new AbortController();
    const signal = abortController.current.signal;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, { ...options, signal });
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const json = (await response.json()) as T;
        setData(json);
        setError(null);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.current?.abort();
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
