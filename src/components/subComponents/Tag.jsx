/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Tag = ({ text, color, type }) => {
	const styles = {
		tag: css`
			text-transform: uppercase;
			color: ${color || '#000000'};
			font-size: 12px;
			font-weight: 800;
			letter-spacing: 2px;
			margin-bottom: 1rem;
		`,
		label: css`
			text-transform: uppercase;
			color: #ffffff;
			background: ${color || '#000000'};
			padding: 0.75rem 1.5rem;
			border-radius: 100px;
			font-weight: 800;
			font-size: 14px;
			margin-bottom: 1rem;
			margin-left: auto;
			display: block;
			width: fit-content;
			letter-spacing: 2px;
		`,
	};
	return (
		<>
			{type === 'gall' ? (
				<span css={styles.label}>{text}</span>
			) : (
				<span css={styles.tag}>{text}</span>
			)}
		</>
	);
};

export default Tag;
