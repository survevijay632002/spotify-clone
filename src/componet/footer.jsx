import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between">
          <div>
            <h6 className="font-bold mb-2">Company</h6>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  For the Record
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-2">Communities</h6>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  For Artists
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Developers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Advertising
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Investors
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Vendors
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-2">Useful links</h6>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Free Mobile App
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-2">Spotify Plans</h6>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Premium Individual
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Premium Duo
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Premium Family
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Premium Student
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Spotify Free
                </a>
              </li>
            </ul>
          </div>
          <div className=" flex justify-between gap-3 ">
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <hr className="w-5/5 mx-auto bg-white   my-4  ml-10" />
        <p className="text-sm">&copy; 2024 Spotify AB</p>
      </div>
    </footer>
  );
};

export default Footer;
