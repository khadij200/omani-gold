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

1. Clone the GitHub repository:

   ```bash
   git clone https://github.com/khadij200/omani-gold.git
   ```

2. Navigate to the project directory:

   ```bash
   cd omani-gold
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open the application in your browser:

   http://localhost:4200/

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
