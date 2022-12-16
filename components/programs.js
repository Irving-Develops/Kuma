import Image from 'next/image'
import Link from 'next/link'


export default function Programs({programs}) {
    console.log(programs, "in program component")

    if(!programs.length) return null
    return (
        <div className="text-black flex flex-col items-center justify-center pb-24">
            <h2>Programs</h2>
            {programs && programs.map((program, i) => (
                <Link key={i} href = {'/test'}>
                    <div className="w-64 h-48 bg-cover" style={{"backgroundImage": `url(${program.images[1]})`}}>
                        <h2>{program.title}</h2>
                    </div>
                </Link>
            ))}
        </div>
    )
}