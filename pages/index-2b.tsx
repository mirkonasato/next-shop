// Option 2b: fetch products on the client side (in useEffect)
// from an internal API route
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Title from '../components/Title';
import { Product } from '../lib/products';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    (async () => {
      const response = await fetch('/api/products');
      const products = await response.json();
      setProducts(products);
    })();
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
};

export default HomePage;
