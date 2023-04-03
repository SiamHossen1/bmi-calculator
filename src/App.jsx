import React,{useState} from 'react'
import Button from './components/Button'

const App = () => {
  const [bmi, setBmi] = useState('')
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [isSubmit, setIsSubmit] = useState(false)
  const [status, setStatus] = useState('')
  function handleWeight(e){
    setWeight(e.target.value)
  }
  function handleHeight(e){
    setHeight(e.target.value)
  }
  function calculateBmi(){
    let finalHeight = height * height
    let bmi = weight / finalHeight
    setBmi(bmi.toFixed(0))
    setIsSubmit(true)
    if(bmi < 18.5){
      setStatus('Underweight')
    }else if(bmi >= 18.5 && bmi < 25){
      setStatus('Normal weight')
    }else if(bmi >= 25 && bmi < 30){
      setStatus('Overweight')
    }else if(bmi >=30 && bmi < 35){
      setStatus('Obesity I')
    }else if(bmi >=35 && bmi < 40){
      setStatus('Obesity II')
    }else if (bmi > 40){
      setStatus('Obesity III')
    }
  }
  return (
    <>
      <div className='font-mono m-4 shadow-3xl p-6 max-w-sm phone:mx-auto'>

        <h1 className=' text-xl text-center mb-4'>BMI Calculator</h1>

        <label htmlFor="Weight" className='block'>Weight(kg)</label>
        <input type="number" name="Weight" id="Weight" className='border-2 my-2 w-full p-2 border-gray-400 rounded-lg' onInput={handleWeight}/>

        <label htmlFor="Height" className='block'>Height(m)</label>
        <input type="number" name="Height" id="Height" className='border-2 mt-2 mb-4 w-full p-2 border-gray-400 rounded-lg' onInput={handleHeight}/>

        <Button bg_color={'bg-blue-400'} text_color={'text-white'} border_color={'border-blue-400'} calculateBmi={calculateBmi}>Submit</Button>

        <Button bg_color={'bg-slate-200'} text_color={'text-black'} border_color={'border-gray-400'}>Reload</Button>

        <p className=' text-xl mt-4 text-center'>Your BMI is : {bmi}</p>

        <p className='text-center mt-2 text-blue-400'>{isSubmit && `Your are ${status}`}</p>

      </div>
    </>
  )
}

export default App