import Container from "../Shared/Container";

const BottomFooter = () => {
  return (
    <div className="bg-[#1e2835] py-8">
      <Container>
        <div className="text-[#C2C7D0] text-sm flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="hidden md:block md:w-[40%] w-full">
            Amazon is committed to a diverse and inclusive workplace. Amazon is
            an equal opportunity employer and does not discriminate on the basis
            of race, national origin, gender, gender identity, sexual
            orientation, protected veteran status, disability, age, or other
            legally protected status.
          </p>
          <div className="flex items-center justify-start md:justify-center gap-4 w-full md:w-[24%]">
            <a href="#" className="underline">
              Privacy and Data
            </a>
            <a href="#" className="underline">
              Impressum
            </a>
          </div>
          <p className="text-start md:text-end w-full md:w-[25%]">
            © 1996-2024, Amazon.com, Inc. or its <br /> affiliates
          </p>
        </div>
      </Container>
    </div>
  );
};

export default BottomFooter;
