import Lottie from "lottie-react";
import planet_line_loading from "../../assets/lottie/planet-line-loading.json";

export const Loading = () => {
  return (
    <section className="max-w-2xl m-auto h-full flex flex-col justify-center items-center">
      <Lottie
        loop
        autoplay
        animationData={planet_line_loading}
        className="w-1/2"
      />
      <h2 className="text-2xl text-center">Loading...</h2>
    </section>
  );
};
