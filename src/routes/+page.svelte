<script lang="ts">
  import Form from "$lib/components/Form.svelte";

  import type { PageData } from "./$types";

  import SunIcon from "$lib/components/Sun.svelte";
  import MoonIcon from "$lib/components/Moon.svelte";
  import { theme } from "$lib/stores/theme";
  import { get } from "svelte/store";

  let currentTheme = get(theme);
  let isDark = currentTheme != "forest";

  function changeTheme() {
    currentTheme = currentTheme === "forest" ? "cupcake" : "forest";
    theme.set(currentTheme);
  }

  export let data: PageData;
</script>

<div class="main-container" data-theme={currentTheme}>
  <header class="daisy-navbar p-10">
    <div class="daisy-navbar-start">
      <a href="/" class="logo"> Calcular remessa conforme </a>
    </div>
    <div class="daisy-navbar-end">
      <label class="daisy-swap daisy-swap-rotate">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" on:change={changeTheme} bind:checked={isDark} />

        <!-- sun icon -->
        <SunIcon />

        <!-- moon icon -->
        <MoonIcon />
      </label>
    </div>
  </header>
  <Form dollar={data.dollar} />
</div>

<style lang="postcss">
  .main-container {
    @apply flex flex-col;
    @apply items-center;
    @apply min-h-screen w-full;
  }

  .logo {
    @apply mb-4 text-4xl font-extrabold tracking-tight leading-none;
  }
</style>
