import { useState, useEffect, useCallback } from 'react';

type HttpRequestConfig = {
    method?: string;
    headers?: HeadersInit;
    body?: BodyInit | null;
};

const useHttp = <T>(url: string, config: HttpRequestConfig, initialData?: T) => {
    const [data, setData] = useState<T | undefined>(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const clearData = () => {
        setData(undefined);
    };

    const sendHttpRequest = async (url: string, config: HttpRequestConfig): Promise<T> => {
        const response = await fetch(url, config);
        if (!response.ok) {
            const resData = await response.json();
            throw new Error(resData.message || 'Could not fetch data.');
        }
        return response.json();
    };

    const sendRequest = useCallback(
        async (data?: string) => {
            setIsLoading(true);
            try {
                const responseData: T = await sendHttpRequest(url, { ...config, body: data });
                setData(responseData);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message || 'Something went wrong!');
                }
            }
            setIsLoading(false);
        },
        [url, config]
    );

    useEffect(() => {
        if ((config && (config.method === 'GET' || !config.method)) || !config) {
            sendRequest();
        }
    }, [sendRequest, config]);

    return { data, isLoading, error, sendRequest, clearData };
};

export default useHttp;
