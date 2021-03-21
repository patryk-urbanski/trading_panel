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

export type TPortfolioDetails = {
    finance?: {
        result: Array<{
            quotes: {
                [key: string]: {
                    shortName: string,
                    regularMarketChangePercent: number,
                    messageBoardId: string,
                }
            }
        }>
    };
};
