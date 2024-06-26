import { Link } from "react-router-dom";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Products = () => {
  const { data, error } = useSWR("https://fakestoreapi.com/products", fetcher);

  if (error) return <div>Failed to load events</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
