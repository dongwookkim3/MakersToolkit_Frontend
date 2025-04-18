
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
        // 새로운 프라이머리 컬러 팔레트 추가
        cosmic: {
          'primary': '#6B46C1',       /* 깊은 보라 */
          'secondary': '#9B87F5',     /* 부드러운 라벤더 */
          'accent': '#38B2AC',        /* 청록색 */
          'background': '#F7FAFC',    /* 밝은 회색 배경 */
          'text': '#1A202C',          /* 어두운 회색 텍스트 */
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
      // 추가 테마 확장
      backgroundImage: {
        'gradient-cosmic': 'linear-gradient(135deg, #6B46C1 0%, #9B87F5 100%)',
      },
      boxShadow: {
        'cosmic-lg': '0 10px 15px -3px rgba(107, 70, 193, 0.2), 0 4px 6px -2px rgba(107, 70, 193, 0.1)',
      },
      // 다른 키프레임과 애니메이션 유지
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
