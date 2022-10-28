// Option 2a: fetch products on the client side (in useEffect)
// directly from an external API
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Title from '../components/Title';
import { getProducts } from '../lib/products';

function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  console.log('[HomePage] render:', products);
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>Next Shop</Title>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
