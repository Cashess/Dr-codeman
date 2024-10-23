"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { pinterest, instagram, facebook, linkedin, github, dribbble } from "@/asset/index";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
];

const Navigation = () => {
    const [open, setOpen] = useState(false);
    const topVariants= {
        closed:{
            rotate:0,
        },
        opened:{
            rotate:45,
            backgroundColor:"rgb(255,255,255)"   
        }
    }
    const centerVariants= {
        closed: {
            opacity:1,
        },
        opened:{
            opacity:0
        }
    }
    const bottomVariants= {
        closed:{
            rotate:0,
        },
        opened:{
            rotate:-45,
            backgroundColor:"rgb(255,255,255)"   
        }
    }
    const listVariants= {
        closed:{
            x:"100vw",
        },
        opened:{
            x:0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,

            }
        }
    }
    const listItemVariants= {
        closed:{
            x:-10,
            opacity:0,
        },
        opened:{
            x:0,
            opacity: 1,
        }
    }

    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map(link => (
                   <NavLink link={link} key={link.title}/>
                ))}
            </div>

            <div className="md:hidden lg:flex lg:w-1/3 lg:justify-center">
                <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className="text-yellow-600">Gote</span>
                    <span className="w-12 h-6 rounded bg-white text-black flex items-center justify-center">
                        Dev
                    </span>
                </Link>
            </div>

            <div className="hidden md:flex lg:flex gap-4 w-1/3">
  <Link href="https://github.com/Cashess" target="_blank" rel="noopener noreferrer">
    <Image src={github} alt="GitHub" width={26} height={26} />
  </Link>
  <Link href="/">
    <Image src={dribbble} alt="Dribbble" width={26} height={26} />
  </Link>
  <Link href="/">
    <Image src={facebook} alt="Facebook" width={26} height={26} />
  </Link>
  <Link href="https://www.linkedin.com/in/aminu-yusuf-462421255/" target="_blank" rel="noopener noreferrer">
    <Image src={linkedin} alt="LinkedIn" width={26} height={26} />
  </Link>
  <Link href="/">
    <Image src={pinterest} alt="Pinterest" width={26} height={26} />
  </Link>
  <Link href="/">
    <Image src={instagram} alt="Instagram" width={26} height={26} />
  </Link>
</div>


            <div className="md:hidden">
                <button
                    className="w-11 h-8 flex flex-col justify-between z-50 relative"
                    onClick={() => setOpen(!open)}
                >
                    <motion.div animate={open ? "opened" : "closed"} variants={topVariants} className="w-10 h-1 bg-yellow-600 rounded origin-left"></motion.div>
                    <motion.div animate={open ? "opened" : "closed"} variants={centerVariants} className="w-10 h-1 bg-yellow-600 rounded "></motion.div>
                    <motion.div animate={open ? "opened" : "closed"} variants={bottomVariants} className="w-10 h-1 bg-yellow-600 rounded origin-left"></motion.div>
                </button>
                {open && (
                    <motion.div animate="opened" variants={listVariants} initial="closed" className="absolute top-0 left-0 w-screen h-screen bg-black text-yellow-700 flex flex-col items-center justify-center gap-8 text-4xl z-40">
                        {links.map(link => (
                           <motion.div key={link.title} className="cursor-pointer" variants={listItemVariants}>
                             <Link href={link.url} >
                                {link.title}
                            </Link>
                           </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Navigation;
