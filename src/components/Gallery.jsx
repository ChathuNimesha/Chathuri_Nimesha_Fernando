import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, ZoomIn, Calendar, Compass, Camera, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import './Gallery.css';


const destinations = [
  {
    id: 'kabaragala',
    name: 'Kabaragala',
    coordinates: { x: 46, y: 60 },
    date: 'September 2025',
    story: 'Conquering the highest peak in the Dolosbage mountain range. Trekking through lush green tea estates and peaceful pine forests to stand at the breathtaking cliff edge overlooking a blanket of clouds.',
    highlights: ['Tea estate trekking', 'Pine forest trail', "Kabaragala World's End view"],
    category: 'Hiking',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ella',
    name: 'Ella',
    coordinates: { x: 55, y: 70 },
    date: 'August 2025',
    story: 'Waking up to the mist rolling over Ella Rock and walking along the historic Nine Arch Bridge. A sanctuary of endless green valleys and cool mountain breezes.',
    highlights: ['Nine Arch Bridge hike', 'Ella Rock climb', 'Diyaluma Falls bath'],
    category: 'Mountains',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sigiriya',
    name: 'Sigiriya',
    coordinates: { x: 50, y: 40 },
    date: 'May 2025',
    story: 'Conquering the ancient Lion Rock fortress at sunrise. Standing atop this colossal column of rock, surrounded by the ruins of a palace and lush forest canopy.',
    highlights: ['Climbing Lion Rock', 'Pidurangala sunrise', 'Ancient frescoes'],
    category: 'Cultural places',
    image: 'https://images.unsplash.com/photo-1588598126715-d91f24d7732a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'nuwara-eliya',
    name: 'Nuwara Eliya',
    coordinates: { x: 50, y: 62 },
    date: 'December 2025',
    story: 'Known as Little England, Nuwara Eliya welcomed us with colonial charm, expansive green tea estates, and chilly evenings sitting by a cozy log fire.',
    highlights: ['Gregory Lake boating', 'Tea factory tasting', 'Post office architecture'],
    category: 'Hiking',
    image: 'https://images.unsplash.com/photo-1563189336-1e63a1fb49de?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mirissa',
    name: 'Mirissa',
    coordinates: { x: 42, y: 92 },
    date: 'March 2026',
    story: 'Gold sand, crashing turquoise surf, and coconut trees. Spent our evenings at Coconut Tree Hill watching the sunset wash over the Indian Ocean.',
    highlights: ['Coconut Tree Hill sunset', 'Whale watching', 'Secret Beach snorkeling'],
    category: 'Beaches',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'horton-plains',
    name: 'Horton Plains',
    coordinates: { x: 48, y: 68 },
    date: 'October 2025',
    story: 'A silent, wind-swept plateau. The walk leads to World\'s End, a sheer precipice with a drop of over 800 meters offering panoramic views of the southern plains.',
    highlights: ["World's End precipice", 'Baker\'s Falls hike', 'Cloud forest biodiversity'],
    category: 'Camping',
    image: 'https://images.unsplash.com/photo-1627050414349-f027fc691238?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sinharaja',
    name: 'Sinharaja Forest',
    coordinates: { x: 38, y: 80 },
    date: 'February 2026',
    story: 'Stepping into Sri Lanka\'s last viable primary tropical rainforest. The sounds of endemic bird flocks, rushing streams, and towering green canopy create a living symphony.',
    highlights: ['Endemic bird watching', 'Rainforest canopy walk', 'Natural pool swimming'],
    category: 'Forests',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'adams-peak',
    name: 'Adam\'s Peak',
    coordinates: { x: 40, y: 66 },
    date: 'January 2026',
    story: 'Ascending 5,500 stone steps in the dead of night. Reaching the sacred summit just as the sun broke through the clouds, casting the famous triangular shadow across the plains.',
    highlights: ['Night climbing trail', 'Sunrise cloud sea', 'Sacred footprint temple'],
    category: 'Nature photography',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800'
  }
];

const rawGalleryImages = import.meta.glob('../assets/Images/Gallery/*.{jpeg,jpg,png,webp}', { eager: true, import: 'default' });

