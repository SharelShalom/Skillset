import { useState } from "react";
import RenderTab from "./RenderTab";

const Tabs = ({tabs}) => {

    const [activeTab, setActiveTab] = useState("Tab 1");

    const handleTab = (title) => {
      setActiveTab(title);
    };
    
    let tabRender = activeTab ? tabs[tabs.findIndex(tab => tab.title === activeTab)] : tabs[0];
    
    return (
    <div className="Tabs">
      <ul className="nav">
        {tabs.map((tab) => 
        <li
        key={tab.title}
        className={activeTab === tab.title ? "active" : ""}
        onClick={() => handleTab(tab.title)}
        >
        {tab.title}
        </li>
        )}
      </ul>
      <div className="outlet">
          <RenderTab
          tab={tabRender.components}
          />
      </div>
    </div>
  );
};
export default Tabs;