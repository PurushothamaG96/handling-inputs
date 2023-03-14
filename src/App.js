import React, {useState} from "react"
import './App.css';

function App() {
  const [value, setValue] = useState({name:"", age:"", gender:"", ocupation:"", cool:""})
  return (
    <div >
      <h4>
      {`{"name":${value.name?value.name:'""'},
      "Age":${value.age?value.age:'""'},
      "Gender:${value.gender?value.gender:"none"},
      Ocupation:${value.ocupation?value.ocupation:"none"},
      isCool:${value.cool?value.cool:false}}`}
      </h4>
        <div className="App">
     
     <div className='text-input'>
     <label htmlFor='name'>Name:</label>
     <input type="text" id="name" onChange={(e)=>{setValue({...value, name:e.target.value})}}/>
     </div>
     <div className='text-input'>
     <label htmlFor='age'>Age:</label>
     <input type="number" id="age"/>
     </div>
     <p>Gender:</p>
     <div>
        <input type="radio" id='male' onChange={(e)=>{setValue({...value, gender:e.target.value?e.target.id:""})}}/>
        <label htmlFor='male'>Male</label>
        <input type="radio" id='female' onChange={(e)=>{setValue({...value, gender:e.target.value?e.target.id:""})}}/>
        <label htmlFor='female'>Female</label>
        <input type="radio" id='other' onChange={(e)=>{setValue({...value, gender:e.target.value?e.target.id:""})}}/>
        <label htmlFor='other'>Other</label>
     </div>
     <div>
      <label>Occupation:</label>
      <select onChange={(e)=>setValue({...value, ocupation:e.target.value})}>
        <option>--select--</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="fullstack">Fullstack</option>
      </select>
     </div>
     <div>
      <p>Are you cool?</p>
      <input type="checkbox"/>
      <label>Of course i'm cool!</label>
     </div>
    </div>
    </div>
    
  );
}

export default App;
