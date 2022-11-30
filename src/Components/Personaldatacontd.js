import React from 'react'

function Personaldatacontd() {
  return (
    <div className='flex flex-col box-border gap-2'>
        <div className='mb-2'>
            <h1 className='text-xl text-custom-blue font-bold md:text-2xl lg:text-3xl'>Personal Data 2</h1>
        </div>
        <div className='flex flex-col gap-1 box-border'>
                <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='kins_contact_residential_address'>Next of Kin's Residential Address</label>
                <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='text' name='kins_contact_residential_address' id='kins_contact_residential_address' autoComplete='address' enterKeyHint='next' required/>
        </div>
        <div className='border-b border-custom-brown pb-4 flex flex-col box-border gap-2 sm:flex-row'>
            <div className='flex flex-col gap-1 sm:w-[49%] box-border'>
                <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='kins_contact_email'>Next of Kin's Email(s)</label>
                <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='email' name='kins_contact_email' id='kins_contact_email' autoComplete='email' enterKeyHint='next' required/>
            </div>
            <div className='flex flex-col gap-1 sm:w-[49%] box-border'>
                <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='kins_contact_phone'>Next of Kin's Mobile Telephone Number(s)</label>
                <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='tel' name='kins_contact_phone' id='kins_contact_phone' autoComplete='telephone' enterKeyHint='next' required/>
            </div>
        </div>
        <div className='flex flex-col box-border gap-2 sm:flex-row'>
            <div className='flex flex-col gap-1 sm:w-[49%] box-border pb-2'>
                <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='assumption_of_duty_date'>Date of Assumption of Duty</label>
                <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='date' name='assumption_of_duty_date' id='assumption_of_duty_date' required/>
            </div>
            <div className='flex flex-col gap-1 sm:w-[49%] box-border pb-2'>
                <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='first_appointment_rank'>Rank/Status on First Appointment</label>
                <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='text' name='first_appointment_rank' id='first_appointment_rank' required/>
            </div>
        </div>
        <div className='flex flex-col box-border gap-2 sm:flex-row'>
            <div className='flex flex-col gap-1 sm:w-[49%] box-border pb-2'>
                <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='present_status'>Present Status</label>
                <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='text' name='present_status' id='present_status' required/>
            </div>
            <div className='flex flex-col gap-1 sm:w-[49%] box-border pb-2'>
                <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='present_salary_grade_level_step'>Present Salary Grade Level and Step</label>
                <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='text' name='present_salary_grade_level_step' id='present_salary_grade_level_step' required/>
            </div>
        </div>
        <div className='flex flex-col box-border gap-2 sm:flex-row'>
            <div className='flex flex-col gap-1 sm:w-[49%] box-border pb-2'>
                <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='last_promotion_date'>Date of Last promotion/Regrading</label>
                <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='date' name='last_promotion_date' id='last_promotion_date' required/>
            </div>
            <div className='flex flex-col gap-1 sm:w-[49%] box-border pb-2'>
                <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='appointment_confirmation_date'>Date of Confirmation of Appointment</label>
                <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='date' name='appointment_confirmation_date' id='appointment_confirmation_date' required/>
            </div>
        </div>
        <div className='flex flex-col box-border gap-2 sm:flex-row'>
            <div className='flex flex-col gap-1 sm:w-[49%] box-border pb-2'>
                <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='Faculty_or_Directorate'>Faculty/Directorate</label>
                <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='text' name='Faculty_or_Directorate' id='Faculty_or_Directorate' required/>
            </div>
            <div className='flex flex-col gap-1 sm:w-[49%] box-border pb-2'>
                <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='department_or_unit'>Department/Unit</label>
                <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='text' name='department_or_unit' id='department_or_unit' required/>
            </div>
        </div>
    </div>
  )
}

export default Personaldatacontd