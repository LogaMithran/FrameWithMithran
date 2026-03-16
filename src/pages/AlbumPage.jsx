import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { albums } from "../utils/album.js";

export default function AlbumPage() {
  const { albumId } = useParams();
  const album = albums.find((a) => a.id === albumId);

  const [activeIndex, setActiveIndex] = useState(null);

  if (!album) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100">
        <p className="text-slate-600 mb-4 text-sm">
          Album not found.
        </p>
        <Link
          to="/"
          className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
        >
          Go back to albums
        </Link>
      </div>
    );
  }

  const openLightbox = (index) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero header with blurred background */}
      <div className="relative h-52 sm:h-64 overflow-hidden">
        <img
          src={`${album.path}/${album.thumb}`}
          alt={album.name}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/40" />

        <header className="relative z-10 max-w-6xl mx-auto px-4 pt-6 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-xs font-medium text-slate-200/80 hover:text-white"
          >
            <span>←</span>
            <span>Back to albums</span>
          </Link>
        </header>

        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-8 pb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold drop-shadow">
              {album.name}
            </h1>
            <p className="mt-1 text-xs text-slate-200/80">
              {album.images.length} photos
            </p>
          </div>
        </div>
      </div>

      {/* Images grid */}
      <main className="max-w-6xl mx-auto px-2 sm:px-4 pb-10 -mt-6 relative z-20">
        <div className="rounded-3xl bg-slate-900/80 backdrop-blur shadow-xl p-3 sm:p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
            {album.images.map((img, index) => (
              <button
                key={img}
                type="button"
                onClick={() => openLightbox(index)}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-800"
              >
                <img
                  src={`${album.path}/${img}`}
                  alt={album.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/80"
          onClick={closeLightbox}
        >
          <img
            src={`${album.path}/${album.images[activeIndex]}`}
            alt={album.name}
            className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
