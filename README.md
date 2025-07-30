# ADmyBRAND Insights

ADmyBRAND Insights is an AI-powered marketing analytics dashboard built with Next.js 14, shadcn/ui, Recharts, and Framer Motion. It provides a comprehensive suite of tools for analyzing marketing data, generating smart insights, and optimizing campaigns.

## Live Demo

[Link to Live Demo](YOUR_LIVE_DEMO_URL_HERE)

## Key Features

- **Interactive Charts:** Visualize data with dynamic line, bar, and pie charts.
- **AI-Powered Features:** Leverage AI for smart insights, customer segmentation, and actionable suggestions.
- **Real-time Data Simulation:** Experience live data updates and simulations.
- **Dark/Light Mode Toggle:** Seamlessly switch between dark and light themes for comfortable viewing.
- **Export Functionality:** Export data and reports to PDF and CSV formats.
- **Fully Responsive Layout:** Access insights on any device with a fluid, responsive design.

## Tech Stack

- **Frontend:** React, Next.js 14 (App Router)
- **UI Components:** shadcn/ui
- **Charting:** Recharts, Chart.js (for specific chart types)
- **Animations:** Framer Motion
- **Styling:** Tailwind CSS
- **State Management:** Context API (or other relevant state management if applicable)
- **Icons:** Lucide React

## Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Dinesh-Gautam/admybrand.git
    cd admybrand-insights
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

Open `http://localhost:3000` with your browser to see the result.

## Folder Structure

```
.
├── public/             # Static assets like images and icons
├── src/
│   ├── app/            # Next.js App Router pages and layouts
│   ├── components/     # Reusable UI components (charts, dashboard elements, icons, etc.)
│   ├── constants/      # Project-wide constants
│   ├── context/        # React context providers
│   ├── css/            # Stylesheets
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility libraries
│   └── types/          # TypeScript type definitions
├── components.json     # shadcn/ui configuration
├── next.config.ts      # Next.js configuration
├── tsconfig.json       # TypeScript configuration
├── .gitignore          # Git ignore file
├── .prettierrc         # Prettier configuration
└── package.json        # Project dependencies and scripts
```

## Credits and License

- **Credits:** This project was built using various open-source libraries and frameworks.
- **License:** This project is licensed under the MIT License.
