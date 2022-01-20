import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Image width={128} height={77} alt='logo' src='/logo.png' />
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/ninjas'>
        <a>Ninja Listing </a>
      </Link>
    </nav>
  );
};

export default Navbar;
