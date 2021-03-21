import { fetchFromApi } from './utils';

const apiCalls = () => {
    const getSectorPerformance = () => {
        return fetchFromApi({
            path: "https://alpha-vantage.p.rapidapi.com/query?function=SECTOR",
            httpMethod: "GET",
            service: 'alpha',
        })
    };

    const getStockMoversByRegion = (region: string) => {
        return fetchFromApi({
            path: `https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-movers?region=${region}&lang=en-US&start=0&count=6`,
            httpMethod: "GET",
            service: 'yahoo',
        })
    };

    const getPopularPortfolioReturns = () => {
        return fetchFromApi({
            path: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-popular-watchlists',
            httpMethod: "GET",
            service: 'yahoo',
        })
    };

    const getPortfolioDetails = ({ userId, pfId }: { userId: string, pfId: string }) => {
        return fetchFromApi({
            path: `https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-watchlist-detail?userId=${userId}&pfId=${pfId}`,
            httpMethod: "GET",
            service: 'yahoo',
        })
    };

    return {
        getSectorPerformance,
        getStockMoversByRegion,
        getPopularPortfolioReturns,
        getPortfolioDetails
    }
};

export default apiCalls;