module.exports = {
    mode: 'jit',
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
                primary: '#faf77d',
                secondary: '#ff269e',
                header: '#002f3c',
                body: '#00546b'
            },
            dropShadow: {
                custom: ' 3px 3px 0 #002f3c'
            }
        },
        variants: {},
        plugins: [
            require('@tailwindcss/forms')
        ]
    }
};
