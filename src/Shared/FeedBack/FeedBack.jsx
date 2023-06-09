import React, { useRef, useState } from "react";
import logo from '../../assets/63862-cool-food-truck.json'
import Lottie from "lottie-react";
import emailjs from '@emailjs/browser';


const FeedbackForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_b1ldzqr', 'template_y8mr7x3', form.current, 'wlFeRF5I9YHm1nE51')
            .then((result) => {
                console.log(result, 'success');
            }, (error) => {
                console.log(error.text, 'error');
            });
    };



    return (
        <>
            <div>
                <h1 className="font-semibold text-4xl mb-5 text-center">Share Your Thoughts with Us </h1>
                <hr className='w-16 border-solid border-y mx-auto text-bold  text-cyan-900 mt-3' />

            </div>

            <div data-aos="fade-up"  className="grid grid-cols-1 md:grid-cols-2 mb-10">


                <div className="card mt-20 w-80 mx-auto">



                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Name
                            </label>
                            <input
                            name="user_name"
                                type="text"
                                id="name"
                                //   value={name}
                                //   onChange={(event) => setName(event.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Your name"
                                required
                            />
                        </div>


                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Email
                            </label>
                            <input
                             name="user_email"
                                type="email"
                                id="email"
                                //   value={email}
                                //   onChange={(event) => setEmail(event.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Your email"
                                required
                            />
                        </div>


                        <div className="mb-4">
                            <label
                                htmlFor="message"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                //   value={message}
                                //   onChange={(event) => setMessage(event.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Your feedback message"
                                rows="6"
                                required
                            />
                        </div>


                        <div>
                            <button
                                type="submit"
                                className="bg-gray-500 btn-dark hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
{/* 
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form> */}



                </div>


                <div className='w-10/12 md:mt-20 lg:mt-0 mx-auto'>
                    <Lottie animationData={logo} loop={true} />
                </div>



            </div>
        </>


    );
}


export default FeedbackForm;
