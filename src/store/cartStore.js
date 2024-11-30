import {create} from 'zustand';

const useCartStore = create((set) => ({
    items: [],
    addItem: (item) => set((state) => {
        const existingItem = state.items.find((i) => i.id === item.id);
        if (existingItem) {
            return {
                items: state.items.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                ),
            };
        }
        return { items: [...state.items, { ...item, quantity: 1 }] };
    }),
    removeItem: (itemId) => set((state) => ({
        items: state.items.filter((i) => i.id !== itemId),
    })),
    updateQuantity: (itemId, quantity) => set((state) => ({
        items: state.items.map((i) =>
            i.id === itemId ? { ...i, quantity: quantity } : i
        ),
    })),
    clearCart: () => set({ items: [] }),
    getTotalItems: () => useCartStore.getState().items.reduce((sum, item) => sum + item.quantity, 0),
    getTotalPrice: () => useCartStore.getState().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
}));

export default useCartStore;

