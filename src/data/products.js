// Product and category data for Stellar Precision showcase (dummy content)
// Each product has: id, name, price, description, image (placeholder), specs (optional)

export const categories = [
  {
    name: 'Telescopes',
    slug: 'telescopes',
    tagline: 'Reach deeper into the cosmos with optical clarity.',
    description: 'Precision-engineered astronomical telescopes designed for amateurs and seasoned observers seeking crisp, high-contrast celestial views.',
    products: [
  { id: 'tel-01', name: 'Aurora 80 Refractor', price: '$499', image: '/images.jpeg', description: 'Lightweight refractor with multi-coated optics for bright lunar and planetary detail.' },
  { id: 'tel-02', name: 'Nebula 130 Reflector', price: '$649', image: '/images.jpeg', description: 'Wide-field deep-sky reflector with precision parabolic primary.' },
  { id: 'tel-03', name: 'Voyager GoTo 102', price: '$899', image: '/bino.jpg', description: 'Computerized mount with automatic object centering.' },
  { id: 'tel-04', name: 'Stellar Pro 150 APO', price: '$2450', image: '/images.jpeg', description: 'Apochromatic triplet for crisp, color-corrected views.' },
  { id: 'tel-05', name: 'Lunar Scout Tabletop', price: '$289', image: '/bino.jpg', description: 'Portable tabletop scope for outreach and travel.' }
    ]
  },
  {
    name: 'Compasses',
    slug: 'compasses',
    tagline: 'Navigation instruments crafted for reliability.',
    description: 'High‑precision field and maritime compasses calibrated for accuracy and durability in demanding environments.',
    products: [
  { id: 'com-01', name: 'Pathfinder Brass Mk I', price: '$129', image: '/images.jpeg', description: 'Liquid-damped brass compass with luminous markings.' },
  { id: 'com-02', name: 'Auric Survey Pro', price: '$189', image: '/bino.jpg', description: 'Integrated clinometer for gradient and bearing tasks.' },
  { id: 'com-03', name: 'Marine Helm 360', price: '$210', image: '/images.jpeg', description: 'Gimbal-mounted marine compass with night illumination.' },
  { id: 'com-04', name: 'Expedition Lensatic', price: '$95', image: '/bino.jpg', description: 'Rugged lensatic sighting compass for field use.' },
  { id: 'com-05', name: 'Pocket Meridian', price: '$75', image: '/images.jpeg', description: 'Compact everyday carry compass with shock capsule.' }
    ]
  },
  {
    name: 'Sundials',
    slug: 'sundials',
    tagline: 'Timeless solar timekeeping artistry.',
    description: 'Decorative yet functional sundials marrying classical aesthetics with calibrated gnomon geometry.',
    products: [
  { id: 'sun-01', name: 'Garden Equinox Dial', price: '$160', image: '/images.jpeg', description: 'Cast aluminum dial with engraved hour marks.' },
  { id: 'sun-02', name: 'Helios Brass Pedestal', price: '$345', image: '/bino.jpg', description: 'Polished brass sundial with adjustable latitude arc.' },
  { id: 'sun-03', name: 'Analemma Artisan Plate', price: '$220', image: '/images.jpeg', description: 'Analemma curve for seasonal equation-of-time reference.' },
  { id: 'sun-04', name: 'Traveler Folding Dial', price: '$98', image: '/bino.jpg', description: 'Folding sundial with integrated declination compass.' }
    ]
  },
  {
    name: 'Table Clocks',
    slug: 'table-clocks',
    tagline: 'Elegance in mechanical and silent-quartz timing.',
    description: 'Desktop chronometry pieces blending horological precision with refined materials.',
    products: [
  { id: 'clk-01', name: 'Chrono Artisan Walnut', price: '$260', image: '/images.jpeg', description: 'Walnut case with jeweled movement and blued hands.' },
  { id: 'clk-02', name: 'Metron Axis Skeleton', price: '$310', image: '/bino.jpg', description: 'Skeleton clock showcasing precision escapement.' },
  { id: 'clk-03', name: 'QuietLine Quartz Cube', price: '$120', image: '/images.jpeg', description: 'Silent sweep mechanism within a frosted glass cube.' },
  { id: 'clk-04', name: 'Regulus Brass Carriage', price: '$275', image: '/bino.jpg', description: 'Classic carriage clock with beveled glass.' },
  { id: 'clk-05', name: 'Orbit Halo LED', price: '$140', image: '/images.jpeg', description: 'Ambient halo light with adaptive brightness.' }
    ]
  },
  {
    name: 'Walking Sticks',
    slug: 'walking-sticks',
    tagline: 'Balance, support, and crafted refinement.',
    description: 'Heritage walking sticks engineered for ergonomic comfort and collectible charm.',
    products: [
  { id: 'wlk-01', name: 'Voyager Collapsible Carbon', price: '$95', image: '/images.jpeg', description: 'Lightweight carbon shaft with ergonomic cork grip.' },
  { id: 'wlk-02', name: 'Heritage Maple Cane', price: '$130', image: '/bino.jpg', description: 'Hand-turned maple with brass ferrule.' },
  { id: 'wlk-03', name: 'Navigator Compass Handle', price: '$155', image: '/images.jpeg', description: 'Walking stick with integrated compass cap.' },
  { id: 'wlk-04', name: 'Trail Dual Shock', price: '$110', image: '/bino.jpg', description: 'Adjustable trekking stick with shock absorption.' }
    ]
  },
  {
    name: 'Binoculars',
    slug: 'binoculars',
    tagline: 'Crisp magnification for field, sea, and sky.',
    description: 'Optically optimized binocular systems delivering brightness and edge fidelity.',
    products: [
  { id: 'bin-01', name: 'Horizon 8x42 HD', price: '$225', image: '/images.jpeg', description: 'Phase-corrected prisms and fully multi-coated lenses.' },
  { id: 'bin-02', name: 'Aero 10x50 Marine', price: '$295', image: '/bino.jpg', description: 'Waterproof, nitrogen-purged body for marine use.' },
  { id: 'bin-03', name: 'Luma Pocket 6x18', price: '$80', image: '/images.jpeg', description: 'Compact pocket binocular with bright field.' },
  { id: 'bin-04', name: 'StarView 15x70 Astro', price: '$340', image: '/bino.jpg', description: 'Large-aperture astro binocular for wide fields.' }
    ]
  }
];

export function getCategory(slug) {
  return categories.find(c => c.slug === slug);
}
