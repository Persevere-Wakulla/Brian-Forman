import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col text-center mt-32 ">
      <h1 className="home-title">The Finer Things In Life</h1>
      <div className="flex flex-wrap justify-center text-center gap-3 p-4">
        <div className="">
          <Link to={"/products"}>
            <img
              className="home-img cursor-pointer rounded-xl"
              src="images/1948_Chaleuad_Yquem_Lur_Saluees.png"
              alt=""
            />
          </Link>
          <h2 className="text-3xl font-extrabold font-[four] text-[var(--threeG)] mb-5">Fine Wines</h2>
        </div>
        <div>
          <Link to={"/products"}>
            <img
              className="home-img cursor-pointer rounded-xl"
              src="images/adam-lukomski-ja9VHwgcABo-unsplash.jpg"
              alt=""
            />
          </Link>
          <h2 className="mb-5 text-3xl font-[four] text-[var(--threeG)] font-extrabold">Electronics</h2>
        </div>
        <div>
          <Link to={"/products"}>
            <img
              className="home-img cursor-pointer rounded-xl"
              src="images/avi-richards-5RF42oKw204-unsplash.jpg"
              alt=""
            />
          </Link>
          <h2 className="text-3xl mb-5 font-[four] text-[var(--threeG)] font-extrabold">Sporting Goods</h2>
        </div>
        <div>
          <Link to={"/products"}>
            <img
              className="home-img cursor-pointer rounded-xl"
              src="images/Billon-Jacobs.png"
              alt=""
            />
          </Link>
          <h2 className="text-3xl mb-5 font-[four] text-[var(--threeG)] font-extrabold">Men Accessories</h2>
        </div>
        <div>
          <Link to={"/products"}>
            <img
              className="home-img cursor-pointer rounded-xl"
              src="images/cane-corso2.jpg"
              alt=""
            />
          </Link>
          <h2 className="mb-5 text-3xl font-[four] text-[var(--threeG)] font-extrabold">Pets</h2>
        </div>
        <div>
          <Link to={"/products"}>
            <img
              className="home-img cursor-pointer rounded-xl"
              src="images/saudi-arabia-sand-rail.jpg"
              alt=""
            />
          </Link>
          <h2 className="mb-5 text-3xl font-[four] text-[var(--threeG)] font-extrabold">Off-Road Vehicles</h2>
        </div>
        <div>
          <Link to={"/products"}>
            <img
              className="home-img cursor-pointer rounded-xl"
              src="images/MC-7-maybach-vision-6.jpg"
              alt=""
            />
          </Link>
          <h2 className="text-3xl mb-5 font-[four] text-[var(--threeG)] font-extrabold">Vehicles</h2>
        </div>
        <div>
        <Link to={"/products"}>
            <img
              className="home-img cursor-pointer rounded-xl"
              src="images/MotoGPCI.H1.png"
              alt=""
            />
          </Link>
          <h2 className="text-3xl mb-5 font-[four] text-[var(--threeG)] font-extrabold">Motorcycles</h2>
        </div> <div>
        <Link to={"/products"}>
            <img
              className="home-img cursor-pointer rounded-xl"
              src="images/PradaBag.png"
              alt=""
            />
          </Link>
          <h2 className="text-3xl mb-5 font-[four] text-[var(--threeG)] font-extrabold">Woman Accessories</h2>
        </div>
      </div>
    </div>
  );
};
export default Home;
