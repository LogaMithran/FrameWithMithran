import { Link } from "react-router-dom";
import { albums } from "../utils/album.js";

export default function AlbumsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200">
      {/* Top bar */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Photo Albums
          </h1>
          <span className="text-xs rounded-full px-3 py-1 bg-slate-100 text-slate-500">
            {albums.length} albums
          </span>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <p className="text-sm text-slate-600">
            Browse your collections in a clean, responsive grid.
          </p>
        </div>

        {/* Albums grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {albums.map((album) => (
            <Link
              key={album.id}
              to={`/album/${album.id}`}
              className="group relative rounded-2xl bg-white/80 shadow-sm ring-1 ring-slate-200 hover:ring-slate-300 hover:shadow-md transition-all overflow-hidden"
            >
              {/* Thumbnail area */}
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                  <img
                    src={`${album.path}/${album.thumb}`}
                    alt={album.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Photo count chip */}
                <div className="absolute top-2 right-2 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur">
                  {album.images.length} photos
                </div>
              </div>

              {/* Meta section */}
              <div className="px-3.5 py-3 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-900 truncate">
                    {album.name}
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Updated recently
                  </p>
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <span className="text-xs">↗</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
