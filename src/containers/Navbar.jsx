import React from 'react';
import {AiFillLinkedin, AiFillGithub, AiFillMail} from "react-icons/ai";

const Navbar = () => {
  return (
    <div class='flex flex-row justify-center p-10 shadow-lg bg-gray-100'>
        {/*3 links for Resume, Github, Gmail */}
        <a href='https://linkedin.com/in/sebbyzhao' class='mx-10 hover:cursor-pointer'>
            <AiFillLinkedin size={30} />
        </a>
        <a href='https://github.com/sebzhao' class='mx-10'>
            <AiFillGithub size={30} />
        </a>
        <a href='mailto:sebbyzhao@berkeley.edu' class='mx-10'>
            <AiFillMail size={30} />
        </a>
    </div>
  )
}

export default Navbar