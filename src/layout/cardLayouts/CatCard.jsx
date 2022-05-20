/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Body from '../../components/subComponents/Body';
import Header from '../../components/subComponents/Header';
import Tag from '../../components/subComponents/Tag';

const CatCard = ({ card }) => {
	let styles = {
		text: css`
			padding: 1.5rem;
			display: flex;
			flex-direction: column;
			/* gap: 1rem; */
			/* font-size: 20px; */
		`,
		img: css`
			height: 50%;
			object-fit: cover; ;
		`,
		textS: css`
			padding: 1.5rem;
			background: linear-gradient(0deg, #00000030, #00000030),
				url(${card.images[0]});
			height: 100%;
			background-size: cover;
			display: flex;
			flex-direction: column;
			gap: 1rem;

			& span {
				text-shadow: 0 2px 0.5rem #00000030;
			}
		`,
	};
	return (
		<>
			{card.size === 'l' && (
				<img css={styles.img} src={card.images[0]} alt={card.text.header} />
			)}
			{card.size === 'l' ? (
				<div css={styles.text}>
					<Tag css={styles.tag} text={card.text.tag} color={card.color} />
					<Header text={card.text.header} space="1rem" />
					<Body text={card.text.body} />
				</div>
			) : (
				<div css={styles.textS}>
					<Tag css={styles.tag} text={card.text.tag} color={card.color} />
					<Body text={card.text.body} color="#fff" />
				</div>
			)}
		</>
	);
};

export default CatCard;
