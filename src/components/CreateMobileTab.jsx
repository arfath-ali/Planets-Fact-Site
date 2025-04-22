const CreateMobileTab = ({
  onClick,
  ButtonLabel,
  activeTabHighlight,
  isActive,
}) => {
  return (
    <button
      className="leading-md cursor-pointer py-5 text-[0.75rem] font-bold tracking-wide opacity-50"
      style={
        isActive
          ? {
              borderBottom: `4px solid ${activeTabHighlight}`,
              paddingBottom: '1rem',
              opacity: 1,
            }
          : {}
      }
      onClick={() => onClick(ButtonLabel)}>
      {ButtonLabel.slice(0, -1)}
      <span className="tracking-normal">{ButtonLabel.slice(-1)}</span>
    </button>
  );
};

export default CreateMobileTab;
