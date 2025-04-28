import CreateTab from './CreateTab.jsx';

const Tabs = ({page, activeTabHighlight, setActiveTab, activeTab }) => {
  const TabsList = [
    { number: '1', label: 'OVERVIEW', numberPadding: '1.0625rem' },
    {
      number: '2',
      label: 'INTERNAL STRUCTURE',
      mobileTabLabel: 'STRUCTURE',
      numberPadding: '0.875rem',
    },
    {
      number: '3',
      label: 'SURFACE GEOLOGY',
      mobileTabLabel: 'SURFACE',
      numberPadding: '0.875rem',
    },
  ];

  return (
    <div className="hidden flex-col gap-4 md:flex">
      {TabsList.map((button, index) => (
        <CreateTab
          key={index}
          pageName={page}
          ButtonNumber={button.number}
          ButtonLabel={button.label}
          onClick={setActiveTab}
          isActive={
            activeTab === button.label || activeTab === button.mobileTabLabel
          }
          planetColor={activeTabHighlight}
          pr={button.numberPadding}
        />
      ))}
    </div>
  );
};

export default Tabs;
