// Navbar.js
import React from 'react';

const Navbar = () => {
  const navItems = [
    { name: 'HOME', hasDropdown: false, href: '/' },
    {
      name: 'SERVICES',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Web Development', href: '/webdevservices' },
        { name: 'SEO Services', href: '/seoservices' },
        { name: 'Content Marketing', href: '/services/content-marketing' },
        { name: 'Social Media', href: '/services/social-media' },
        { name: 'PPC Advertising', href: '/services/ppc' },
      ],
    },
    {
      name: 'PRICING',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Basic Plan', href: '/pricing/basic' },
        { name: 'Standard Plan', href: '/pricing/standard' },
        { name: 'Premium Plan', href: '/pricing/premium' },
        { name: 'Enterprise Solutions', href: '/pricing/enterprise' },
        { name: 'Custom Quotes', href: '/pricing/custom' },
      ],
    },
    { name: 'ABOUT US', hasDropdown: false, href: '/about' },
    { name: 'CONTACT', hasDropdown: false, href: '/contact' },
    { name: 'REVIEWS', hasDropdown: false, href: '/reviews' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white font-bold text-xl">WEBRANKS</a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href || '#'}
                    className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                  </a>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && (
                    <div className="absolute left-0 mt-2 w-56 bg-white bg-opacity-90 backdrop-blur-md shadow-lg rounded-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transform transition-all duration-300 ease-in-out z-20">
                      <div className="py-1">
                        {item.dropdownItems.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button (optional) */}
          <div className="md:hidden">
            {/* Mobile menu logic goes here if needed */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
