<h1 align="center">🎧 FaceBeat</h1>
<p align="center">A real-time emotion-based music player built with Electron and face detection.</p>

<hr/>

<h2>📌 Overview</h2>
<p>
FaceBeat is a desktop application built with <strong>Electron</strong> that uses the user's webcam to detect facial expressions in real time and automatically plays music that matches the detected mood.  
All processing happens locally — no video is uploaded or stored.
</p>

<h2>✨ Features</h2>
<ul>
  <li>Real-time face expression detection (happy, sad, surprised, neutral, etc.).</li>
  <li>Automatic music playback based on detected emotion.</li>
  <li>Fully local — no server connection required.</li>
  <li>Easy to customize mapping between mood & music tracks.</li>
  <li>Simple run command: <code>npm start</code></li>
</ul>

<h2>🛠 Requirements</h2>
<ul>
  <li>Node.js (v14 or later recommended)</li>
  <li>npm or yarn</li>
  <li>Camera access permission</li>
</ul>

<h2>🚀 Installation</h2>
<pre>
git clone https://github.com/samnurollahi/electron-facetune/
cd facebeat
npm install
npm start
</pre>

<h2>🔐 Privacy</h2>
<ul>
  <li>No video or images leave the user’s machine.</li>
  <li>Webcam access is requested only once.</li>
  <li>No data is stored unless explicitly implemented.</li>
</ul>

<h2>🧰 Common Issues</h2>
<ul>
  <li><strong>Webcam not detected</strong> — check OS camera permissions.</li>
  <li><strong>Models fail to load</strong> — ensure <code>/models</code> is included in your build.</li>
  <li><strong>No sound</strong> — check file paths and audio permissions.</li>
</ul>

<h2>🤝 Contributing</h2>
<p>
Pull requests are welcome!  
Please open an issue before making major changes.
</p>

<h2>📄 License</h2>
<p>MIT License</p>

<hr/>
<p align="center">Made with ❤️ using Electron & face detection</p>
