import { useNavigate } from 'react-router-dom';

const CreateTab = ({
  pageName,
  ButtonNumber,
  ButtonLabel,
  isActive,
  pr,
  planetColor,
  onClick,
}) => {
  const navigate = useNavigate();

  const navigateToPage = () => {
    onClick(ButtonLabel);

    navigate(
      `/planets-fact-site/${pageName.toLowerCase()}/${ButtonLabel.toLowerCase().replace(/\s+/g, '-')}`,
    );
  };

  return (
    <button
      className={`border-dark-gray ${!isActive ? 'hover:bg-dark-gray' : ''} leading-md w-full cursor-pointer border py-2 pr-[5.4375rem] text-left text-[0.5625rem] font-bold tracking-wide lg:pr-[5.25rem] lg:text-[0.75rem]`}
      style={
        isActive
          ? {
              backgroundColor: `${planetColor}`,
            }
          : {}
      }
      onClick={() => navigateToPage()}>
      <span className="mx-5 opacity-50" style={{ paddingRight: pr }}>
        {ButtonNumber}
      </span>
      <span>{ButtonLabel}</span>
    </button>
  );
};

export default CreateTab;
