import { Gallery } from 'components/ImageGallery/ImageGallery.styled'
import { ImageGalleryItem } from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem'

const ImageGallery = ({ imgs, onClick }) => { 
        return (
            <Gallery onClick={(e) => onClick(e)}>
                {imgs && imgs.map(img => {
                  return  <ImageGalleryItem key={img.id} prop={img} ></ImageGalleryItem>
                })}
            </Gallery>
        )
    

}

export default ImageGallery