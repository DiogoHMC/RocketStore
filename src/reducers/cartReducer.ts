export type CartItem = {
    id: number;
    text: string;
    price: number;
    quantity: number;
    imageSrc: string;
}

export type CartState = {
    items: CartItem[];
    total: number;
}

export type CartAction =
    | { type: 'ADD_TO_CART'; payload: CartItem }
    | { type: 'REMOVE_FROM_CART'; payload: number }
    | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
    | { type: 'CLEAR_CART' };

export const initialState: CartState = {
    items: [],
    total: 0
};

export function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            
            if (existingItem) {
                // Update quantity if item exists
                const updatedItems = state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
                return {
                    ...state,
                    items: updatedItems,
                    total: calculateTotal(updatedItems)
                };
            }

            // Add new item if it doesn't exist
            const newItems = [...state.items, { ...action.payload, quantity: 1 }];
            return {
                ...state,
                items: newItems,
                total: calculateTotal(newItems)
            };
        }

        case 'REMOVE_FROM_CART': {
            const newItems = state.items.filter(item => item.id !== action.payload);
            return {
                ...state,
                items: newItems,
                total: calculateTotal(newItems)
            };
        }

        case 'UPDATE_QUANTITY': {
            if (action.payload.quantity < 1) {
                return {
                    ...state,
                    items: state.items.filter(item => item.id !== action.payload.id),
                    total: calculateTotal(state.items.filter(item => item.id !== action.payload.id))
                };
            }

            const updatedItems = state.items.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );
            return {
                ...state,
                items: updatedItems,
                total: calculateTotal(updatedItems)
            };
        }

        case 'CLEAR_CART':
            return initialState;

        default:
            return state;
    }
}

function calculateTotal(items: CartItem[]): number {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
} 