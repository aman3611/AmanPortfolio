import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../style';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { contactLogo } from '../assets';
import { email, github, linkedin } from '../assets';

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value }); // <-- array brackets removed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Aman',
        message: form.message,
        reply_to: form.email // <-- reply-to added
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible');
      setForm({
        name: '',
        email: '',
        message: ''
      });
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong.');
    });
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex justify-center gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl flex justify-evenly items-center flex-col'>
        <motion.div variants={slideIn('right', 'tween', 0.2, 1)}>
          <img src={contactLogo} width={300} height={300} />
        </motion.div>
        <motion.div variants={slideIn('right', 'tween', 0.2, 1)}>
          <p className='text-white font-medium mb-4 py-4 px-6'>Let's Connect! Reach Out and Say Hello</p>
          <div className='flex justify-evenly items-start flex-row'>
            <div onClick={() => window.location = 'mailto:amangupta3611@gmail.com'} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img src={email} alt='email' className='object-contain' />
            </div>
            <div onClick={() => window.open("https://www.linkedin.com/in/aman-gupta-49825b326", "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img src={linkedin} alt='linkedin' className='object-contain' />
            </div>
            <div onClick={() => window.open("https://github.com/aman3611", "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img src={github} alt='github' className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
