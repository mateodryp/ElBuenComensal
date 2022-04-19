import {React, useState} from 'react'
import ModalInfo from '../Components/ModalInfo.js'
import RegisterPartOne from '../Components/RegisterPartOne.js'
import RegisterPartThree from '../Components/RegisterPartThree.js'
import RegisterPartTwo from '../Components/RegisterPartTwo.js'

const Register = () => {

    const [part, setpart] = useState(1)
    const [form, setform] = useState({})

    const handleChange = (e) =>{
        setform({
            ...form,    
            [e.target.name]: e.target.value,
        });
    }


    switch(part){
        case 1:
            return(<RegisterPartOne fatherState={part} partFuntion={setpart} handleChange={handleChange} form={form}/> )
            break;
        case 2:
            return(<RegisterPartTwo fatherState={part} partFuntion={setpart} handleChange={handleChange} form={form}/>)
            break;
        case 3:
            return(<RegisterPartThree fatherState={part} partFuntion={setpart} handleChange={handleChange} form={form}/>)
            break;
        default:
            return(<RegisterPartOne fatherState={part} partFuntion={setpart} handleChange={handleChange} form={form}/>)
            break;
    }
  
}

export default Register