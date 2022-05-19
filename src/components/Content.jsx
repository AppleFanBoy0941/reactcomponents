/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import useFetch from '../hooks/useFetch';
import Card from './Card';
let url = 'http://localhost:8000/cards';

const Content = () => {
	const { data: cards, isPending, error } = useFetch(url);

	const style = {
		main: css`
			position: relative;
			display: grid;
			grid-template-columns: repeat(12, 5rem);
			grid-template-rows: repeat(31, 5rem);
			gap: 1.5rem;
			justify-content: center;
			padding: 5rem 0;
			grid-template-areas:
				'card-1 card-1 card-1 card-1 card-2 card-2 card-2 card-2 card-2 card-2 card-2 card-2'
				'card-1 card-1 card-1 card-1 card-2 card-2 card-2 card-2 card-2 card-2 card-2 card-2'
				'card-1 card-1 card-1 card-1 card-2 card-2 card-2 card-2 card-2 card-2 card-2 card-2'
				'card-1 card-1 card-1 card-1 card-2 card-2 card-2 card-2 card-2 card-2 card-2 card-2'
				'card-1 card-1 card-1 card-1 card-2 card-2 card-2 card-2 card-2 card-2 card-2 card-2'
				'card-3 card-3 card-3 card-4 card-4 card-4 card-5 card-5 card-5 card-6 card-6 card-6'
				'card-3 card-3 card-3 card-4 card-4 card-4 card-5 card-5 card-5 card-6 card-6 card-6'
				'card-3 card-3 card-3 card-4 card-4 card-4 card-5 card-5 card-5 card-6 card-6 card-6'
				'card-7 card-7 card-7 card-7 card-8 card-8 card-8 card-8 card-9 card-9 card-9 card-9'
				'card-7 card-7 card-7 card-7 card-8 card-8 card-8 card-8 card-9 card-9 card-9 card-9'
				'card-7 card-7 card-7 card-7 card-8 card-8 card-8 card-8 card-9 card-9 card-9 card-9'
				'card-7 card-7 card-7 card-7 card-8 card-8 card-8 card-8 card-9 card-9 card-9 card-9'
				'card-10 card-10 card-10 card-10 card-10 card-10 card-10 card-10 card-11 card-11 card-11 card-11'
				'card-10 card-10 card-10 card-10 card-10 card-10 card-10 card-10 card-11 card-11 card-11 card-11'
				'card-10 card-10 card-10 card-10 card-10 card-10 card-10 card-10 card-11 card-11 card-11 card-11'
				'card-10 card-10 card-10 card-10 card-10 card-10 card-10 card-10 card-11 card-11 card-11 card-11'
				'card-10 card-10 card-10 card-10 card-10 card-10 card-10 card-10 card-11 card-11 card-11 card-11'
				'card-12 card-12 card-12 card-12 card-12 card-12 card-12 card-12 card-11 card-11 card-11 card-11'
				'card-12 card-12 card-12 card-12 card-12 card-12 card-12 card-12 card-11 card-11 card-11 card-11'
				'card-13 card-13 card-13 card-13 card-14 card-14 card-14 card-14 card-11 card-11 card-11 card-11'
				'card-13 card-13 card-13 card-13 card-14 card-14 card-14 card-14 card-11 card-11 card-11 card-11'
				'card-15 card-15 card-15 card-15 card-17 card-17 card-17 card-17 card-18 card-18 card-18 card-18'
				'card-15 card-15 card-15 card-15 card-17 card-17 card-17 card-17 card-18 card-18 card-18 card-18'
				'card-16 card-16 card-16 card-16 card-17 card-17 card-17 card-17 card-18 card-18 card-18 card-18'
				'card-16 card-16 card-16 card-16 card-17 card-17 card-17 card-17 card-18 card-18 card-18 card-18'
				'card-20 card-20 card-20 card-20 card-17 card-17 card-17 card-17 card-18 card-18 card-18 card-18'
				'card-20 card-20 card-20 card-20 card-17 card-17 card-17 card-17 card-19 card-19 card-19 card-19'
				'card-20 card-20 card-20 card-20 card-17 card-17 card-17 card-17 card-19 card-19 card-19 card-19'
				'card-20 card-20 card-20 card-20 card-17 card-17 card-17 card-17 card-19 card-19 card-19 card-19'
				'card-21 card-21 card-22 card-22 card-17 card-17 card-17 card-17 card-19 card-19 card-19 card-19'
				'card-21 card-21 card-22 card-22 card-17 card-17 card-17 card-17 card-19 card-19 card-19 card-19';
		`,
	};
	return (
		<main css={style.main}>
			{error && <p>{error}</p>}
			{isPending && <p>Loading...</p>}
			{cards &&
				cards.map(card => {
					return <Card card={card} key={card.id} />;
				})}
		</main>
	);
};

export default Content;
