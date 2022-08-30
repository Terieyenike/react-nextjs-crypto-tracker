import {useState} from 'react';
import CoinList from '../components/CoinList';
import SearchBar from '../components/SearchBar';
import Layout from '../sections/Layout';

import {
    useAuthenticator,
    withAuthenticator,
    // View,
    Button,
    Flex,
    Heading
} from '@aws-amplify/ui-react';
import {Amplify} from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from "../src/aws-exports";

Amplify.configure(awsExports)

const Home = ({filteredCoins}) => {
    const {user, signOut} = useAuthenticator((context) => [context.user]);

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
                <Flex direction={"row"} justifyContent="center" alignItems="center">
                    {/*<View textAlign='center'>*/}

                        <Heading level={3} color="blue" fontWeight="bold">Welcome, {user.username}!</Heading>
                        <Button fontWeight='normal' onClick={signOut} size='small'>
                            Sign Out
                        </Button>


                    {/*</View>*/}
                </Flex>

                <section className="flex flex-col items-center m-2.5">
                    <SearchBar type="text" placeholder="Search" onChange={handleChange}/>
                    <CoinList filteredCoins={allCoins}/>
                </section>
            </Layout>
        </div>
    );
}

export default withAuthenticator(Home)

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
