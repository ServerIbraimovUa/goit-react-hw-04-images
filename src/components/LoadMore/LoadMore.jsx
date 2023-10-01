import { Button } from './LoadMore.styled';

const LoadMore = ({ onClick }) => {
  return (
    <Button type="button" onClick={() => onClick()}>
      Load more
    </Button>
  );
};

export default LoadMore;
