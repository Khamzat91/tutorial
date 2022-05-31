import React from 'react';

class ProfileClassComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    this.name = this.props.name.split(' ')[0]
    this.newDate = this.props.registredAt.toLocaleDateString("ru-RU", {year: "numeric", month: "long", day: "numeric"})
    return (
      <div>
        Привет, <b>{this.name}!</b>
        <br/>
        Дата регистрации: {this.newDate}
      </div>
    )
  }
}

export default ProfileClassComponent;