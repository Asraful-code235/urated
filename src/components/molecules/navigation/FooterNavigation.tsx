import { cn } from '@/lib/utils';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterNavigationProps {
  className?: string;
}

const footerSections: FooterSection[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact Us', href: '#' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Video Tutorial', href: '#' },
      { label: 'Help Center', href: '#' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Services', href: '#' },
      { label: 'Privacy Policy', href: '#' }
    ]
  },
  {
    title: 'Platform',
    links: [
      { label: 'CRM', href: '#' },
      { label: 'Marketing', href: '#' },
      { label: 'Forms', href: '#' }
    ]
  }
];

export function FooterNavigation({ className }: FooterNavigationProps) {
  return (
    <div className={cn(
      'flex flex-col lg:flex-row items-start gap-13 lg:gap-32 text-white w-full lg:w-auto',
      className
    )}>
      {footerSections.map((section, index) => (
        <div key={index} className="flex flex-col gap-3">
          <h3 className="text-xl font-satoshi font-medium mb-3">
            {section.title}
          </h3>
          <div className="flex flex-col gap-2">
            {section.links.map((link, linkIndex) => (
              <a 
                key={linkIndex}
                href={link.href} 
                className="text-base font-satoshi font-normal hover:text-[#FCC800] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
