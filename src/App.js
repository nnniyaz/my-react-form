import { useState } from 'react';
import './App.css';
import Data from './components/Data/Data';
import Form from './components/Form/Form';

function App() {
  const [data, setData] = useState([
    {
      name: 'John',
      surname: 'Smith',
      age: 23,
      gender: 'Male',
      country: 'Germany',
      email: 'john@coolguy.com'
    }
  ]);

  const create = (newData) => {
    if (data.length === 3) {
      alert("You can't add more than 3 datas.")
      return;
    }
    setData([...data, newData]);
  }

  const remove = (email) => {
    setData(data.filter(item => item.email !== email));
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='title'>Data Collect Form</div>
        <Form handleClick={create} />
      </div>
      <div className='container'>
        <div className='title'>Previous Collected Data</div>
        {
          data.length
            ?
            data.map((data, index) => <Data data={data} handleClick={remove} key={index} />)
            :
            <div className='no-data'>No previous data</div>
        }
      </div>
    </div>
  );
}

export default App;
