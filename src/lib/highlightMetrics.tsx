import { ReactNode } from "react";

export function highlightMetrics(text: string): ReactNode[] {
  const re = /(~?\d[\d,]*(?:[–-]\d[\d,]*)?\+?%?|\b40%|\b35–40%)/g;
  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;

  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(
      <span className="mh" key={key++}>
        {m[0]}
      </span>,
    );
    last = m.index + m[0].length;
  }

  if (last < text.length) out.push(text.slice(last));
  return out;
}
