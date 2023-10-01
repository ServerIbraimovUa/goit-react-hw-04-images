import { ThreeDots } from 'react-loader-spinner';
const Loader = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="11"
      color="#1e349f"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        position: 'absolute',
        bottom: '47%',
        left: '47%',
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Loader;
