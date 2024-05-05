import React from 'react';
import { FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="mt-12 w-max-[800px] border-t border-gray-500 text-center">
      <p className="my-5 text-gray-500">© 2024 Habib Yusuf. All rights reserved.</p>
      <div className="flex justify-center items-center gap-4 text-gray-500 text-3xl">
        <a href="https://github.com/strxchao" target="_blank" rel="noopener noreferrer">
          <FaGithubSquare className="hover:text-gray-700" />
        </a>
        <a href="https://instagram.com/habibyusuf_" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-gray-700" />
        </a>
        <a href="https://linkedin.com/in/habibyusuf190" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-gray-700" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
