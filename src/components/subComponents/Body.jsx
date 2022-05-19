/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Body = ({ text, color, type }) => {
	const styles = {
		body: css`
			color: ${color || '#979797'};
			line-height: 1.25;
		`,
	};
	return <p css={styles.body}>{text}</p>;
};

export default Body;
