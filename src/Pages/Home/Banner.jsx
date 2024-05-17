import bannerImg from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen -mt-20"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-80"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-[540px]">
          <h3 className="text-base font-light tracking-wider uppercase">
            Prefix describing what your business does will be here
          </h3>
          <h1 className="mb-5 text-4xl md:text-5xl font-medium leading-tight">
            We Will Write a Headline Highlighting Your Business
          </h1>

          <button className="btn bg-[#232F3E] border border-[#FF9900] text-white uppercase rounded hover:bg-[#151c25]">
            Call to Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
