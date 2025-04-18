import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        cosmic: {
          'primary': '#3B82F6',       /* 밝은 파란색 */
          'secondary': '#0EA5E9',     /* 하늘색 */
          'accent': '#06B6D4',        /* 청록색 */
          'background': '#0F172A',    /* 어두운 네이비 배경 */
          'text': '#F8FAFC',          /* 밝은 텍스트 */
        },
        border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: "hsl(var(--cosmic-primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--cosmic-secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				cosmic2: {
					'deep-blue': '#0a0f29',
					'nebula-purple': '#483d8b',
					'galaxy-violet': '#6b46c1',
					'stardust-teal': '#38b2ac',
					'nova-orange': '#ed8936',
					'cosmic-black': '#000814'
				}
      },
      backgroundImage: {
        'gradient-cosmic': 'linear-gradient(135deg, #6B46C1 0%, #9B87F5 100%)',
      },
      boxShadow: {
        'cosmic-lg': '0 10px 15px -3px rgba(107, 70, 193, 0.2), 0 4px 6px -2px rgba(107, 70, 193, 0.1)',
      },
      borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'twinkle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.2' }
				},
				'float': {
					'0%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
					'100%': { transform: 'translateY(0px)' }
				},
				'orbit': {
					'0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
					'100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'twinkle': 'twinkle 4s ease-in-out infinite',
				'twinkle-slow': 'twinkle 6s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'orbit': 'orbit 20s linear infinite'
			}
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
