import React from 'react';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
// top
const Footer = () => {
  const socialItems = [
    { name: 'Facebook', icon: FaFacebook, link: 'https://www.facebook.com/' },
    {
      name: 'Instagram',
      icon: FaInstagram,
      link: 'https://www.instagram.com/',
    },
    { name: 'Twitter', icon: FaTwitter, link: 'https://twitter.com/' },
    { name: 'Twitch', icon: FaTwitch, link: 'https://www.twitch.tv/' },
    { name: 'Github', icon: FaGithub, link: 'https://github.com/' },
  ];

  return (
    <footer className="w-full bg-slate-900 text-gray-300 py-8 px-4">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="font-bold text-xl mb-2">Smart-Recruit</p>
          <p className="mb-4">© 2024 IE Networks, All rights reserved</p>
          <p className="text-sm">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
        </div>

        <div className="flex space-x-6 mb-4 md:mb-0">
          {socialItems.map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <item.icon className="text-2xl hover:text-white transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
