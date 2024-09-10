import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import Home from "./Screen/Home";
import Categoryproduct from "./Screen/CategoryProduct";
import Contact from "./Screen/Contact";
import AboutUs from "./Screen/About-us";
import LoginForm from "./Screen/LoginForm";
import RegisterForm from "./Screen/RegisterForm";
import ForgotPassword from "./Screen/ForgotPassword";
import ProductScrren from "./Screen/ProductScrren";
import CartSidebar from "./Screen/CartSidebar";
import { CartProvider } from "./Screen/CartContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Header className="App-header" />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Categoryproduct />} />
            <Route path="/product" element={<ProductScrren />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/cart" element={<CartSidebar />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
