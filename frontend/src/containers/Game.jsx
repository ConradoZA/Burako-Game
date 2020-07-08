import React from 'react';
import Tile from '../components/Tile';
import { allTiles } from './Tiles';

export const Game = () => {
	Array.prototype.shuffle = function () {
		let i = this.length;
		let j;
		let temp;
		while (--i > 0) {
			j = Math.floor(Math.random() * (i + 1));
			temp = this[j];
			this[j] = this[i];
			this[i] = temp;
		}
		return this;
	};
	const get11Tiles = (shuffledArray) => {
		const tilesPerBoard = 11;
		const elevenTiles = shuffledArray.splice(0, tilesPerBoard);
		return elevenTiles;
	};
	const tilesRandomized = allTiles.shuffle();
	const rackOne = get11Tiles(tilesRandomized);
	const rackTwo = get11Tiles(tilesRandomized);
	const muertoOne = get11Tiles(tilesRandomized);
	const muertoTwo = get11Tiles(tilesRandomized);
	const pile = tilesRandomized;

	console.log(rackOne, rackTwo, muertoOne, muertoTwo, pile);

	return (
		<div className="flex">
			{/* Rack1, Rack2, Muerto1, Muerto2, Pile, Discard, Table1, Table2 */}
			{rackOne.map((tile) => (
				<Tile tile={tile} key={tile.id} />
			))}
		</div>
	);
};

export default Game;
