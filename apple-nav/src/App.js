import React from 'react';
import { NavLink, Route } from 'react-router-dom';
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
	{ id: '2', name: 'iPad', products: [{ id: '1', name: 'hi sona!' }] },
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

function NavSubItems(props) {
	const StyledDiv = styled.div``;
	const { id } = props.match.params;
	const navObj = navData.find(nav => id === nav.id);
	return (
		<div>
			<StyledDiv style={{ display: 'flex' }}>
				{navObj.products.map(product => <div key={product.id}>{product.name}</div>)}
			</StyledDiv>
		</div>
	);
}

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<StyledContainer>
				{navData.map((navItem, id) => (
					<NavLink key={navItem.id} to={`/${navItem.id}`}>
						{navItem.name}{' '}
					</NavLink>
				))}
				<Route path="/:id" render={props => <NavSubItems {...props} />} />
			</StyledContainer>
		);
	}
}

export default App;
