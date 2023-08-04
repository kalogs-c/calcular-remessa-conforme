<script lang="ts">
  let total = '';

  let partner = false;
  let productValue = 0;
  let freightValue = 0;

  export let dollar: number;

  // Em porcentagem
  const IMPOSTO_DE_IMPORTACAO = 60;
  const ICMS = 17;

  // Em R$
  const CORREIOS_TAXA = 15;

  function calculate() {
    if (productValue + freightValue === 0) {
      total = '';
      return;
    }

    const value = productValue + freightValue;
    let currentTotal = value;

    if (value / dollar > 50 || !partner) {
      // Imposto de Importação para compras acima de 50 dol
      currentTotal += value * IMPOSTO_DE_IMPORTACAO / 100;
    }

    // ICMS
    currentTotal += currentTotal * ICMS / 100;

    // Taxa correios
    currentTotal += CORREIOS_TAXA;

    total = currentTotal.toFixed(2);
  }
</script>

<div class="flex flex-auto gap-5 flex-col justify-center">
  <div class="daisy-form-control gap-3 z-10">
    <label class="daisy-label cursor-pointer flex items-center justify-between gap-3" >
      <span class="label-text" >
        Empresa dentro da remessa conforme
      </span>
      <input bind:checked={partner} on:change={calculate} type="checkbox" class="daisy-checkbox" >
    </label>
    <div>
      <label for="valor" class="daisy-label">
        <span class="daisy-label-text">Valor do produto em R$</span>
      </label>
      <input bind:value={productValue} on:input={calculate} type="number" placeholder="Valor" name="valor" class="daisy-input daisy-input-bordered w-full max-w-xs" />
    </div>
    <div>
      <label for="frete" class="daisy-label">
        <span class="daisy-label-text">Valor do frete em R$</span>
      </label>
      <input bind:value={freightValue} on:input={calculate} type="number" placeholder="Valor" name="frete" class="daisy-input daisy-input-bordered w-full max-w-xs" />
    </div>
  </div>
</div>

<div class="flex flex-auto gap-5 flex-col">
{#if total}
  <div class="daisy-stats daisy-stats-vertical lg:daisy-stats-horizontal">
    <div class="daisy-stat">
      <div class="daisy-stat-title">Produto + Frete</div>
      <div class="daisy-stat-value">{(productValue + freightValue).toFixed(2)}</div>
    </div>
    <div class="daisy-stat">
      <div class="daisy-stat-title">Dolar</div>
      <div class="daisy-stat-value">{dollar.toFixed(2)}</div>
    </div>
    <div class="daisy-stat">
      <div class="daisy-stat-title">Total</div>
      <div class="daisy-stat-value text-primary">{total}</div>
    </div>
  </div>
{/if}
</div>
