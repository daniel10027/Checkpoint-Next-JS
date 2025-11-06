import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/biography', label: 'Biography' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/customers', label: 'Customers' },
  { href: '/news', label: 'News & Tips' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <nav className='nav'>
      <div className='container navInner'>
        <div className='brand'>Daniel</div>
        <div className='links'>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className='navLink'>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}