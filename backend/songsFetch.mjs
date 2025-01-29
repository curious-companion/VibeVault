import express from 'express';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import cors from 'cors';

const app = express();
const port = 3001;

// Define __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to the public folder in the root project directory
const rootPublicDir = join(__dirname, "..", "public", "songs");

// Enable CORS for all routes
app.use(cors());

// Endpoint to get all songs with URLs
app.get("/songs", (req, res) => {
  console.log(rootPublicDir);

  // Read all files in the songs directory
  fs.readdir(rootPublicDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Unable to read songs directory" });
    }

    // Filter out files that are not .mp3
    const songs = files
      .filter(file => file.endsWith(".mp3"))
      .map(file => ({
        name: file,
        url: `http://localhost:${port}/songs/${encodeURIComponent(file)}`,
      }));

    res.json(songs); // Send back the list of songs with URLs
  });
});

// Serve static files from the public directory (for songs, etc.)
app.use("/songs", express.static(rootPublicDir)); // Serve songs directly

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
