import HeroSection from "../components/HeroSection";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div className="bg-white">
      <HeroSection /> {/* ✅ Hero Section at the top */}
      <section className="w-full flex justify-center mt-10">
        <img src="/src/assets/Perfume_Sprays-913242.webp" alt="Perfume Sprays" className="w-4/5 rounded-lg shadow-lg" />
      </section>
      <section className="text-center py-10">
        <h1 className="text-3xl font-bold mb-6">Discover Our Exclusive Collection</h1>
        <ProductList /> {/* ✅ Displays all products */}
      </section>
    </div>
  );
};

export default Home;
