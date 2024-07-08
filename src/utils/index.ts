import facebookIcon from '../assets/icon-facebook.svg';
import twitterIcon from '../assets/icon-twitter.svg';
import instagramIcon from '../assets/icon-instagram.svg';
import youtubeIcon from '../assets/icon-youtube.svg';

export const iconsList = [
    { network: 'Facebook', icon: facebookIcon },
    { network: 'Twitter', icon: twitterIcon },
    { network: 'Instagram', icon: instagramIcon },
    { network: 'YouTube', icon: youtubeIcon }
];

export const networkColors: { [key: string]: string } = {
    Facebook: 'bg-Facebook',
    Twitter: 'bg-Twitter',
    Instagram: 'bg-Instagram-Gradient',
    YouTube: 'bg-YouTube'
};
