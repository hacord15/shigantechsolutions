
// components/Navbar.js
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Handle scroll for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle resize to reset mobile menu state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 880) {
        setMobileMenuOpen(false);
        setOpenDropdowns({});
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dropdownItems = {
    about: { 
      title: 'About', 
      links: [
        { name: 'Our Story', href: '/about/our-story' },
        { name: 'Leadership', href: '/about/leadership' },
        { name: 'Sustainability', href: '/about/sustainability' },
        {name :"Our Companies" , href:"/about/our-companies"}
      ] 
    },
    services: { 
      title: 'Services', 
      links: [
        { name: 'CNG Retrofit',  href:"/services/cng-retrofit" },
        { name: 'LNG Solutions', href: '/services/lng-solutions' },
        { name: 'Dual Fuel Systems', href: '/services/dual-fuel-systems' },
        { name: 'Fleet Consulting', href: '/services/fleet-consulting' }
      ] 
    },
    sectors: { 
      title: 'Sectors', 
      links: [
        { name: 'Automotive', href: '/sectors/automotive' },
        { name: 'Locomotive', href: '/sectors/locomotive' },
        { name: 'Marine', href: '/sectors/marine' },
        { name: 'Off-Highway', href: '/sectors/off-highway' }
      ] 
    },
    resources: { 
      title: 'Resources', 
      links: [
        { name: 'Case Studies', href: '/resources/case-studies' },
        { name: 'Whitepapers', href: '/resources/whitepapers' },
        { name: 'Savings Calculator', href: '/calculator' }
      ] 
    },
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* <Link href="/" className="logo">
          <i className="fas fa-bolt"></i> Shigan TechSolutions
        </Link> */}

<Link href="/" className="logo">
  <Image 
    src="/assests/Shigan-tech.jpg" 
    alt="Shigan TechSolutions" 
    width={180} 
    height={45} 
    priority
  />
</Link>
        <button className="hamburger" onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          {Object.entries(dropdownItems).map(([key, { title, links }]) => (
            <li key={key} className={openDropdowns[key] ? 'open' : ''}>
              <a 
                href="#" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  if (window.innerWidth <= 880) toggleDropdown(key); 
                }}
              >
                {title} <i className="fas fa-chevron-down"></i>
              </a>
              <ul className="dropdown-menu">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li>
            <Link href="/calculator">Savings</Link>
          </li>
          {/* Add Contact Us and Service main pages */}
          <li>
            <Link href="/service" className={pathname === '/service' ? 'active' : ''}>
              Service
            </Link>
          </li>
          <li>
            <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      
    </nav>
  );
};

export default Navbar;