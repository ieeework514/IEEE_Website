// This contain the footer of the website
// components/Footer.js
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-gradient-to-r from-[#404371] to-[#780831] text-white pt-12 pb-6 border-t-2 border-[#d69e9e] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-bold">IEEE BIT Mesra</h2>
            <p className="text-gray-300">
              Advancing technology for Humanity through innovation, education, and collaboration.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Events', 'Workshops', 'Leaderboard', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Documentation', 'Blog', 'Research Papers', 'Project Gallery'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                <span>+91 9123388559</span>
              </li>
              <li className="flex items-start">
                <MailIcon className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                <span>ieee@bitmesra.ac.in</span>
              </li>
              <li className="flex items-start">
                <LocationIcon className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                <span>BIT Mesra, Ranchi, Jharkhand - 835213</span>
              </li>
              <li className="flex items-start">
                <WhatsAppIcon className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                <span>WhatsApp for Tech Support</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div variants={itemVariants} className="border-t border-gray-700 my-6"></motion.div>

        {/* Bottom Section */}
        <motion.div 
          variants={containerVariants}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <motion.p variants={itemVariants} className="text-gray-400 mb-4 md:mb-0">
            © 2025 IEEE BIT Mesra. All rights reserved.
          </motion.p>

          <motion.div variants={itemVariants} className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

// Simple icon components (replace with actual icons from your preferred library)
const PhoneIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MailIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LocationIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const WhatsAppIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-3.424c-.545 1.492-1.578 2.721-2.846 3.032l-.538.144c-.104.028-.234-.04-.278-.148-.108-.27-.258-.876-.3-1.122-.043-.247.13-.38.317-.544.192-.168.425-.418.56-.562.146-.153.193-.26.29-.416.096-.155.048-.29-.024-.425-.072-.135-.653-1.568-.894-2.143-.24-.576-.487-.496-.653-.53-.167-.034-.365-.037-.565-.037-.196 0-.393.01-.57.037-.415.062-.747.252-.96.525-.213.273-.76.933-.76 2.26 0 1.327.88 2.642 1 2.827.123.185 1.416 2.153 3.454 3.02.48.205.853.316 1.145.406.48.147.92.187 1.295.147.375-.04 1.13-.277 1.29-1.012.16-.733.16-1.355.115-1.426-.045-.07-.17-.123-.36-.223-.658-.32-1.822-.99-2.4-1.386l-.6-.39c-.262-.17-.386-.292-.53-.585-.144-.292-.016-.453.11-.585.112-.116.27-.292.405-.438.135-.145.18-.243.27-.39.09-.147.075-.272.04-.39-.035-.12-.3-.855-.48-1.17z" />
  </svg>
);

export default Footer;