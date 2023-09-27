<script lang="ts">
  import { getContext } from "svelte";
  import { Router, Link, Route, navigate } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte"
  import Libraries from "./routes/Libraries.svelte"
  import { routeInfo } from './stores/extension'; // Import the function
  import WindowSizeSwitch from './lib/WindowSizeSwitch.svelte'
  import DividerHorizontal from './lib/DividerHorizontal.svelte'
  import Button from "./lib/components/Button.svelte";
  import Icon from "@iconify/svelte";
  export let url = "";

</script>
<div class="app-wrapper p-2">
  <Router {url}>
    <header>
      <div class="app-bar flex items-center self-stretch justify-between py-">
        <nav class="flex join">
          <Link to="/" class="nav-link">
            <Button variant="ghost" leadingIcon="heroicons:home-solid"></Button>
          </Link>
          <Link to="/about" class="nav-link">
            <Button variant="ghost" label="About"></Button>
          </Link>
          <Link to="/libraries" class="nav-link">
            <Button variant="ghost" label="Libs"></Button>
          </Link>
        </nav>
        <WindowSizeSwitch />
      </div>
      <DividerHorizontal><div class="text-base font-medium">{$routeInfo.currentRoute}</div></DividerHorizontal>
    </header>
  <main>
      <div>
        <Route path="/" component={Home} name="Home" />
        <Route path="/about" component={About} name="About" />
        <Route path="/libraries" component={Libraries} name="Libs" />
      </div>
    </main>
  </Router>
</div>
