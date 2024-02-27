import Home from "./screens/Home/home";
import Cart from "./screens/Cart/Cart";
import Wishlist from "./screens/Wishlist/wishlist";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./redux/store/store";

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wish" element={<Wishlist />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

