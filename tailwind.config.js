module.exports = {
    purge: [
        'src/**/*.js',
        'src/**/*.jsx',
        'src/**/*.ts',
        'src/**/*.tsx',
        'public/**/*.html',
    ],
    theme: {
        fontFamily: {
            sans: ['nunito', 'Arial', 'sans-serif']
        },
        extend: {
            colors: {
                // elements: 'hsl(0, 0%, 100%)',
                // background: 'hsl(0, 0%, 98%)',
                // text: 'hsl(200, 15%, 8%)',
                // input: 'hsl(0, 0%, 52%)',
                // elements: 'hsl(209, 23%, 22%)',
                // background: 'hsl(207, 26%, 17%)',
                // text: 'hsl(0, 0%, 100%)'
                elements: 'var(--bg-elements)',
                elements: 'var(--text-primary)',
                elements: 'var(--bg-input)',
                elements: 'var(--bg-backgroud)',
            }
        }
    },
    variants: {},
    plugins: [],
}

