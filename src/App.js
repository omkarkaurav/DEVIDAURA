import AppRoutes from "./Routes/routes";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Home /> 
      <AppRoutes />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
