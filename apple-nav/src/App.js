import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
const navData = [
	{
		id: '1',
		name: 'Mac',
		products: [
			{ id: '1', name: 'Macbook' },
			{ id: '2', name: 'Macbook Air' },
			{ id: '3', name: 'Macbook Pro' },
			{ id: '4', name: 'iMac' },
			{ id: '5', name: 'iMac Pro', isNew: true },
			{ id: '6', name: 'Mac Pro' },
			{ id: '7', name: 'Mac mini' },
			{ id: '8', name: 'Accessories' },
			{ id: '9', name: 'High Sierra' },
			{ id: '10', name: 'Compare' }
		]
	},
	{ id: '2', name: 'iPad', products: [] },
	{ id: '3', name: 'iPhone', products: [] },
	{ id: '4', name: 'Watch', products: [] },
	{ id: '5', name: 'TV', products: [] },
	{ id: '6', name: 'Music', products: [] },
	{ id: '7', name: 'Support', products: [] }
];

const StyledContainer = styled.div`
	padding: 20px;
	height: 100%;

	nav {
		padding: 0 20px;
		display: flex;
		justify-content: space-between;
	}
`;
function App() {
	return <StyledContainer />;
}

export default App;
