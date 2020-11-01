module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: ["index.html"],
    theme: {
        extend: {
            colors: {
                moderateViolet: "hsl(263, 55%, 52%)",
                grayishBlue: "hsl(217, 19%, 35%)",
                blackBlue: "hsl(219, 29%, 14%)",
                lightGray: "hsl(0, 0%, 81%)",
                lightGrayBlue: "hsl(210, 46%, 95%)",
            },
            fontSize: {
                default: "13px",
            },
            fontFamily: {
                barlow: ["Barlow Semi Condensed", "sans-serif"],
                arial:["Times New Roman","sans-serif"]
            },
            height:{
                60:"60vh",
                70:"70vh",
                80:"80vh",
                90:"90vh",
            }
        },
    },
    variants: {},
    plugins: [],
};
