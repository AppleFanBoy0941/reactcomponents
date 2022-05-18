/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import useFetch from '../hooks/useFetch';
let url = 'http://localhost:8000/cards';

const Content = () => {
	const { data: cards, isPending, error } = useFetch(url);

	const style = {
		main: css`
			display: grid;
			grid-template-columns: repeat(12, 5rem);
			grid-template-rows: repeat(31, 5rem);
			gap: 1rem;
			justify-content: center;
			padding: 5rem 0;
			grid-template-areas:
				'1 1 1 1 2 2 2 2 2 2 2 2'
				'1 1 1 1 2 2 2 2 2 2 2 2'
				'1 1 1 1 2 2 2 2 2 2 2 2'
				'1 1 1 1 2 2 2 2 2 2 2 2'
				'1 1 1 1 2 2 2 2 2 2 2 2'
				'3 3 3 4 4 4 5 5 5 6 6 6'
				'3 3 3 4 4 4 5 5 5 6 6 6'
				'3 3 3 4 4 4 5 5 5 6 6 6'
				'7 7 7 7 8 8 8 8 9 9 9 9'
				'7 7 7 7 8 8 8 8 9 9 9 9'
				'7 7 7 7 8 8 8 8 9 9 9 9'
				'7 7 7 7 8 8 8 8 9 9 9 9'
				'10 10 10 10 10 10 10 10 11 11 11 11'
				'10 10 10 10 10 10 10 10 11 11 11 11'
				'10 10 10 10 10 10 10 10 11 11 11 11'
				'10 10 10 10 10 10 10 10 11 11 11 11'
				'10 10 10 10 10 10 10 10 11 11 11 11'
				'12 12 12 12 12 12 12 12 11 11 11 11'
				'12 12 12 12 12 12 12 12 11 11 11 11'
				'13 13 13 13 14 14 14 14 11 11 11 11'
				'13 13 13 13 14 14 14 14 11 11 11 11'
				'15 15 15 15 17 17 17 17 18 18 18 18'
				'15 15 15 15 17 17 17 17 18 18 18 18'
				'16 16 16 16 17 17 17 17 18 18 18 18'
				'16 16 16 16 17 17 17 17 18 18 18 18'
				'20 20 20 20 17 17 17 17 18 18 18 18'
				'20 20 20 20 17 17 17 17 19 19 19 19'
				'20 20 20 20 17 17 17 17 19 19 19 19'
				'20 20 20 20 17 17 17 17 19 19 19 19'
				'21 21 22 22 17 17 17 17 19 19 19 19'
				'21 21 22 22 17 17 17 17 19 19 19 19';
		`,
	};
	return (
		<main css={style.main}>
			{error && <p>{error}</p>}
			{isPending && <p>Loading...</p>}
			{cards &&
				cards.map((card, index) => {
					return <div key={index}></div>;
				})}
		</main>
	);
};

export default Content;
