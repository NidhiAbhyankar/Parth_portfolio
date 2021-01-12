import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import resumePdf from './ParthMujumdar.pdf'
export const links = [
  {
    id: 1,
    url: { resumePdf },
    text: 'resume',
  },
  {
    id: 2,
    url: '/',
    text: 'contact me',
  },
]

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 2,
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com',
    icon: <FaLinkedin />,
  },
]
