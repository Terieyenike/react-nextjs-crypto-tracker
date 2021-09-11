import Image from 'next/image';
import Layout from '../../sections/Layout';

const Coin = ({ coin }) => {
  const fallback =
    coin.image.large || 'https://pngimg.com/uploads/gold/gold_PNG11010.png';
  return (
    <Layout
      pageMeta={{
        title: `Crypto Coin ${coin.id}`,
      }}>
      <div>
        <div>
          <Image
            src={fallback}
            alt={coin.name}
            width={30}
            height={30}
            className="mr-4"
          />
          <h1>{coin.name}</h1>
          <p>{coin.symbol}</p>
          <p>{coin.market_data.current_price.usd}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
  `);

  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
}
