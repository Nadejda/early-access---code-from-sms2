/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "deepblue-100": "var(--deepblue-100)",
        "deepblue-140": "var(--deepblue-140)",
        "deepcloudyblue-100": "var(--deepcloudyblue-100)",
        "deepcloudyblue-80": "var(--deepcloudyblue-80)",
        "gray-70": "var(--gray-70)",
        white: "var(--white)",
      },
      fontFamily: {
        "body-medium": "var(--body-medium-font-family)",
        "body-medium-link": "var(--body-medium-link-font-family)",
        "header-1": "var(--header-1-font-family)",
      },
    },
  },
  plugins: [],
};
