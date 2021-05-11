import React, { useState } from "react";
import logo from "./assets/logo.png";
import chase from "./assets/chase2.png";
import everest from "./assets/everest2.png";
import marshall from "./assets/marshall2.png";
import rocky from "./assets/rocky2.png";
import rubble from "./assets/rubble2.png";
import ryder from "./assets/ryder2.png";
import skye from "./assets/skye2.png";
import tracker from "./assets/tracker2.png";
import zuma from "./assets/zuma2.png";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  max-width: 720px;
`;

const Tile = styled.div`
  background-color: #2089cf;
  place-items: center;
  border-radius: 0.5rem;
  padding: 0.25rem;
  display: grid;
`;

const TileImg = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  object-fit: contain;
`;

const FriendName = styled.h1`
  font-family: "Bowlby One SC", cursive;
  color: ${({ color }) => color};
  text-transform: uppercase;
  text-align: center;
  font-size: 3rem;
`;

type Friend = {
  name:
    | "chase"
    | "everest"
    | "marshall"
    | "rocky"
    | "rubble"
    | "ryder"
    | "skye"
    | "tracker"
    | "zuma";
  state: "hidden" | "found";
  img: string;
  color: string;
};

const targetFriendName = "chase";

const friends: Friend[] = [
  { name: "chase", state: "hidden", img: chase, color: "#27A8FF" },
  { name: "everest", state: "hidden", img: everest, color: "#B4A5E8" },
  { name: "marshall", state: "hidden", img: marshall, color: "#E62928" },
  { name: "rocky", state: "hidden", img: rocky, color: "#70B360" },
  { name: "rubble", state: "hidden", img: rubble, color: "#DFBA01" },
  { name: "ryder", state: "hidden", img: ryder, color: "#F2AC10" },
  { name: "skye", state: "hidden", img: skye, color: "#FF8FC0" },
  { name: "tracker", state: "hidden", img: tracker, color: "#B5CB9E" },
  { name: "zuma", state: "hidden", img: zuma, color: "#F16939" },
];

const shuffle = <T extends {}>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = ~~(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function App() {
  const [board, setBoard] = useState(shuffle(friends));
  const [currentFriend, setCurrentFriend] = useState<Friend | null>(null);
  const [targetFound, setTargetFound] = useState(false);

  const onClickHandler = (name: Friend["name"]) => {
    const activeFriend = friends.find((friend) => friend.name === name);

    if (activeFriend) {
      setCurrentFriend(activeFriend);
    }

    if (targetFound) {
      return;
    }

    if (name === targetFriendName) {
      setTargetFound(true);
      setBoard((board) => board.map((tile) => ({ ...tile, state: "found" })));
      return;
    }

    setBoard((board) =>
      board.map((tile) => {
        if (tile.name === name) {
          return {
            ...tile,
            state: "found",
          };
        }
        return tile;
      })
    );
  };
  return (
    <>
      <Wrapper>
        {board.map((friend) => {
          return (
            <Tile key={friend.name}>
              {friend.state === "hidden" ? (
                <TileImg
                  alt="logo"
                  src={logo}
                  onClick={() => onClickHandler(friend.name)}
                />
              ) : (
                <TileImg
                  src={friend.img}
                  alt={friend.name}
                  onClick={() => setCurrentFriend(friend)}
                />
              )}
            </Tile>
          );
        })}
      </Wrapper>
      {currentFriend ? (
        <FriendName color={currentFriend.color}>
          {currentFriend.name}
        </FriendName>
      ) : null}
    </>
  );
}

export default App;
