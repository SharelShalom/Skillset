import { useState, useEffect } from "react";
import RenderButton from "./RenderButton";
import RenderInput from "./RenderInput";
import RenderLabel from "./RenderLabel";

const RenderTab = ({ tab }) => {
  const [tabst, setTabst] = useState([]);

  useEffect(() => {
    setTabst(tab);
  }, [tab]);

  const handleInput = (text, input) => {
    const newtab = [...tabst];
    const index = tabst.findIndex((component) => component.id === input.id);
    newtab[index].text = text;
    setTabst(newtab);
  };

  const handleClick = (button) => {
    const source = tabst.findIndex(
      (component) => component.id === button.click.source_id
    );
    const target = tabst.findIndex(
      (component) => component.id === button.click.target_id
    );
    const newtab = [...tabst];
    newtab[target].text = newtab[source].text;
    setTabst(newtab);
  };

  const whichComponent = (component) => {
    switch (component.base_component) {
      case "MyInput":
        return RenderInput(component, handleInput);
      case "MyButton":
        return RenderButton(component, handleClick);
      case "MyLabel":
        return RenderLabel(component);
    }
  };

  return (
    <>
      <div className="tab">
        {tabst.map((component) => whichComponent(component))}
      </div>
    </>
  );
};

export default RenderTab;
