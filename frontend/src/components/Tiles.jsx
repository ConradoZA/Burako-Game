import React from 'react';
import Tile from './Tile'
import './Tiles.scss';

export const Tiles = (props) => {
    const drop = e => {
        e.preventDefault();
        const tile_id = e.dataTransfer.getData('id');
        const tile = document.getElementById(tile_id);

        tile.style.display = 'block';

        e.target.appendChild(tile);
    }

    const dropOver = e => {
        e.preventDefault();
    }

    return (
        <div>
            <div className='board'
                id="board1"
                onDrop={drop}
                onDropOver={dropOver}
            >
                <Tile></Tile>
            </div>
            <div className="descarte" 
                id="descarte" 
                onDrop={drop}
                onDropOver={dropOver}
            >

            </div>
        </div>
    )
}


export default Tiles;