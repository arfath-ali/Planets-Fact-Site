import CreateMobileTab from './CreateMobileTab.jsx';

const MobileTabs = ({page, activeTab, setActiveTab, activeTabHighlight }) => {
  const tabs = ['OVERVIEW', 'STRUCTURE', 'SURFACE'];

  return (
    <>
      {tabs.map((label, index) => (
        <CreateMobileTab
          key={index}
          pageName={page}
          ButtonLabel={label}
          onClick={setActiveTab}
          activeTabHighlight={activeTabHighlight}
        />
      ))}
    </>
  );
};

export default MobileTabs;
