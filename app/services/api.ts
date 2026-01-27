// lib/api.ts
const BASE_URL = "https://devadmin.yellowtooths.com/api";

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