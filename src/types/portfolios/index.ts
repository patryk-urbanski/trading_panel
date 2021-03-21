export type TPortfolios = {
    finance?: {
        result: Array<{
            portfolios: Array<{
                pfId: string,
                name: string,
                shortDescription: string,
                dailyPercentGain: number,
                userId: string,
            }>
        }>
    };
};

type TPortfolioQuote = {
    shortName: string,
    regularMarketChangePercent: number,
    messageBoardId: string,
};

export type TQuotes = {
    [key: string]: TPortfolioQuote;
};
