import { writable, derived } from 'svelte/store';

function calculateTotalPrice(items) {
    return items.reduce( (sum, cur) => sum + cur.price, 0);
}

export const itemsInCart = writable(0);
export const cartContents = writable([]);
export const totalPrice = derived(cartContents, $cartContents => calculateTotalPrice($cartContents));