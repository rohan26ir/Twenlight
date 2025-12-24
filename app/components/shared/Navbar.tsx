'use client';
import React from 'react';
import { CgSearch } from 'react-icons/cg';
import Button from '../dynamic/Button';
import Link from 'next/link';

const Navbar = () => {

  interface navLink {
    name: string;
    link: string;
  }

  const navigationLinks: navLink[] = [
    { name: 'Home', link: '/' },
    { name: 'Courses', link: '/courses' },
    { name: 'Contact Us', link: '/contact-us' },
    { name: 'About Us', link: '/about-us' },
    { name: 'Privacy Policy', link: '/privacy-policy' },
  ];

  return (
    <div className=''>
      <div className='max-w-500 min-w-[90%] mx-auto p-3'>

        <div className='flex justify-between items-center'>

          {/* left side */}
          <div>
            <h2 className='text-3xl font-bold'>Twenlight</h2>
          </div>





          {/* center */}
          <div className='bg-[#F0F5F2] px-2 py-3 rounded-3xl'>
            

            <div>
              {
                navigationLinks.map((navItem, index) => (
                  <Link 
                    key={index}
                    href={navItem.link}
                    className='mx-5'>
                    {navItem.name}
                    </Link>
                       
                ))
              }
            </div>

            
          </div>





          {/* right side */}
          <div className='flex justify-center gap-3'>
            {/* searchbar */}
            <div className='flex items-center'>
              <CgSearch  className='text-3xl'/>
            </div>
            {/* button */}
            <div>
            <Button
              buttonInfo={{
                text: 'Join Our Course',
                link: 'https://example.com',
                variant: 'primary'
              }}
            />

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Navbar;