<script>
  import { onMount } from "svelte";
  import "../app.css";

  onMount(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  });
</script>

<svelte:head>
  <title>Calcular remessa conforme</title>
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9013209215119038"
    crossorigin="anonymous"
  ></script>
</svelte:head>

<slot />
<div>
  <!-- ads -->
  <ins
    class="adsbygoogle"
    style="display: block"
    data-ad-client="ca-pub-9013209215119038"
    data-ad-slot="6851760174"
    data-ad-format="auto"
    data-full-width-responsive="true"
  ></ins>
</div>
