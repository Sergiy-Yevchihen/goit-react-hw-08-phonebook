import { RotatingLines } from 'react-loader-spinner';
import { Wrap } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrap>
      <RotatingLines
        strokeColor="rgb(12, 229, 229)"
        strokeWidth="5"
        animationDuration="0.85"
        width="96"
        visible={true}
      />
    </Wrap>
  );
};
