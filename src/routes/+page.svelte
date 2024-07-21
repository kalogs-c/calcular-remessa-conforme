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

  const empresas = {
    dentro: [
      "3Cliques",
      "Aliexpress",
      "Amazon",
      "Magazine Luiza",
      "Mercado Livre",
      "Shein",
      "Shopee",
      "Sinerlog Store",
      "Temu",
    ],
    fora: [
      "Wish",
      "US Closer",
      "Tiendamia",
      "Puritan",
      "Muifabrica",
      "LifeOne",
      "IHerb",
      "Fornececlub",
      "Cronosco",
      "Cellshop",
      "Addmall",
    ],
  } as const;
</script>

<section class="main-container" data-theme={currentTheme}>
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
  <div class="form">
    <Form dollar={data.dollar} />
  </div>
  <section class="flex items-center flex-col gap-5 px-10 py-50">
    <h2>O que é Remessa Conforme?</h2>
    <p>
      Em resumo, o Remessa Conforme simplifica o comércio internacional de
      mercadorias de pequeno valor, beneficiando empresas e consumidores,
      contudo existe discussão quanto seu impacto no mercado interno. É
      importante acompanhar os debates e discussões sobre o programa para
      avaliar seus impactos a longo prazo.
    </p>
    <p>
      O Programa Remessa Conforme, lançado em agosto de 2023, reformula a
      taxação de compras em lojas internacionais feitas pela internet. Empresas
      de e-commerce podem aderir ao programa, beneficiando-se de vantagens
      tributárias e aduaneiras.
    </p>
    <p>
      Empresas que aderem ao programa devem recolher o ICMS (Imposto sobre a
      Circulação de Mercadorias e Serviços), sobre o valor total da compra. Para
      encomendas com valores superiores a US$ 50, além do ICMS, será cobrado o
      imposto de importação, que é de 60%.
    </p>
    <p>
      Desde agosto de 2023 o governo vinha isentando as compras internacionais
      feitas na internet de até US$ 50. A medida foi implementada por uma
      portaria publicada em junho de 2023 pelo Ministério da Fazenda.
    </p>
    <h2>Nova taxa</h2>
    <p>
      A partir de agosto de 2024 os produtos importados passarão a ser taxados
      duas vezes, com o novo imposto federal e com o ICMS. Serão cobradas duas
      alíquotas diferentes. <br /> Uma de 20% sobre o valor de US$ 50. E a outra
      de 60% sobre o valor excedente.
    </p>
    <p>
      Na prática, será dado um desconto de US$ 20 para compras acima de US$ 50,
      de modo a abater a tributação dos primeiros US$ 50 de compra.
    </p>
    <p>
      Numa compra de US$ 60, por exemplo hoje a taxa seria de US$ 36 (60%). Mas,
      a partir de agosto: a taxa total passa a ser de US$ 16, porque será
      cobrada a taxa de 20% sobre a parcela inicial de US$ 50 (o que gera um
      imposto de US$ 10) e será cobrada a de 60% sobre o restante, de US$ 10 (o
      que gera um imposto de US$ 6). No caso de uma compra de US$ 3 mil, o
      desconto final são os mesmos US$ 20, ao aplicar a taxa sobre o excedente
      acima de US$ 50. Hoje em dia, essa compra pagaria um imposto de US$ 1.800
      (60%). Com a nova regra, vai pagar US$ 1.780 (56%). Em ambos os casos será
      adicionado o ICMS, taxa de 17%, após o calculo do primeiro imposto
    </p>
    <h2>Como fazer a adesão a Remessa Conforme?</h2>
    <p>
      A adesão ao Programa é voluntária e deve ser feita pelas empresas de
      comércio eletrônico. Com a adesão, os impostos das compras são declarados
      e pagos antes de chegarem ao Brasil, o que agiliza as liberações e as
      entregas das mercadorias.
    </p>
    <h2>Já estão no programa</h2>
    <ol
      class="daisy-menu flex-row gap-2 rounded-box w-full max-w-sm max-h-64 z-[10] m-2"
    >
      {#each empresas.dentro as empresa}
        <li>
          <strong>
            {empresa}
          </strong>
        </li>
      {/each}
    </ol>
    <h2>Ainda não estão no programa</h2>
    <ol
      class="daisy-menu flex-row gap-2 rounded-box w-full max-w-md max-h-64 z-[10] m-2"
    >
      {#each empresas.fora as empresa}
        <li>
          <strong>
            {empresa}
          </strong>
        </li>
      {/each}
    </ol>
    <h2>Leia mais</h2>
    <div class="flex">
      <a
        href="https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/remessas-postal-e-expressa/programa-remessa-conforme-o-que-e-como-funciona"
        target="_blank"
      >
        Programa remessa conforme 2023</a
      >
      <div class="daisy-divider daisy-divider-horizontal"></div>
      <a
        href="https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/remessas-postal-e-expressa/regras-futuras/regras-futuras"
        target="_blank"
      >
        Atualizações do programa em 2024
      </a>
      <div class="daisy-divider daisy-divider-horizontal"></div>
      <a
        href="https://g1.globo.com/economia/noticia/2024/07/18/encomendas-internacionais-veja-empresas-que-estao-no-programa-da-receita-federal-e-as-que-buscam-habilitacao.ghtml"
        target="_blank"
      >
        Empresas que estão no programa da Receita Federal e as que buscam
        habilitação
      </a>
    </div>
  </section>
  <footer
    class="mt-16 flex items-center justify-center w-full footer footer-center bg-base-300 text-base-content p-4"
  >
    <p>
      Kalogs Inc. © {new Date().getFullYear()}
    </p>
  </footer>
</section>

<style lang="postcss">
  .main-container {
    @apply flex flex-col;
    @apply items-center;
    @apply min-h-screen w-full;
  }

  .logo {
    @apply mb-4 text-4xl font-extrabold tracking-tight leading-none;
  }

  .form {
    @apply flex flex-col items-center justify-center my-5;
    height: calc(100vh - 100px);
  }

  h2 {
    @apply my-4 text-4xl font-extrabold tracking-tight leading-none;
  }

  p {
    @apply text-xl leading-normal m-auto w-11/12;
  }

  a {
    @apply daisy-link;
  }
</style>
