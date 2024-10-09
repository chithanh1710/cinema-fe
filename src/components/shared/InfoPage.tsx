import { MovieDetails } from "@/types/DatabaseType";
import { ButtonLink } from "../Button/ButtonLink";
import { ListInfo } from "./ListInfo";

export function InfoPage({
  className,
  detail,
}: {
  className?: string;
  detail: MovieDetails;
}) {
  return (
    <div className={`space-y-2 ${className}`}>
      <ListInfo title="Nhà sản xuất">
        <span className="text-black">{detail.director.name}</span>
      </ListInfo>
      <ListInfo title="Thể loại">
        {detail.genres.map((g) => (
          <ButtonLink key={g.id} href={`genres/${g.id}`} name={g.name} />
        ))}
      </ListInfo>
      <ListInfo title="Đạo diễn">
        <ButtonLink
          href={`actors/${detail.director.id}`}
          name={detail.director.name}
        />
      </ListInfo>
      <ListInfo title="Diễn viên">
        {detail.actors.map((a) => (
          <ButtonLink key={a.id} href={`actors/${a.id}`} name={a.name} />
        ))}
      </ListInfo>
    </div>
  );
}
