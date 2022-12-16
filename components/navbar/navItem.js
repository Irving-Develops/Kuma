import Link from "next/link";

export default function NavItem({text, href}){
    console.log(text)
    return  (
        <Link className="hover:text-teal-500 m-4" href={href}>{text}</Link>

    )
}