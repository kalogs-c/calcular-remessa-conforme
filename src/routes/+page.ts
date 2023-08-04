import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  const response = await fetch('https://open.er-api.com/v6/latest/USD');

  const data = await response.json();

  return {
    dollar: data.rates.BRL,
  };
}


