export const mainJs = `
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
`;

export const appFile = `
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutTeacher from "./components/AboutTeacher";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import TeacherLinks from "./components/TeacherLinks";
import Testimonials from "./components/Testimonials";
import TeacherServices from "./components/TeacherServices";

import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const pageDir = document.documentElement.dir;
const App = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled past the Hero section
            const heroSection = document.getElementById("hero");
            if (heroSection) {
                const scrollTop =
                    window.pageYOffset || document.documentElement.scrollTop;
                setShowScrollButton(scrollTop > 100);
            }
        };

        // Listen for scroll events
        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative w-full bg-page">
            <div className="min-w-full fixed left-1/2 transform -translate-x-1/2 z-50">
                <NavBar />
            </div>
            <Hero />
            <AboutTeacher />
            <TeacherServices />
            <Testimonials />
            <TeacherLinks />
            <ContactUs />
            <Footer />

            {/* Scroll to top button */}
            <div
                className={\`$\{
                    showScrollButton ? "opacity-100" : "opacity-0"
                } fixed bottom-5 right-5 w-11 h-11 rounded-full bg-primary text-center flex justify-center items-center hover:brightness-90 transition-all duration-300 ease-in-out cursor-pointer\`}
                onClick={scrollToTop}>
                <ChevronUpIcon color="white" width={25} />
            </div>
        </div>
    );
};

export default App;

`;

export const siteConfig = (formData) => `
export const siteConfig ={
// General
gender: "${formData.gender === "male" ? "الأستاذ" : "الأستاذة"}",
teacherName: "${formData.name}",

// Hero Section
teacherImageHero: "${formData.teacherImage}",
heroBgImage: "${formData.heroBackgroundImage}",

// About Section
teacherAboutImage: "${formData.teacherAboutImage}",
aboutArticle: {
    first: "${formData.firstArticle}",
    second: "${formData.secondArticle}",

    points: [
       ${formData.points.map((point) => `{ text: "${point}" },`).join("")}
    ],
},

// Services Section
cards: [${
    formData.cards
        ? formData.cards
              .map(
                  (card) =>
                      `{ img: "${card.image}", title: "${card.title}", lecture: "${card.lecture}", href: "${card.href}" },`
              )
              .join("")
        : ""
}
],

// Testimonial Section
initialCounters: {
    first: ${formData.firstCounter},
    second: ${formData.secondCounter},
},

// Subscribe Section
teacherPlatform: "${formData.teacherPlatformLink}",

// Contact Section
social: [
    ${
        formData.socialLinks
            ? formData.socialLinks
                  .map(
                      (social) =>
                          `{ name: "${social.name}",icon: (${social.icon}), href: "${social.link}" },`
                  )
                  .join("")
            : ""
    }
],
contact: {
    address: "${formData.address}",
    phone: "${formData.phone}",
    email: "${formData.email}",
},}
`;

export const indexHtml = (formData) => `
<!doctype html>
<html lang="${formData.language === "english" ? "en" : "ar"}" dir="${
    formData.language === "english" ? "ltr" : "rtl"
}">
    <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
            href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
            rel="stylesheet">
        <title>${formData.title}</title>
    </head>
    <body>
        <div id="root"></div>
        <script type="module" src="/src/main.jsx"></script>
    </body>
</html>

`;

export const indexCss = `
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  font-family: "Tajawal", sans-serif !important;
  line-height: 1.5;
  font-weight: 400;

  /* color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424; */

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  scroll-padding-top: 50px;
}

body {
  font-family: "Tajawal", sans-serif !important;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.costume-container {
  padding-left: 13rem;
  padding-right: 13rem;
}

.section {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }

  a:hover {
    color: #747bff;
  }

  button {
    background-color: #f9f9f9;
  }
}`;

