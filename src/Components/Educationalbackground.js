import React from 'react'

function Educationalbackground() {
  return (
    <div className='flex flex-col box-border gap-2'>
      <div className='mb-3'>
        <h1 className='text-xl text-custom-blue font-bold md:text-2xl lg:text-3xl'>Educational background</h1>
        <p className='text-xs sm:text-sm md:text-base italic text-custom-brown'>Chronologically arranged from the earliest to latest</p>
      </div>
      <div className='flex flex-col box-border gap-2'>
        <div className='flex flex-col gap-1 box-border'>
          <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='school_of_study'>School Name</label>
          <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='text' name='school_of_study' id='school_of_study' autoComplete='school' enterKeyHint='next' required/>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col gap-1 w-[48%] sm:w-[49%] box-border'>
            <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='school_of_study_city'>City</label>
            <input className='border box-border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='text' name='school_of_study_city' id='school_of_study_city' autoComplete='city' enterKeyHint='next' required/>
          </div>
          <div className='flex flex-col gap-1 w-[48%] sm:w-[49%] box-border'>
            <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='school_of_study_state'>State</label>
            <input className='border box-border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='text' name='school_of_study_state' id='school_of_study_state' autoComplete='state' enterKeyHint='next' required/>
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col gap-1 w-[48%] sm:w-[49%] box-border'>
            <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='school_degree'>Academic Qualification</label>
            <select className='border box-border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' name="school_degree" id="school_degree" required>
              <option className='hover:bg-custom-blue hover:text-white' value="">-Select Qualification-</option>
              <option className='hover:bg-custom-blue hover:text-white' value="OND">OND</option>
              <option className='hover:bg-custom-blue hover:text-white' value="HND">HND</option>
              <option className='hover:bg-custom-blue hover:text-white' value="B.Sc.">B.Sc.</option>
              <option value="M.Sc.">M.Sc.</option>
              <option value="Ph.d.">Ph.d.</option>
            </select>
          </div>
          <div className='flex flex-col gap-1 w-[48%] sm:w-[49%] box-border'>
            <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='field_of_Study'>Field of Study</label>
            <input className='border box-border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 pb-2.5 bg-transparent' type='text' name='field_of_Study' id='field_of_Study' enterKeyHint='next' required/>
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col gap-1 w-[48%] sm:w-[49%] box-border'>
            <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='school_start_year'>Start Year</label>
            <input className='border box-border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='month' name='school_start_year' id='school_start_year' required/>
          </div>
          <div className='flex flex-col gap-1 w-[48%] sm:w-[49%] box-border'>
            <label className='text-custom-brown text-xs sm:text-sm md:text-base' for='school_end_year'>End Year</label>
            <input className='border box-border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='month' name='school_end_year' id='school_end_year' required/>
          </div>
        </div>
        <div className='flex justify-end'>
          <button className='p-2.5 text-white font-medium text-xs sm:text-sm rounded-md hover:bg-custom-blue bg-custom-dark-blue hover:text-slate-400 cursor-pointer'>
                  Add More
          </button>
        </div>
        <div className='border-t border-custom-brown pt-2 pb-3 flex flex-col gap-2'>
          <div className='flex flex-col gap-1 box-border'>
            <p className='text-custom-brown text-sm sm:text-base md:text-lg'>Scholarships</p>
            <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='text' placeholder='scholarship 1' name='scholarship' id='scholarships' enterKeyHint='next' required/>
          </div>
          <div className='flex justify-end'>
            <button className='p-2.5 text-white font-medium text-xs sm:text-sm rounded-md hover:bg-custom-blue bg-custom-dark-blue hover:text-slate-400 cursor-pointer'>
                    Add More
            </button>
          </div>
        </div>
        <div className='border-t border-custom-brown pt-2 pb-3 flex flex-col gap-2'>
          <div className='flex flex-col gap-1 box-border'>
            <p className='text-custom-brown text-sm sm:text-base md:text-lg'>Fellowship</p>
            <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='text' placeholder='fellowship 1' name='fellowship' id='fellowship' enterKeyHint='next' required/>
          </div>
          <div className='flex justify-end'>
            <button className='p-2.5 text-white font-medium text-xs sm:text-sm rounded-md hover:bg-custom-blue bg-custom-dark-blue hover:text-slate-400 cursor-pointer'>
                    Add More
            </button>
          </div>
        </div>
        <div className='border-t border-custom-brown pt-2 pb-3 flex flex-col gap-2'>
          <div className='flex flex-col gap-1 box-border'>
            <p className='text-custom-brown text-sm sm:text-base md:text-lg'>Research Grant</p>
            <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='text' placeholder='research grant 1' name='research_grant' id='research_grant' enterKeyHint='next' required/>
          </div>
          <div className='flex justify-end'>
            <button className='p-2.5 text-white font-medium text-xs sm:text-sm rounded-md hover:bg-custom-blue bg-custom-dark-blue hover:text-slate-400 cursor-pointer'>
                    Add More
            </button>
          </div>
        </div>
        <div className='border-t border-custom-brown pt-2 pb-3 flex flex-col gap-2'>
          <div className='flex flex-col gap-1 box-border'>
            <p className='text-custom-brown text-sm sm:text-base md:text-lg'>National Award</p>
            <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='text' placeholder='national award 1' name='national_award' id='national_award'  enterKeyHint='next' required/>
          </div>
          <div className='flex justify-end'>
            <button className='p-2.5 text-white font-medium text-xs sm:text-sm rounded-md hover:bg-custom-blue bg-custom-dark-blue hover:text-slate-400 cursor-pointer'>
                    Add More
            </button>
          </div>
        </div>
        <div className='border-t border-custom-brown pt-2 pb-3 flex flex-col gap-2'>
          <div className='flex flex-col gap-1 box-border'>
          <p className='text-custom-brown text-sm sm:text-base md:text-lg'>International Award</p>
            <input className='border border-custom-brown hover:border-custom-blue outline-none rounded text-xs sm:text-sm md:text-base p-2 bg-transparent' type='text' placeholder='international award 1' name='international_award' id='international_award' enterKeyHint='next' required/>
          </div>
          <div className='flex justify-end'>
            <button className='p-2.5 text-white font-medium text-xs sm:text-sm rounded-md hover:bg-custom-blue bg-custom-dark-blue hover:text-slate-400 cursor-pointer'>
                    Add More
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Educationalbackground