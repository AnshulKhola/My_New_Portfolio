import React, { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt';


const Tilt = ({options,children}) => {
    const tiltRef = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tiltRef.current,options);
        return () => {
            tiltRef.current.vanillaTilt.destroy();
        }
    },[options])
  return (
    <div ref={tiltRef}>
      {children}
    </div>
  )
}

export default Tilt
