import Image from "next/image"

export default function Hero() {
    return (
        <div /*className = "flex flex-col gap-4 bg-gradient-to-t from-gray-700 via-gray-900 to-black h-96  skew-y-3 origin-top-left bg-cover"
        style={{"background-image": "url('https://wallpaperaccess.com/full/91364.jpg')"}} */ >
            <div /* className = "-skew-y-3 flex flex-col gap-16 justify-around sm:align-center md:justify-center"*/>
                <div className="text-xl text-center flex flex-col gap-1" >
                    <h1 className = "font-sans text-3xl font-extrabold text-[#2FC7A1]" > Team Kuma Jiu Jitsu </h1>
                    <p className="">Adult &amp; Kids Jiu Jitsu Classes</p>
                    <p className="">Come try out a class for free!</p>
                </div>
                {/* <div className = "flex align-center justify-center">
                    <Image 
                        className="justify-center align-center"
                        priority
                        src="/images/coach.png"
                        alt="Coach Amir from Team Kuma Jiu Jitsu, brown belt"
                        width={300}
                        height={300}
                    />
                </div> */}
                <button type="button" className="bg-[#2FC7A1] w-1/2 ">Come try out a class today!</button>
            </div>
        </div>
    )
}