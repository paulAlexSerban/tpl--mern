export const postData = async <T>(query: string, formData: T, resetFromFn?: () => void) => {
    try {
        const response = await fetch(query, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        // using unknown here will force the caller to cast the return value to the expected type
        const data = (await response.json()) as unknown;

        if (response.ok) {
            if (resetFromFn) {
                resetFromFn();
            }
        } else {
            // throw new Error(data.message);
            throw new Error(
                JSON.stringify({
                    status: response.status,
                    statusText: response.statusText,
                    message: 'Failed to send data to the server.',
                })
            );
        }
        return data as T;
    } catch (error) {
        console.error('Network error:', error);
    }
};
