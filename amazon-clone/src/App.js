import "./App.css";
import CarouselEffect from "./Components/Carousel/CarouselEffect";
import Header from "./Components/Header/Header";
import Category from "./Components/Category/Category";

import Test1 from "./Components/test/Test1";
import Test2 from "./Components/test/Test2";
import Product from "./Components/Product/Product";

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselEffect />
      <Category />
      <Product />
    </div>
  );
}

export default App;
