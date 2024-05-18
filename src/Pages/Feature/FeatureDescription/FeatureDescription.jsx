import Container from "../../../Components/Shared/Container";
import FeatureDescriptionContent from "./FeatureDescriptionContent";
import FeatureDescriptionSidebar from "./FeatureDescriptionSidebar";

const FeatureDescription = () => {
  return (
    <div className="pb-10 pt-16 lg:pt-10">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10">
          <FeatureDescriptionContent />
          <FeatureDescriptionSidebar />
        </div>
      </Container>
    </div>
  );
};

export default FeatureDescription;
