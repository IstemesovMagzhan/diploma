
import Header from "../components/Header/Header";
import homeImage from  "../assets/home.jpg";


function Home() {
  return ( 
    <>
      <Header
      title="Home page"
      image={homeImage}>
      <p>Your conference table should be more than just a centerpiece for a department get-together. HON conference tables come in the shapes, sizes and styles that help you make any space work harder.</p>
      </Header>
      <main>
        <div className="ubject">
        <h1>Resolve to Evolve. We're all changing the way we live and work. HOME has the solutions to help you do it your way, every day.</h1>
        </div>
      </main>
    </>
   );
}

export default Home;