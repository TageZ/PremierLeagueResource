async function Api(request: string) {
    try {
        const response = await fetch("https://flask-service.pibus1em5gjgm.us-east-1.cs.amazonlightsail.com/" + request, {
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