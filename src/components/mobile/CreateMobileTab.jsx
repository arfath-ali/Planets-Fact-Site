import { useNavigate, useLocation } from 'react-router-dom';

const CreateMobileTab = ({
  pageName,
  onClick,
  ButtonLabel,
  activeTabHighlight,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigateToPage = () => {
    onClick(ButtonLabel);

    navigate(`/${pageName.toLowerCase()}/${ButtonLabel.toLowerCase()}`);
  };

  const isActiveTab = location.pathname.includes(`${ButtonLabel.toLowerCase()}`);

  return (
    <button
      className="leading-md cursor-pointer py-5 text-[0.75rem] font-bold tracking-wide opacity-50"
      style={
        isActiveTab
          ? {
              borderBottom: `4px solid ${activeTabHighlight}`,
              paddingBottom: '1rem',
              opacity: 1,
            }
          : {}
      }
      onClick={() => navigateToPage()}>
      {ButtonLabel.slice(0, -1)}
      <span className="tracking-normal">{ButtonLabel.slice(-1)}</span>
    </button>
  );
};

export default CreateMobileTab;
