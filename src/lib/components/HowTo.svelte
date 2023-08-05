<script lang="ts">
  export let dollar: string;
  export let taxaCorreios: number;
  export let impostoDeImportacao: number;
  export let icms: number;
</script>

<label for="my_modal" class="daisy-link">Como o calculo é feito?</label>

<input type="checkbox" id="my_modal" class="daisy-modal-toggle" />
<div class="daisy-modal daisy-modal-bottom sm:daisy-modal-middle">
  <div class="daisy-modal-box">
    <h3 class="font-bold text-lg">Como o calculo é feito?</h3>
    <ul class="daisy-steps daisy-steps-vertical gap-4">
      <li class="daisy-step">
        Primeiro somamos o valor do produto com o do frete
      </li>
      <li class="daisy-step">
        Se o valor total for maior que US$50,00 dólares na cotação atual (R$ {dollar}),
        adicionamos a taxa de importação ({impostoDeImportacao}%).
      </li>
      <li class="daisy-step">
        Se a empresa não fizer parte da remessa, adicionamos a taxa de
        importação independentemente do valor.
      </li>
      <li class="daisy-step">
        Acrescentamos o ICMS ({icms}%) sobre o valor anterior.
      </li>
      <li class="daisy-step daisy-step-primary">
        Por último, incluímos a taxa de despacho dos Correios que é um valor
        fixo de R$ {taxaCorreios}.
      </li>
    </ul>
    <div class="daisy-modal-action">
      <label for="my_modal" class="daisy-btn">Fechar</label>
    </div>
  </div>
</div>
