/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import FeatherIcon from 'feather-icons-react';
import useFetch from '../hooks/useFetch';
import CatCard from './cardComponents/CatCard';
import GallCard from './cardComponents/GallCard';
import InfoCard from './cardComponents/InfoCard';

const Card = ({ card }) => {
	// const style = useFetch(`http://localhost:8000/style`);
	const text = card.text;
	const styles = {
		card: css`
			background: #ffffff;
			grid-area: card-${card.id};
			border-radius: 1.5rem;
			box-shadow: 0 0.5rem 3rem -1rem #15151505;
			overflow: hidden;
			position: relative;
		`,
	};

	let style = null;

	return (
		<section css={styles.card}>
			{card.type === 'cat' && <CatCard card={card} />}
			{card.type === 'gall' && <GallCard card={card} />}
			{card.type === 'info' && <InfoCard card={card} />}
			{/* {card.images && <img src={card.images[0]} />} */}
			{/* {text.tag && <span>{text.tag}</span>}
			{text.header && <h2>{text.header}</h2>}
			{text.body && <p>{text.body}</p>} */}
		</section>
	);
};

export default Card;
