import Head from 'next/head';
import { PropsWithChildren } from 'react';
import Title from './Title';

interface PageProps extends PropsWithChildren {
  title: string;
}

const Page: React.FC<PageProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{`${title} - Next Shop`}</title>
      </Head>
      <main className="px-6 py-4">
        <Title>{title}</Title>
        {children}
      </main>
    </>
  );
};

export default Page;
