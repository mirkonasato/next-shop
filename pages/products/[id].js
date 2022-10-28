import Image from 'next/image';
import Page from '../../components/Page';
import { ApiError } from '../../lib/api';
import { getProduct, getProducts } from '../../lib/products';

export async function getStaticPaths() {
  const products = await getProducts();
  return {
    paths: products.map((product) => ({
      params: { id: product.id.toString() },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params: { id } }) {
  try {
    const product = await getProduct(id);
    return {
      props: { product },
      revalidate: parseInt(process.env.REVALIDATE_SECONDS),
    };
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) {
      return { notFound: true };
    }
    throw err;
  }
}

function ProductPage({ product }) {
  console.log('[ProductPage] render:', product);
  return (
    <Page title={product.title}>
      <div className="flex flex-col lg:flex-row">
        <div>
          <Image src={product.pictureUrl} alt=""
            width={640} height={480} priority
          />
        </div>
        <div className="flex-1 lg:ml-4">
          <p className="text-sm">
            {product.description}
          </p>
          <p className="text-lg font-bold mt-2">
            {product.price}
          </p>
        </div>
      </div>
    </Page>
  );
}

export default ProductPage;
