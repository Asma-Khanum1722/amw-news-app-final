import { useState, useEffect } from "react";
import "./news.css";

// Countries supported by GNews API
const COUNTRIES = [
  { code: "us", name: "United States", flag: "🇺🇸" },
  { code: "gb", name: "United Kingdom", flag: "🇬🇧" },
  { code: "pk", name: "Pakistan", flag: "🇵🇰" },
  { code: "in", name: "India", flag: "🇮🇳" },
  { code: "ca", name: "Canada", flag: "🇨🇦" },
  { code: "au", name: "Australia", flag: "🇦🇺" },
  { code: "de", name: "Germany", flag: "🇩🇪" },
  { code: "fr", name: "France", flag: "🇫🇷" },
  { code: "jp", name: "Japan", flag: "🇯🇵" },
  { code: "sg", name: "Singapore", flag: "🇸🇬" },
];

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState(() => {
    return localStorage.getItem("amw_country_pref") || "us";
  });

  const apiKey = import.meta.env.VITE_GNEWS_API_KEY;
  const category = "general";
  const language = "en";
  const CACHE_DURATION = 16 * 60 * 1000;

  const getCacheKey = (countryCode) => `cachedNewsData_${countryCode}`;

  const fetchNews = async (countryCode) => {
    const CACHE_KEY = getCacheKey(countryCode);
    
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      const isExpired = Date.now() - timestamp > CACHE_DURATION;
      if (!isExpired) {
        setArticles(data);
        setLoading(false);
        return;
      }
    }

    try {
      setLoading(true);
      // Use our local Vercel serverless function (proxy)
      // This avoids CORS issues and hides the API key
      const url = `/api/news?country=${countryCode}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || errorData.message || "Failed to fetch news");
      }

      const data = await response.json();

      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({
          data: data.articles || [],
          timestamp: Date.now(),
        })
      );

      setArticles(data.articles || []);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(country);
  }, []);

  const handleCountryChange = (newCountry) => {
    setCountry(newCountry);
    localStorage.setItem("amw_country_pref", newCountry);
    setError(null);
    fetchNews(newCountry);
  };

  const handleRefresh = () => {
    const CACHE_KEY = getCacheKey(country);
    localStorage.removeItem(CACHE_KEY);
    fetchNews(country);
  };

  if (loading) return (
    <div className="news-page">
      <div className="news-loading">
        <div className="loading-spinner"></div>
        <span>Loading stories...</span>
      </div>
    </div>
  );

  if (error) return (
    <div className="news-page">
      <div className="news-error">
        <p>Something went wrong: {error}</p>
        <button onClick={handleRefresh} className="btn-refresh">Try Again</button>
      </div>
    </div>
  );

  return (
    <div className="news-page">
      {/* Header */}
      <header className="news-header">
        <div className="news-header-content">
          <span className="section-tag">LATEST STORIES</span>
          <h1 className="news-title">Global News Hub</h1>
          <p className="news-subtitle">
            Curated coverage from trusted sources around the world
          </p>
        </div>
      </header>

      {/* Controls */}
      <div className="news-controls">
        <div className="country-selector">
          <label className="country-label" htmlFor="country-select">
            Region
          </label>
          <select
            id="country-select"
            className="country-dropdown"
            value={country}
            onChange={(e) => handleCountryChange(e.target.value)}
          >
            {COUNTRIES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.flag} {c.name}
              </option>
            ))}
          </select>
        </div>
        <button onClick={handleRefresh} className="btn-refresh" disabled style={{display: 'none'}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M23 4v6h-6M1 20v-6h6"/>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
          </svg>
          Refresh
        </button>
      </div>

      {/* News Grid - Original Card Style */}
      <div className="news-grid">
        {articles.map((article, index) => (
          <div className="news-card" key={index}>
            <div className="card-image-wrapper">
              {article.image && (
                <img
                  className="card-image"
                  src={article.image}
                  alt={article.title}
                />
              )}
              <div className="card-overlay"></div>
              <h3 className="card-headline">{article.title}</h3>
            </div>

            <div className="card-body">
              <span className="card-source">{article.source.name}</span>
              <p className="card-desc">
                {article.description || "No description available"}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Read Article
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
