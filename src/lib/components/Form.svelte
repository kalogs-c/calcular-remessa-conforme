<script lang="ts">
  import HowTo from "./HowTo.svelte";

  let total = "0.00";

  let partner = false;
  let productValue = 0;
  let freightValue = 0;

  export let dollar: number;

  // Em porcentagem
  const IMPOSTO_DE_IMPORTACAO = {
    ABAIXO_50_DOL: 20 / 100,
    ACIMA_50_DOL: 60 / 100,
  } as const;
  const ICMS = 17 / 100;

  // Em R$
  const CORREIOS_TAXA = 15;

  function calculate() {
    if (productValue + freightValue === 0) {
      total = "0.00";
      return;
    }

    const value = productValue + freightValue;

    let currentTotal = value;

    if (value / dollar <= 50) {
      const abaixo50Dol = value * IMPOSTO_DE_IMPORTACAO.ABAIXO_50_DOL;

      // Imposto de Importação para compras abaixo de 50 dol
      currentTotal += abaixo50Dol;
    }

    if (value / dollar > 50 || !partner) {
      const descount = 20;
      const acima50Dol = value * IMPOSTO_DE_IMPORTACAO.ACIMA_50_DOL - descount;

      // Imposto de Importação para compras acima de 50 dol
      currentTotal += acima50Dol;
    }

    // ICMS
    currentTotal += currentTotal * ICMS;

    // Taxa correios
    currentTotal += CORREIOS_TAXA;

    total = currentTotal.toFixed(2);
  }
</script>

<div class="flex flex-auto gap-5 flex-col justify-center">
  <div class="daisy-form-control gap-3 z-10">
    <label
      class="daisy-label cursor-pointer flex items-center justify-between gap-3"
    >
      <span class="daisy-label-text"> Empresa dentro da remessa conforme </span>
      <input
        bind:checked={partner}
        on:change={calculate}
        type="checkbox"
        class="daisy-checkbox"
      />
    </label>
    <div>
      <label for="valor" class="daisy-label">
        <span class="daisy-label-text">Valor do produto em R$</span>
      </label>
      <input
        bind:value={productValue}
        on:input={calculate}
        type="number"
        placeholder="Valor"
        name="valor"
        class="daisy-input daisy-input-bordered w-full max-w-xs"
      />
    </div>
    <div>
      <label for="frete" class="daisy-label">
        <span class="daisy-label-text">Valor do frete em R$</span>
      </label>
      <input
        bind:value={freightValue}
        on:input={calculate}
        type="number"
        placeholder="Valor"
        name="frete"
        class="daisy-input daisy-input-bordered w-full max-w-xs"
      />
    </div>
  </div>
  <HowTo
    dollar={dollar.toFixed(2)}
    icms={ICMS}
    taxaCorreios={CORREIOS_TAXA}
    impostoDeImportacao={IMPOSTO_DE_IMPORTACAO}
  />
</div>

<div class="flex flex-auto gap-5 flex-col">
  <div class="daisy-stats daisy-stats-vertical lg:daisy-stats-horizontal">
    <div class="daisy-stat">
      <div class="daisy-stat-title">Produto + Frete</div>
      <div class="daisy-stat-value">
        R$ {(productValue + freightValue).toFixed(2)}
      </div>
    </div>
    <div class="daisy-stat">
      <div class="daisy-stat-title">Dolar</div>
      <div class="daisy-stat-value">R$ {dollar.toFixed(2)}</div>
    </div>
    <div class="daisy-stat">
      <div class="daisy-stat-title">
        Total ({productValue + freightValue / dollar > 50
          ? "acima de $50"
          : "abaixo de $50"})
      </div>
      <div class="daisy-stat-value text-primary">R$ {total}</div>
    </div>
  </div>
</div>
