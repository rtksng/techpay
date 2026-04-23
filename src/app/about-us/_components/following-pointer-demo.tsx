import Image from "next/image";
import { IconBrandLinkedin } from "@tabler/icons-react";

import { FollowerPointerCard } from "@/components/ui/following-pointer";

type Leader = {
  name: string;
  title: string;
  image?: string;
  linkedinUrl: string;
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

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function resolveImageSrc(src: string) {
  return src.startsWith("/") ? `${publicBasePath}${src}` : src;
}

export default function FollowingPointerDemo({
  leaders,
}: {
  leaders: Leader[];
}) {
  return (
    <div className="grid gap-5  md:grid-cols-2 xl:grid-cols-3">
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
            <article className="group relative flex h-full flex-col overflow-hidden border border-slate-200 bg-white shadow-[0_20px_45px_rgba(15,23,42,0.08)] transition duration-300">
              <div className="flex h-full items-center gap-4 p-4 md:gap-5 md:p-5">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-slate-50 md:h-28 md:w-28">
                  <div className="absolute inset-0 bg-linear-to-br from-slate-100 via-white to-slate-100" />
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${
                      accents[index % accents.length]
                    } opacity-10`}
                    aria-hidden="true"
                  />
                  <div className="relative h-full w-full">
                    <Image
                      src={resolveImageSrc(
                        leader.image ?? portraitImages[index % portraitImages.length]
                      )}
                      alt={`${leader.name} portrait`}
                      fill
                      quality={95}
                      sizes="(min-width: 768px) 112px, 96px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="min-w-0">
                  <h2 className="text-[1.08rem] font-semibold tracking-[-0.02em] text-slate-950 md:text-[1.16rem]">
                    {leader.name}
                  </h2>
                  <p className="mt-1 text-[0.9rem] leading-[1.5] text-slate-600 md:text-[0.94rem]">
                    {leader.title}
                  </p>
                  <a
                    href={leader.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${leader.name}'s LinkedIn profile`}
                    className="relative z-10 mt-3 inline-flex h-7 items-center gap-1.5 border border-[#0a66c2] bg-[#0a66c2] px-2.5 text-xs font-semibold text-white no-underline shadow-[0_8px_16px_rgba(10,102,194,0.18)] outline-none transition hover:border-[#084f96] hover:bg-[#084f96] focus-visible:ring-2 focus-visible:ring-[#0a66c2] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    <IconBrandLinkedin size={14} stroke={2} aria-hidden="true" />
                    LinkedIn
                  </a>
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

