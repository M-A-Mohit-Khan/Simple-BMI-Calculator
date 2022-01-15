// import logo from './logo.svg';
import React,{useState} from "react";
// import './App.css';

function App() {


  
const [weight,setWeight] = useState('') 
  
const [height,setHeight] = useState('') 
  
const onSubmit = (e) => {
  e.preventDefault()

  if (!weight) {
    alert('Please input weight')
    return
  }

  if (!height) {
    alert('Please input height')
    return
  }
  
  var bmi=weight/((height*0.3048)*(height*0.3048));
  
  alert('Your BMI is: '+bmi)
  
}



  return (
    <>
    <div className="header">

    <p className="header-name">Super calculator</p>

    </div>
    <div className="body">
      <h1>BMI Calculator</h1>
      
      <form className="form" onSubmit={onSubmit}>
      <div >
        <label>Weight</label>
        <input
          type='text'
          placeholder='Kgs'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          
          
        />
      </div>
      <div >
        <label>Height</label>
        <input
          type='text'
          placeholder='Feets.inches'
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          
        />
      </div>
      

      <input type='submit' value='Calculate' className='btn btn-block' />
    </form>

    
     
     
    </div>
    </>
  );
}

export default App;
