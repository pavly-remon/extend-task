import { useEffect, useRef, useState } from "react";
const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const abortController = useRef(null);
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
                const json = (await response.json());
                setData(json);
                setError(null);
            }
            catch (err) {
                if (err.name !== "AbortError") {
                    setError(err.message);
                }
            }
            finally {
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
