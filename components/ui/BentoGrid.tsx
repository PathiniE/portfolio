"use client"


import { cn } from "../../lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";



export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,

}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?:number;
  img?:string;
  imgClassName?:string;
  titleClassName?:string;
  spareImg?:string;
}) => {

  return (
    <div
      className={cn(
        "row-span-1 relative rounded-xl group/bento hover:shadow-3xl transition duration-200 shadow-input dark:shadow-none   dark:border-white/[0.1] border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className="{`${id===6} && 'flex justify-center h-full`}">
        <div className="w-full h-full absolute">
          {img && (
            <img 
            src={img}
            alt={img}
            className={cn(imgClassName,'object-cover,object-center')}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id===5 && 'w-full opacity-80'}`}>
            {spareImg && (
              <img 
              src={spareImg}
              alt={spareImg}
              className={'object-cover,object-center w-full h-full'}
              />
            )}
        </div>
        <div className={cn(
          titleClassName,'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
          {title}
        </div>
      
        {id===3 &&(
          <div className="flex flex-wrap gap-2 mt-auto">
            {['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js'].map((item) => (
                <span 
                  key={item} 
                  className=" font-mono mt-2 py-3 px-4 text-xs lg:text-lg rounded-lg border-2 border-[#a4c6ee] text-center bg-[#10132E] text-white opacity-80 hover:opacity-100 transition-opacity
                  md:text-sm"
                >
                  {item}
                </span>
              ))}
          </div>
        )}
        {id===6 && (
           <div className="absolute inset-0 overflow-hidden">
             <BackgroundGradientAnimation 
              containerClassName="absolute inset-0"
              className="absolute inset-0 z-0"
            >
             <div className="absolute inset-0 z-10 flex items-center justify-center text-white font-bold" />
            </BackgroundGradientAnimation>
          
          </div>
          

           
        )}
       </div>
     </div>
     </div>
 );
 };

