import React from 'react';

const Tab = ({id, title, description, activeId, setActiveId}) => {

  const handleClick = () => {
    if (activeId === id){
      setActiveId(null)
    } else {
      setActiveId(id)
    }
  }

  return (
    <div>
      <div className={"tab " + (activeId === id ? "active" : "")}>
        <input id="tab-one" type="checkbox" name="tabs"/>
        <label onClick={handleClick} htmlFor="tab-one">{title}</label>
        {activeId === id && <div className="tab-content">
         <p>
            {description}
          </p>
        </div>}
      </div>
    </div>
  );
};

export default Tab;