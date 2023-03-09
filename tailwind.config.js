const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                'wheelfit': {
                    300: '#ff3333',
                    400: '#ff4444',
                    500: '#ff5555',
                    600: '#ff6666',
                    700: '#ff7777',
                },
                'budget': {
                    'primary': '#0364B0',
                    'secondary': '#FFFFFF'
                },
                'midrange': {
                    'primary': '#731DD5',
                    'secondary': '#FFFF00',
                },
                'premium': {
                    'primary': '#870000',
                    'secondary': '#FFFFFF'
                },
                'best-budget': {
                    'primary': '#0364B0',
                    'secondary': '#FAD000'
                },
                'best-selling': {
                    'primary': '#0bda51',
                    'secondary': '#333333'
                },
                'high-performance': {
                    'primary': '#ffdf04',
                    'secondary': '#e53029'
                },
                'popular-choice': {
                    'primary': '#0F1111',
                    'secondary': '#f08804'
                },
                'custom': {
                    'primary': '#000000',
                    'secondary': '#FFFFFF'
                },
            },
            fontFamily: {
                'poppins': ['Poppins', ...defaultTheme.fontFamily.sans],
                'open-sans': ['OpenSans', ...defaultTheme.fontFamily.sans],
                'montserrat': ['Montserrat', ...defaultTheme.fontFamily.sans]
            },
            gridTemplateColumns: {
                '20': 'repeat(20, minmax(0, 1fr))',
            }
        },
    },
    plugins: [],
}
