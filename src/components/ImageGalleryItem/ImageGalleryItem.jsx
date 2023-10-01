import { GalleryItem } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ data, openModal }) {
  return (
    <>
      {data.map(({ id, largeImageURL, webformatURL }) => {
        return (
          <GalleryItem key={id} onClick={() => openModal(largeImageURL)}>
            <img src={webformatURL} alt="" />
          </GalleryItem>
        );
      })}
    </>
  );
}
