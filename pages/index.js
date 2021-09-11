import Head from 'next/head';
import Image from 'next/image';
import SearchBar from '../components/SearchBar';
import Layout from '../sections/Layout';

export default function Home() {
  return (
    <div>
      <Layout>
        <section className="flex flex-col items-center m-2.5">
          <SearchBar type="text" placeholder="Search" />
        </section>
      </Layout>
    </div>
  );
}
