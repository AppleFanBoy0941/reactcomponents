/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import FeatherIcon from 'feather-icons-react';
import useFetch from '../hooks/useFetch';

const Card = props => {
	const style = useFetch(`http://localhost:8000/style`);
	console.log(`${props.card.type}: ${props.card.id}`);
	const styles = {
		card: css`
			background: #ffffff;
			grid-area: card-${props.card.id};
			border-radius: 1.5rem;
		`,
	};
	return <section css={styles.card}></section>;
};

export default Card;
