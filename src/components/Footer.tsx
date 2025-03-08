import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#030303] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="text-gray-400 space-y-2">
              <li>8, St. Joao Pessoa</li>
              <li>Imperatriz, MA - Brazil</li>
              <li>Phone: +55 (99) 9 9228-3328</li>
              <li>Email: antonio@rotec.com</li>
            </ul>
          </div>

          <div className="flex flex-col justify-between space-x-4 space-y-2 items-center">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex flex-col justify-between space-x-4 space-y-2">
              <a
                href="https://www.facebook.com/profile.php?id=61566125601105"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition flex flex-row items-center gap-4">
                <FaFacebook size={24} /> <span>Facebook</span>
              </a>

              <a
                href="https://x.com/antoniovini47"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition flex flex-row items-center gap-4">
                <FaTwitter size={24} /> <span>X</span>
              </a>
              <a
                href="https://instagram.com/iadieta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition flex flex-row items-center gap-4">
                <FaInstagram size={24} /> <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/antoniovini47"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition flex flex-row items-center gap-4">
                <FaLinkedin size={24} /> <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ROTEC. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
