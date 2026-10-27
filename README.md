# Omani Gold

Omani Gold is a responsive full-stack web application built with Angular 22, Tailwind CSS, and ASP.NET Core Web API using C#.

The Angular frontend communicates with the ASP.NET Core backend through HTTP requests to retrieve sample gold prices for different karats in Oman.

The application provides gold prices for different karats,
a gold price calculator, a 30-day price trend chart,
and a historical price table.

**Disclaimer:** All gold prices are sample data for
demonstration purposes only and do not represent live market prices.

## Features

- Display sample gold prices for 18K, 21K, 22K, and 24K.
- Calculate estimated gold value based on karat and weight.
- Display a 30-day gold price trend chart.
- View historical gold prices with pagination.
- Responsive design for desktop, tablet, and mobile.
- Mobile navigation menu.
- Bilingual support (Arabic RTL / English LTR) with instant language switching.
- Dark and Light mode with a theme toggle.

## Technologies Used

- - Angular 22
- TypeScript
- HTML5
- Tailwind CSS
- Chart.js
- ng2-charts
- Angular Signals
- ASP.NET Core Web API
- C#
- RESTful API
- Angular HttpClient


## Installation & Running Instructions

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git
- .NET 10 SDK

### Running the Backend (ASP.NET Core Web API)

1. Open a terminal in the GoldPriceTrackerAPI project directory.

2. Start the backend server:

   ```bash
   dotnet run

3. The API should be available at:

http://localhost:5295/api/goldprices

### Installation

This project requires both the **ASP.NET Core Web API (Backend)** and the **Angular Application (Frontend)**.

**Prerequisites:**
- Node.js and npm
- .NET 10 SDK
- Git

#### Step 1: Clone the Backend Repository

Open a terminal and run:

```bash
git clone https://github.com/khadij200/GoldPriceTrackerAPI.git
```

#### Step 2: Navigate to the Backend Directory

```bash
cd GoldPriceTrackerAPI
```

#### Step 3: Start the Backend Server

```bash
dotnet run
```

The API will run at:

http://localhost:5295/api/goldprices

Keep this terminal running.

#### Step 4: Clone the Frontend Repository

Open a **new terminal** and run:

```bash
git clone https://github.com/khadij200/omani-gold.git
```

#### Step 5: Navigate to the Frontend Directory

```bash
cd omani-gold
```

#### Step 6: Install Frontend Dependencies

```bash
npm install
```

#### Step 7: Start the Angular Application

```bash
npm start
```

#### Step 8: Open the Application

Open your browser and visit:

http://localhost:4200/

The Angular frontend will fetch the gold prices from the ASP.NET Core Web API.

**Important Notes:**
- Both backend and frontend servers must be running simultaneously.
- The application uses demonstration data, not live gold market prices.
- The backend must be accessible at `http://localhost:5295` for the frontend to retrieve gold prices.

### Production Build

To build the application for production, run:

```bash
npm run build
```
## Source Code Repositories

- Frontend (Angular):
  https://github.com/khadij200/omani-gold

- Backend (ASP.NET Core Web API):
  https://github.com/khadij200/GoldPriceTrackerAPI
