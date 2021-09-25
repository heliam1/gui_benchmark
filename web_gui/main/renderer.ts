// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.

// 'renderer.ts' cannot be compiled under '--isolatedModules' because it is considered a
// global script file. Add an import, export, or an empty 'export {}' statement to make it
// a module.ts(1208)
export {};