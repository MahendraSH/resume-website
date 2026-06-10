import { atom } from 'nanostores';

// Tab selection inside the workspace
export const activeTab = atom<string>('editor');

// Raw text/data input value for the workspace
export const workspaceInput = atom<string>(JSON.stringify({
  "project": "Starter Astro Project",
  "status": "Ready",
  "version": "1.0.0",
  "settings": {
    "theme": "Vercel Dark",
    "features": ["Validation", "Tree-View", "Converting", "Charts", "Excel-Grid"]
  },
  "metrics": [
    { "month": "Jan", "value": 45 },
    { "month": "Feb", "value": 80 },
    { "month": "Mar", "value": 65 },
    { "month": "Apr", "value": 110 }
  ]
}, null, 2));

// Control sidebar configurations
export const canvasBackground = atom<string>('zinc-950');
export const canvasPadding = atom<number>(32);
export const canvasGridVisible = atom<boolean>(true);

// Mobile view states
export const mobileActivePanel = atom<'editor' | 'output'>('editor');
