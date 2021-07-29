import Lottie from "react-lottie-player";
import space_tour from "../../assets/lottie/space-tour.json";

export const Loading = () => {
  return (
    <section className="max-w-2xl m-auto h-full">
      <Lottie
        loop
        animationData={space_tour}
        play
        className="m-auto md:w-1/2"
      />
      <h2 className="text-2xl text-center">Loading...</h2>
    </section>
  );
};
