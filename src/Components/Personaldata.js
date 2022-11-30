import React from 'react'

function Personaldata() {
    
  return (
    <div className='flex flex-col box-border gap-2'>
        <div>
            <h1 className='text-xl text-custom-blue font-bold sm:text-2xl lg:text-3xl'>Personal Data</h1>
        </div>
        <div className='flex flex-col sm:flex-row box-border justify-between gap-2'>
            <div className='flex flex-col gap-1 sm:w-[49%] box-border'>
                <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='fullname'>Surname (Uppercase)</label>
                <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent uppercase' type='text' name='fullname' id='fullname' autoComplete='first-name' enterKeyHint='next' required/>
            </div>
            <div className='flex flex-col gap-1 sm:w-[49%] box-border'>
                <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='othernames'>Other Names</label>
                <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='text' name='othernames' id='othernames'  autoComplete='other-name' enterKeyHint='next' required/>
            </div>
        </div>
        <div className='flex flex-col gap-1 sm:w-[49%] box-border pb-2'>
            <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='date_of_birth'>Date of Birth</label>
            <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='date' name='date_of_birth' id='date_of_birth' required/>
        </div>
        <div className='border-t border-custom-brown pt-2 pb-3 flex flex-col box-border gap-2'>
            <p className='text-sm sm:text-base md:text-lg'>Contact Details</p>
            <div className='flex flex-col gap-1 sm:w-full box-border'>
                <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='contact_residential_address'>Residential Address</label>
                <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='text' name='contact_residential_address' id='contact_residential_address' autoComplete='address' enterKeyHint='next' required/>
            </div>
            <div className='flex flex-col box-border gap-2 sm:flex-row sm:justify-between'>
                <div className='flex flex-col gap-1 sm:w-[49%] box-border'>
                    <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='contact_email'>Email(s)</label>
                    <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='email' name='contact_email' id='contact_email' autoComplete='email' enterKeyHint='next' required/>
                </div>
                <div className='flex flex-col gap-1 sm:w-[49%] box-border'>
                    <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='contact_phone'>Mobile Telephone Number(s)</label>
                    <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='tel' name='contact_phone' id='contact_phone' autoComplete='telephone' enterKeyHint='next' required/>
                </div>
            </div>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col gap-1 w-[48%] sm:w-[49%] box-border'>
                    <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='nationality'>Nationality</label>
                    <input className='border box-border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='text' name='nationality' id='nationality' autoComplete='nationality' enterKeyHint='next' required/>
                </div>
                <div className='flex flex-col gap-1 w-[48%] sm:w-[49%] box-border'>
                    <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='state_of_origin'>State of Origin</label>
                    <input className='border box-border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='text' name='state_of_origin' id='state_of_origin' autoComplete='state' enterKeyHint='next' required/>
                </div>
            </div>
            <div className='flex flex-col gap-1 box-border'>
                <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='senitorial_district'>Senatorial District</label>
                <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='text' name='senitorial_district' id='senitorial_district' autoComplete='address' enterKeyHint='next' required/>
            </div>
            <div className='flex flex-col gap-1 box-border'>
                <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='lga'>Local Government Area</label>
                <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='text' name='lga' id='lga' autoComplete='local-government-area' enterKeyHint='next' required/>
            </div>
            <div className='flex flex-col gap-1 box-border'>
                <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='permanent_home_address'>Permanent Home Address</label>
                <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='text' name='permanent_home_address' id='permanent_home_address' autoComplete='address' enterKeyHint='next' required/>
            </div>
            <div className='flex flex-col gap-1 box-border'>
                <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='marital_status'>Marital Status</label>
                <select className='border cursor-pointer border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' name="marital_status" id="marital_status" required>
                    <option className='hover:bg-custom-blue hover:text-white' value="">-Select Marital Status-</option>
                    <option className='hover:bg-custom-blue hover:text-white' value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Widowed">Widowed</option>
                    <option value="Separated">Separated</option>
                    <option value="Divorced">Divorced</option>
                </select>
            </div>
            <div className='flex flex-col gap-1 box-border'>
                <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='number_of_children'>Number of Children (and Age)</label>
                <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='text' name='number_of_children' id='number_of_children' autoComplete='number' enterKeyHint='next' required/>
            </div>
        </div>
    </div>
  )
}

export default Personaldata