export const packageJson = `
{
    "name": "generated-app",
    "private": true,
    "version": "0.0.0",
    "type": "module",
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
      "preview": "vite preview"
    },
    "dependencies": {
      "@heroicons/react": "^2.1.3",
      "@material-tailwind/react": "^2.1.9",
      "react": "^18.2.0",
      "react-dom": "^18.2.0"
    },
    "devDependencies": {
      "@types/react": "^18.2.66",
      "@types/react-dom": "^18.2.22",
      "@vitejs/plugin-react": "^4.2.1",
      "autoprefixer": "^10.4.19",
      "eslint": "^8.57.0",
      "eslint-plugin-react": "^7.34.1",
      "eslint-plugin-react-hooks": "^4.6.0",
      "eslint-plugin-react-refresh": "^0.4.6",
      "postcss": "^8.4.38",
      "tailwindcss": "^3.4.3",
      "vite": "^5.2.0"
    }
}

`;

export const viteConfig = `
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

`;

export const postcssConfig = `
export default {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
  
`;

export const tailwindConfig = (formData) => `
/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "${formData.primaryColor}",
                secondary: "${formData.secondaryColor}",
                hero: "${formData.heroColor}",
                page: "${formData.pageColor}",
                subscribe: "${formData.subscribeColor}",
            },
            fontFamily: {
                cairo: ["Tajawal", "sans-serif"],
            },
        },
    },
    plugins: [],
});
`;

// Components
export const navBar = `
import React, { useEffect, useState } from "react";
import
{
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { pageDir } from "../App";
import { siteConfig } from "../siteConfig";

function NavList ()
{
    const [ activeNavbar, setActiveNavbar ] = useState( "" );
    const handleActiveNavbar = ( name ) =>
    {
        setActiveNavbar( name );
    };
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
                onClick={() => handleActiveNavbar( "" )}
            >
                <a href="#" className={\`$\{ activeNavbar === "" ? "text-primary" : "" } flex items-center hover:text-primary transition-colors font-cairo\`}>
                    الرئيسية
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
                onClick={() => handleActiveNavbar( "about" )}
            >
                <a href="#about" className={\`$\{ activeNavbar === "about" ? "text-primary" : "" } flex items-center hover:text-primary transition-colors font-cairo\`}>
                    عني
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
                onClick={() => handleActiveNavbar( "services" )}
            >
                <a href="#services" className={\`$\{ activeNavbar === "services" ? "text-primary" : "" } flex items-center hover:text-primary transition-colors font-cairo\`}>
                    الصفوف الدراسية
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
                onClick={() => handleActiveNavbar( "testimonials" )}
            >
                <a href="#testimonials" className={\`$\{ activeNavbar === "testimonials" ? "text-primary" : "" } flex items-center hover:text-primary transition-colors font-cairo\`}>
                    الملف
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
                onClick={() => handleActiveNavbar( "contactUs" )}
            >
                <a href="#contactUs" className={\`$\{ activeNavbar === "contactUs" ? "text-primary" : "" } flex items-center hover:text-primary transition-colors font-cairo\`}>
                    تواصل معنا
                </a>
            </Typography>
        </ul>
    );
}

export default function NavBar ()
{
    const [ openNav, setOpenNav ] = useState( false );
    const [ isHeroSection, setIsHeroSection ] = useState( true );

    const handleWindowResize = () =>
    {
        window.innerWidth >= 960 && setOpenNav( false );
    };

    const handleScroll = () =>
    {
        const heroSection = document.getElementById( "hero" );
        if ( heroSection )
        {
            const offsetTop = 150;
            const scrollPosition = window.scrollY;

            if ( scrollPosition <= offsetTop )
            {
                setIsHeroSection( false );
            }
            else
            {
                setIsHeroSection( true );
            }
        }
    };

    useEffect( () =>
    {
        window.addEventListener( "resize", handleWindowResize );
        window.addEventListener( "scroll", handleScroll );

        return () =>
        {
            window.removeEventListener( "resize", handleWindowResize );
            window.removeEventListener( "scroll", handleScroll );
        };
    }, [] );

    return (
        <Navbar className={\`lg:px-52 py-3 min-w-full transition-all duration-500 ease-in-out rounded-none \`} style={{
            backgroundColor: isHeroSection ? "white" : "transparent",
            border: "none",
            backdropFilter: "none",
            boxShadow: isHeroSection ? "0px 1px 2px rgba(16, 24, 40, 0.219)" : "none",
        }}>
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 text-3xl lg:text-[2vw] xl:text-4xl font-bold font-cairo"
                >
                    {siteConfig.teacherName}
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className={\`$\{ pageDir === "rtl" ? "mr-auto" : "ml-auto" }  h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden\`}
                    ripple={false}
                    onClick={() => setOpenNav( !openNav )}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav} >
                <NavList />
            </Collapse>
        </Navbar>
    );
}
`;

