import { useQuery } from 'react-query';
import Page from '../components/Page';
import { fetchJson } from '../lib/api';
import { CartItem } from '../lib/cart';

const CartPage: React.FC = () => {
  const query = useQuery<CartItem[]>('cartItems', () => fetchJson('/api/cart'));
  const cartItems = query.data;

  console.log('[CartPage] cartItems:', cartItems);
  return (
    <Page title="Cart">

    </Page>
  );
};

export default CartPage;
