const video = document.getElementById("video");
const message = document.getElementById("message");
const audio = document.getElementById("audio");

const music = [
  { expression: "sad", name: "sad.mp3" },
  { expression: "happy", name: "happy.mp3" },
  { expression: "neutral", name: "neutral.mp3" },
];
let prevEmot = null;

window.addEventListener("DOMContentLoaded", async () => {
  navigator.mediaDevices.getUserMedia({ video: true }).then((stearm) => {
    video.srcObject = stearm;
  });

  await faceapi.nets.tinyFaceDetector.loadFromUri("../assets/models");
  await faceapi.nets.faceLandmark68Net.loadFromUri("../assets/models");
  await faceapi.nets.faceExpressionNet.loadFromUri("../assets/models");
});

setInterval(async () => {
  const result = await faceapi
    .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks()
    .withFaceExpressions();

  const emot = Object.keys(result[0].expressions).reduce((a, b) =>
    result[0].expressions[a] > result[0].expressions[b] ? a : b
  );

  if (emot != prevEmot) {
    if (emot == "sad") {
      message.innerHTML = "چرا نارحتی عزیزم؟ 😔";
      audio.src = "../assets/music/sad.mp3";
      prevEmot = emot;
    }

    if (emot == "happy") {
      message.innerHTML = "خوشحالم که خوشحالی❤️";
      audio.src = "../assets/music/happy.mp3";
      prevEmot = emot;
    }

    if (emot == "neutral") {
      message.innerHTML = "چقدر پوکر فیس😂";
      audio.src = "../assets/music/neutral.mp3";
      prevEmot = emot;
    }
  }
  console.log(emot);
}, 1000);
