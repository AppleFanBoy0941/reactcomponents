/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Header = ({ text, color, size, space }) => {
	const style = css`
		color: ${color};
		font-weight: 700;
		font-size: ${size || '32px'};
		letter-spacing: 1px;
		margin-bottom: ${space};
	`;
	return <h2 css={style}>{text}</h2>;
};

export default Header;
