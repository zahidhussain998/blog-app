import { DefaultDocument, Studio, defineConfig } from 'sanity';
import { structureTool } from "sanity/structure";
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { myTheme } from './theme';
import StudioNavbar from './components/StudioNavbar';
import Logo from './components/Logo';
import { getDefaultDocumentNode } from './structure';
import {codeInput} from "@sanity/code-input"


const projectId = "pel38u82" ;
const dataset = "production";

export default defineConfig({
  basePath: '/studio',
  name: 'ZAHID_Studio',
  title: 'ZAHID_Studio',
  projectId,
  dataset,
  plugins: [
    structureTool({
      defaultDocumentNode: getDefaultDocumentNode,
    }),
    visionTool(),
    codeInput(),
    
  ],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
