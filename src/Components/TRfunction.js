import React, {useState} from 'react';
import shortid from 'shortid';
import { BsXLg } from 'react-icons/bs';

export const TrainingRecords = () => {
  const [training, setTraining] = useState({
    date: '',
    number: '',
    data: []
  });

  const handleSubmit= (e) => {
    e.preventDefault();
    const newTraining =  {id: shortid.generate(), date: e.target.value, number: e.target.value};
    setTraining({
      data: [...training.data, newTraining]
    });
  }

  const handleRemove = (e) => {

  }

  return (
      <>
        <form>
          <input type="date"/>
          <input type="number"/>
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
                  {/*<td><BsXLg onClick={() => handleRemove(item)}/></td>*/}
                </tr>
            ))
          }
          </tbody>
        </table>
      </>
  );
}

