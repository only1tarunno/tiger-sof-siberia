import ribonImg from "../../assets/ribon.svg";

const Ribon = () => {
  return (
    <div
      className="min-h-2 bg-cover bg-repeat-x"
      style={{
        backgroundImage: `url(${ribonImg})`,
      }}
    ></div>
  );
};

export default Ribon;
