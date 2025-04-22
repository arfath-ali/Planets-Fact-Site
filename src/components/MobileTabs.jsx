import CreateMobileTab from './CreateMobileTab.jsx';

const MobileTabs = ({ activeTab, setActiveTab, activeTabHighlight }) => {
  const tabs = ['OVERVIEW', 'STRUCTURE', 'SURFACE'];

  return (
    <>
      {tabs.map((label, index) => (
        <CreateMobileTab
          key={index}
          ButtonLabel={label}
          onClick={setActiveTab}
          isActive={activeTab === label}
          activeTabHighlight={activeTabHighlight}
        />
      ))}
    </>
  );
};

export default MobileTabs;
