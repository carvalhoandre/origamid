import { useEffect, useState } from "react";
import { FetchState } from "./types";

const useFetch = <T>(url: string): FetchState<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            const controller = new AbortController();
            const signal = controller.signal;

            try {
                const response = await fetch(url, { signal });
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error instanceof Error ? error.message : "Erro desconhecido");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
