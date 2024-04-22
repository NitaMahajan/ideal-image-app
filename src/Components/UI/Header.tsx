import React from "react";
import Image from 'next/image';
import { FaChevronLeft, FaBars, FaAngleDown } from "react-icons/fa";
import idealCompanyImage from '../../assets/images/ideal-image-logo.svg';

type HeaderProps = {
    title: string;
}
const Header = ({ title }: HeaderProps) => {
    return (
        <React.Fragment>
            {/* Mobile Header */}
            <div className="header compact-header show-mobile-view">
                <div className="chevron-left-icon"><FaChevronLeft /></div>
                <div className="header-message"><p>{title}</p></div>
                <div className="bars-icon"><FaBars /></div>
            </div>
            {/* Desktop Header */}
            <div className="header expanded-header hide-mobile-view">
                <div className="company-logo">
                    <Image 
                        src={idealCompanyImage}
                        width={150}
                        height={50}
                        alt="Ideal Image Company Logo"
                    />
                </div>
                <nav>
                    <ul>
                        <li>Welcome</li>
                        <li>About Us <FaAngleDown /></li>
                        <li>Our Services <FaAngleDown /></li>
                        <li>Cart</li>
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    )
};

export default Header;