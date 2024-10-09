import { ReactNode } from "react";

export function ListInfo({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-2">
      <p className="w-28 flex-shrink-0">{title}:</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}
