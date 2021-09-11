import Image from 'next/image';
import Link from 'next/link';

const Coins = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id,
}) => {
  const fallback = image || 'https://pngimg.com/uploads/gold/gold_PNG11010.png';
  return (
    <>
      <Link href="/coin/[id]" as={`/coin/${id}`} passHref>
        <a href="">
          <section className="flex justify-center">
            <div className="flex flex-row items-center justify-start w-full h-20 px-8 py-0 mx-auto border-b border-gray-400 border-solid hover:bg-gray-100">
              <div className="flex items-center">
                <Image
                  src={fallback}
                  alt={name}
                  width={30}
                  height={30}
                  className="mr-4"
                />
                <h1 className="w-40 text-base">{name}</h1>
                <p className="uppercase">{symbol}</p>
              </div>
              <div className="flex justify-between w-full text-right">
                <p className="w-25">${price}</p>
                <p className="w-40">${volume.toLocaleString()}</p>
                {priceChange < 0 ? (
                  <p className="text-red-700 w-25">{priceChange.toFixed(2)}%</p>
                ) : (
                  <p className="text-green-700 w-25">
                    {priceChange.toFixed(2)}%
                  </p>
                )}
                <p className="w-60">Mkt Cap: ${marketcap.toLocaleString()}</p>
              </div>
            </div>
          </section>
        </a>
      </Link>
    </>
  );
};

export default Coins;