export const hero = `
import React from "react";
import { siteConfig } from "../siteConfig";

function Hero() {
    return (
        <div
            id="hero"
            className="w-full h-screen bg-hero flex flex-col-reverse justify-center gap-20 lg:flex-row lg:justify-between items-center pt-40 pb-20 lg:px-52"
            style={{
                background: \`url(\${siteConfig.heroBgImage}) center top no-repeat\`,
                objectFit: "cover",
                backgroundSize: "cover",
            }}>
            {/* Hero Text */}
            <div className="w-full lg:w-1/2 lg:-mt-56 flex flex-col justify-end items-center text-center lg:text-start gap-5 ">
                <div className="w-full">
                    <h6 className="text-secondary text-3xl lg:text-5xl font-bold">
                        منصة {siteConfig.gender}
                    </h6>
                    <h1 className="text-primary text-3xl lg:text-5xl font-bold mt-2">
                        {siteConfig.teacherName}
                    </h1>
                    <a
                        href="#about"
                        className="block mx-auto lg:mx-0 text-center bg-primary text-white font-medium p-2 w-1/4 mt-10 rounded-md hover:brightness-90 transition-all duration-300 ease-in-out">
                        {" "}
                        إلى المنصة
                    </a>
                </div>
            </div>
            {/* Hero Image */}
            <div className="w-full lg:h-full md:w-2/3 lg:w-1/2">
                <img
                    src={siteConfig.teacherImageHero}
                    alt="hero"
                    className="w-2/3 lg:w-full mx-auto"
                    loading="lazy"
                />
            </div>
        </div>
    );
}

export default Hero;
`;

export const aboutTeacher = `
import React from "react";
import { siteConfig } from "../siteConfig";

function AboutTeacher() {
    return (
        <div
            id="about"
            className="w-full px-20 lg:px-52 section flex flex-col lg:flex-row justify-between items-center gap-7">
            {/* image */}
            <div className="bg-hero w-[70vw] lg:w-[40vw] p-5 lg:p-10">
                <img
                    src={siteConfig.teacherAboutImage}
                    alt="teacher-img"
                    className="w-full border-[1vw] border-white hover:scale-105 transition-all duration-300 ease-in-out"
                    loading="lazy"
                />
            </div>
            {/* text */}
            <div className="w-full lg:w-[60vw]">
                {/* header */}
                <h1 className="text-2xl lg:text-3xl font-bold">{\`عن $\{siteConfig.gender} \${siteConfig.teacherName}\`}</h1>
                {/* slogan */}
                <p className="text-xl italic">واصل لتصل.</p>
                {/* description */}
                <p className="text-justify mt-10">
                    {siteConfig.aboutArticle.first}
                </p>

                <p className="text-justify mt-10">
                    {siteConfig.aboutArticle.second}
                </p>
                {/* brief */}
                <ul className="px-5">
                    {siteConfig.aboutArticle.points.map((point, index) => (
                        <li
                            key={index}
                            className="text-justify font-medium mt-10 list-disc">
                            {point.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AboutTeacher;

`;

