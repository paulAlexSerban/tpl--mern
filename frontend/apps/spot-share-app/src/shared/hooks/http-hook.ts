import { useState, useCallback, useRef, useEffect } from 'react';

export const useHttpClient = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);
    const isMounted = useRef(true); // Track if the component is mounted

    // useRef is used to store data that will not trigger a re-render
    // when it changes. It is used to store data that is not part of the
    // component state and will not trigger a re-render when it changes.
    const activeHttpRequests = useRef<AbortController[]>([]);

    // useEffect is used to run side effects in function components.
    // It is similar to componentDidMount, componentDidUpdate, and componentWillUnmount
    useEffect(() => {
        return () => {
            isMounted.current = false; // Set to false when the component unmounts
            activeHttpRequests.current.forEach((abortCtrl: AbortController) => abortCtrl.abort());
        };
    }, []);

    const sendRequest = useCallback(
        async (url: string, method: string = 'GET', body: any = null, headers: any = {}) => {
            setIsLoading(true);
            // AbortController is used to abort a fetch request
            // when the component is unmounted or when the request is no longer needed.
            const httpAbortCtrl = new AbortController();
            activeHttpRequests.current.push(httpAbortCtrl);

            try {
                const response = await fetch(url, {
                    method,
                    body,
                    headers,
                    signal: httpAbortCtrl.signal,
                });
                const responseData = await response.json();

                // Cleanup only if component is not mounted
                if (isMounted.current) {
                    activeHttpRequests.current = activeHttpRequests.current.filter(
                        (reqCtrl) => reqCtrl !== httpAbortCtrl
                    );
                }

                if (!response.ok) {
                    throw new Error(responseData.message);
                }
                setIsLoading(false);
                return responseData;
            } catch (err) {
                const error = err as Error;
                if (error.name !== 'AbortError') {
                    setError(error.message || 'Something went wrong, please try again.');
                    setIsLoading(false);
                }
                throw error;
            }
        },
        []
    );

    const clearError = () => {
        setError(null);
    };

    return { isLoading, error, sendRequest, clearError };
};
