
import Link from "next/link";
import Image from "next/image";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Button} from "flowbite-react";
import Logo from "../images/logo.svg"
export function NavBar() {
    return (
        <Navbar fluid rounded>
          <NavbarBrand as={Link} href="/">
            <Image src={Logo} alt="LaslesVPN Logo" width={32} height={32} className="mr-3 h-6 sm:h-9" />
            <span className="self-center whitespace-nowrap text-xl  dark:text-white">Lasles<span className="font-bold">VPN</span></span>
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse>
            <NavbarLink href="#">Features</NavbarLink>
            <NavbarLink href="#">Pricing</NavbarLink>
            <NavbarLink href="#">Testimonial</NavbarLink>
            <NavbarLink href="#">Help</NavbarLink>
          </NavbarCollapse>
          <div className="flex items-center space-x-4">
            <NavbarCollapse>
                <NavbarLink href="#">Sign in</NavbarLink>
            </NavbarCollapse>

            <Button color="light" className="border p-[-3] border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-full">
              Sign up
            </Button>
          </div>
        </Navbar>
      );
}
