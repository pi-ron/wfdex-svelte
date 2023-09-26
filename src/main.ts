import './app.css'
import App from './App.svelte'

const targetElement = document.getElementById('app');
if (!targetElement) {
  throw new Error("App root element not found");
}

const app = new App({
  target: targetElement,
});

export default app
