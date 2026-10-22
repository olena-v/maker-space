# Maker Space

A website for a community makerspace where young designers, students and makers can book time on professional equipment, learn how to use it, and get inspired by finished projects.

The goal is to help creative people who have strong ideas but no access to expensive tools turn those ideas into real products.

**Live demo:** https://olena-v.github.io/maker-space/

## Credits

- **Design:** Olena Voroniuk (UX research, persona, layout, illustrations style)
- **Code:** built with [Claude](https://claude.ai) by Anthropic, based on Olena's design

## Features

- **How it works.** Four steps (Browse Calendar → Book Your Time → Check In → Get to Work) shown as an animated path with dashed arrows.
- **Materials & Tools.** Five workshops: 3D printers, screen printing, laser cutters, wood and metal. Each one lists what you can make, required training, materials, cost, and links to tutorials.
- **Guides.** Shop safety rules and step-by-step resources for every machine.
- **Projects gallery.** Example projects you can filter by workshop, with time, material cost and build steps.
- **Booking.** Pick a workshop, a date, and up to four 30-minute slots. A "BOOKED" stamp confirms the reservation, and you can cancel from "My bookings".
- **Light and dark themes** with a manual switch.
- **Responsive layout** for phone, tablet and desktop.
- **Subtle motion.** Bobbing illustrations, twinkling sparkles and sections that fade in on scroll. All animation turns off when the system's reduced-motion setting is on, or with the pause button in the header.
- **Accessibility (WCAG 2.2 AA).** Text and controls meet contrast minimums in both themes (white on green 4.7:1, focus ring 14.8:1 in light mode), every view has its own `h1` and page title, focus moves to the new view on navigation, Tab follows the visual order and skips the decorative step icons, every workshop button is reachable with Tab and announces which one is open (Space or Enter moves focus into that workshop's card), form errors are announced and linked to their fields, and the layout reflows at 320px without horizontal scrolling. Checked with axe-core.

## Tech

Plain HTML, CSS and JavaScript, with no frameworks, dependencies or build step. All illustrations are inline SVG. Fonts are Space Mono and DM Sans from Google Fonts.

## Getting started

Clone the repository and open `index.html` in a browser:

```bash
git clone https://github.com/olena-v/maker-space.git
cd maker-space
open index.html
```

To publish it, upload the folder to any static host such as GitHub Pages, Netlify or Vercel.

## Project structure

```
├── index.html      # page markup; sections switch via #home, #tools, #guides, #projects, #book
├── favicon.svg     # tab icon: the gear logo (PNG copies for older browsers and iPhone home screens)
├── css/style.css   # styles, themes, responsive rules, animations
└── js/app.js       # illustrations, workshop and project data, booking logic, effects
```

## Customizing

- **Workshops, prices, tutorial links:** the `TOOLS` array in `js/app.js`
- **Example projects:** the `PROJECTS` array in `js/app.js`
- **Opening hours:** the `TIMES` array in `js/app.js` and the footer in `index.html`
- **Colors:** CSS variables at the top of `css/style.css`

## Limitations

Bookings are saved in each visitor's browser (localStorage), so visitors don't see each other's reservations. A shared schedule needs a backend such as Firebase or Supabase.
