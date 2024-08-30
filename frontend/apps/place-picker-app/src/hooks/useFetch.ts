// Import useState and useEffect hooks from React
import { useState, useEffect } from 'react';

// Define a type alias for a function that takes a URL and returns a Promise of type T
type FetchFn<T> = (url: string) => Promise<T>;

/**
 * Can be used in any component that needs to fetch data from a URL. It encapsulates the logic for
 * fetching data, handling errors, and managing state, making it easier to maintain and test.
 */
const useFetch = <T>(fetchFn: FetchFn<T>, url: string, initialValue: T) => {
    // Define a state variable for tracking if data is currently being fetched
    const [isFetching, setIsFetching] = useState<boolean>(false);
    // Define a state variable for storing the fetched data
    const [fetchedData, setFetchedData] = useState<T>(initialValue);
    // Define a state variable for storing any error that occurs during fetching
    const [error, setError] = useState<{ message: string } | null>(null);

    // Use the useEffect hook to fetch data when the component mounts or when fetchFn or url changes
    useEffect(() => {
        // Set isFetching to true to indicate that data is being fetched
        setIsFetching(true);
        // Define an async function to fetch data
        const fetchData = async () => {
            try {
                // Fetch data using the provided fetch function
                const data = await fetchFn(url);
                // Store the fetched data in state
                setFetchedData(data);
                // Set isFetching to false to indicate that data is no longer being fetched
                setIsFetching(false);
            } catch (error) {
                // If an error occurs during fetching, store the error in state
                if (error instanceof Error) {
                    setError({
                        message: error.message || 'Something went wrong! - Failed to fetch data',
                    });
                    setIsFetching(false);
                }
            }
        };
        // Call the fetchData function
        fetchData();
    }, [fetchFn, url]); // useEffect dependency array

    // Return the state variables and their setters
    return { isFetching, setIsFetching, fetchedData, setFetchedData, error, setError };
};

// Export the custom hook
export default useFetch;
