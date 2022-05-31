import React from 'react';

const ProfileFuncComponent = (props) => {
  const name = props.name.split(' ')[0]
  const newDate = props.registredAt.toLocaleDateString("ru-RU", {year: "numeric", month: "long", day: "numeric"})

  return (
    <div>
      Привет, <b>{name}!</b>
      <br/>
      Дата регистрации: {newDate}
    </div>
  );
};

export default ProfileFuncComponent;