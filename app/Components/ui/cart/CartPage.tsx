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
  IoTrashOutline,
  IoCheckmarkSharp,
  IoLockClosedOutline
} from "react-icons/io5"
import { 
  fetchCart, 
  updateCartQuantity, 
  deleteCartItem 
} from '@/app/services/api'
import PlaceholderProduct from "../../../../public/Images/product-one.jpg"

const CartPage = () => {
  const [cartItems, setCartItems] = useState<any[]>([])
  const [selectedIds, setSelectedIds] = useState<number[]>([]) 
  const [loading, setLoading] = useState(true)
  const [activePopup, setActivePopup] = useState<string | null>(null)
  const [hardRefreshing, setHardRefreshing] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState<number[] | null>(null) 
  
  // States for calculated values
  const [totalMRP, setTotalMRP] = useState(0)
  const [discountOnMRP, setDiscountOnMRP] = useState(0)
  const [subtotal, setSubtotal] = useState(0)

  const router = useRouter()

  const loadCartData = useCallback(async (showFullLoader = true) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    
    if (!token) {
      setCartItems([]);
      setSelectedIds([]);
      setTotalMRP(0);
      setDiscountOnMRP(0);
      setSubtotal(0);
      setLoading(false);
      return;
    }

    if (showFullLoader) setLoading(true);

    try {
      const result = await fetchCart();
      const items = Array.isArray(result) ? result : (result?.data || []);
      setCartItems(items);

      // Calculation logic based on provided JSON structure
      let tempTotalMRP = 0;
      let tempSubtotal = 0;

      items.forEach((item: any) => {
        const product = item.product || {};
        const qty = item.quantity || 1;
        
        // Parse raw string prices to numbers
        const mrp = parseFloat(product.price?.toString().replace(/[^\d.]/g, '') || "0");
        const salePrice = parseFloat(product.sale_price?.toString().replace(/[^\d.]/g, '') || "0");

        tempTotalMRP += mrp * qty;
        // If sale_price is available, use it for subtotal, otherwise use mrp
        tempSubtotal += (salePrice > 0 ? salePrice : mrp) * qty;
      });

      setTotalMRP(tempTotalMRP);
      setSubtotal(tempSubtotal);
      setDiscountOnMRP(tempTotalMRP - tempSubtotal);

    } catch (error) {
      console.error("Cart update failed:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCartData();
    window.addEventListener('cartUpdate', () => loadCartData(false));
    return () => window.removeEventListener('cartUpdate', () => loadCartData(false));
  }, [loadCartData]);

  const toggleSelectAll = () => {
    if (selectedIds.length === cartItems.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(cartItems.map(item => item.id));
    }
  };

  const toggleSelectItem = (id: number) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleSelectQuantity = async (item: any, newQty: number) => {
    setActivePopup(null);
    try {
      await updateCartQuantity(item.id, newQty);
      await loadCartData(false);
    } catch (error) {
      loadCartData(true);
    }
  };

  const handleRemoveItems = async () => {
    if (!confirmDelete) return;
    try {
      setHardRefreshing(true);
      await Promise.all(confirmDelete.map(id => deleteCartItem(id)));
      setConfirmDelete(null);
      setSelectedIds([]);
      window.location.replace(`/cart?ts=${Date.now()}`);
    } catch (error) {
      setHardRefreshing(false);
    }
  };

  const platformFee = 23;

  if (loading && cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-yellow border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (!token) {
    return (
      <div className="min-h-screen bg-white py-20 flex flex-col items-center justify-center text-center px-4">
        <IoLockClosedOutline size={60} className="text-gray-200 mb-6" />
        <h2 className="text-2xl font-moralana text-dark uppercase mb-2">PLEASE LOG IN</h2>
        <p className="text-gray-500 font-manrope mb-8">Login to view your cinema bag.</p>
        <Link href="/login" className="px-12 py-4 bg-yellow text-dark font-bold uppercase tracking-widest text-xs hover:bg-dark hover:text-white transition-all">
          Login / Register
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 md:py-20 relative">
      {hardRefreshing && (
        <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-yellow border-t-transparent rounded-full animate-spin" />
            <p className="text-xs font-bold font-manrope uppercase tracking-widest text-dark">Updating bag...</p>
          </div>
        </div>
      )}

      {confirmDelete && (
        <div className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white p-8 max-w-sm w-full shadow-2xl text-center border-t-4 border-yellow">
            <IoTrashOutline className="mx-auto text-red-500 mb-4" size={48} />
            <h3 className="text-xl font-bold text-dark mb-2 font-manrope font-bold">Remove Selection?</h3>
            <p className="text-gray-500 text-sm mb-8 font-manrope font-medium">Remove {confirmDelete.length} item(s) from your cinema bag?</p>
            <div className="flex gap-4">
              <button onClick={() => setConfirmDelete(null)} className="flex-1 py-3 border border-gray-200 font-bold text-xs uppercase tracking-widest font-manrope">Cancel</button>
              <button onClick={handleRemoveItems} className="flex-1 py-3 bg-dark text-white font-bold text-xs uppercase tracking-widest hover:bg-black font-manrope font-bold">Remove</button>
            </div>
          </div>
        </div>
      )}

      <div className="content-container">
        <nav className="flex items-center gap-2 mb-8 text-sm font-manrope text-gray-400">
          <Link href="/" className="hover:text-yellow transition-colors font-manrope">Home</Link>
          <IoChevronForwardOutline size={14} />
          <span className="text-dark font-medium uppercase tracking-tighter font-manrope font-bold">Cinema Bag</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-gray-100 pb-6">
          <h1 className="text-4xl md:text-5xl font-moralana text-dark uppercase leading-none font-bold">
            Your Cinema <span className="font-manrope italic lowercase">Bag.</span>
          </h1>

          {cartItems.length > 0 && (
            <div className="flex items-center gap-6 font-manrope">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className={`w-5 h-5 border flex items-center justify-center transition-all ${selectedIds.length === cartItems.length ? 'bg-yellow border-yellow' : 'border-gray-300 bg-white group-hover:border-yellow'}`}>
                  {selectedIds.length === cartItems.length && <IoCheckmarkSharp className="text-dark text-sm" />}
                </div>
                <input type="checkbox" className="hidden" checked={selectedIds.length === cartItems.length} onChange={toggleSelectAll} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-dark font-manrope font-bold">Select All ({selectedIds.length}/{cartItems.length})</span>
              </label>
              
              {selectedIds.length > 0 && (
                <button onClick={() => setConfirmDelete(selectedIds)} className="flex items-center gap-2 text-red-500 font-bold text-[10px] uppercase tracking-widest hover:opacity-70 transition-opacity font-manrope font-bold">
                  <IoTrashOutline size={16} /> Remove Selected
                </button>
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-2 flex flex-col gap-6">
            {cartItems.length > 0 ? (
              cartItems.map((item) => {
                const product = item.product || {};
                const image = product.full_image_url || product.image_url || PlaceholderProduct;
                const salePrice = product.sale_price || product.price || 0;
                const numericSalePrice = typeof salePrice === 'string' ? parseFloat(salePrice.replace(/[^\d.]/g, '')) : salePrice;
                const isSelected = selectedIds.includes(item.id);

                return (
                  <div key={item.id} className="flex gap-4 md:gap-8 items-start py-6 border-b border-gray-100 group relative">
                    <div className="pt-12 md:pt-16">
                      <label className="cursor-pointer">
                        <div className={`w-5 h-5 border flex items-center justify-center transition-all ${isSelected ? 'bg-yellow border-yellow' : 'border-gray-300 bg-white hover:border-yellow'}`}>
                          {isSelected && <IoCheckmarkSharp className="text-dark text-sm" />}
                        </div>
                        <input type="checkbox" className="hidden" checked={isSelected} onChange={() => toggleSelectItem(item.id)} />
                      </label>
                    </div>

                    <div className="relative w-24 h-32 md:w-32 md:h-44 bg-gray-50 overflow-hidden flex-shrink-0">
                      <Image src={image} alt={product.name || "Item"} fill className="object-cover transition-transform group-hover:scale-105" sizes="150px" priority />
                    </div>

                    <div className="flex flex-col flex-grow gap-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-medium font-manrope text-dark group-hover:text-yellow transition-colors font-manrope font-bold">{product.name}</h3>
                        <button onClick={() => setConfirmDelete([item.id])} className="text-gray-400 hover:text-red-500 transition-colors"><IoCloseOutline size={24} /></button>
                      </div>
                      <p className="text-[10px] text-gray-400 font-manrope uppercase tracking-widest mt-1 font-manrope">Ref: {product.sku || item.id}</p>

                      <div className="flex justify-between items-end mt-auto pt-4">
                        <div className="relative">
                          <button onClick={() => setActivePopup(activePopup === item.id ? null : item.id)} className="flex items-center gap-4 px-5 py-2.5 border border-gray-200 text-xs font-bold bg-white hover:border-dark transition-all uppercase tracking-widest font-manrope font-bold">
                            Qty: {item.quantity} <IoChevronDownOutline className={`transition-transform duration-300 ${activePopup === item.id ? 'rotate-180' : ''}`} />
                          </button>

                          {activePopup === item.id && (
                            <div className="absolute bottom-full left-0 mb-2 w-24 bg-white border border-gray-200 shadow-2xl z-[110] animate-in fade-in slide-in-from-bottom-2">
                              <div className="max-h-48 overflow-y-auto scrollbar-hide">
                                {[...Array(10)].map((_, i) => (
                                  <button key={i + 1} onClick={() => handleSelectQuantity(item, i + 1)} className={`w-full py-3 text-xs font-bold font-manrope hover:bg-yellow transition-colors border-b border-gray-50 last:border-0 ${item.quantity === i + 1 ? 'bg-gray-100 text-dark font-bold' : 'text-gray-500'}`}>
                                    {i + 1}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="text-right">
                          {product.sale_price && (
                            <p className="text-[10px] text-gray-400 line-through">₹{parseFloat(product.price).toLocaleString('en-IN')}</p>
                          )}
                          <p className="text-xl font-bold text-dark font-manrope font-bold">₹{(numericSalePrice * item.quantity).toLocaleString('en-IN')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="py-20 text-center flex flex-col items-center gap-6">
                <p className="text-xl text-gray-400 font-manrope">Your bag is empty.</p>
                <Link href="/shop-all" className="px-10 py-4 bg-yellow text-dark font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-dark hover:text-white transition-all font-manrope font-bold">Explore Collection</Link>
              </div>
            )}
          </div>

          {/* Right Summary Section - DESIGN PRESERVED, CALCULATION CORRECTED */}
          <div className="bg-gray-50 p-8 sticky top-24 border border-gray-100 shadow-sm">
            <h2 className="text-sm font-bold font-manrope text-dark uppercase tracking-[0.2em] mb-6 border-b border-gray-200 pb-4 font-manrope font-bold">Price Details ({cartItems.length} Items)</h2>
            
            <div className="space-y-4 text-sm font-manrope text-gray-600 border-b border-gray-200 pb-6 mb-6">
              <div className="flex justify-between font-manrope">
                <span>Total MRP</span>
                <span className="text-dark font-bold">₹{totalMRP.toLocaleString('en-IN')}</span>
              </div>
              
              <div className="flex justify-between font-manrope">
                <span className="flex items-center gap-2">
                  Discount on MRP 
                  <span className="text-yellow text-[10px] font-bold cursor-pointer font-manrope uppercase tracking-tighter font-bold">Know More</span>
                </span>
                <span className="text-green-600 font-bold">-₹{discountOnMRP.toLocaleString('en-IN')}</span>
              </div>
              
              <div className="flex justify-between font-manrope">
                <span className="flex items-center gap-2">
                  Coupon Discount 
                  <span className="text-yellow text-[10px] font-bold cursor-pointer font-manrope uppercase tracking-tighter font-bold">Apply Coupon</span>
                </span>
                <span className="text-gray-400">—</span>
              </div>
              
              <div className="flex justify-between font-manrope">
                <span>Platform Fee</span>
                <span className="text-dark font-bold">₹{platformFee}</span>
              </div>
              
              <div className="flex justify-between font-manrope">
                <span>Shipping Fee</span>
                <span className="text-green-600 font-bold uppercase text-[10px]">Free</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8 font-manrope">
              <span className="text-xs font-bold text-dark uppercase tracking-widest font-manrope font-bold">Total Amount</span>
              <span className="text-2xl font-bold text-dark font-manrope font-bold">₹{(subtotal + platformFee).toLocaleString('en-IN')}</span>
            </div>
            
            <Link href="/checkout" className="w-full">
              <button disabled={subtotal === 0} className="w-full py-4 bg-yellow text-dark font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-dark hover:text-white transition-all shadow-lg shadow-yellow/10 font-manrope font-bold">Place Order</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage;