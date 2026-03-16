export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Tirth Shah
        </p>
      </div>
    </footer>
  );
}
