module.exports = {
    // mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Code Saver', 'ui-sans-serif', 'system-ui']
        },
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                primary: {
                    50: '#caf0f8', // becomes primary-900 in dark mode
                    300: '#90e0ef', // becomes primary-600 in dark mode
                    600: '#0077b6', // becomes primary-300 in dark mode
                    900: '#03045e' // becomes primary-50 in dark mode
                },
                secondary: '#ff269e',
                header: '#002f3c',
                body: '#00546b'
            },
            dropShadow: {
                custom: ' 3px 3px 0 #002f3c'
            },
            boxShadow: {
                'sm-on-light-surface': '3px 3px 0 #002f3c',
                'on-light-surface': '3px 3px 0 #002f3c',
                'sm-on-dark-surface': '1px 1px 0 #faf77d',
                'on-dark-surface': '3px 3px 0 #faf77d'
            }
        },
        variants: {
            extend: {
                display: ['dark']
            }
        },
        plugins: [
            require('@tailwindcss/forms'),
            require('nightwind')
        ]
    }
};
