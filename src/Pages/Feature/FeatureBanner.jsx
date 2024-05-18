import { useNavigate } from "react-router-dom";
import Container from "../../Components/Shared/Container";

const FeatureBanner = () => {
  const navigate = useNavigate();

  return (
    <div id="featureBanner">
      <Container>
        <div className="flex items-center justify-between relative z-10 min-h-52">
          <div className="space-y-2 text-center md:text-start flex-1">
            <h2 className="font-bold text-3xl">Staff Accountant</h2>
            <p>Job ID: 2544443 | ADCI - Karnataka</p>
          </div>
          <div className="hidden md:block w-72">
            <button
              onClick={() => {
                navigate("/signUp");
              }}
              className="btn text-[#232F3E] border border-[#FF9900] bg-[#FF9900] uppercase rounded hover:bg-[#232F3E] hover:text-white hover:border-[#232F3E] w-full"
            >
              Apply now
            </button>
          </div>
          <div className="md:hidden absolute left-1/2 -translate-x-1/2 -bottom-6 block w-72">
            <button
              onClick={() => {
                navigate("/signUp");
              }}
              className="btn text-[#232F3E] border border-[#FF9900] bg-[#FF9900] uppercase rounded hover:bg-[#232F3E] hover:text-white hover:border-[#232F3E] w-full"
            >
              Apply now
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeatureBanner;
