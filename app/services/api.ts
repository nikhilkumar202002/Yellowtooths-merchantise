// lib/api.ts
const BASE_URL = "https://devadmin.yellowtooths.com/api";

const getAuthHeaders = () => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  return {
    "Content-Type": "application/json",
    "Accept": "application/json", // CRITICAL: Prevents the server from redirecting to login/home
    ...(token ? { "Authorization": `Bearer ${token}` } : {}),
  };
};

export const fetchBanners = async () => {
  try {
    const response = await fetch(`${BASE_URL}/banners`);
    if (!response.ok) throw new Error("Network response was not ok");
    
    const result = await response.json();
    
    // Updated path: result.success check and result.data array
    if (result.success && Array.isArray(result.data)) {
      return result.data;
    }
    return [];
    
  } catch (error) {
    console.error("Error fetching banners:", error);
    return []; 
  }
};

export const fetchSeasonalBanners = async () => {
  try {
    const response = await fetch(`${BASE_URL}/seasonal-banners`);
    if (!response.ok) throw new Error("Failed to fetch seasonal banners");
    
    const result = await response.json();
    
    /**
     * Standardizing this based on the common patterns in your API.
     * If seasonal banners follow a similar nested structure, 
     * you may need to adjust this path as well.
     */
    return result.data || [];
  } catch (error) {
    console.error("Seasonal banner fetch error:", error);
    return [];
  }
};

export const fetchCollections = async () => {
  try {
    const response = await fetch(`${BASE_URL}/categories-subcategories`);
    if (!response.ok) throw new Error("Network response was not ok");
    
    const result = await response.json();
    
    // API returns { success: true, data: [...] }
    if (result.success && Array.isArray(result.data)) {
      return result.data;
    }
    return [];
  } catch (error) {
    console.error("Error fetching collections:", error);
    return [];
  }
};

export const fetchProducts = async (page: number = 1, categorySlug?: string) => {
  try {
    // We pass per_page=20 as requested. We add category slug if provided.
    let url = `${BASE_URL}/products?page=${page}&per_page=20`;
    if (categorySlug) url += `&category=${categorySlug}`;

    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch");
    
    const result = await response.json();
    return {
      products: result.data || [],
      pagination: result.pagination || null
    };
  } catch (error) {
    console.error("API Error:", error);
    return { products: [], pagination: null };
  }
};

// Required for Static Export: Fetches IDs from ALL pages for pre-rendering
export const fetchAllProductIds = async () => {
  let allIds: string[] = [];
  let currentPage = 1;
  let hasMore = true;

  while (hasMore) {
    const { products, pagination } = await fetchProducts(currentPage);
    if (products.length === 0) break;
    products.forEach((p: any) => allIds.push((p.id || p._id).toString()));
    
    if (pagination && pagination.current_page < pagination.last_page) {
      currentPage++;
    } else {
      hasMore = false;
    }
  }
  return allIds;
};

export const fetchProductById = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) throw new Error("Product not found");
    
    const result = await response.json();
    
    // API returns { success: true, data: { ...product details... } }
    if (result.success && result.data) {
      return result.data;
    }
    return null;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
};

export const fetchProductsByCategory = async (categoryId: string | number) => {
  try {
    // 1. Get the list of product IDs for the category
    const response = await fetch(`${BASE_URL}/categories/${categoryId}/products`);
    const result = await response.json();

    if (result.success && result.data.product_ids) {
      // 2. Map those IDs to full product details
      const productPromises = result.data.product_ids.map((id: number) => 
        fetchProductById(id.toString())
      );
      const products = await Promise.all(productPromises);
      return products.filter(p => p !== null);
    }
    return [];
  } catch (error) {
    console.error("Error fetching category products:", error);
    return [];
  }
};

export const login = async (credentials: any) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Login API error:", error);
    return { success: false, message: "Server connection failed" };
  }
};

export const register = async (userData: any) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Register API error:", error);
    return { success: false, message: "Server connection failed" };
  }
};

export const logoutUser = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${BASE_URL}/logout`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` 
      },
    });
    return await response.json();
  } catch (error) {
    return { success: false };
  }
};

export const getCountries = async () => {
  try {
    const response = await fetch(`${BASE_URL}/countries`);
    const result = await response.json();
    return result; // Assuming this returns { success: true, data: [...] }
  } catch (error) {
    console.error("Fetch countries error:", error);
    return { success: false, data: [] };
  }
};

export const fetchCart = async () => {
  try {
    const response = await fetch(`${BASE_URL}/cart?t=${Date.now()}`, {
      method: "GET",
      headers: {
        ...getAuthHeaders(),
        "Cache-Control": "no-cache",
        "Pragma": "no-cache"
      },
      cache: "no-store",
    });

    return await response.json();
  } catch (error) {
    console.error("Fetch cart error:", error);
    return { success: false, data: [] };
  }
};


export const addToCart = async (productId: string, quantity: number = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/cart`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify({ product_id: productId, quantity }),
    });

    // If the response is a redirect (302), it means the token is invalid
    if (response.redirected) {
       console.error("Session expired, redirecting to login");
       return { success: false, message: "Session expired. Please login again." };
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Add to cart API error:", error);
    // This is where your current error is caught
    return { success: false, message: "Network error or unauthorized access. Check your login." };
  }
};

export const deleteCartItem = async (cartItemId: number) => {
  try {
    const response = await fetch(`${BASE_URL}/cart/${cartItemId}`, {
      method: "DELETE",
      headers: {
        ...getAuthHeaders(),
        "Cache-Control": "no-cache",
        "Pragma": "no-cache",
      },
      cache: "no-store",
    });

    // Some APIs return 204 No Content — don’t call response.json() then
    let data: any = null;
    const contentType = response.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      data = await response.json();
    }

    return {
      ok: response.ok,
      status: response.status,
      data,
      // keep success for compatibility if you want
      success: response.ok,
    };
  } catch (error) {
    console.error("Delete cart item error:", error);
    return { ok: false, success: false };
  }
};

/**
 * Updates the quantity of a specific item in the cart.
 * @param cartItemId - The unique ID of the cart record (e.g., /cart/1).
 * @param quantity - The new absolute quantity to set.
 */
export const updateCartQuantity = async (cartItemId: string | number, quantity: number) => {
  try {
    const response = await fetch(`${BASE_URL}/cart/${cartItemId}`, {
      method: "PUT", // Use "PATCH" if your API specifically requires it
      headers: getAuthHeaders(),
      body: JSON.stringify({ quantity }),
    });
    
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Update cart quantity error:", error);
    return { success: false, message: "Failed to update quantity" };
  }
};