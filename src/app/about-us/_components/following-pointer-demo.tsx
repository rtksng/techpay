import Image from "next/image";

import { FollowerPointerCard } from "@/components/ui/following-pointer";

type Leader = {
  name: string;
  title: string;
  image?: string;
};

const portraitImages = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80",
];

const accents = [
  "from-techpay-primary via-sky-300 to-transparent",
  "from-techpay-orange via-amber-300 to-transparent",
  "from-techpay-purple via-fuchsia-300 to-transparent",
];

export default function FollowingPointerDemo({
  leaders,
}: {
  leaders: Leader[];
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {leaders.map((leader, index) => {
        return (
          <FollowerPointerCard
            key={leader.name}
            className="h-full"
            title={
              <TitleComponent
                title={leader.name}
              />
            }
          >
            <article className="group relative flex h-full flex-col overflow-hidden  border border-slate-200 bg-white shadow-[0_20px_45px_rgba(15,23,42,0.08)] transition duration-300">
              <div className="flex h-full flex-col p-3">
                <div className="relative mb-5 flex aspect-16/11 w-full items-center justify-center overflow-hidden  border border-slate-200 bg-slate-50">
                  <div className="absolute inset-0 bg-linear-to-br from-slate-100 via-white to-slate-100" />
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${
                      accents[index % accents.length]
                    } opacity-10`}
                    aria-hidden="true"
                  />
                  <div className="relative h-full w-full">
                    <Image
                      src={leader.image ?? portraitImages[index % portraitImages.length]}
                      alt={`${leader.name} portrait`}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-slate-950 font-display text-[1rem] font-bold text-white shadow-[0_12px_30px_rgba(15,23,42,0.18)]">
                    {getInitials(leader.name)}
                  </div>

                  <div className="min-w-0">
                    <h2 className="text-[1.2rem] font-semibold tracking-[-0.02em] text-slate-950">
                      {leader.name}
                    </h2>
                    <p className="mt-1 text-[0.95rem] leading-[1.55] text-slate-600">
                      {leader.title}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </FollowerPointerCard>
        );
      })}
    </div>
  );
}

function TitleComponent({
  title,
}: {
  title: string;
}) {
  return (
    <div className="flex items-center gap-2 text-white px-3">
      {/* <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/50 bg-white/15 text-[0.65rem] font-semibold">
        {initials}
      </div> */}
      <div className="leading-tight">
        <p className="text-sm font-semibold">{title}</p>
        {/* <p className="text-[0.7rem] text-white/80">{subtitle}</p> */}
      </div>
    </div>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
