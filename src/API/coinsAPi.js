export const GetCoins = async () => {
    const Api = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
    const response = await fetch(Api);
    const result = await response.json();
    return result
}