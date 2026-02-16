import { useState, useEffect } from 'react';
import './App.css';

/**
 * Crypto Tracker - Tutorial Example
 *
 * A simple React app using the APIVerve Bitcoin API.
 * https://apiverve.com/marketplace/bitcoin
 */

// API Configuration
// Create a .env file with: VITE_API_KEY=your-api-key-here
// Get a free key at: https://dashboard.apiverve.com
const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = 'https://api.apiverve.com/v1/bitcoin';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [lastUpdated, setLastUpdated] = useState(null);

  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY'];

  const fetchPrice = async () => {
    if (!API_KEY) {
      setError('Add your API key to .env file (VITE_API_KEY=your-key)');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}?currency=${currency}`, {
        method: 'GET',
        headers: {
          'x-api-key': API_KEY
        }
      });

      const result = await response.json();

      if (result.status === 'ok') {
        setData(result.data);
        setLastUpdated(new Date());
        setError('');
      } else {
        setError(result.error || 'Failed to fetch data');
      }
    } catch (err) {
      setError('Failed to fetch Bitcoin price');
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrice();
    // Refresh every 60 seconds
    const interval = setInterval(fetchPrice, 60000);
    return () => clearInterval(interval);
  }, [currency]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  const formatLargeNumber = (num) => {
    if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    return num.toLocaleString();
  };

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <div className="logo">₿</div>
          <h1>Bitcoin Tracker</h1>
          <p className="subtitle">Real-time price data</p>
        </div>

        <div className="currency-selector">
          {currencies.map(c => (
            <button
              key={c}
              className={currency === c ? 'active' : ''}
              onClick={() => {
                setCurrency(c);
                setLoading(true);
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {error && <div className="error">{error}</div>}

        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        ) : data && (
          <div className="price-card">
            <div className="price-main">
              <span className="price">{formatPrice(data.price)}</span>
              <span className={`change ${data.change24h >= 0 ? 'positive' : 'negative'}`}>
                {data.change24h >= 0 ? '▲' : '▼'} {Math.abs(data.change24h).toFixed(2)}%
              </span>
            </div>

            <div className="stats-grid">
              <div className="stat">
                <span className="stat-label">Market Cap</span>
                <span className="stat-value">{formatLargeNumber(data.marketCap)}</span>
              </div>
              <div className="stat">
                <span className="stat-label">24h Volume</span>
                <span className="stat-value">{formatLargeNumber(data.volume24h)}</span>
              </div>
              <div className="stat">
                <span className="stat-label">24h High</span>
                <span className="stat-value">{formatPrice(data.high24h)}</span>
              </div>
              <div className="stat">
                <span className="stat-label">24h Low</span>
                <span className="stat-value">{formatPrice(data.low24h)}</span>
              </div>
            </div>

            {lastUpdated && (
              <div className="last-updated">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </div>
            )}

            <button className="refresh-btn" onClick={() => { setLoading(true); fetchPrice(); }}>
              Refresh
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
