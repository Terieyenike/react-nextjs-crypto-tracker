import { useState } from 'react';
import CoinList from '../components/CoinList';
import SearchBar from '../components/SearchBar';
import Layout from '../sections/Layout';

export default function Home({ filteredCoins }) {
  const [search, setSearch] = useState('');

  const allCoins = filteredCoins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div>
      <Layout>
        <section className="flex flex-col items-center m-2.5">
          <SearchBar type="text" placeholder="Search" onChange={handleChange} />
          <CoinList filteredCoins={allCoins} />
        </section>
      </Layout>
    </div>
  );
}

export const getServerSideProps = async () => {
  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  const res = await fetch(url);
  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins,
    },
  };
};
