import React, {useState} from 'react';
import shortid from 'shortid';
import { BsXLg } from 'react-icons/bs';

export const TrainingRecords = () => {

  const [date, setDate] = useState('');
  const handleDate = (e) => {
    e.preventDefault();
    setDate(e.target.value);
  };

  const [number, setNumber] = useState('');
  const handleNumber = (e) => {
    e.preventDefault();
    setNumber(e.target.value);
  };

  const [training, setTraining] = useState([{
    id: 0,
    showDate: '',
    showNumber: ''
  }]);

  const handleClick = (e) => {
    e.preventDefault();
    const newTraining = {
      id: shortid.generate(),
      showDate: date,
      showNumber: number
    };
    setTraining((prev) => [...prev, newTraining] )
  }

  const handleRemove = (id) => {
      setTraining(prevData => prevData.filter(item => item.id !== id));
  }

  return (
      <>
        <form>
          <input type="date" value={date} onChange={handleDate}/>
          <input type="number" value={number} onChange={handleNumber}/>
          <button onClick={handleClick}>Добавить тренировку</button>
        </form>
        <table>
          <tbody>
          <tr>
            <td>Дата</td>
            <td>Пройдено</td>
            <td>Действия</td>
          </tr>
          {
            training.map((item) => (
                <tr key={item.id}>
                  <td>{item.showDate}</td>
                  <td>{item.showNumber}</td>
                  <td><BsXLg onClick={() => handleRemove(item.id)}/></td>
                </tr>
            ))
          }
          </tbody>
        </table>
      </>
  );
};

