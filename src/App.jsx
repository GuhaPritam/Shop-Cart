import Header from "./Header";
import MovieList from "./MovieList";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
    </>
  )
}

export default App;
