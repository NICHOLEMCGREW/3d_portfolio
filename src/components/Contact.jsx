import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [loading, setLoading] = useState(false); // Define loading state here
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    // Clear error message when user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name is required",
      }));
      return;
    }
    if (!form.email.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email format",
      }));
      return;
    }
    if (!form.message.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Message is required",
      }));
      return;
    }

    // If all fields are valid, proceed with form submission
    setLoading(true); // Set loading state to true when form is submitted

    emailjs
    .send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Nichole McGrew",
        from_email: form.email,
        to_email: import.meta.env.My_Email,
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY // Ensure this is correct
    )
      .then(
        () => {
          setLoading(false); // Set loading state back to false once submission is completed
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false); // Set loading state back to false if there's an error
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg- p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className='bg-[#915EFF] bg-opacity-45 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            <span className='text-red-500 text-sm'>{errors.name}</span>
          </label>
          <label className='flex flex-col'>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address?"
              className='bg-[#915EFF] bg-opacity-45 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            <span className='text-red-500 text-sm'>{errors.email}</span>
          </label>
          <label className='flex flex-col'>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Enter a message'
              className='bg-[#915EFF] bg-opacity-45 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            <span className='text-red-500 text-sm'>{errors.message}</span>
          </label>

          <button
            type='submit'
            className='bg-white py-3 px-8 rounded-xl outline-none w-fit text-[#915EFF] font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
