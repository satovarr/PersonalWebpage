import Link from "next/link";
import Image from 'next/image';

const Navbar = () => (
    <>
        <header className="nav-bar">
            <nav>
                <Image
                    src="/logo.svg"
                    height={100} 
                    width={100} 
                    alt="Logoimg"
                />
                <ul>
                    <li>
                        <Link href="/projects">
                            <a>Proyects</a></Link>
                    </li>
                    <li><Link href="/blog">
                        <a>Blog</a></Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
)

export default Navbar;