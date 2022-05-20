/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ImageGallery from 'react-image-gallery';
import '../../gallery.css';
import Body from '../../components/subComponents/Body';
import Header from '../../components/subComponents/Header';
import Tag from '../../components/subComponents/Tag';

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

	const styles = {
		text: css`
			position: absolute;
			top: 3rem;
			left: calc(2 * 3rem + 240px);
			width: 400px;
		`,
	};
	return (
		<>
			<ImageGallery
				items={images}
				thumbnailPosition="right"
				showNav="false"
				slideInterval="5000"
				autoPlay="true"
			/>
			<div css={styles.text}>
				<Tag text={card.text.tag} type={card.type} color={card.color} />
				<Header text={card.text.header} size="48px" space="1rem" />
				<Body text={card.text.body} />
			</div>
		</>
	);
};

export default GallCard;
