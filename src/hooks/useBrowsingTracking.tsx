import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook to track user browsing behavior for AI recommendations
 */
export function useBrowsingTracking() {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    const pageViews = JSON.parse(localStorage.getItem("pageViews") || "[]");
    pageViews.push({
      path: location.pathname,
      timestamp: Date.now()
    });
    // Keep only last 50 page views
    if (pageViews.length > 50) {
      pageViews.shift();
    }
    localStorage.setItem("pageViews", JSON.stringify(pageViews));

    // Track category visits
    if (location.pathname.includes("/products/")) {
      const category = location.pathname.split("/products/")[1];
      if (category) {
        const browsedCategories = JSON.parse(localStorage.getItem("browsedCategories") || "[]");
        if (!browsedCategories.includes(category)) {
          browsedCategories.push(category);
          localStorage.setItem("browsedCategories", JSON.stringify(browsedCategories));
        }
      }
    }
  }, [location]);
}
