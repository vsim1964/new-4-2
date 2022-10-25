import React, {useState} from 'react';
import shortid from 'shortid';
import { BsXLg } from 'react-icons/bs';

export const TrainingRecords = () => {
  const [training, setTraining] = useState([{
    id: 0,
    date: '',
    number: '',
  }]);

  const data = [];
  const handleSubmit= (e) => {
    e.preventDefault();
    const newTraining =  {id: shortid.generate(), date: e.target.value, number: e.target.value};
    data.push(newTraining);
    };

  const handleRemove = (id) => {
    e.preventDefault();
    setTraining(prevData => prevData.filter(item => item.id !== id));
  }
  return (
      <>
        <form onSubmit={handleSubmit}>
          <input type="date" value={training.date}/>
          <input type="number" value={training.number}/>
          <button>Добавить тренировку</button>
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
                  <td>{item.date}</td>
                  <td>{item.number}</td>
                  <td><BsXLg onClick={() => handleRemove(item.id)}/></td>
                </tr>
            ))
          }
          </tbody>
        </table>
      </>
  );
}

