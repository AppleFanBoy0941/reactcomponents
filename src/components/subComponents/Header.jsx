/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Header = ({ text, color, size }) => {
	const style = css`
		color: ${color};
		font-weight: 800;
		font-size: ${size || '24px'};
	`;
	return <h2 css={style}>{text}</h2>;
};

export default Header;
