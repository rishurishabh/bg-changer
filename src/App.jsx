import { useState } from 'react';
import './App.css';
import BgChanger from './components/BgChanger';

function App() {
  const [bgColor, setBgColor] = useState('lavender');

  const bgButtonList = [
    {
      id: '01',
      color: 'white',
      bgColor: 'red',
    },
    {
      id: '02',
      color: 'white',
      bgColor: 'green',
    },
    {
      id: '03',
      color: 'black',
      bgColor: 'yellow',
    },
    {
      id: '04',
      color: 'black',
      bgColor: 'pink',
    },
    {
      id: '05',
      color: 'white',
      bgColor: 'purple',
    },
    {
      id: '06',
      color: 'white',
      bgColor: 'gray',
    },
    {
      id: '07',
      color: 'black',
      bgColor: 'lavender',
    },
    {
      id: '08',
      color: 'black',
      bgColor: 'white',
    },
    {
      id: '09',
      color: 'white',
      bgColor: 'black',
    },
    {
      id: '10',
      color: 'white',
      bgColor: 'olive',
    },
  ];

  const handler = (newBgColor) => {
    console.log(newBgColor);
    setBgColor(newBgColor);
  }

  return (
    <div className="w-full h-full duration-75" style={{backgroundColor: bgColor}}>
      <BgChanger bgButtonList = {bgButtonList} handler = {handler} />
    </div>
  );
}

export default App;
