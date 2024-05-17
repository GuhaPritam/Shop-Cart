import Header from "./Header";
import ProductList from "./Product/ProductList";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <ProductList />
        </div>
      </main>
    </>
  )
}

export default App;
