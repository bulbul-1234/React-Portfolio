import React from "react";

const Contact = () =>{
    return (
        <div name="Contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
            <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                    <p className="py-6">Submit the form below to Contact me.</p>
                </div>
                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/b450a3a6-702a-47d5-bd17-0f655ed34ae5" method="post" className="flex flex-col">
                        <input type="text" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" name="name" placeholder="Enter your Name"/>
                        <input type="text" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" name="email" placeholder="Enter your Email"/>
                        <textarea name="message" id="" cols="30" rows="10" className="p-2 bg-transparent border-2 text-white focus:outline-none my-4" placeholder="Enter your Message"></textarea>
                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex ietms-center rounded-md hover:scale-110 duration-300">Let's Talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact