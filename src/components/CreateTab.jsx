const CreateTab = ({ number, label }) => {
  return (
    <>
      <button className="border-dark-gray hover:bg-violet-purple mb-4 w-full cursor-pointer border py-[0.75rem] text-left font-bold">
        <span className="mx-[1.75rem] opacity-50">{number}</span>
        <span>{label}</span>
      </button>
    </>
  );
};
export default CreateTab;
