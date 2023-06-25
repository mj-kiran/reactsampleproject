import './App.css';
//import { useState } from 'react'
import Samplecounter from './Samplecounter';

import Random from './Random';
import Sample from './Sample';
import { useState } from 'react';


function App() {
  const [name,setName]=useState('ABCDEFGHIJKL')
  const[value,setValue]=useState('mnopqrst')
  const[aval,setAval]=useState('her')

  const data=[
    {name:"abcd",age:21},
    {name:"efg",age:26},
    {name:"hij",age:18},
    {name:"klm",age:30},
    {name:"nop",age:24}
  ]
  return (

    <div className="App">
      <Random data={name} item={value} she={aval}/>
      <Samplecounter />
      <Sample />

      {data.map((item)=>(
        <>
        <h1>Name :{item.name}</h1>
        <h2>Age : {item.age}</h2>
        </>
        
      ))}

    </div>
    
  )
}

export default App;
