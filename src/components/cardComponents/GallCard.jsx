import ImageGallery from 'react-image-gallery';
import '../../gallery.css';

const GallCard = ({ card }) => {
	let images = [];
	card.images.map(image => {
		let newImage = {
			original: image,
			thumbnail: image,
			// originalHeight: '30px',
			// thumbnailHeight: '10px',
		};
		images.push(newImage);
	});
	return (
		<>
			<ImageGallery
				items={images}
				thumbnailPosition="right"
				showNav="false"
				slideInterval="5000"
				autoPlay="true"
			/>
		</>
	);
};

export default GallCard;
