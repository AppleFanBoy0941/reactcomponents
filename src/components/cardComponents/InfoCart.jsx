/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import FeatherIcon from 'feather-icons-react';
import Body from '../subComponents/Body';
import Header from '../subComponents/Header';

const InfoCart = ({ card }) => {
	const styles = {
		card: css`
			background: ${card.color};
			height: 100%;
			width: 100%;
			padding: 1.5rem;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			justify-content: center;

			& h2 {
				text-transform: uppercase;
			}
		`,
		icon: css`
			height: 4rem;
			width: 4rem;
			margin: 0 1rem 2rem auto;
		`,
		iconS: css`
			height: 3rem;
			width: 3rem;
			margin: 0 0 1rem;
		`,
	};
	return (
		<div css={styles.card}>
			{card.size === 'l' ? (
				<FeatherIcon icon={card.icon} css={styles.icon} />
			) : (
				<FeatherIcon icon={card.icon} css={styles.iconS} />
			)}
			<Header text={card.text.header} color="#FFFFFF" size="20px" />
			{card.text.body && <Body text={card.text.body} color="#FFFFFF" />}
		</div>
	);
};

export default InfoCart;
