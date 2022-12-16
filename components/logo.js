import Link from "next/link";
import Image from "next/image";

export default function Logo({imgSrc, href, alt}) {
    return (
        <Link href={href}>
            <Image
                priority
                src={imgSrc} 
                alt={alt}
                width={64}
                height={64}
             />
        </Link>
    )
}