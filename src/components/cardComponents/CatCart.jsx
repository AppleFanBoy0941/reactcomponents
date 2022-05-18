/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Tag from '../subComponents/Tag';

const CatCard = ({ card }) => {
	let styles = {
		text: css`
			padding: 1.5rem;
		`,
		img: css`
			height: 50%;
			object-fit: cover; ;
		`,
	};
	return (
		<>
			{card.size === 'l' && (
				<img css={styles.img} src={card.images[0]} alt={card.text.header} />
			)}
			<div css={styles.text}>
				<Tag css={styles.tag} text={card.text.tag} color={card.color} />
			</div>
		</>
	);
};

export default CatCard;
