const Hero = () => {
  return (
    <section className="flex"> 
      <div className="relative bg-primary h-[70vh] overflow-hidden w-full">
        <div className="absolute top-0 right-0">
          <img src="/images/backshape.png" alt="" />
        </div>
        <div className="absolute right-0 w-2/5">
          <img className="w-full" src="/images/heroperson.png" alt="" />
        </div>
      <div className="flex items-center justify-start pl-24 w-[60%] h-full">
      <div className="flex flex-col items-start justify-center gap-6 ">
          <h1 className="text-white 2xl:text-6xl text-2xl">lions international Distric 325k Welcome you to nepal</h1>
          <h1 className="text-secondary xl:text-5xl font-bold ">Humanity is our priority</h1>
          <a href="#" className="bg-secondary p-3 rounded-full text-white  font-bold cursor-[pointer] z-30">Donate for cause</a>
        </div>
      </div>
      </div>
      <div className="flex absolute bottom-6 pl-24">
      <img className="2xl:h-52" src="/images/humanity.svg" alt="" />
      <img className="2xl:h-52" src="/images/service.svg" alt="" />
      <img className="2xl:h-52" src="/images/hunger.svg" alt="" />
      <img className="2xl:h-52" src="/images/youth.svg" alt="" />
      </div>
   
    </section>
  );
};

export default Hero;
