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

        {/* Contact info — larger fonts for accessibility */}
        <div className="mt-10 pt-8 border-t border-white/10 space-y-2 text-slate-300 text-left">
          <p className="text-base md:text-lg">
            <span className="text-slate-400">公司｜</span>
            <span className="font-medium">舒園國際開發有限公司</span>
          </p>
          <p className="text-base md:text-lg">
            <span className="text-slate-400">📞 可打電話來訂購｜</span>
            <a
              href="tel:+886422752009"
              className="font-semibold text-amber-400 hover:text-amber-300 tabular-nums tracking-wide"
            >
              04-2275-2009
            </a>
          </p>
          <p className="text-base md:text-lg">
            <span className="text-slate-400">地址｜</span>
            <span className="font-medium">台中市太平區精美路 122 號</span>
          </p>
        </div>
      </div>
    </div>
  );
}
