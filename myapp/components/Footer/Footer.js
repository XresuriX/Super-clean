import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const FooterLink = ({ href, text }) => (
  <a href={href} className="text-gray-500 hover:text-secondary transition duration-300 ease-in-out">
    {text}
  </a>
);

const FooterSocialLink = ({ href, icon }) => (
  <a href={href} className="text-primary hover:text-secondary transition duration-300 ease-in-out">
    {icon}
  </a>
);

const FooterContactItem = ({ icon, text }) => (
  <div className="flex items-center">
    <span className="text-gray-500">{icon}</span>
    <span className="ml-2">{text}</span>
  </div>
);

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">VKS Cleaning</h3>
            <p className="text-gray-500">
              The ultimate Cleaning Experience. Where we treat your home with respect and give it the cleaning it deserves.
            </p>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink href="#" text="About Us" />
              </li>
              <li>
                <FooterLink href="#" text="Events" />
              </li>
              <li>
                <FooterLink href="#" text="Blog" />
              </li>
              <li>
                <FooterLink href="#" text="Membership" />
              </li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center items-center space-x-4">
              <FooterSocialLink href="#" icon={<FaFacebook />} />
              <FooterSocialLink href="#" icon={<FaInstagram />} />
              <FooterSocialLink href="#" icon={<FaTwitter />} />
              <FooterSocialLink href="#" icon={<FaPinterest />} />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 flex flex-col justify-center items-center md:justify-start space-x-4">
              <li>
                <FooterContactItem icon={<FaMapMarkerAlt />} text="123 Sweet Street, Cleaning GA" />
              </li>
              <li>
                <FooterContactItem icon={<FaPhone />} text="+1 123 456 7890" />
              </li>
              <li>
                <FooterContactItem icon={<FaEnvelope />} text="info@vks.com" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-4 text-gray-500 text-sm font-medium text-center">
        &copy; {currentDate} VKS Cleaning. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
