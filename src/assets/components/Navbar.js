import facebook from "../icons/facebook.png";
import gmail from "../icons/gmail.png";
import instagram from "../icons/instagram.png";
import user from "../icons/user.png";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <img src={user} alt="user" width={40} className="cursor-pointer"/>
            <ul className="hidden md:flex">
                <li className="px-2">
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src={facebook} alt="facebook" width={30} />
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src={instagram} alt="instagram" width={30} />
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://mail.google.com/" target="_blank">
                        <img src={gmail} alt="gmail" width={34} />
                    </a>
                </li>
            </ul >
        </div >
    )
}

export default Navbar;