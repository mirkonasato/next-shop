function stripProduct(product) {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
  };
}

export async function getProduct(id) {
  const response = await fetch(`http://localhost:1337/products/${id}`);
  const product = await response.json();
  return stripProduct(product);
}

export async function getProducts() {
  const response = await fetch('http://localhost:1337/products');
  const products = await response.json();
  return products.map(stripProduct);
}
