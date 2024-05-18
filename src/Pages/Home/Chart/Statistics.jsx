import Container from "../../../Components/Shared/Container";
import StatisticsTitle from "./StatisticsTitle";
import ChartBar from "./ChartBar";

const Statistics = () => {
  return (
    <div className="bg-white py-10 md:py-20">
      <Container>
        <StatisticsTitle />
        <ChartBar />
      </Container>
    </div>
  );
};

export default Statistics;
