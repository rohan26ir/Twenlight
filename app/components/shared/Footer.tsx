'use client';
import Link from 'next/link';
import React from 'react';

import { LuFacebook } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { IconType } from "react-icons";

interface PageItem {
  id: number,
  name: string,
  url: string,
  icon?: IconType,
}

const Footer = () => {

  const Companys: PageItem[] = [
    { id: 1, name: "Home", url: '' },
    { id: 2, name: "Courses", url: '' },
    { id: 3, name: "About Us", url: '' },
  ]

  const Pages: PageItem[] = [
    { id: 1, name: "Problem Solving", url: '' },
    { id: 2, name: "Web Developement", url: '' },
    { id: 3, name: "App Developemnt", url: '' },
  ]

  const otherPages: PageItem[] = [
    { id: 1, name: "Instructor", url: '' },
    { id: 2, name: "Privacy Policy", url: '' },
    { id: 3, name: "Terms & Conditions", url: '' },
  ]

  const socialMediaLinks: PageItem[] = [
    { id: 1, icon: LuFacebook, name: "Facebook", url: '' },
    { id: 2, icon: LuTwitter, name: "Twitter", url: '' },
    { id: 3, icon: LuLinkedin, name: "LinkedIn", url: '' },
    { id: 4, icon: LuInstagram, name: "Instagram", url: '' },
  ]

  return (
    <div>
      <div className='max-w-500 min-w-[90%] mx-auto p-3'>
        <div className='flex flex-col gap-10'>

          {/* footer link */}
          <div className='grid grid-cols-5 gap-5'>
            <div className='col-span-2'>
              <h2 className='text-2xl font-bold'>Twenlight</h2>
              <p>
                At Edux, we provide top-tier E-learning to the services to meet all your educational needs. Whether you are a student.
              </p>
            </div>

            <div className='col-span-1'>
              <h3 className='text-xl font-semibold mb-3'>Company</h3>
              <div className='flex flex-col gap-2'>
                {
                  Companys.map((company) => (
                    <Link key={company.id || company.url} href={company.url}>
                      {company.name}
                    </Link>
                  ))
                }
              </div>
            </div>

            <div className='col-span-1'>
              <h3 className='text-xl font-semibold mb-3'>Pages</h3>
              <div className='flex flex-col gap-2'>
                {
                  Pages.map((page) => (
                    <Link key={page.id || page.url} href={page.url}>
                      {page.name}
                    </Link>
                  ))
                }
              </div>
            </div>

            <div className='col-span-1'>
              <h3 className='text-xl font-semibold mb-3'>Other Pages</h3>
              <div className='flex flex-col gap-2'>
                {
                  otherPages.map((otherPage) => (
                    <Link key={otherPage.id || otherPage.url} href={otherPage.url}>
                      {otherPage.name}
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>

          {/* social media */}
          <div className='flex justify-start text-2xl'>
            {
              socialMediaLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.id}
                    href={social.url}
                    title={social.name}
                    className="mx-2"
                  >
                    {Icon && <Icon />}
                  </Link>
                );
              })
            }
          </div>

          {/* copyright */}
          <div className='text-center'>
            <p>
              © Copyright 2026. All Rights Reserved by{" "}
              <a
                href="http://www.twentytwen.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className='text-black/75 font-bold'>Twentytwen</span>
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;