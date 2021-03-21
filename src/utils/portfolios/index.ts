import { TPortfolios, TQuotes } from '../../types/portfolios';

export const constructReturnsTiles = (portfolioList: TPortfolios, portfolioSelection: string | number) => {
    const isPositiveResults = portfolioSelection === 'winners';

    const { finance } = portfolioList;

    const portfolios = finance?.result[0].portfolios.map(({ pfId, name, shortDescription, dailyPercentGain, userId }) => ({
        pfId, name, shortDescription, dailyPercentGain, userId
    }));

    return portfolios?.filter(({ dailyPercentGain }) => isPositiveResults ? dailyPercentGain > 0 : dailyPercentGain < 0)
        .sort((prev, next) => isPositiveResults ? next.dailyPercentGain - prev.dailyPercentGain : prev.dailyPercentGain - next.dailyPercentGain);
};

export const constructDetailsRows = (quotes: TQuotes, isPositiveResults = true) => {

    const essentials =  Object.keys(quotes).map(key => ({
        shortName: quotes[key].shortName,
        regularMarketChangePercent: quotes[key].regularMarketChangePercent,
        messageBoardId: quotes[key].messageBoardId,
    }));

    return essentials
        .filter(({ regularMarketChangePercent }) => isPositiveResults ? regularMarketChangePercent > 0 : regularMarketChangePercent < 0 )
        .sort((prev, next) => isPositiveResults ? next.regularMarketChangePercent - prev.regularMarketChangePercent : prev.regularMarketChangePercent - next.regularMarketChangePercent);
}