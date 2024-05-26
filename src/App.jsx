import Header from "./Header";
import ProductList from "./Product/ProductList";
import Sidebar from "./Sidebar";
import { ProductContext } from "./Context/ProductContext";
import { useContext } from 'react';

const App = () => {
  const { darkMode } = useContext(ProductContext);

  return (
    <>
      <div className={`h-full w-full ${darkMode ? 'dark' : ''}`}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <ProductList />
          </div>
        </main>
      </div>
    </>
  )
}

export default App;