export const teacherServices = `
import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { EyeIcon } from "@heroicons/react/24/solid";
import { siteConfig } from "../siteConfig";

function TeacherServices() {
    return (
        <div id="services" className="px-5 lg:px-52  section bg-hero">
            <h1 className="text-center text-4xl font-bold text-secondary mb-10">
                الصفوف الدراسية
            </h1>

            {/* Cards */}
            <div className="flex flex-col lg:flex-row justify-center items-center  gap-10">
                {siteConfig.cards.map((card, index) => (
                    <div
                        key={index}
                        className="w-full lg:w-[unset] relative group transition-all duration-300 ease-in-out overflow-hidden rounded-lg shadow-[5px_5px_10px_-3px_#00000042]">
                        <img
                            src={card.img}
                            alt="card-1"
                            className="w-full lg:w-[20vw] rounded-lg"
                            loading="lazy"
                        />
                        <div className="top-80 lg:top-52 invisible h-0 group-hover:visible group-hover:h-full group-hover:top-0 absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-5 bg-black bg-opacity-60 transition-all duration-300 ease-in-out">
                            <div className=" text-center text-white">
                                <a
                                    href={card.href}
                                    className="hover:text-primary transition-all duration-300 ease-in-out">
                                    <h3 className="text-lg font-bold">
                                        {card.title}
                                    </h3>
                                </a>
                                <p className="text-xs">{card.lecture}</p>
                            </div>
                            <div className="flex justify-center items-center gap-5">
                                <div className="relative w-10 h-10 rounded-full bg-primary cursor-pointer hover:brightness-75 transition-all duration-300 ease-in-out">
                                    <EyeIcon
                                        color="white"
                                        width={25}
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                    />
                                </div>
                                <div className="relative w-10 h-10 rounded-full bg-primary cursor-pointer hover:brightness-75 transition-all duration-300 ease-in-out">
                                    <ArrowTopRightOnSquareIcon
                                        color="white"
                                        width={25}
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeacherServices;

`;

export const testimonials = `
import React, { useEffect } from "react";
import { siteConfig } from "../siteConfig";

function Testimonials() {
    const [firstCounter, setFirstCounter] = React.useState(0);
    const [secondCounter, setSecondCounter] = React.useState(0);
    const [isVisible, setIsVisible] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const testimonialsSection = document.getElementById("testimonials");
            if (testimonialsSection) {
                const rect = testimonialsSection.getBoundingClientRect();
                const isVisible =
                    rect.top < window.innerHeight && rect.bottom >= 0;
                setIsVisible(isVisible);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check initial scroll position

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const updateCounters = async () => {
            const promises = [];

            // Update both counters simultaneously
            promises.push(
                new Promise((resolve) => {
                    for (
                        let i = 0;
                        i <= siteConfig.initialCounters.first;
                        i++
                    ) {
                        setTimeout(() => {
                            setFirstCounter(i);
                        }, 100 * i); // Adjust delay time as needed
                    }
                    // Resolve the promise after updating the first counter
                    setTimeout(() => {
                        resolve();
                    }, 100 * siteConfig.initialCounters.first); // Resolve after the last update
                })
            );

            promises.push(
                new Promise((resolve) => {
                    for (
                        let i = 0;
                        i <= siteConfig.initialCounters.second;
                        i++
                    ) {
                        setTimeout(() => {
                            setSecondCounter(i);
                        }, 100); // Adjust delay time as needed
                    }
                    // Resolve the promise after updating the second counter
                    setTimeout(() => {
                        resolve();
                    }, 100 * siteConfig.initialCounters.second); // Resolve after the last update
                })
            );

            // Wait for both promises to resolve
            await Promise.all(promises);
        };
        if (isVisible) {
            updateCounters();
        }
    }, [
        siteConfig.initialCounters.first,
        siteConfig.initialCounters.second,
        isVisible,
    ]);

    return (
        <div
            id="testimonials"
            className="section p-5 lg:px-52 flex flex-col justify-start items-center gap-20">
            {/* Title */}
            <div className="text-center">
                <h1 className="text-2xl lg:text-4xl font-bold text-secondary">{\`ليه تشترك في منصة \${siteConfig.gender} \${siteConfig.teacherName}؟\`}</h1>
                <p className="mt-5">هنا هنكتب كلمتين.</p>
            </div>
            {/* Counter */}
            <div className="w-[70vw] lg:w-[40vw] mx-auto flex justify-between items-center">
                <div className="text-center">
                    <span className="text-secondary font-bold text-5xl">
                        {firstCounter}
                    </span>
                    <p>سنين خبرة</p>
                </div>
                <div className="text-center">
                    <span className="text-secondary font-bold text-5xl">
                        {secondCounter}
                    </span>
                    <p>طالب</p>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;

`;

