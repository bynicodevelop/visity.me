export type SocialType = 'twitter' | 'tiktok' | 'github' | 'linkedin' | 'instagram' | 'facebook' | 'youtube';

export type Socials = {
    name: string;
    url: string;
    icon: string;
}

export const socialData: Record<SocialType, Socials> = {
    twitter: {
        name: 'Twitter',
        icon: 'x-twitter',
        url: 'https://twitter.com'
    },
    tiktok: {
        name: 'TikTok',
        icon: 'tiktok',
        url: 'https://tiktok.com'
    },
    github: {
        name: 'GitHub',
        icon: 'github',
        url: 'https://github.com'
    },
    linkedin: {
        name: 'LinkedIn',
        icon: 'linkedin',
        url: 'https://linkedin.com'
    },
    instagram: {
        name: 'Instagram',
        icon: 'instagram',
        url: 'https://instagram.com'
    },
    facebook: {
        name: 'Facebook',
        icon: 'facebook',
        url: 'https://facebook.com'
    },
    youtube: {
        name: 'YouTube',
        icon: 'youtube',
        url: 'https://youtube.com'
    },
}