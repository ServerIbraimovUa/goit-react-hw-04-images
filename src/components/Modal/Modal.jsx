import { useEffect } from 'react';
import { Overlay } from './Modal.styled';

export default function Modal({ photo, closeModal }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    //слухач на кклаву
    window.addEventListener('keydown', handleKeyDown);

    //размонтирование ,удаление слухача
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  const onCloseModal = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <Overlay onClick={onCloseModal}>
      <div>
        <img src={photo} alt="name" width="900" height="700" />
      </div>
    </Overlay>
  );
}
