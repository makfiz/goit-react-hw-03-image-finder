import { GalleryItem, GalleryItemImg } from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem.styled'

export const ImageGalleryItem = ({ prop }) => {
    return (
        <GalleryItem>
            <GalleryItemImg src={prop.webformatURL} alt={prop.tags} data-url={prop.largeImageURL} />
        </GalleryItem>
    )
}