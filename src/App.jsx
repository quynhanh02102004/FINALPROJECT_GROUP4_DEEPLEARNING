import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(20); // 🔹 số lượng sản phẩm hiển thị ban đầu

  useEffect(() => {
    async function loadData() {
      try {
        console.log("Loading Polyvore data...");
        const res = await fetch("/polyvore_outfits/polyvore_merged_items2.json");
        if (!res.ok) throw new Error("Unable to load JSON data");

        const data = await res.json();
        console.log("✅ Total products:", data.length);

        const mapped = data.map((item) => ({
          id: item.item_id,
          title:
            item.title && item.title.trim() !== ""
              ? item.title
              : item.url_name || "Unnamed product",
          category: item.main_category || "Others",
          image: item.image_path
            ? item.image_path
                .replace(/^public[\\/]/, "/") // đổi "public/" thành "/"
                .replaceAll("\\", "/")
            : "/polyvore_outfits/images/notfound.jpg",
          price: Math.floor(Math.random() * 500000) + 100000,
        }));

        setProducts(mapped);
      } catch (err) {
        console.error("❌ Error loading data:", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // Filter products by search box
  const filtered = products.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
  );

  // Only show up to visible Count products
  const visibleProducts = filtered.slice(0, visibleCount);

  // When clicking "See more" -> displays 20 more products
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 20);
  };

  return (
    <div className="site">
      <Header query={query} setQuery={setQuery} />

      <main>
        <Hero />

        <section className="section">
          <div className="section-head">
            <h2>BEST SELLERS</h2>
            <a className="link" href="#all">
              View all →
            </a>
          </div>

          {loading ? (
            <p style={{ textAlign: "center" }}>⏳LOADING DATA...</p>
          ) : (
            <>
              <ProductGrid items={visibleProducts} />

            {visibleCount < filtered.length && (
              <div className="load-more-container">
                <button className="load-more-btn" onClick={handleLoadMore}>
                  <span className="arrow">▼</span>
                </button>
              </div>
            )}


            </>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
