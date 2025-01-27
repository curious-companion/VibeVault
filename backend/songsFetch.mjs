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

//Enabling CORS for all routes
app.use(cors());

// Endpoint to get all songs in the /public/songs directory
app.get("/songs", (req, res) => {
  const songsDir = 'C:\\Users\\VIBHANSHU JAIN\\music-streaming-platform\\public\\songs'; // Use escaped backslashes


  // Read all files in the songs directory
  fs.readdir(songsDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Unable to read songs directory" });
    }

    // Filter out files that are not .mp3
    const songs = files.filter(file => file.endsWith(".mp3"));
    res.json(songs); // Send back the list of songs
  });
});

// Serve static files from the public directory (for songs, etc.)
app.use(express.static(join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
