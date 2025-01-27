import { useEffect , useState } from "react";

const Calculation = () => {

  const [principle, setPrinciple]= useState(0);
  const [interest, setInterest] = useState(0);
  const [duration, setDuration] = useState(0);
  const [emi, setEmi ] = useState(0);

  const handleChange = (e)=>{
    const id = e.target.id;
    const value = parseInt(e.target.value);
    if(id === 'principle'){
      setPrinciple(value);
    }
    else if (id === 'interest'){
        setInterest(value);
      } 
      else {
        setDuration(value);
      } 
    }; 

    const calculateEMI = ()=>{
      let r = interest;
      if(principle && r && duration){
        r = r / 12 / 100;
        const rpow = Math.pow(1+r, duration*12);
        const amount = principle * ((r*rpow) / (rpow-1));
        setEmi(Math.round(amount));
      } 
    }

    useEffect(() =>{
      calculateEMI();
    }, [principle, interest, duration])

  return (
      <div className = "loan" >
        <h1>Mortage Calculator </h1>
      

      <div className='inputes'>
        <p>Princples: </p>
        <input onChange={handleChange} type='number' id="principle"/>
        <p>Interest Rate: </p>
        <input onChange = {handleChange} type='number' id="interest"/>
        <p>Duration: </p>
        <input onChange={handleChange} type='number' id="duration"/>
        <div className='output'>
          <p>Your EMI is {emi} </p>
        </div>
      </div>
      
    </div>
  )
}

export default Calculation
