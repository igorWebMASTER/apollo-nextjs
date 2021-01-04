import Head from 'next/head';
import { useQuery, gql } from '@apollo/client';
import { initializeApollo } from 'src/apollo';
import styles from '../styles/Home.module.css';

const MyQuery = gql`
  query MyQuery {
    name
  }
`;

export default function Home() {
  const { data, loading } = useQuery(MyQuery);

  if (loading) return <span> loading...</span>;

  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: MyQuery,
  });

  return {
    props: {
      initializeApolloState: apolloClient.cache.extract(),
    },
  };
}