export const teacherLinks = `
import React from "react";
import { siteConfig } from "../siteConfig";

function TeacherLinks() {
    return (
        <div className="w-full section p-5 lg:px-52 bg-subscribe flex flex-col lg:flex-row justify-center gap-5 lg:justify-between items-center text-white ">
            <div className="flex flex-col justify-center items-center lg:items-start gap-5">
                <h1 className="font-bold text-3xl">الإشتراك بالمنصة</h1>
                <p className="tracking-wider">
                    يمكنك الإشتراك بالمنصة بضغط زر الإشتراك
                </p>
            </div>
            <div className="flex justify-center items-center text-center  border-[3px] border-white hover:border-transparent hover:bg-primary bg-transparent transition-all duration-300 ease-in-out cursor-pointer px-6 py-2 rounded-sm">
                <a href={siteConfig.teacherPlatform}>الإشتراك</a>
            </div>
        </div>
    );
}

export default TeacherLinks;
`;

export const contactUs = `
import React from "react";
import { siteConfig } from "../siteConfig";

function ContactUs() {
    return (
        <div
            id="contactUs"
            className="section p-5 lg:px-52 flex justify-start items-start gap-10 bg-hero">
            {/* First section */}
            <div>
                <h1 className="text-[5vw] lg:text-4xl font-bold text-secondary mb-5">
                    {siteConfig.teacherName}
                </h1>
                <p className="text-xs lg:text-sm">
                    هنا هنكتب كلمتين مختصرين عن الأستاذة
                </p>
            </div>

            {/* Second section */}
            <div className="text-sm flex flex-col justify-start items-start gap-7">
                <h1 className="font-bold text-secondary">تواصل معنا</h1>

                {/* Contact Details */}
                <div className="flex flex-col justify-start items-start gap-3">
                    <p className="font-bold">
                        العنوان:{" "}
                        <span className=" font-normal">
                            {siteConfig.contact.address}
                        </span>
                    </p>
                    <p className="font-bold">
                        رقم الموبايل:{" "}
                        <span className=" font-normal">
                            {siteConfig.contact.phone}
                        </span>
                    </p>
                    <p className="font-bold">
                        الإيميل:{" "}
                        <span className=" font-normal">
                            <a href="mailto:info@example.com">
                                {siteConfig.contact.email}
                            </a>
                        </span>
                    </p>
                </div>

                {/* Social Media */}
                <div className="flex justify-start items-center gap-3 ">
                    {siteConfig.social.map((icon) => (
                        <div
                            key={icon.name}
                            className="w-10 h-10 rounded-full bg-primary flex justify-center items-center cursor-pointer hover:brightness-75 transition-all duration-300 ease-in-out">
                            <a href={icon.href}>{icon.icon}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ContactUs;

`;

export const footer = `
import React from "react";

function Footer() {
    return (
        <div className=" p-5 lg:px-52 text-center">
            Powered by{" "}
            <a href="https://stutech.net/" className="text-primary">
                StuTech
            </a>
        </div>
    );
}

export default Footer;

`;
