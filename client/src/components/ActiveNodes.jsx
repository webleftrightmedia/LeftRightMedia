import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Badge, SectionLabel } from './ui';
import { MapPin } from 'lucide-react';

function NodeCard({ node }) {
  return (
    <div className="bg-concrete-white border border-slate-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
      {/* Image placeholder */}
      <div className="aspect-video bg-ink-light flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
        <span className="text-label-sm text-white/30 z-10">{node.venueType.toUpperCase()}</span>
      </div>

      {/* Info */}
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-headline-sm">{node.venueName}</h3>
            <div className="flex items-center gap-1 mt-1 text-ink-muted">
              <MapPin size={12} />
              <span className="text-body-sm">{node.city}</span>
            </div>
          </div>
          <Badge status={node.status} />
        </div>
      </div>
    </div>
  );
}

export default function ActiveNodes() {
  const [nodes, setNodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScreens = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/screens`);
        if (res.data.success) {
          setNodes(res.data.data);
        }
      } catch (error) {
        console.error('Failed to fetch screens:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchScreens();
  }, []);

  return (
    <section id="active-nodes" className="py-20 lg:py-24">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <SectionLabel>On the Ground</SectionLabel>
            <h2 className="text-headline-lg-mobile lg:text-headline-lg mt-3">
              See where we're already running.
            </h2>
            <p className="text-body-lg text-ink-muted mt-2">
              Real screens in real businesses — not a pitch deck.
            </p>
          </div>
          <div className="flex items-center gap-2 text-label-md text-ink-muted shrink-0">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse-dot" />
            {loading ? '...' : nodes.length} screens online
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array(3).fill(0).map((_, i) => (
                <div key={i} className="bg-concrete-white border border-slate-border rounded-[4px] h-[300px] animate-pulse" />
              ))
            : nodes.map((node) => (
                <NodeCard key={node._id || node.id} node={node} />
              ))}
        </div>
      </Container>
    </section>
  );
}
