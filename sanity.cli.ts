import { defineCliConfig } from 'sanity/cli';

const projectId = "pel38u82";
const dataset = "production";

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});
