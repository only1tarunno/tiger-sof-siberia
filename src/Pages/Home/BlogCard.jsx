/* eslint-disable react/prop-types */
const BlogCard = ({ blogImg, title, description, btnText, category }) => {
  return (
    <div className="card card-compact bg-white shadow-lg rounded-none">
      <img src={blogImg} alt="" />

      <div className="card-body">
        <h3>{category}</h3>
        <h2 className="card-title text-xl font-semibold">{title}</h2>
        <p className="text-[#000000a1]">{description}</p>
        <div className="card-actions">
          <button className=" text-[#0071BC] hover:text-black">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
