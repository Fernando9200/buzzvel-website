/* eslint-disable no-undef */
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    viewportWidth: 1920, // Set your desired width
    viewportHeight: 1080,
  },
  video: true,
    videoCompression: 32,
    videosFolder: 'cypress/videos',
});
