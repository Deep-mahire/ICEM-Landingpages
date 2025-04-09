import React, { useEffect } from "react";
import logo from "../../assets/images/Icem-footer-logo.png";

function Footer() {
  useEffect(() => {
    // Dynamically inject Font Awesome CDN
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
    document.head.appendChild(link);

    // Cleanup when the component is unmounted
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="font-baskerville-regular">
      <div className="bg-gray-100 px-8 md:px-16 text-black py-8 rounded-tl-4xl rounded-tr-4xl flex-grow">
        <div className="flex flex-col sm:flex-row justify-around">
          {/* Left Column */}
          <div className="flex flex-col sm:items-start mb-6 sm:mb-0">
            {/* Logo Section */}
            <div className="mb-6 flex">
              <img src={logo} alt="ICEM Logo" className="w-40 sm:w-48" />
            </div>

            {/* Contact Info */}
            <div className="text-sm space-y-6">
              <div className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-xl hover:text-blue-500"></i>
                <div>
                  <p>Indira Chanakya Campus (ICC)</p>
                  <p> S.No. 64,65, Gat No. 276 At Post : Parandwadi,</p>
                  <p>Near Somatne phata, Tal. : Maval, Dist. Pune – 410 506</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-phone-alt text-xl hover:text-green-500"></i>
                <div>
                  <p>CONNECT WITH US: 91+ 7720010705 / 06</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-envelope text-xl hover:text-gray-500"></i>
                <div>
                  <p>info@indiraicem.ac.in</p>
                </div>
              </div>

              {/* Add Website Link */}
              <div className="flex items-center space-x-2">
                <i className="fas fa-globe text-xl hover:text-blue-600"></i>
                <div>
                  <a
                    href="https://www.indiraicem.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700"
                  >
                    www.indiraicem.ac.in
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 text-xl mt-6 mb-4">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="hover:text-blue-600"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-pink-600"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="hover:text-blue-700"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="hover:text-blue-400"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                className="hover:text-red-600"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Right Column (Important Links) */}
          <div className="flex flex-col sm:items-start sm:ml-6">
            <h3 className="text-2xl text-[#023b5e] font-bold mb-6">Important Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <a href="#" className="block text-gray-500 hover:text-gray-400">
                  Staff Grievance Form
                </a>
                <a href="#" className="block text-gray-500 hover:text-gray-400">
                  Women Welfare Policy
                </a>
                <a href="#" className="block text-gray-500 hover:text-gray-400">
                  Anti Ragging Policy
                </a>
                <a href="#" className="block text-gray-500 hover:text-gray-400">
                  Faculty Application Form
                </a>
                <a href="#" className="block text-gray-500 hover:text-gray-400">
                  SPPU
                </a>
              </div>
              <div className="space-y-4">
                <a href="#" className="block text-gray-500 hover:text-gray-400">
                  AICTE
                </a>
                <a href="#" className="block text-gray-500 hover:text-gray-400">
                  DTE
                </a>
                <a href="#" className="block text-gray-500 hover:text-gray-400">
                  MahaDBT
                </a>
                <a href="#" className="block text-gray-500 hover:text-gray-400">
                  MANDATORY DISCLOSURE
                </a>
                <a href="#" className="block text-gray-500 hover:text-gray-400">
                  AICTE APPROVAL
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#023b5e] py-4 px-8 md:px-16 text-left text-white text-sm">
        <p>© 2024. Indira College of Engineering and Management.</p>
      </div>
    </div>
  );
}

export default Footer;
