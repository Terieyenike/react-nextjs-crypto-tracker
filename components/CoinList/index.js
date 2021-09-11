import React from 'react';
import Coins from '../Coins';

const CoinList = ({ filteredCoins }) => {
  return (
    <>
      {React.Children.toArray(
        filteredCoins
          .slice(0, 10)
          .map((coin) => (
            <Coins
              key={coin.id}
              name={coin.name}
              id={coin.id}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          ))
      )}
    </>
  );
};

export default CoinList;
