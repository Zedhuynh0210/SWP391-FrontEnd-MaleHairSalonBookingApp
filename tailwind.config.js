/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: ['class'],
   content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}', './app/**/*.{js,jsx}', './src/**/*.{js,jsx}'],
   prefix: '',
   theme: {
      container: {
         center: true,
         padding: '2rem',
         screens: {
            '2xl': '1400px',
            tb: { max: '768px' },
            // => @media (min-width: 768px and max-width: 1023px) { ... }

            // lg: { min: "1024px", max: "1279px" },
            // // => @media (min-width: 1024px and max-width: 1279px) { ... }

            // xl: { min: "1280px", max: "1535px" },
            // => @media (min-width: 1280px and max-width: 1535px) { ... }
         },
      },
      extend: {
         colors: {
            /**
             * @todo config color for project
             * @link https://colorhunt.co/palette/06283d1363df47b5ffdff6ff
             */
            color1: '#06283D',
            color2: '#1363DF',
            black: '#000',
            color3: '#47B5FF',
            color4: '#DFF6FF',

            /** color type of word
             * @summary noun (danh từ), verb (động từ), adj (tính từ), adverb(trạng  từ), pronoun(đại từ)
             * @link https://www.englishclub.com/grammar/parts-of-speech_1.htm
             */
            noun: '#FFCBCB',
            verb: '#ACE1AF',
            adj: '#FFCDEA',
            adverb: '#E59BE9',
            pronoun: '#B7C9F2',

            /** color for toast */
            wordKnow: '#47B5FF',
            wordRemember: '#74E291',
            flashCard: '#FFCF96',
            success: '#47B5FF',

            /** color for practice */
            totalWord: '#47B5FF',
            totalWordKnow: '#FFCBCB',
            totalWordRemember: '#ACE1AF',
            totalPoint: '#EF9C66',

            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            primary: {
               DEFAULT: 'hsl(var(--primary))',
               foreground: 'hsl(var(--primary-foreground))',
            },
            secondary: {
               DEFAULT: 'hsl(var(--secondary))',
               foreground: 'hsl(var(--secondary-foreground))',
            },
            destructive: {
               DEFAULT: 'hsl(var(--destructive))',
               foreground: 'hsl(var(--destructive-foreground))',
            },
            muted: {
               DEFAULT: 'hsl(var(--muted))',
               foreground: 'hsl(var(--muted-foreground))',
            },
            accent: {
               DEFAULT: 'hsl(var(--accent))',
               foreground: 'hsl(var(--accent-foreground))',
            },
            popover: {
               DEFAULT: 'hsl(var(--popover))',
               foreground: 'hsl(var(--popover-foreground))',
            },
            card: {
               DEFAULT: 'hsl(var(--card))',
               foreground: 'hsl(var(--card-foreground))',
            },
         },
         borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)',
         },
         keyframes: {
            'accordion-down': {
               from: { height: '0' },
               to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
               from: { height: 'var(--radix-accordion-content-height)' },
               to: { height: '0' },
            },
            'caret-blink': {
               '0%,70%,100%': { opacity: '1' },
               '20%,50%': { opacity: '0' },
            },
         },
         animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
            'caret-blink': 'caret-blink 1.25s ease-out infinite',
         },
         width: {},
      },
   },
   plugins: [require('tailwindcss-animate')],
};
