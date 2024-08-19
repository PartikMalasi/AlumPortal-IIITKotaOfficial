import Navbar from '../components/navbar';
import CarouselHome from '../components/carouselHome';
import InfiniteText from '../components/infiniteText';

const Home = () => {
  return (
    <div className="w-full h-full overflow-x-hidden custom-scrollbar">
      <Navbar />
      <CarouselHome />
      <InfiniteText />
    </div>
  );
};

export default Home;
