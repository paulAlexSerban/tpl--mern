export const getData = async <T>(url: string) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // using unknown here will force the caller to cast the return value to the expected type
        const data = (await response.json()) as unknown;

        if (!response.ok) {
            throw new Error(
                JSON.stringify({
                    status: response.status,
                    statusText: response.statusText,
                    message: `Failed to fetch data from the server.`,
                })
            );
        }

        return data as T;
    } catch (error) {
        console.error('Network error:', error);
    }
};
