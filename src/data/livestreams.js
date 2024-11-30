export const livestreams = [
  {
    id: 1,
    title: "Summer Vibes Concert",
    subtitle: "Live from the Beach",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
    status: "live",
    startTime: new Date(Date.now() + 1000 * 60 * 30).toISOString(), // 30 minutes from now
  },
  {
    id: 2,
    title: "Acoustic Session",
    subtitle: "Unplugged and Personal",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    status: "live",
    startTime: new Date(Date.now() + 1000 * 60 * 60).toISOString(), // 1 hour from now
  },
  {
    id: 3,
    title: "Rock Night",
    subtitle: "Bringing the House Down",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
    status: "upcoming",
    startTime: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(), // 1 day from now
  },
  {
    id: 4,
    title: "Jazz in the Park",
    subtitle: "Smooth Tunes Under the Stars",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae",
    status: "upcoming",
    startTime: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3).toISOString(), // 3 days from now
  },
  {
    id: 5,
    title: "EDM Extravaganza",
    subtitle: "Beats All Night Long",
    image: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1",
    status: "upcoming",
    startTime: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5).toISOString(), // 5 days from now
  },
  {
    id: 6,
    title: "Classical Symphony",
    subtitle: "A Night of Timeless Melodies",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6",
    status: "later",
    startTime: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10).toISOString(), // 10 days from now
  },
  {
    id: 7,
    title: "Hip Hop Showcase",
    subtitle: "Rhymes and Beats",
    image: "https://images.unsplash.com/photo-1547741538-4c3a0e6dfb79",
    status: "later",
    startTime: new Date(Date.now() + 1000 * 60 * 60 * 24 * 15).toISOString(), // 15 days from now
  },
];

