import Navbar from "../components/navbar";
import CarouselHome from "../components/carouselHome";
import InfiniteText from "../components/infiniteText";

const Home = () => {
	return (
		<div className="w-full h-full overflow-x-hidden custom-scrollbar">
			<Navbar />
			<CarouselHome />
			<InfiniteText />
			{/* Benifits Offered  */}
			<div className="w-full h-auto">
				<h1 className="text-center text-3xl font-semibold my-8">
					Benifits Offered
				</h1>
				<div className="flex flex-col md:flex-row items-center justify-evenly py-4">
        <div className="h-[15rem] md:h-[20rem] w-[85%] rounded-md md:w-[25%] hover:shadow-2xl transition-shadow duration-500 ease-in-out mb-8 md:my-8 border border-gray-300"></div>
					<div className="h-[15rem] md:h-[20rem] w-[85%] rounded-md md:w-[25%] hover:shadow-2xl transition-shadow duration-500 ease-in-out my-8 border border-gray-300"></div>
					<div className="h-[15rem] md:h-[20rem] w-[85%] rounded-md md:w-[25%] hover:shadow-2xl transition-shadow duration-500 ease-in-out my-8 border border-gray-300"></div>
				</div>
			</div>
		</div>
	);
};
export default Home;
