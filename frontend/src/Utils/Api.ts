export async function Api(request: string) {
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

export async function FixtureAPI(teamId: number) {
    try {
        const response = await fetch("https://0vxnznhso2.execute-api.us-east-1.amazonaws.com/default/fixtures-handler?upcoming=true&team=" + teamId, {
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