import React from 'react';
// import shortid from 'shortid';

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
    data.setState(
        data => [...data, {
          showDate: date,
          showNumber: number,
        }]
    );
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
              <td> Пройдено</td>
              <td>Действия</td>
            </tr>
            </tbody>
            {
              data.map((item) => (
                  <tr>
                    <td>{item.showDate}</td>
                    <td>{item.showNumber}</td>
                    <td>Действия</td>
                  </tr>
              ))
            }
          </table>
        </>
    );
  }
}






