<script lang="ts">
  import { getContext } from "svelte";
  import { Router, Link, Route, navigate } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte"
  import { setRouteInfo } from './stores/extension'; // Import the function

  export let url = "";

  // Subscribe to navigate event and update the routeInfo store
  function onNavigate() {
    console.log('onNavigate triggered')
    const router = getContext('router') as any; // get router context
    if (router) {
      // wait for the next micro-task when the route is updated
      Promise.resolve().then(() => {
        const route = router.activeRoute;
        if (route) {
          const routeName = route.route.name;
          setRouteInfo(routeName);
        }
      });
    }
  }
</script>
<Router {url} on:navigate={onNavigate}>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <div>
      <Route path="/" component={Home} name="homesss" />
      <Route path="/about" component={About} name="aboutzzz" />
    </div>
  <!-- <main>
    <div class="flex flex-col items-center justify-start h-screen px-3">
      <div class="app-bar flex items-center self-stretch justify-between py-1">
        <div class="text-xl font-medium">Starterkit</div>
        <WindowSizeSwitch />
      </div>
      <DividerHorizontal />
    <div class="flex flex-col items-center">
      <div class="flex items-center">
        <a href="https://webflow.com" target="_blank" rel="noreferrer">
          <img src={webflowLogo} class="logo webflow" alt="Webflow Logo" />
        </a>
        <p class="text-xl">+</p>
        <a href="https://svelte.dev" target="_blank" rel="noreferrer">
          <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
        </a>
      </div>
      <div class="">
        <h2>Webflow + Svelte</h2>
        <p>Type styling app is underway.</p>
        <br >
        <div class="my-0 mx-auto">
          <Counter />
        </div>
        <br >
        <h1>Buttons</h1>
        <div class="my-0 mx-auto">
          Enabled
          <div class="flex items-center gap-2 mb-2">
            <Button label="Default" leadingIcon="heroicons:sun" />
          </div>
        </div>
  
    </div>
  </div>
  </main> -->
</Router>
