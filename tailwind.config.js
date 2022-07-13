module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["black"], // lofi
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "black",
  },
};
