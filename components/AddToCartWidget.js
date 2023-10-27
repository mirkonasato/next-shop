const { useState } = require('react');
import Button from './Button';

function AddToCartWidget({ productId }) {
  const [quantity, setQuantity] = useState(1);

  const handleClick = async () => {
    console.log('should add to cart:', { productId, quantity });
  };

  return (
    <div className="py-2">
      <input type="number" min="1"
        className="border rounded px-3 py-1 mr-2 w-16 text-right"
        value={quantity.toString()}
        onChange={(event) => setQuantity(parseInt(event.target.value))}
      />
      <Button onClick={handleClick}>
        Add to cart
      </Button>
    </div>
  );
}

export default AddToCartWidget;
