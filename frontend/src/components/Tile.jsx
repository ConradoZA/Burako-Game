import React, {Fragment} from 'react';
import { Card } from 'antd';
import { RedditOutlined } from '@ant-design/icons';
import './Tile.scss';

export const Tile = () => {
    const allTiles = [
        { id:1, number:1, color:'Red'}, { id:2, number:2, color:'Red'}, { id:3, number:3, color:'Red'}, { id:4, number:4, color:'Red'}, 
        { id:5, number:5, color:'Red'}, { id:6, number:6, color:'Red'}, { id:7, number:7, color:'Red'}, { id:8, number:8, color:'Red'}, 
        { id:9, number:9, color:'Red'}, { id:10, number:10, color:'Red'}, { id:11, number:11, color:'Red'}, { id:12, number:12, color:'Red'}, 
        { id:13, number:13, color:'Red'}, { id:14, number:1, color:'Red'}, { id:15, number:2, color:'Red'}, { id:16, number:3, color:'Red'}, 
        { id:17, number:4, color:'Red'}, { id:18, number:5, color:'Red'}, { id:19, number:6, color:'Red'}, { id:20, number:7, color:'Red'}, 
        { id:21, number:8, color:'Red'}, { id:22, number:9, color:'Red'}, { id:23, number:10, color:'Red'}, { id:24, number:11, color:'Red'}, 
        { id:25, number:12, color:'Red'}, { id:26, number:13, color:'Red'}, { id:27, number:1, color:'Blue'}, { id:28, number:2, color:'Blue'}, 
        { id:29, number:3, color:'Blue'}, { id:30, number:4, color:'Blue'}, { id:31, number:5, color:'Blue'}, { id:32, number:6, color:'Blue'}, 
        { id:33, number:7, color:'Blue'}, { id:34, number:8, color:'Blue'}, { id:35, number:9, color:'Blue'}, { id:36, number:10, color:'Blue'},
        { id:37, number:11, color:'Blue'}, { id:38, number:12, color:'Blue'}, { id:39, number:13, color:'Blue'}, { id:40, number:1, color:'Blue'}, 
        { id:41, number:2, color:'Blue'}, { id:42, number:3, color:'Blue'}, { id:43, number:4, color:'Blue'}, { id:44, number:5, color:'Blue'}, 
        { id:45, number:6, color:'Blue'}, { id:46, number:7, color:'Blue'}, { id:47, number:8, color:'Blue'}, { id:48, number:9, color:'Blue'}, 
        { id:49, number:10, color:'Blue'}, { id:50, number:11, color:'Blue'}, { id:51, number:12, color:'Blue'}, { id:52, number:13, color:'Blue'},
        { id:53, number:1, color:'Yellow'}, { id:54, number:2, color:'Yellow'}, { id:55, number:3, color:'Yellow'}, { id:56, number:4, color:'Yellow'}, 
        { id:57, number:5, color:'Yellow'}, { id:58, number:6, color:'Yellow'}, { id:59, number:7, color:'Yellow'}, { id:60, number:8, color:'Yellow'}, 
        { id:61, number:9, color:'Yellow'}, { id:62, number:10, color:'Yellow'}, { id:63, number:11, color:'Yellow'}, { id:64, number:12, color:'Yellow'}, 
        { id:65, number:13, color:'Yellow'}, { id:66, number:1, color:'Yellow'}, { id:67, number:2, color:'Yellow'}, { id:68, number:3, color:'Yellow'}, 
        { id:69, number:4, color:'Yellow'}, { id:70, number:5, color:'Yellow'}, { id:71, number:6, color:'Yellow'}, { id:72, number:7, color:'Yellow'}, 
        { id:73, number:8, color:'Yellow'}, { id:74, number:9, color:'Yellow'}, { id:75, number:10, color:'Yellow'}, { id:76, number:11, color:'Yellow'}, 
        { id:77, number:12, color:'Yellow'},  { id:78, number:13, color:'Yellow'}, { id:79, number:1, color:'Black'}, { id:80, number:2, color:'Black'}, 
        { id:81, number:3, color:'Black'}, { id:82, number:4, color:'Black'}, { id:83, number:5, color:'Black'}, { id:84, number:6, color:'Black'},
        { id:85, number:7, color:'Black'}, { id:86, number:8, color:'Black'}, { id:87, number:9, color:'Black'}, { id:88, number:10, color:'Black'},
        { id:89, number:11, color:'Black'}, { id:90, number:12, color:'Black'}, { id:91, number:13, color:'Black'}, { id:92, number:1, color:'Black'}, 
        { id:93, number:2, color:'Black'}, { id:94, number:3, color:'Black'}, { id:95, number:4, color:'Black'}, { id:96, number:5, color:'Black'}, 
        { id:97, number:6, color:'Black'}, { id:98, number:7, color:'Black'}, { id:99, number:8, color:'Black'}, { id:100, number:9, color:'Black'}, 
        { id:101, number:10, color:'Black'}, { id:102, number:11, color:'Black'}, { id:103, number:12, color:'Black'},  { id:104, number:13, color:'Black'},
        { id:105, number:'Joker', color:'Green'}, { id:106, number:'Joker', color:'Green'}]

    function randomTile() {
        const tilesPerBoard = 11;
        let tilesInBoard = [];
        while(tilesInBoard.length < tilesPerBoard ){
            let numeroAleatorio = Math.floor(Math.random() * 106);
            if (!tilesInBoard.filter(t => t.id === allTiles[numeroAleatorio].id).length > 0){
                tilesInBoard.push(allTiles[numeroAleatorio]);
            }
          }
        return tilesInBoard;
      }
    
    const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('id', target.id);
        console.log(e.dataTransfer)
        setTimeout(() => {
            target.style.display = "none";
        }, 0);
    }
    
    const dragOver = e => {
        e.stopPropagation();
    }

    return (
        <Fragment>
          {randomTile().map(t => {
              return(
                <Card className="Card"
                    id={t.id}
                    draggable="true"
                    onDragStart={dragStart}
                    onDragOver={dragOver}
                >
                    <h1 key={t.id} style={{color:t.color}}>{t.number==='Joker'? <RedditOutlined /> : t.number}</h1>
                </Card>
                )
            })}  
        </Fragment>
    )
}

export default Tile;
