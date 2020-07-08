import React from "react";
import { Card } from "antd";
import { RedditOutlined } from "@ant-design/icons";
import "./Tile.scss";

export const Tile = (props) => {
  return (
    <Card className="Card" id={props.tile.id}>
      <h1 className={props.tile.color}>
        {props.tile.number === "Joker" ? <RedditOutlined /> : props.tile.number}
      </h1>
    </Card>
  );
};

export default Tile;
