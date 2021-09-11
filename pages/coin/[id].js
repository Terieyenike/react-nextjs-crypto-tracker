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
      <div className="flex justify-center h-1/6">
        <div className="flex flex-col items-center justify-center w-1/4 p-16 border border-purple-500 border-solid rounded-lg">
          <Image src={fallback} alt={coin.name} width={200} height={200} />
          <h1 className="mt-8 mb-4">{coin.name}</h1>
          <p className="mb-4 uppercase">{coin.symbol}</p>
          <p className="mb-4 text-3xl">${coin.market_data.current_price.usd}</p>
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
