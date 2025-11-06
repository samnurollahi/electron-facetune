const video = document.getElementById("video");

const music = [
  { expression: "sad", name: "sad.mp3" },
  { expression: "happy", name: "happy.mp3" },
  { expression: "neutral", name: "neutral.mp3" },
];

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

  console.log(emot);
}, 1000);
