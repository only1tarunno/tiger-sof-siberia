import BlogCard from "./BlogCard";
import blogImg1 from "../../assets/commodity-markets.jpg";
import blogImg2 from "../../assets/recipe-livable.jpg";
import blogImg3 from "../../assets/DevPodcast-SM24.jpg";
import Container from "../../Components/Shared/Container";

const BlogCards = () => {
  return (
    <div className="py-10 md:py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          <BlogCard
            blogImg={blogImg1}
            title="Commodity Markets Outlook in 8
            Charts"
            category="Report"
            description="Commodity prices are projected to experience
            a slight downturn in 2024 and 2025 but should
            remain above pre-pandemic levels. Here's a
            closer look at the commodity price forecasts."
            btnText="See Charts"
          />
          <BlogCard
            blogImg={blogImg2}
            title="Achieving Net Zero Emissions in
            the Agrifood System"
            category="Agrifood"
            description="A new World Bank report shows that changes in
            farm and food production can cut global
            greenhouse gas emissions by a third."
            btnText="Find Out More"
          />
          <BlogCard
            blogImg={blogImg3}
            title="Spring Meetings 2024: From Vision
            to Impact"
            category="Development Podcast"
            description="This latest episode takes us inside the 2024
            Spring Meetings with highlights and insights
            from World Bank Group leaders and
            development experts."
            btnText="Tune In"
          />
        </div>
      </Container>
    </div>
  );
};

export default BlogCards;
