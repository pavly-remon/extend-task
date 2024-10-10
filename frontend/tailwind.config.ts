import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      borderWidth: {
        "1": "1px"
      },
      fontSize: {
        "md": ["1rem", "1.5rem"],
        "s": ["1rem", "1.25rem"],
        "xxs": ["0.5rem", ".75rem"]
      },
      scale: {
        "175": "1.75",
        "200": "2",
        "225": "2.25",
        "250": "2.50"
      },
      screens: {
        mobile: { max: "748px" },
        tablet: { min: "749px", max: "1239px" },
        laptop: { min: "1240px" }
      },
      colors: {

        light: {
          "bg-color": "#ffffff",
          "text-color": "#333333",
          "primary-color": "#3498db",
          "input-bg-color": "#f5f5f5",
          "input-border-color": "#cccccc",
          "description-color": "#8c8b8b",
          "input-text-color": "#333333"
        },
        dark: {
          "bg-color": "#1e1e1e",
          "text-color": "#ffffff",
          "primary-color": "#e74c3c",
          "input-bg-color": "#333333",
          "input-border-color": "#555555",
          "description-color": "#cccccc",
          "input-text-color": "#ffffff"
        }
      }
    }
  },
  plugins: []
};

export default config;