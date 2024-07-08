import { useContext } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { AuthContext } from "../context/AuthContext";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Products = () => {
  const { user, userLogout } = useContext(AuthContext);
  if (user === null) return <div>Effettua prima l'accesso</div>;
  const { data, error } = useSWR("https://fakestoreapi.com/products", fetcher);

  if (error) return <div>Failed to load events</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>Product List {user.email}</h2> <button type="button" onClick={() => userLogout()}>Logout</button>
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
