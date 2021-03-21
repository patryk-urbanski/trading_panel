import { TPortfolios, TPortfolioDetails } from '../../types/portfolios';

export const constructReturnsTiles = (portfolioList: TPortfolios, portfolioSelection: string | number) => {
    const { finance } = portfolioList;

    const portfolios = finance?.result[0].portfolios.map(({ pfId, name, shortDescription, dailyPercentGain, userId }) => ({
        pfId, name, shortDescription, dailyPercentGain, userId
    }));

    const positiveReturns = portfolios?.filter(({ dailyPercentGain }) => dailyPercentGain > 0).sort((prev, next) => next.dailyPercentGain - prev.dailyPercentGain);
    const negativeReturns = portfolios?.filter(({ dailyPercentGain }) => dailyPercentGain < 0).sort((prev, next) => prev.dailyPercentGain - next.dailyPercentGain);

    return portfolioSelection === 'winners' ? positiveReturns : negativeReturns;
};

export const constructDetailsRows = (portfolioDetails: TPortfolioDetails) => {
    const { finance } = portfolioDetails;

    const portfolioStockTickers = Object.keys(finance?.result[0].quotes).map(key => key);

    // return (({ shortName, regularMarketChangePercent, messageBoardId }) => ({ shortName, regularMarketChangePercent, messageBoardId }))
}