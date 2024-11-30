import React from 'react';
import { livestreams } from '../data/livestreams';
import LivestreamCard from '../components/LivestreamCard';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const LivestreamsPage = () => {
  const ongoingStreams = livestreams.filter(stream => stream.status === 'live');
  const upcomingStreams = livestreams.filter(stream => stream.status === 'upcoming');
  const laterStreams = livestreams.filter(stream => stream.status === 'later');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Livestreams</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Ongoing Livestreams</h2>
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
          {ongoingStreams.map(stream => (
            <div key={stream.id}>
              <LivestreamCard livestream={stream} />
            </div>
          ))}
        </Carousel>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Livestreams</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingStreams.map(stream => (
            <LivestreamCard key={stream.id} livestream={stream} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Later Scheduled Livestreams</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {laterStreams.map(stream => (
            <LivestreamCard key={stream.id} livestream={stream} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LivestreamsPage;

