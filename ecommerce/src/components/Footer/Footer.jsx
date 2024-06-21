import React from "react";

const FotterLinks = [
    {
        title:"Home",
        link: "/#",
    },
    {
        title:"About",
        link: "/#about",
    },
    {
        title:"Contact",
        link: "/#contack",
    },
    {
        title:"Blog",
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
            <p className="text-gry-600 lg:pr-24 pt-3">
              Made using React java-script, Tailwind
            </p>
            <p className="text-gray-900 mt-4 ">
              Made with ❤️ by Swastideep Maharana{" "}
            </p>
            <a
              href="https://www.instagram.com/swastideep__/"
              target="blank"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full"
            >instagram</a>
          </div>

          {/* footer links */}
          <div className="col-span-2 grid grid-cols sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
                <h1>Important Links</h1>
                <ul>
                    {
                        FotterLinks.map(
                            (data, index) => (
                                <li key={index}>
                                   <a 
                                   href={data.link}
                                   className="text-gray-600 hover:text-gray-400 duration-300"
                                   >
                                    {data.title}
                                   </a>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
