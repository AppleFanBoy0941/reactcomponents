/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import FeatherIcon from 'feather-icons-react';
import useFetch from '../hooks/useFetch';
import CatCard from '../layout/cardLayouts/CatCard';
import GallCard from '../layout/cardLayouts/GallCard';
import InfoCard from '../layout/cardLayouts/InfoCard';

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
		</section>
	);
};

export default Card;
