// App.jsx
import { Link } from "react-router-dom";
import Products from "./components/Products";

const App = () => {
  return (
    <div>
      <h1>Ecommerce</h1>
      <Products />
      <Link to="/cart">Cart</Link>
    </div>
  );
};

export default App;
