import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useMediaQuery } from "react-responsive";

const Contact = () => {
  const [renderAnimation, setRenderAnimation] = useState(false);
  const form = useRef();

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1280px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (isDesktopOrLaptop) {
        if (window.scrollY > 6150 && window.scrollY < 6700) {
          setRenderAnimation(true);
        }
      } else {
        if (window.scrollY > 8900 && window.scrollY < 9500) {
          setRenderAnimation(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m5hry56",
        "template_hlurdc3",
        form.current,
        "IfFV-JnDdjx2uaF-5"
      )
      .then(
        (result) => {
          alert("Thanks for your feedback");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section className="min-h-[100vh] bg-darkSecondary text-white font-poppins p-3">
      <div className="wrapper mt-20">
        {renderAnimation && (
          <h4 className="text-4xl font-bold text-gradient-purple text-center my-10 animate__animated animate__fadeIn">
            Contact Me
          </h4>
        )}

        {renderAnimation && (
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col md:px-40 px-0 animate__animated animate__zoomIn"
            autoComplete="off"
          >
            <input
              type="text"
              className="w-full p-2 border-2 outline-0 my-5"
              placeholder="Your name"
              style={{ background: "transparent" }}
              required
              name="user_name"
            />
            <input
              type="email"
              className="w-full p-2 border-2 outline-0 my-5"
              placeholder="Your email address"
              style={{ background: "transparent" }}
              required
              name="user_email"
            />
            <textarea
              type="text"
              className="w-full p-2 border-2 outline-0 my-5"
              placeholder="Your message"
              rows={10}
              style={{ background: "transparent" }}
              required
              name="message"
            />

            <button
              type="submit"
              className="bg-dark p-3 hover-and-scale self-center w-full my-5"
            >
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
