export interface Speaker {
  name: string;
  title: string;
  photo: string;
  bio: string;
}

export interface Sponsor {
  name: string;
  logo: string;
  website: string;
}

export interface NavLink {
  href: string;
  label: string;
  icon?: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: string;
}

export interface AboutUsItem {
  id: number;
  title: string;
  content: string;
}
