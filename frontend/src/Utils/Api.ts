async function Api(request: string) {
    try {
        const response = await fetch("http://127.0.0.1:5000/" + request, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        return result
    } catch (error) {
        console.log("Error getting data");
    }
}

export default Api