import TwitterSvg from '../assets/icons/socials/twitter.svg';
import InstagramSvg from '../assets/icons/socials/instagram.svg';
import FacebookSvg from '../assets/icons/socials/facebook.svg';
import PinterestSvg from '../assets/icons/socials/pinterest.svg';

const navbarLinks = [
  {
    label: 'Philosophy',
    to: '/',
  },
  {
    label: 'Apartments',
    to: '/apartments',
  },
  {
    label: 'Surroundings',
    to: '/surroundings',
  },
  {
    label: 'Contacts',
    to: '/contacts',
  },
];

const footerLinks = [
  {
    label: 'Privacy Policy',
    to: '/privacy-policy',
  },
  {
    label: 'Cancellation Policy',
    to: '/cancellation-policy',
  },
  {
    label: 'Booking Enquiry',
    to: '/enquiry',
  },
];

const socialLinks = [
  {
    url: 'https://facebook.com',
    icon: FacebookSvg,
  },
  {
    url: 'https://instagram.com',
    icon: InstagramSvg,
  },
  {
    url: 'https://instagram.com',
    icon: PinterestSvg,
  },
  {
    url: 'https://instagram.com',
    icon: TwitterSvg,
  },
];

export default {
  footerLinks,
  navbarLinks,
  socialLinks,
};
