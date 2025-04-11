import { APIGatewayProxyHandler } from 'aws-lambda';

interface Match{
    utcDate: Date;
    homeTeam: string;
    awayTeam: string;
    homeScore: number | null;
    awayScore: number | null;
}

const getFixtures = async (upcoming: boolean, team: number) => {
    const status = upcoming ? "SCHEDULED" : "FINISHED";
  
    const response = await fetch(`https://api.football-data.org/v4/teams/${team}/matches?limit=3&status=${status}`, {
        method: 'GET',
        headers: {
            'X-Auth-Token': `${"process.env.API_KEY"}`
        }
    });
  
    const data = await response.json();

    let matches: Match[] = [];

    for (const m of data.matches){
        const match: Match = {
            utcDate: m.utcDate,
            homeTeam: m.homeTeam.shortName,
            awayTeam: m.awayTeam.shortName,
            homeScore: m.score.fullTime.home,
            awayScore: m.score.fullTime.away
        } 

        matches.push(match);
    }

    return matches;
};

export const handler: APIGatewayProxyHandler = async (event) => {
    try {
      const upcomingParam = event.queryStringParameters?.upcoming;
      const teamParam = event.queryStringParameters?.team;
  
      if (typeof upcomingParam === 'undefined' || typeof teamParam === 'undefined') {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: 'Missing required query parameters: upcoming, team' }),
        };
      }
  
      const upcoming = upcomingParam.toLowerCase() === 'true';
      const team = parseInt(teamParam, 10);
  
      if (isNaN(team)) {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: 'Invalid team ID' }),
        };
      }
  
      const fixtures = await getFixtures(upcoming, team);
  
      return {
        statusCode: 200,
        body: JSON.stringify(fixtures),
      };
  
    } catch (error) {
      console.error("Error fetching fixtures:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Internal server error' }),
      };
    }
  };