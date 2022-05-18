/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Tag = ({ text, color, type }) => {
	const styles = {
		tag: css`
			text-transform: uppercase;
			color: ${color || '#000000'};
			font-size: 14px;
			font-weight: 700;
			letter-spacing: 2px;
		`,
	};
	return <span css={styles.tag}>{text}</span>;
};

export default Tag;
