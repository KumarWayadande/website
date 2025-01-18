import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

/**
 * Footer component that renders the footer section of the website.
 *
 * It includes the following sections:
 * - Logo and introduction
 * - Social media links
 * - Other links (Verify Membership, Privacy Policy, Sitemap)
 * - Copyright notice
 *
 * @returns {JSX.Element} The rendered footer section.
 */

const copyRightContents =
  '© 2024 Association of Computer Engineering Students, DIT. All rights reserved.'

const Footer = () => {
  const socials = [
    {
      display: 'Instagram',
      link: 'https://www.instagram.com/aces.dit/',
      icon: <FaInstagram />,
    },
    {
      display: 'LinkedIn',
      link: 'https://www.linkedin.com/company/acesdit/',
      icon: <FaLinkedin />,
    },
    {
      display: 'GitHub',
      link: 'https://github.com/acesdit',
      icon: <FaGithub />,
    },
  ]

  const others = [
    {
      display: 'Verify Membership',
      link: '/construction',
    },
    {
      display: 'Privacy Policy',
      link: '#',
    },
    {
      display: 'Sitemap',
      link: '#',
    },
  ]

  return (
    // Main Div representing footer
    // It contains 3 nested divs inside it
    <div className='flex flex-col bg-[#2c2c2c] pt-10'>
      {/* First Div represents brand image, name and links. */}
      <div className='left-part flex flex-col items-center w-fit mx-auto'>
        <Image
          src='/acesLogo(Black).svg'
          height={124}
          width={124}
          alt='ACES Logo'
        />
        <h3 className='text-3xl font-title font-medium uppercase  text-white leading-normal pb-2 text-center'>
          Association of Computer Engineering Students
        </h3>
        <p className='text-white uppercase text-xs text-center md:text-left'>
          <Link
            className='transition-colors hover:text-secondary'
            href='https://engg.dypvp.edu.in/'
            target='_blank'>
            Dr. D.Y. Patil Institute of Technology, Pimpri
          </Link>
        </p>
      </div>
      {/* Second Div showing all the social links */}
      <div className='social-icons-container flex flex-row gap-5 mt-4 w-fit mx-auto'>
        {socials.map((social) => (
          <Link
            key={social.display}
            className='text-xl hover:text-white transition-all text-gray-400'
            href={social.link}>
            {social.icon}
          </Link>
        ))}
      </div>
      {/* Horizontal Line to make UI much better and organizable */}
      <hr className='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700' />

      {/* Third Div showing other links */}
      <div className='social-icons-container flex flex-row justify-center gap-10 mb-2'>
        {others.map((other) => (
          <Link
            key={other.display}
            className='text-xs transition-all hover:text-white uppercase text-gray-400'
            href={other.link}>
            {other.display}
          </Link>
        ))}
      </div>
      {/* Copyright Contents */}
      <p className='text-gray-400 bg-[#1a1a1a] p-4 mt-2 text-xs text-center leading-relaxed'>
        {copyRightContents}
      </p>
    </div>
  )
}

export default Footer
