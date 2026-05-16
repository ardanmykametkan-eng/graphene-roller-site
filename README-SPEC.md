# Graphene Roller — Site Redesign Spec

## Context
Это сайт для продажи графеновых композитных роликов в Центральной Азии.
Текущий сайт: https://graphene.aowei.org

## Requirements
1. **Onion's requests:**
   - Make it complex ("күрделі") — more sections, features, animations
   - Add a chatbot (in-page chat widget)
   - 3D beautiful style (Three.js background with graphene hexagonal pattern)
   - Include product photos (use images from https://ardanmykametkan-eng.github.io/graphene-roller-site/images/)
   - It's for selling — lead capture forms, WhatsApp integration, clear CTAs

2. **Technical style:**
   - Dark theme (current site is dark)
   - Glassmorphism / cyberpunk aesthetic
   - Three.js 3D animated background (graphene hex grid)
   - Scroll-triggered animations
   - 3D tilt effect on product cards
   - Particle effects
   - Progress bar on scroll

3. **Pages/Sections needed:**
   - Hero with animated headline
   - Benefits/Key Advantages grid
   - Product catalog (3 products with images, tags)
   - Technology section
   - Projects showcase
   - About company with stats counters
   - Export service list
   - News section
   - Contact form + contact cards
   - In-page chatbot widget (on the right)
   - Floating WhatsApp button

4. **Multilingual:** RU / EN / KZ (inline i18n in JS object, no backend)
5. **Contact info:** +7 702 265 5423 (WhatsApp, phone)
6. **Bot/chat:** In-browser chatbot with quick questions (prices, delivery, catalog, discounts) and free text input. Replies in the selected language.

## Content
Phone: +7 702 265 5423
Email: info@grapheneroller.com
Telegram: @grapheneroller

Original site source is at /tmp/graphene-original.html — use it for reference on product names and existing content.

## Output
Single file: index.html with all CSS and JS inline. No external dependencies except:
- Three.js from CDN (cdnjs)
- Google Fonts (Inter)

Place in: /home/onion/.openclaw/workspace/graphene-site/index.html
