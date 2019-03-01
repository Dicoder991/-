import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';




class MainAppComponent extends Component {
  render() {
    const {setValue, val, initial_reducer, addNewText, changeText, list, addNewLine } = this.props;
    console.log(list);
    return (
      <div>
        <Input placeholder="введите текст, он добавится" onChange={e => setValue(e.target.value)} value={val} > </Input> <br/>
        <Button onClick={changeText.bind(this, val)}> изменить велью </Button>
        <br/>
        <Button onClick={addNewText.bind(this, val)}> добавить велью </Button>
        <br/>
        <Button onClick={addNewLine.bind(this, '')}> добавить new Line </Button>
        <br/><br/><br/>
        {list.map((li, i) => <li key={i}> <Input />  </li>)}
        <br/><br/><br/>
        { initial_reducer.map((ini, i) => <li key={i}> {ini} </li>) }
      </div>
    );
  }
}

export default MainAppComponent;
