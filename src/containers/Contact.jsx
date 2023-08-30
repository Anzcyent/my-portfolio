import React from "react";

const Contact = () => {
  return (
    <section className="min-h-[100vh] bg-darkSecondary text-white font-poppins p-3">
      <div className="wrapper mt-20">
        <h4 className="text-4xl font-bold text-gradient-purple text-center my-10">Contact Me</h4>
        <form className="flex flex-col md:px-40 px-0">
          <input type="text" className="w-full p-2 border-2 outline-0 my-5" placeholder="Your name" style={{background: "transparent"}} />
          <textarea type="text" className="w-full p-2 border-2 outline-0 my-5" placeholder="Your message" rows={10} style={{background: "transparent"}} />

          <button className="bg-gradient p-3 hover-and-scale self-center w-full my-5">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
