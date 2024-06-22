import React from "react";
import {
  FaLocationArrow,
  FaMobileAlt,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              ecommerce
            </a>
            <p className="text-gray-600 lg:pr-24 pt-3">
              Made using React, JavaScript, Tailwind
            </p>
            <p className="text-gray-600 hover:dark:text-white hover:text-black duration-300">
              Made with ❤️ by Swastideep Maharana
            </p>
            <a
              href="https://www.instagram.com/swastideep__/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full"
            >
              Instagram
            </a>
          </div>

          {/* footer links */}
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* company address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Bangalore, Karnataka</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>India</p>
                  <p>+91 123456789</p>
                </div>
              </div>
              {/* social links */}
              <div className="py-8 px-4">
                <h1 className="text-xl font-semibold sm:text-left mb-3">
                  Follow Us
                </h1>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/swastideep__/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-3xl text-gray-600 hover:text-primary duration-300" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-3xl text-gray-600 hover:text-primary duration-300" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-3xl text-gray-600 hover:text-primary duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
