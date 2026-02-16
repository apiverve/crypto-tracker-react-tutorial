# Crypto Tracker | APIVerve API Tutorial

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Build](https://img.shields.io/badge/Build-Passing-brightgreen.svg)]()
[![React](https://img.shields.io/badge/React-18-61dafb)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646cff)](https://vitejs.dev)
[![APIVerve | Bitcoin](https://img.shields.io/badge/APIVerve-Bitcoin-purple)](https://apiverve.com/marketplace/bitcoin?utm_source=github&utm_medium=tutorial&utm_campaign=crypto-tracker-react-tutorial)

A sleek Bitcoin price tracker built with React. View real-time price, market cap, 24h volume, and price changes in multiple currencies.

![Screenshot](https://raw.githubusercontent.com/apiverve/crypto-tracker-react-tutorial/main/screenshot.jpg)

---

### Get Your Free API Key

This tutorial requires an APIVerve API key. **[Sign up free](https://dashboard.apiverve.com?utm_source=github&utm_medium=tutorial&utm_campaign=crypto-tracker-react-tutorial)** - no credit card required.

---

## Features

- Real-time Bitcoin price data
- Support for 8 currencies (USD, EUR, GBP, JPY, etc.)
- 24h price change with color indicators
- Market cap and trading volume
- Last updated timestamp
- Auto-refresh every 60 seconds
- Dark theme crypto-style UI
- Built with React 18 and Vite

## Quick Start

1. **Clone this repository**
   ```bash
   git clone https://github.com/apiverve/crypto-tracker-react-tutorial.git
   cd crypto-tracker-react-tutorial
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your API key**

   Open `.env` and add your API key:
   ```
   VITE_API_KEY=your-api-key-here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**

   Visit http://localhost:5173 and track Bitcoin!

## Project Structure

```
crypto-tracker-react-tutorial/
├── src/
│   ├── App.jsx         # Main React component
│   ├── App.css         # Styles
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
├── .env                # Environment variables (add your API key)
├── screenshot.jpg      # Preview image
├── LICENSE             # MIT license
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## How It Works

1. App loads and fetches current Bitcoin price
2. User can switch between currencies
3. Data auto-refreshes every 60 seconds
4. Price changes are color-coded (green/red)
5. Large numbers are formatted (1.2T, 45.6B, etc.)

### The API Call

```javascript
const response = await fetch(`${API_URL}?currency=USD`, {
  method: 'GET',
  headers: {
    'x-api-key': API_KEY
  }
});
```

## API Reference

**Endpoint:** `GET https://api.apiverve.com/v1/bitcoin`

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `currency` | string | No | Currency code (default: USD) |

**Example Response:**

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "currency": "USD",
    "price": 97250.43,
    "marketCap": 1928000000000,
    "volume24h": 35420000000,
    "change24h": -1.52,
    "lastUpdated": "2026-02-07T12:00:00.000Z"
  }
}
```

## Supported Currencies

| Code | Currency |
|------|----------|
| USD | US Dollar |
| EUR | Euro |
| GBP | British Pound |
| JPY | Japanese Yen |
| CAD | Canadian Dollar |
| AUD | Australian Dollar |
| CHF | Swiss Franc |
| CNY | Chinese Yuan |

## Customization Ideas

- Add more cryptocurrencies (Ethereum, etc.)
- Add price alerts/notifications
- Add historical price charts
- Save favorite currency to localStorage
- Add portfolio tracking
- Implement price predictions

## Related APIs

Explore more APIs at [APIVerve](https://apiverve.com/marketplace?utm_source=github&utm_medium=tutorial&utm_campaign=crypto-tracker-react-tutorial):

- [Ethereum Price](https://apiverve.com/marketplace/ethereum?utm_source=github&utm_medium=tutorial&utm_campaign=crypto-tracker-react-tutorial) - Track Ethereum prices
- [Exchange Rate](https://apiverve.com/marketplace/exchangerate?utm_source=github&utm_medium=tutorial&utm_campaign=crypto-tracker-react-tutorial) - Currency conversion
- [Gold Price](https://apiverve.com/marketplace/goldprice?utm_source=github&utm_medium=tutorial&utm_campaign=crypto-tracker-react-tutorial) - Track gold prices

## License

MIT - see [LICENSE](LICENSE)

## Links

- [Get API Key](https://dashboard.apiverve.com?utm_source=github&utm_medium=tutorial&utm_campaign=crypto-tracker-react-tutorial) - Sign up free
- [APIVerve Marketplace](https://apiverve.com/marketplace?utm_source=github&utm_medium=tutorial&utm_campaign=crypto-tracker-react-tutorial) - Browse 300+ APIs
- [Bitcoin API](https://apiverve.com/marketplace/bitcoin?utm_source=github&utm_medium=tutorial&utm_campaign=crypto-tracker-react-tutorial) - API details
