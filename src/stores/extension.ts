import { writable } from 'svelte/store';

// Define possible window sizes
type WindowSize = Parameters<typeof webflow.setExtensionSize>[0];

// Create the writable store with the initial window size
const windowSize = writable<WindowSize>('default');

// Define a function to update the window size and call the Webflow API
async function setWindowSize(size: WindowSize) {
  windowSize.set(size);
  // Here, make the actual call to the Webflow API to change the window size.
  await webflow.setExtensionSize(size);
}

// Define a type for route information
interface RouteInfo {
  currentRoute: string;
  previousRoute?: string;
}

// Create the writable store with the initial route information
const routeInfo = writable<RouteInfo>({ currentRoute: '/' });

// Define a function to update the route information
function setRouteInfo(currentRoute: string) {
  routeInfo.update((info) => ({ 
    previousRoute: info.currentRoute, 
    currentRoute 
  }));
}

export { windowSize, setWindowSize, routeInfo, setRouteInfo };
