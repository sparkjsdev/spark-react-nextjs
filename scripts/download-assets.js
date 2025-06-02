import { createWriteStream, existsSync } from "node:fs";
import { mkdir, readFile } from "node:fs/promises";
import * as http from "node:http";
import * as https from "node:https";
import { join } from "node:path";
import { URL } from "node:url";

const assetsDirectory = "public/assets/";

await mkdir(assetsDirectory, { recursive: true });

const urls = JSON.parse(await readFile("public/assets.json", "utf8"));
let filesToDownload = 0;

for (const [key, data] of Object.entries(urls)) {
  const url = data.url;
  const directory = assetsDirectory + data.directory;
  const filePath = join(directory, key);

  await mkdir(directory, { recursive: true });

  if (existsSync(filePath)) {
    console.log(
      `File: ${filePath} ' exists. Do not download again. npm run assets:clean to delete`,
    );
    continue;
  }
  downloadFile(url, key, filePath);
  console.log(`Downloading file ${key}, from URL: ${url}`);
}

function downloadFile(fileUrl, fileName, filePath) {
  const url = new URL(fileUrl);
  const file = createWriteStream(filePath);

  const protocol = url.protocol === "https:" ? https.get : http.get;

  filesToDownload++;

  protocol(fileUrl, (response) => {
    if (response.statusCode !== 200) {
      filesToDownload--;
      console.error(
        `Download failed: ${response.statusCode} ${response.statusMessage}`,
      );
      return;
    }

    response.pipe(file);

    file.on("finish", () => {
      file.close(() => {
        filesToDownload--;
        console.log(`${fileName} downloaded to ${filePath}`);
        if (filesToDownload === 0) {
          console.log("Success! All assets downloaded");
        }
      });
    });
  }).on("error", (err) => {
    console.error(`Error: ${err.message}`);
  });
}
