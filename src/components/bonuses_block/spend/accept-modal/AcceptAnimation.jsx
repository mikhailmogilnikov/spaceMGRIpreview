import React, { useRef, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../../resouces/lottie/animation_llqlhh8z.json';

function LottieAnimation() {
  const options = {
    animationData,
  };

  const lottieRef = useRef();

  const handleAnimationUpdate = () => {
    const currentFrame = lottieRef.current.anim.currentFrame;
    if (currentFrame >= 38) {
      lottieRef.current.anim.pause();
    }
  };

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.anim.setSpeed(1); // Set the animation speed if necessary
      lottieRef.current.anim.addEventListener('enterFrame', handleAnimationUpdate);
    }
    // Cleanup listener when component is unmounted
    return () => {
      if (lottieRef.current) {
        lottieRef.current.anim.removeEventListener('enterFrame', handleAnimationUpdate);
      }
    };
  }, [lottieRef]);

  return (
    <Lottie
      ref={lottieRef}
      options={options}
      height={100}
      width={100}
      loop={false}
    />
  );
}

export default LottieAnimation;
