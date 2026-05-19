export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-slate-600">
          &copy; {new Date().getFullYear()} Tirth Shah
        </p>
      </div>
    </footer>
  );
}
