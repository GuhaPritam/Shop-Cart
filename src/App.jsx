import Header from "./Header";
import ProductList from "./Product/ProductList";
import Sidebar from "./Sidebar";
import ProductContextProvider from './Context/ProductContext'

const App = () => {
  return (
    <>
      <ProductContextProvider>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <ProductList />
          </div>
        </main>
      </ProductContextProvider>
    </>
  )
}

export default App;
