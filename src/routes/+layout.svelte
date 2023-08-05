<script>
  import { onMount } from "svelte";
  import "../app.css";

  onMount(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  });
</script>

<slot />
