import { useState, useEffect } from 'react';
import { getImg } from 'services/pixabay-api';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';
import LoadMore from 'components/LoadMore/LoadMore';
import Loader from 'components/Loading/Loading';
import Modal from 'components/Modal/Modal';
import { scrollToBottom } from 'utils/scroll';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
const { IDLE, PENDING, RESOLVED, REJECTED } = STATUS;

export default function ImageGallery({ searchQuery, page, setCurrentPage }) {
  const [status, setStatus] = useState(IDLE);
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [photo, setPhoto] = useState('');
  const [error, setError] = useState(null);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    //не відпрацьовувати на першому рендері
    if (!searchQuery) return;

    const fetchPixabayImg = async (name, newPage = 1) => {
      setStatus(PENDING);
      if (!name) return;
      try {
        const { hits, totalHits } = await getImg(name, newPage);
        //при першому рендері
        if (page === 1) {
          setImages(hits);
        } else {
          //при лоад мо
          setImages(prevState => [...prevState, ...hits]);
        }

        setLoadMore(page < Math.ceil(totalHits / 12));
        setStatus(RESOLVED);

        if (totalHits === 0) {
          return await Promise.reject(new Error('Please write correct name'));
        }
      } catch (err) {
        setStatus(REJECTED);
        setError(err.message);
        console.log(err.message);
      }
    };

    fetchPixabayImg(searchQuery, page);
  }, [page, searchQuery]);

  const onClickBtn = () => {
    setCurrentPage(page + 1);
    scrollToBottom();
  };

  const toggleModal = photo => {
    setShowModal(!showModal);
    setPhoto(photo);
  };

  if (status === IDLE) {
    return <h2>Please enter a picture name</h2>;
  }

  if (status === RESOLVED) {
    return (
      <>
        <h2>Result "{searchQuery}"</h2>
        <GalleryList>
          <ImageGalleryItem data={images} openModal={toggleModal} />
        </GalleryList>
        {loadMore && <LoadMore onClick={onClickBtn} />}
        {!loadMore && <p>The pictures in this section have run out 😒😒 </p>}
        {showModal && <Modal photo={photo} closeModal={toggleModal} />}
      </>
    );
  }
  if (status === PENDING) {
    return <Loader />;
  }

  if (status === REJECTED) {
    return <h2>{error}</h2>;
  }
}
