import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const  ContactForm = (props) => {
  const [state, handleSubmit] = useForm("xgereypn");
  if (state.succeeded) {
      return <p className="text-center">Thanks for contacting us! We will contact you soon.</p>;
  }
  if (state.submitting){
      return (
        <div className="flex justify-center py-8">
            <svg className="w-6 animate-spin" viewBox="0 0 252 252" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="124" cy="124" r="122" stroke="#AFFFB7" stroke-width="4"/>
                <path d="M248 124C248 140.284 244.793 156.408 238.561 171.453C232.329 186.497 223.196 200.167 211.681 211.681C200.167 223.196 186.497 232.329 171.453 238.561C156.408 244.793 140.284 248 124 248" stroke="#003205" stroke-width="8"/>
            </svg>
        </div>
        );
      
  }
  return (
      <form onSubmit={handleSubmit} className="w-full flex flex-col focus:outline-none">
        <label htmlFor="name" className="py-2 flex flex-col">
            Name
            <input id="name" type="text" name="text" className="focus:outline-none focus:ring ring-green-500 ring-opacity-50 px-1 rounded-sm" />
            <ValidationError prefix="text" field="text" errors={state.errors}/>
        </label>
        <label htmlFor="email" className="py-2 flex flex-col">
            Email Address
            <input id="email" type="email" name="email" className="focus:outline-none focus:ring ring-green-500 ring-opacity-50 px-1 rounded-sm" />
            <ValidationError prefix="Email" field="email" errors={state.errors}/>
        </label>
        <label htmlFor="name" className="py-2 flex flex-col">
            Subject
            <input id="subject" type="text" name="subject" className="focus:outline-none focus:ring ring-green-500 ring-opacity-50 px-1 rounded-sm" />
            <ValidationError prefix="subject" field="subject" errors={state.errors}/>
        </label>
        <label htmlFor="email" className="py-2 flex flex-col">
            Query Message
            <textarea id="message" name="message" className="focus:outline-none focus:ring ring-green-500 ring-opacity-50 resize-none px-1 rounded-sm" />
            <ValidationError prefix="Message" field="message" errors={state.errors}/>
        </label>

        <button type="submit" disabled={state.submitting} className="py-2 px-4 my-6 bg-gradient-to-r from-green-500 to-gray-500 text-white font-bold rounded-sm">
            Submit
        </button>
    </form>
  );
}

export default ContactForm;
