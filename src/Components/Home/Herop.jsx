import React from 'react'
const Herop = () => {
  return (
    <section className="w-full h-max xl:h-lvh mt-32">
    <div className="w-full flex items-center justify-center">
      <video
        className="sm:h-[600px] lg:h-lvh w-full object-cover"
        playsInline
        preload="auto"
        autoPlay
        loop
        muted
        src="/images/lions video.mp4"
        title="Lions in the wild"
      />
    </div>
  </section>
  
  )
}

export default Herop
