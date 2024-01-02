import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
// import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// import { faArtstation } from '@fortawesome/free-brands-svg-icons/faArtstation';
import { faMailchimp } from '@fortawesome/free-brands-svg-icons/faMailchimp';
import { faRssSquare } from '@fortawesome/free-solid-svg-icons/faRssSquare';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

// sidebar contact data list.
const data = [
  {
    link: 'https://github.com/PeiyuanQi',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/peiyuanqi/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  // {
  //   link: 'https://twitter.com/peiyuan_qi',
  //   label: 'Twitter',
  //   icon: faTwitter,
  // },
  // {
  //   link: 'https://www.youtube.com/channel/UCdxdVqTgOJ55WXwoIdxlJHQ',
  //   label: 'YouTube',
  //   icon: faYoutube,
  // },
  {
    link: 'mailto:peiyuanqi@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
  // {
  //   link: 'https://www.artstation.com/mithsul',
  //   label: 'Artstation',
  //   icon: faArtstation,
  // },
  {
    link: 'https://blog.peiyuanqi.me/atom.xml',
    label: 'RSS Subscription',
    icon: faRssSquare,
  },
  {
    link: 'http://eepurl.com/ghyKAT',
    label: 'Email Subscription',
    icon: faMailchimp,
  },
];

export default data;
