/**
 * P2P Media Loader Wrapper
 * This file imports the P2P Media Loader modules and makes them available globally
 */

// Import the HLS.js P2P Engine
import { HlsJsP2PEngine } from './p2p-media-loader-hlsjs.min.js';

// Make it available globally for player.js to use
// Ensure we don't overwrite existing global objects
if (!window.P2PMediaLoader) {
    window.P2PMediaLoader = {};
}
window.P2PMediaLoader.HlsJsP2PEngine = HlsJsP2PEngine;

// Dispatch an event when P2P is ready
window.dispatchEvent(new Event('p2p-ready'));

console.log('P2P Media Loader initialized and ready');
