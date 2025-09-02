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
  { id: 'tel-02', name: 'Nebula 130 Reflector', price: '$649', image: '/bino.jpg', description: 'Wide-field deep sky viewing with precision parabolic primary mirror.' },
  { id: 'tel-03', name: 'Voyager GoTo 102', price: '$899', image: '/images.jpeg', description: 'Computerized tracking mount automatically centers thousands of catalog objects.' },
  { id: 'tel-04', name: 'Stellar Pro 150 APO', price: '$2,450', image: '/bino.jpg', description: 'Apochromatic triplet refractor delivering razor‑sharp edge‑to‑edge performance.' },
  { id: 'tel-05', name: 'Lunar Scout Tabletop', price: '$289', image: '/bino.jpg', description: 'Ultra portable tabletop scope ideal for educational outreach and travel.' }
    ]
  },
  {
    name: 'Compasses',
    slug: 'compasses',
    tagline: 'Navigation instruments crafted for reliability.',
    description: 'High‑precision field and maritime compasses calibrated for accuracy and durability in demanding environments.',
    products: [
  { id: 'com-01', name: 'Pathfinder Brass Mk I', price: '$129', image: '/bino.jpg', description: 'Solid brass liquid‑damped compass with luminous cardinal points.' },
  { id: 'com-02', name: 'Auric Survey Pro', price: '$189', image: '/bino.jpg', description: 'Clinometer integrated for rapid gradient and bearing measurements.' },
  { id: 'com-03', name: 'Marine Helm 360', price: '$210', image: '/bino.jpg', description: 'Gimbal mounted marine compass with anti‑glare dome and night illumination.' },
  { id: 'com-04', name: 'Expedition Lensatic', price: '$95', image: '/images.jpeg', description: 'Rugged lensatic design with sighting wire for precise azimuth readings.' },
  { id: 'com-05', name: 'Pocket Meridian', price: '$75', image: '/bino.jpg', description: 'Slim everyday carry compass with shock‑resistant capsule.' }
    ]
  },
  {
    name: 'Sundials',
    slug: 'sundials',
    tagline: 'Timeless solar timekeeping artistry.',
    description: 'Decorative yet functional sundials marrying classical aesthetics with calibrated gnomon geometry.',
    products: [
  { id: 'sun-01', name: 'Garden Equinox Dial', price: '$160', image: '/bino.jpg', description: 'Cast aluminum dial with azimuth ring and precision engraved hour marks.' },
  { id: 'sun-02', name: 'Helios Brass Pedestal', price: '$345', image: '/images.jpeg', description: 'Hand-polished brass sundial with adjustable latitude arc.' },
  { id: 'sun-03', name: 'Analemma Artisan Plate', price: '$220', image: '/bino.jpg', description: 'Features analemma curve for equation‑of‑time seasonal correction reference.' },
  { id: 'sun-04', name: 'Traveler Folding Dial', price: '$98', image: '/images.jpeg', description: 'Portable folding sundial with integrated magnetic declination compass.' }
    ]
  },
  {
    name: 'Table Clocks',
    slug: 'table-clocks',
    tagline: 'Elegance in mechanical and silent-quartz timing.',
    description: 'Desktop chronometry pieces blending horological precision with refined materials.',
    products: [
  { id: 'clk-01', name: 'Chrono Artisan Walnut', price: '$260', image: '/bino.jpg', description: 'Walnut enclosure with jeweled movement and blued hands.' },
  { id: 'clk-02', name: 'Metron Axis Skeleton', price: '$310', image: '/images.jpeg', description: 'Open gear skeleton clock showcasing precision escapement.' },
  { id: 'clk-03', name: 'QuietLine Quartz Cube', price: '$120', image: '/bino.jpg', description: 'Ultra silent sweep second mechanism within frosted glass cube.' },
  { id: 'clk-04', name: 'Regulus Brass Carriage', price: '$275', image: '/images.jpeg', description: 'Classic carriage clock with beveled glass panels and key wind.' },
  { id: 'clk-05', name: 'Orbit Halo LED', price: '$140', image: '/bino.jpg', description: 'Ambient halo illumination with adaptive brightness control.' }
    ]
  },
  {
    name: 'Walking Sticks',
    slug: 'walking-sticks',
    tagline: 'Balance, support, and crafted refinement.',
    description: 'Heritage walking sticks engineered for ergonomic comfort and collectible charm.',
    products: [
  { id: 'wlk-01', name: 'Voyager Collapsible Carbon', price: '$95', image: '/bino.jpg', description: 'Featherweight carbon fiber shaft with cork contour grip.' },
  { id: 'wlk-02', name: 'Heritage Maple Cane', price: '$130', image: '/images.jpeg', description: 'Hand-turned maple with oil finish and brass ferrule.' },
  { id: 'wlk-03', name: 'Navigator Compass Handle', price: '$155', image: '/bino.jpg', description: 'Integrated liquid compass cap for orientation on trails.' },
  { id: 'wlk-04', name: 'Trail Dual Shock', price: '$110', image: '/bino.jpg', description: 'Adjustable trekking pair with dual shock absorbers for impact damping.' }
    ]
  },
  {
    name: 'Binoculars',
    slug: 'binoculars',
    tagline: 'Crisp magnification for field, sea, and sky.',
    description: 'Optically optimized binocular systems delivering brightness and edge fidelity.',
    products: [
  { id: 'bin-01', name: 'Horizon 8x42 HD', price: '$225', image: '/bino.jpg', description: 'Phase‑corrected prisms and fully multi‑coated lenses for vivid contrast.' },
  { id: 'bin-02', name: 'Aero 10x50 Marine', price: '$295', image: '/images.jpeg', description: 'Waterproof nitrogen‑purged body with floating neck strap.' },
  { id: 'bin-03', name: 'Luma Pocket 6x18', price: '$80', image: '/bino.jpg', description: 'Ultra compact pocket binocular with surprisingly bright field.' },
  { id: 'bin-04', name: 'StarView 15x70 Astro', price: '$340', image: '/images.jpeg', description: 'Large aperture astro binocular for wide field Milky Way sweeping.' }
    ]
  }
];

export function getCategory(slug) {
  return categories.find(c => c.slug === slug);
}
