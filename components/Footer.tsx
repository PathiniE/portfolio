
import { Button } from "../components/ui/button";
import { socialMedia } from "../data";

export default function Footer() {
    return (
      <footer className="w-full pt-20 pb-10 mt-10" id="contact" >
        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">
                Ready to take <span className="text-purple">your</span> dogital presence to the next level?
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">
                Reach out to me and let&apos;s discuss how can I help you achieve your goals.
            </p>
           <a href="pathini2002@gmail.com">
           <Button className="bg-black-100 hover:bg-purple/90 text-white py-6 px-10 text-base mt-5 border">
            Contact Me
          </Button>
           </a>
           <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm font-light">Copyright © 2024 Pathini</p>
            <div className="flex items-center md:gap-3 gap-4  ml-10">
                {socialMedia.map((profile)=>(
                    <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center">
                        <img src={profile.img} width={20} height={20} />
                    </div>
                )
                )}
            </div>
           </div> 

        </div>
      </footer>
    );
  }
  