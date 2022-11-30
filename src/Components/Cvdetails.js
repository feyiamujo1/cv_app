import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Educationalbackground from './Educationalbackground'
import MultistepProgressbar from './MultistepProgressbar'
// import { HashRouter, Route } from 'react-router-dom'
// import Displaysteps from './Displaysteps'
import Personaldata from './Personaldata'
import Personaldatacontd from './Personaldatacontd'

const INITIAL_DATA = {
  firstname: '',
  othername: '',
  date_of_birth: '',
  contact_residential_address: '',
  contact_email: '',
  contact_phone: '',
  nationality: '',
  state_of_origin: '',
  senitorial_district: '',
  lga: '',
  permanent_home_address: '',
  marital_status: '',
  kins_contact_residential_address: '',
  kins_contact_email: '',
  kins_contact_phone: '',
  assumption_of_duty_date: '',
  first_appointment_rank: '',
  present_status: '',
  present_salary_grade_level_step: '',
  last_promotion_date: '',
  appointment_confirmation_date: '',
  Faculty_or_Directorate: '',
  department_or_unit: '',
  school_of_study: '',
  school_of_study_city: '',
  school_of_study_state: '',
  school_degree: '',
  field_of_Study: '',
  school_start_year: '',
  school_end_year: '',
  scholarship: '',
  fellowship: '',
  research_grant: '',
  national_award: '',
  international_award: ''
}

function Cvdetails() {
  const navigate = useNavigate();
  const [currentStepIndex, setCurrentStepIndex] = useState(1);

  const prevButton = () =>{
    if (currentStepIndex>1){
      setCurrentStepIndex(currentStepIndex=>currentStepIndex-1);
    }else{
      navigate('/reviewcv')
    }
  }

  const nextButton = () =>{
    if (currentStepIndex<3){
      setCurrentStepIndex(currentStepIndex=>currentStepIndex+1);
    }else{
      navigate('/')
    }
  }

  const submitHandler = (e) =>{
    e.preventDefault();
    nextButton();
  }

  const currentFormComponent = () => {
    switch (currentStepIndex) {
      case 1:
        return <Personaldata />;
      case 2:
        return <Personaldatacontd />;
       case 3:
         return <Educationalbackground />;
       default:
         return <Personaldata />;
    }
  }
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }, 0);
    console.log(currentStepIndex);
  }, [currentStepIndex]);

  return (
    <div className='h-full w-full py-8'>
       <form onSubmit={submitHandler} className='w-11/12 mx-auto flex flex-col gap-3 lg:w-8/12 pt-12 pb-10 sm:pt-14 md:px-14 md:shadow-lg'> {/* //form */}
        <div className='flex flex-col box-border gap-2'>
          <div className='my-6 px-1 box-border'>
            <MultistepProgressbar step={currentStepIndex}/>
          </div>
          {currentFormComponent()}
          {/* <Personaldatacontd/>
          <Educationalbackground/> */}
          <div className='flex flex-row justify-between mt-4'>
            {/* {currentStepIndex !== 1 && <button type='button' onClick={prevButton} className='px-6 py-3 text-custom-blue font-medium text-sm md:text-lg rounded-md hover:bg-custom-brown hover:text-slate-400 cursor-pointer'>
              Back
            </button>} */}
            <button type='button' onClick={prevButton} className='px-6 py-3 text-custom-blue font-medium text-sm md:text-lg rounded-md hover:bg-custom-yellow hover:text-white cursor-pointer'>
              { currentStepIndex === 1 ? "Cancel" : "Back" }
            </button>
            <button type='submit' className='p-3 text-white font-medium text-sm md:text-lg rounded-md hover:bg-custom-blue bg-custom-dark-blue hover:text-slate-400 cursor-pointer'>
              { currentStepIndex === 3 ? "Submit" : "Save & Next" }
            </button>
          </div>
        </div>
      </form>  
    </div>
  )
}

export default Cvdetails