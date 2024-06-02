import { useState, useEffect } from "react";

function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/product");
        const data = await response.json();
        if (data._embedded && Array.isArray(data._embedded.products)) {
          setProducts(data._embedded.products);
        } else {
          console.error("La réponse de l'API n'est pas dans le format attendu:", data);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des clients:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product._links.self.href}>
            {product.name} - {product.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductPage;
