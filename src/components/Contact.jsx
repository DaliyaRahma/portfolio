import { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import { AnimatePresence, motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [notification, setNotification]=useState({message:'', type: '' ,visible:false})

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vay6be8', 'template_mpvy4wh', form.current, 'imCY_7qtmfEdFPRNu')
      .then(
        () => {
        setNotification({message:'Email sent successfully! will get back to you soon..', type: 'success', visible:true})
         form.current.reset();
        },
        (error) => {
         setNotification({message:'Failed to send email. Please try again later..', type:'error',visible:true})
        }
      );
      setTimeout(()=>{
        setNotification((prev)=>({...prev , visible:false}))
      },8000)
    };
      const notificationVariant = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
      };
    


  return (
    <div name='contact' className='bg-gradient-to-b from-black to-gray-800 w-full h-screen text-white justify-center items-center'>
      <div className='flex flex-col h-full justify-center max-w-screen-lg p-4 mx-auto'>
        <div className='pb-8 text-center'>
          <p className='text-2xl md:text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Contact</p>
          <p className='md:text-lg py-4 text-sm'>Submit the form below to get in touch with me</p>
        </div>
        <div className='flex justify-center items-center'>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full md:w-1/2'>
            <input type='text' name='Name' placeholder='Enter your Name' className='p-2 border-2 bg-transparent rounded-md focus:outline-none' />
           
            <input type='email' name='Email' placeholder='Enter your Email' className='my-4 p-2 border-2 bg-transparent rounded-md focus:outline-none' required />
            <textarea name='Message' placeholder='Enter your message' rows='10' className='p-2 border-2 bg-transparent rounded-md focus:outline-none'></textarea>
           
            <button type='submit' className='w-fit px-6 py-3 mt-3 mb-5 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-cyan-800 hover:border-solid hover:border-cyan-500 hover:bg-none border-2 cursor-pointer text-sm sm:text-lg mx-auto'>Let's Talk</button>
          </form>
        </div>

        <AnimatePresence>
        {notification.visible && (
            <motion.div
              className={`fixed top-5 self-center sm:text-center p-3 rounded-md text-white shadow-lg z-50 ${
                notification.type === 'success' ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gradient-to-r from-red-400 to-red-600'
              } border border-gray-700`}
              variants={notificationVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              {notification.message}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Contact;
