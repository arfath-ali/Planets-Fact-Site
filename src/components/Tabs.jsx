import CreateTab from './CreateTab.jsx';

const Tabs = () => {
  const TabsList = [
    { number: '1', label: 'OVERVIEW' },
    { number: '2', label: 'INTERNAL STRUCTURE' },
    { number: '3', label: 'SURFACE GEOLOGY' },
  ];

  return (
    <>
      {TabsList.map((button, index) => (
        <CreateTab key={index} number={button.number} label={button.label} />
      ))}
    </>
  );
};

export default Tabs;
