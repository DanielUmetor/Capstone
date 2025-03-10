import { ref } from 'vue';
import { toast } from 'vue3-toastify';
const cart = ref([]);
export function useCart() {
  const addToCart = (product) => {
    const productInCart = cart.value.find((item) => item.prodID === product.prodID);
    if (productInCart) {
      productInCart.quantity += 1;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
    toast.success('Item added to cart!');
  };
  const removeFromCart = (product) => {
    cart.value = cart.value.filter((item) => item.prodID !== product.prodID);
  };
  return {
    cart,
    addToCart,
    removeFromCart,
  };
}