const getEventCategory = (filename) => {
  const name = filename.toLowerCase();
  if (name.includes('beach cleanup')) return 'Beach Cleanup';
  if (name.includes('earth summit')) return 'Earth Summit';
  if (name.includes('environmental day')) return 'Environmental Day';
  if (name.includes('me&nature')) return 'Me & Nature';
  if (name.includes('medi')) return 'Medical Camp';
  if (name.includes('sports')) return 'Sports';
  if (name.includes('yoga')) return 'Yoga';
  return 'Events';
};

const eventPhotos = Object.entries(rawGalleryImages).map(([path, url]) => {
  const filename = path.split('/').pop().split('.')[0];
  return { url, title: filename, cat: getEventCategory(filename) };
});

const initialGalleryPhotos = [
  { url: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&q=80&w=800', title: 'Ella Nine Arch Bridge', cat: 'Mountains' },
  { url: 'https://images.unsplash.com/photo-1588598126715-d91f24d7732a?auto=format&fit=crop&q=80&w=800', title: 'Sigiriya Rock Fortress', cat: 'Cultural places' },
  { url: 'https://images.unsplash.com/photo-1563189336-1e63a1fb49de?auto=format&fit=crop&q=80&w=800', title: 'Nuwara Eliya Tea Gardens', cat: 'Hiking' },
  { url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800', title: 'Mirissa Palm Hills', cat: 'Beaches' },
  { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800', title: 'Sunny Southern Beaches', cat: 'Beaches' },
  { url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800', title: 'Sinharaja Jungle Trail', cat: 'Forests' },
  { url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800', title: 'Adam\'s Peak Summit Mist', cat: 'Nature photography' },
  { url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800', title: 'Forest Camping Site', cat: 'Camping' },
  { url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=800', title: 'Waterfall Drone View', cat: 'Nature photography' }
];

const allPhotos = [...initialGalleryPhotos, ...eventPhotos];

export default function Gallery() {
  const [selectedDest, setSelectedDest] = useState(destinations[0]);
  const [openGroup, setOpenGroup] = useState(null);   // { name, photos[] }
  const [lightboxIdx, setLightboxIdx] = useState(null);

  // Build grouped albums
  const albums = useMemo(() => {
    const map = {};
    allPhotos.forEach(p => {
      if (!map[p.cat]) map[p.cat] = { name: p.cat, photos: [] };
      map[p.cat].photos.push(p);
    });
    return Object.values(map);
  }, []);

  const openLightbox = (idx) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prevPhoto = (e) => { e.stopPropagation(); setLightboxIdx(i => (i - 1 + openGroup.photos.length) % openGroup.photos.length); };
  const nextPhoto = (e) => { e.stopPropagation(); setLightboxIdx(i => (i + 1) % openGroup.photos.length); };

  return (
    <section className="gallery-section" id="gallery">
      <div className="section-container">
        <div className="gallery-header">
          <span className="section-subtitle">Excursions &amp; Travel logs</span>
          <h2 className="section-title">Adventures &amp; Photography</h2>
          <div className="title-bar"></div>
        </div>

        {/* Map & Diary interactive layout */}
        <div className="interactive-adventure-container glass-panel">
          <div className="map-column">
            <h3 className="column-title"><Compass size={18} /> Travel Map — Sri Lanka</h3>
            <p className="column-desc">Select pins to view travel diaries and adventure highlights.</p>
            <div className="map-canvas-container">
              <svg viewBox="0 0 100 100" className="sri-lanka-svg">
                <path d="M50,15 C55,17 58,22 60,28 C62,35 65,42 62,50 C59,58 57,66 54,74 C51,82 48,90 40,94 C38,91 36,87 35,84 C34,79 38,75 37,70 C36,65 30,62 31,56 C32,50 37,45 36,38 C35,31 38,25 42,20 Z" className="map-island-path" />
                <polyline points="50,40 46,60 50,62 40,66 48,68 55,70 38,80 42,92" className="map-route-line" />
                {destinations.map((dest) => (
                  <g key={dest.id} className={`map-pin-group ${selectedDest.id === dest.id ? 'active' : ''}`} onClick={() => setSelectedDest(dest)}>
                    <circle cx={dest.coordinates.x} cy={dest.coordinates.y} r="4" className="pin-pulse-circle" />
                    <circle cx={dest.coordinates.x} cy={dest.coordinates.y} r="2" className="pin-core-circle" />
                    <text x={dest.coordinates.x} y={dest.coordinates.y - 5} className="pin-text-label">{dest.name}</text>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          <div className="diary-column">
            <AnimatePresence mode="wait">
              <motion.div key={selectedDest.id} className="diary-content" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}>
                <div className="diary-hero-image" style={{ backgroundImage: `url(${selectedDest.image})` }}>
                  <div className="diary-image-overlay">
                    <span className="diary-badge">{selectedDest.category}</span>
                  </div>
                </div>
                <div className="diary-details">
                  <div className="diary-meta">
                    <h3 className="diary-dest-title">{selectedDest.name}</h3>
                    <span className="diary-date"><Calendar size={14} /> {selectedDest.date}</span>
                  </div>
                  <p className="diary-story">{selectedDest.story}</p>
                  <div className="diary-highlights-section">
                    <h4>Adventure Highlights</h4>
                    <ul className="diary-highlights-list">
                      {selectedDest.highlights.map((hl, idx) => (
                        <li key={idx}><MapPin size={12} className="gold" /><span>{hl}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Album Groups ─────────────────────── */}
        <div className="album-section">
          <h3 className="gallery-section-heading"><Camera size={20} /> Captured Moments</h3>
          <p className="album-section-desc">Click any album to view all photos in that group.</p>

          <div className="album-grid">
            {albums.map((album, ai) => (
              <motion.div
                key={album.name}
                className="album-card glass-panel"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ai * 0.07, duration: 0.5 }}
                whileHover={{ y: -6 }}
                onClick={() => { setOpenGroup(album); setLightboxIdx(null); }}
              >
                {/* Preview strip — up to 3 images */}
                <div className="album-preview-strip">
                  {album.photos.slice(0, 3).map((p, pi) => (
                    <div key={pi} className="album-preview-img" style={{ backgroundImage: `url(${p.url})` }} />
                  ))}
                  {album.photos.length > 3 && (
                    <div className="album-preview-more">+{album.photos.length - 3}</div>
                  )}
                </div>

                <div className="album-card-footer">
                  <div>
                    <h4 className="album-card-name">{album.name}</h4>
                    <span className="album-card-count"><Images size={13} /> {album.photos.length} photo{album.photos.length !== 1 ? 's' : ''}</span>
                  </div>
                  <span className="album-card-open">View all →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Group Modal ───────────────────────── */}
      <AnimatePresence>
        {openGroup && (
          <motion.div
            className="group-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => { setOpenGroup(null); setLightboxIdx(null); }}
          >
            <motion.div
              className="group-modal glass-panel"
              initial={{ scale: 0.92, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 30 }}
              transition={{ duration: 0.35 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="group-modal-header">
                <div>
                  <h3 className="group-modal-title">{openGroup.name}</h3>
                  <span className="group-modal-count">{openGroup.photos.length} photos</span>
                </div>
                <button className="group-modal-close" onClick={() => { setOpenGroup(null); setLightboxIdx(null); }}>
                  <X size={24} />
                </button>
              </div>

              {/* Photo grid inside modal */}
              <div className="group-modal-grid">
                {openGroup.photos.map((photo, idx) => (
                  <motion.div
                    key={idx}
                    className="group-modal-thumb"
                    whileHover={{ scale: 1.03 }}
                    onClick={() => openLightbox(idx)}
                  >
                    <img src={photo.url} alt={photo.title} />
                    <div className="group-modal-thumb-overlay">
                      <ZoomIn size={20} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Full Lightbox ─────────────────────── */}
      <AnimatePresence>
        {openGroup && lightboxIdx !== null && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="lightbox-close-btn" onClick={closeLightbox}><X size={32} /></button>
            <button className="lightbox-nav-btn left" onClick={prevPhoto}><ChevronLeft size={36} /></button>
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={openGroup.photos[lightboxIdx].url}
                alt={openGroup.photos[lightboxIdx].title}
                className="lightbox-large-image"
              />
              <div className="lightbox-caption">
                <span className="lightbox-cat">{openGroup.name}</span>
                <p className="lightbox-counter">{lightboxIdx + 1} / {openGroup.photos.length}</p>
              </div>
            </motion.div>
            <button className="lightbox-nav-btn right" onClick={nextPhoto}><ChevronRight size={36} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}



