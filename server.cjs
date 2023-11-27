const { Board, Led, Motor } = require("johnny-five");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const board = new Board();

const delay = (time) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });

const setupBoard = async () => {
  const bedRoomLight = new Led(10);
  const studyRoomLight = new Led(11);
  const studyRoomFan = new Motor(5);
  const bedRoomFan = new Motor(6);

  board.repl.inject({
    bedRoomLight,
    studyRoomLight,
    studyRoomFan,
    bedRoomFan,
  });

  app.get("/bedRoomLight", (req, res) => {
    if (bedRoomLight.isOn) {
      bedRoomLight.off();
    } else {
      bedRoomLight.on();
    }
    console.log("get route");
    res.json({ status: bedRoomLight.isOn ? "ON" : "OFF" });
  });

  app.get("/studyRoomLight", (req, res) => {
    // ledGreen.on();
    if (studyRoomLight.isOn) {
      studyRoomLight.off();
    } else {
      studyRoomLight.on();
    }
    console.log("get route");
    res.json({ status: studyRoomLight.isOn ? "ON" : "OFF" });
  });
  app.get("/studyRoomFan", (req, res) => {
    if (studyRoomFan.isOn) {
      studyRoomFan.stop();
    } else {
      studyRoomFan.start();
    }
    console.log("get route");
    res.json({ status: studyRoomFan.isOn ? "ON" : "OFF" });
  });
  app.get("/bedRoomFan", (req, res) => {
    if (bedRoomFan.isOn) {
      bedRoomFan.stop();
    } else {
      bedRoomFan.start();
    }
    console.log("get route");
    res.json({ status: bedRoomFan.isOn ? "ON" : "OFF" });
  });

  app.listen(4000, () => {
    console.log("Server started");
  });
};

board.on("ready", setupBoard);
