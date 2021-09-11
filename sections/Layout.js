import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

import { useRouter } from 'next/router';

const Layout = ({ children, pageMeta }) => {
  const router = useRouter();
  const meta = {
    title: 'Crypto Tracker',
    description: 'Analyse crypto exchange coins and trade comfortably!',
    type: 'website',
    name: 'Teri Eyenike',
    ...pageMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="author" content={meta.name} />
        <meta name="description" content={meta.description} />
        <meta
          property="og:url"
          content={`http://localhost:3000${router.asPath}`}
        />
        <meta
          property="og:url"
          content={`http://localhost:3000${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={'Crypto Tracker'} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
