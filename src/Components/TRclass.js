import React from 'react';
import shortid from 'shortid';
import { BsXLg } from 'react-icons/bs';

export default class TrainingRecords extends React.Component {
  state = {
    date: '',
    number: '',
    showDate: '',
    showNumber: '',
    data: []
  };

  handleDate = (e) => {
    e.preventDefault();
    this.setState({
      date: e.target.value
    });
  };

  handleNumber = (e) => {
    e.preventDefault();
    this.setState({
      number: e.target.value
    });
  };

  handleShow = (e) => {
    const {date, number, data} = this.state;
    e.preventDefault();
    this.setState({
      data: [...this.state.data, {
        id: shortid.generate(),
        showDate: date,
        showNumber: number,
      }]
    });
  };

handleRemove = (item) => {
  const {data} = this.state;
  this.setState((data) =>
      data.filter((i) => i.id !== item.id));
  };

  render() {
    const {date, number, data} = this.state;
    console.log(date, number);

    return (
        <>
          <form>
            <input type="date" value={date} onChange={this.handleDate}/>
            <input type="number" value={number} onChange={this.handleNumber}/>
            <button onClick={this.handleShow}>Добавить тренировку</button>
          </form>
          <table>
            <tbody>
            <tr>
              <td>Дата</td>
              <td>Пройдено</td>
              <td>Действия</td>
            </tr>
            {
              data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.showDate}</td>
                    <td>{item.showNumber}</td>
                    <td><BsXLg onClick={() => this.handleRemove(item)}/></td>
                  </tr>
              ))
            }
            </tbody>
          </table>
        </>
    );
  }
}
