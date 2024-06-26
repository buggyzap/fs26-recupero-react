import { useParams } from "react-router-dom";
import useSWR from "swr";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Product() {
  const { productId } = useParams();

  const { data, error } = useSWR(
    "https://fakestoreapi.com/products/" + productId,
    fetcher
  );

  const { addToCart } = useContext(CartContext);

  if (error) return <div>Failed to load product</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {data && (
        <div>
          <img
            src={data.image}
            alt={data.title}
            style={{ maxWidth: "300px" }}
          />
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <button onClick={() => addToCart(data)}>Add to Cart</button>
        </div>
      )}
    </div>
  );
}
