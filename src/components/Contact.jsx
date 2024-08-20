import React from 'react'

const Contact = () => {
  return (
    < div name='contact' className='bg-gradient-to-b from-black to-gray-800 w-full h-screen text-white justify-center items-center'>
      <div className='flex flex-col h-full justify-center max-w-screen-lg p-4 mx-auto'>
        <div className='pb-8 text-center'>
          <p className='text-2xl md:text-4xl  font-bold border-b-4 border-gray-500 p-2 inline'>Contact
          </p>
          <p className='md:text-lg py-4 text-sm'>Submit the form below to get in touch with me</p>
        </div>
        <div className='flex justify-center items-center'>
          <form action='https://getform.io/f/lakmomda' method='POST' className='flex flex-col w-full md:w-1/2'>
            <input type='text'
              name='name'
              placeholder='Enter your name' 
              className='p-2 border-2 bg-transparent rounded-md focus:outline-none '>
              </input>
            <input type='email'
              name='Email'
              placeholder='Enter your email' 
              className='my-4 p-2 border-2 bg-transparent rounded-md focus:outline-none' required>
              </input>
           
            <textarea 
            name='Message' 
            placeholder='Enter your message' 
            rows='10' 
            className='p-2 border-2 bg-transparent rounded-md focus:outline-none'>
            </textarea>

            <button className='w-fit px-6 py-3 mt-3 mb-5 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-cyan-800 hover:border-solid hover:border-cyan-500 hover:bg-none border-2 cursor-pointer text-sm sm:text-lg mx-auto'>Let's Talk

            </button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Contact
