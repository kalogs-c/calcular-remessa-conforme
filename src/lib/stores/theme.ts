import { writable } from "svelte/store";
import { browser } from "$app/environment";

const defaultTheme = browser ? localStorage.getItem("theme") || "forest" : "forest";

export const theme = writable(defaultTheme);

theme.subscribe((newTheme) => browser && localStorage.setItem("theme", newTheme));
