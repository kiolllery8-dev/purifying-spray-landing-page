import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="w-full max-w-lg mx-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl p-10 text-center">
        <h1 className="text-5xl font-bold text-amber-400 mb-2">404</h1>
        <h2 className="text-xl font-semibold text-slate-200 mb-4">Page Not Found</h2>
        <p className="text-slate-400 mb-8 leading-relaxed">
          找不到這個頁面，可能已被移動或刪除。
        </p>
        <Link
          href="/"
          className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
        >
          回首頁
        </Link>
      </div>
    </div>
  );
}
