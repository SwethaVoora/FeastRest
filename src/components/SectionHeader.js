const SectionHeader = ({ subHeader, mainHeader }) => {
  return (
    <>
      <div className="text-center m-4">
        <h3 className="text-black font-semibold mt-20">{subHeader}</h3>
        <h2 className="text-brand font-bold text-4xl">{mainHeader}</h2>
      </div>
    </>
  );
};

export default SectionHeader;
