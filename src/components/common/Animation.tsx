import Lottie, { LottieProps } from 'react-lottie';
import Success from '../../../public/success.json';

export function Animation() {

  const defaultOptions = {
    loop: false,
    autoplay: true, 
    animationData: Success,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div style={{ pointerEvents: "none" }} >
      <Lottie 
        options={defaultOptions}
        height={250}
        width={250}
      />
    </div>

  )
}