'use client'

import React, { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { 
  IoCloseOutline, 
  IoChevronDownOutline, 
  IoFlashOutline, 
  IoChevronForwardOutline,
  IoTrashOutline
} from "react-icons/io5"
import { 
  fetchCart, 
  updateCartQuantity, 
  deleteCartItem 
} from '@/app/services/api'
import PlaceholderProduct from "../../../../public/Images/product-one.jpg"

const CartPage = () => {
  const [cartItems, setCartItems] = useState<any[]>([])
  const [subtotal, setSubtotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [activePopup, setActivePopup] = useState<string | null>(null)

const [hardRefreshing, setHardRefreshing] = useState(false);
const [confirmDelete, setConfirmDelete] = useState<number | null>(null);

  const router = useRouter()

  const loadCartData = useCallback(async (showFullLoader = true) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (!token) {
      setLoading(false);
      setCartItems([]);
      return;
    }

    if (showFullLoader) setLoading(true);

    try {
      const result = await fetchCart();
      const items = Array.isArray(result) ? result : (result?.data || []);
      setCartItems(items);

      const total = items.reduce((acc: number, item: any) => {
        const product = item.product || item;
        const price = product.formatted_sale_price || product.formatted_price || product.price || 0;
        const numericPrice = typeof price === 'string' 
          ? parseFloat(price.replace(/[^\d.]/g, '')) 
          : price;
        return acc + (numericPrice * (item.quantity || 1));
      }, 0);
      setSubtotal(total);
    } catch (error) {
      console.error("Cart update failed:", error);
    } finally {
      setLoading(false);
    }
  }, []);

useEffect(() => {
  loadCartData();
}, [loadCartData]);


 const handleSelectQuantity = async (item: any, newQty: number) => {
  setActivePopup(null);

  // ✅ OPTIMISTIC UPDATE
  setCartItems(prev =>
    prev.map(i =>
      i.id === item.id ? { ...i, quantity: newQty } : i
    )
  );

  setSubtotal(prev =>
    prev - (item.quantity * item.product.price) + (newQty * item.product.price)
  );

  try {
    await updateCartQuantity(item.id, newQty);
  } catch (error) {
    console.error("Update failed, reverting", error);
    loadCartData(true); // fallback safety
  }
};

const handleRemoveItem = async (cartItemId: number) => {
  try {
    setConfirmDelete(null);
    setHardRefreshing(true);

    // allow loader paint
    await new Promise((r) => setTimeout(r, 50));

    const result = await deleteCartItem(cartItemId);
    const isSuccess =
      result?.success === true ||
      result?.ok === true ||
      result?.status === true;

    if (!isSuccess) {
      console.error("Delete API did not confirm success:", result);
      setHardRefreshing(false);
      return;
    }

    // ✅ FORCE HARD NAVIGATION (true refresh)
    window.location.replace(`/cart?ts=${Date.now()}`);
  } catch (error) {
    console.error("Delete failed:", error);
    setHardRefreshing(false);
  }
};




  if (loading && cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-yellow border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 md:py-20 relative">
      
        {hardRefreshing && (
          <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-yellow border-t-transparent rounded-full animate-spin" />
              <p className="text-xs font-bold uppercase tracking-widest text-dark">
                Updating your bag…
              </p>
            </div>
          </div>
        )}

      {/* Delete Confirmation Modal */}
      {confirmDelete && (
        <div className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white p-8 max-w-sm w-full shadow-2xl text-center">
            <IoTrashOutline className="mx-auto text-red-500 mb-4" size={48} />
            <h3 className="text-xl font-bold font-manrope text-dark mb-2">Remove Item?</h3>
            <p className="text-gray-500 text-sm mb-8 font-manrope">Are you sure you want to remove this selection from your cinema bag?</p>
            <div className="flex gap-4">
              <button 
                onClick={() => setConfirmDelete(null)}
                className="flex-1 py-3 border border-gray-200 font-bold text-xs uppercase tracking-widest hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
             <button 
                onClick={() => handleRemoveItem(confirmDelete!)}
                className="flex-1 py-3 bg-red-500 text-white font-bold text-xs uppercase tracking-widest hover:bg-red-600 transition-colors"
              >
                Remove
              </button>

            </div>
          </div>
        </div>
      )}

      <div className="content-container">
        <nav className="flex items-center gap-2 mb-8 text-sm font-manrope text-gray-400">
          <Link href="/" className="hover:text-yellow transition-colors">Home</Link>
          <IoChevronForwardOutline size={14} />
          <span className="text-dark font-medium uppercase tracking-tighter">Cinema Bag</span>
        </nav>

        <h1 className="text-4xl md:text-6xl font-moralana text-dark mb-12 uppercase">
          Your Cinema <span className="font-manrope italic lowercase">Bag.</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-2 flex flex-col gap-8">
            {cartItems.length > 0 ? (
              cartItems.map((item) => {
                const product = item.product || item;
                const image = product.full_image_url || product.image_url || PlaceholderProduct;
                const price = product.formatted_sale_price || product.formatted_price || product.price || 0;
                const numericPrice = typeof price === 'string' ? parseFloat(price.replace(/[^\d.]/g, '')) : price;

                return (
                  <div key={item.id} className="flex gap-6 items-start py-6 border-b border-gray-100 group relative">
                    <div className="relative w-24 h-32 md:w-32 md:h-44 bg-gray-50 overflow-hidden flex-shrink-0">
                      <Image src={image} alt={product.name} fill className="object-cover" sizes="150px" priority />
                    </div>

                    <div className="flex flex-col flex-grow gap-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-medium font-manrope text-dark">{product.name}</h3>
                        <button 
                          onClick={() => setConfirmDelete(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <IoCloseOutline size={24} />
                        </button>
                      </div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Ref: {product.sku || item.id}</p>

                      <div className="flex justify-between items-end mt-auto pt-4">
                        <div className="relative">
                          {/* Quantity Selector Popup */}
                          <button 
                            onClick={() => setActivePopup(activePopup === item.id ? null : item.id)}
                            className="flex items-center gap-4 px-5 py-2.5 border border-gray-200 text-xs font-bold bg-white hover:border-dark transition-all uppercase tracking-widest"
                          >
                            Qty: {item.quantity} <IoChevronDownOutline className={`transition-transform duration-300 ${activePopup === item.id ? 'rotate-180' : ''}`} />
                          </button>

                          {activePopup === item.id && (
                            <div className="absolute bottom-full left-0 mb-2 w-24 bg-white border border-gray-200 shadow-2xl z-[110] animate-in fade-in slide-in-from-bottom-2">
                              <div className="max-h-48 overflow-y-auto scrollbar-hide">
                                {[...Array(10)].map((_, i) => (
                                  <button
                                    key={i + 1}
                                    onClick={() => handleSelectQuantity(item, i + 1)}
                                    className={`w-full py-3 text-xs font-bold hover:bg-yellow transition-colors border-b border-gray-50 last:border-0 ${item.quantity === i + 1 ? 'bg-gray-100 text-dark' : 'text-gray-500'}`}
                                  >
                                    {i + 1}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        <p className="text-xl font-bold text-dark font-manrope">
                          ₹{(numericPrice * item.quantity).toLocaleString('en-IN')}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="py-20 text-center flex flex-col items-center gap-6">
                <p className="text-xl text-gray-400 font-manrope">Your bag is empty.</p>
                <Link href="/shop-all" className="px-10 py-4 bg-yellow text-dark font-bold uppercase tracking-[0.2em] text-[10px]">Explore Collection</Link>
              </div>
            )}
          </div>

          {/* RIGHT: Price Summary */}
          <div className="bg-gray-50 p-8 sticky top-24 border border-gray-100">
            <h2 className="text-sm font-bold font-manrope text-dark uppercase tracking-[0.2em] mb-8 border-b border-gray-200 pb-4">Order Summary</h2>
            <div className="space-y-4 border-b border-gray-200 pb-6 mb-6">
              <div className="flex justify-between text-gray-500 font-manrope text-sm uppercase tracking-widest">
                <span>Subtotal</span>
                <span className="font-bold text-dark">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-8">
              <span className="text-xs font-bold text-dark uppercase tracking-[0.2em]">Total</span>
              <span className="text-3xl font-bold font-manrope text-dark">₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            <Link href="/checkout" className="w-full block">
              <button 
                disabled={subtotal === 0}
                className="w-full py-5 bg-yellow text-dark font-bold flex items-center justify-center gap-3 transition-all uppercase tracking-[0.2em] text-[10px] hover:bg-dark hover:text-white"
              >
                <IoFlashOutline size={18}/> Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage;