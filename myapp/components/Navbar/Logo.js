import React from 'react';
import Link from 'next/link';
import logo from '../../public/logo.png';
import Image from 'next/image';


const Logo = () => {
  return (
    <div>
    <Link href='/'>
    <span>
    <Image
        width={157}
        height={30}
        src={logo}
        alt='logo'
    />
    </span>
</Link>
    </div>
  );
};

export default Logo;