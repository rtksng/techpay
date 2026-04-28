"use client";

import { type ReactNode, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  CalendarDays,
  CheckCircle2,
  CircleHelp,
  ClipboardList,
  Flame,
  Gem,
  Globe2,
  Heart,
  Image as ImageIcon,
  Lightbulb,
  ListChecks,
  MapPin,
  Medal,
  Megaphone,
  MessageCircle,
  Mic2,
  PlayCircle,
  Radio,
  Repeat2,
  Rocket,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const posts = [
  {
    id: "rajesh-win",
    initials: "RS",
    avatarClass: "bg-techpay-primary",
    author: "Rajesh Singh",
    badge: "Silver Partner",
    detail: "Patna, Bihar - 2 hours ago",
    body: "Just crossed \u20b920,000 in commissions this month. The secret? I started placing my QR code printout on my service desk. Every customer who comes in for repair sees it. Half of them ask about it. Closed 3 sales from repair walk-ins alone this week.",
    tags: ["#tip", "#win"],
    earnings: {
      value: "\u20b920,400",
      label: "this month's earnings",
      detail: "12 devices sold",
    },
    likes: 47,
    comments: "12 Comments",
    liked: true,
  },
  {
    id: "meena-question",
    initials: "MK",
    avatarClass: "bg-techpay-purple",
    author: "Meena Krishnan",
    badge: "Gold Partner",
    detail: "Coimbatore, Tamil Nadu - 5 hours ago",
    body: 'Question for the community - has anyone tried creating a WhatsApp broadcast for their TechPay referrals? I\'m thinking of doing a "Tech Tuesday" where I share one device recommendation every week to my customer list. Anyone done this?',
    tags: ["#question", "#marketing"],
    likes: 23,
    comments: "8 Comments",
    liked: false,
  },
  {
    id: "techpay-webinar",
    initials: "TP",
    avatarClass: "bg-techpay-primary",
    author: "TechPay Team",
    badge: "Official",
    official: true,
    detail: "Yesterday - Pinned",
    body: (
      <>
        <strong className="inline-flex items-center gap-2 text-slate-950">
          <Mic2 aria-hidden="true" className="h-4 w-4 text-techpay-primary" />
          Monthly Partner Webinar - This Saturday, 11 AM IST
        </strong>
        <br />
        <br />
        Topic: &quot;How to convert your repair customers into PC buyers.&quot; Tips on
        using TechPay&apos;s AI recommendations tool, handling EMI objections, and
        doubling your conversion rate. Register via the link below. All
        registered partners get a \u20b9500 bonus for attending.
      </>
    ),
    tags: ["#official", "#training"],
    attending: "312 Attending",
    comments: "24 Comments",
  },
  {
    id: "amit-tip",
    initials: "AV",
    avatarClass: "bg-techpay-pink",
    author: "Amit Verma",
    detail: "Meerut, Uttar Pradesh - Yesterday",
    body: "Tip for T3/T4 city partners: Students are your goldmine. College admission season = laptop buying season. Partner with your local coaching centres or colleges. Put your QR on their notice boards. I got 6 sales from one hostel in Meerut this month alone. Go hyperlocal.",
    tags: ["#tip", "#T3cities", "#students"],
    likes: 89,
    comments: "31 Comments",
    liked: true,
  },
] as const;

const topEarners = [
  { rank: 1, name: "Meena K.", city: "Coimbatore, TN", earn: "\u20b931,200" },
  { rank: 2, name: "Suresh P.", city: "Hyderabad, TS", earn: "\u20b926,800" },
  { rank: 3, name: "Rajesh S.", city: "Patna, BR", earn: "\u20b920,400" },
  { rank: 4, name: "Priya M.", city: "Jaipur, RJ", earn: "\u20b918,750" },
  { rank: 5, name: "Amit V.", city: "Meerut, UP", earn: "\u20b915,900" },
] as const;

const events = [
  {
    date: "Sat, 2 Nov",
    title: "Monthly Partner Webinar",
    type: "Online - 11:00 AM IST",
  },
  {
    date: "Tue, 5 Nov",
    title: "Product Training: New OEM Lineup",
    type: "Online - 6:00 PM IST",
  },
  {
    date: "Sat, 9 Nov",
    title: "Karnataka Partner Meetup",
    type: "Bengaluru - In-person",
  },
  {
    date: "Thu, 14 Nov",
    title: "EMI & Financing Deep Dive",
    type: "Online - 7:00 PM IST",
  },
] as const;

const resources: Array<{
  Icon: LucideIcon;
  title: string;
  desc: string;
  className: string;
}> = [
  {
    Icon: BarChart3,
    title: "Sales Pitch Guide (PDF)",
    desc: "How to present TechPay to customers",
    className: "bg-techpay-primary/10 text-techpay-primary",
  },
  {
    Icon: PlayCircle,
    title: "Demo Video: AI Recommender",
    desc: "Show customers how it works",
    className: "bg-techpay-purple/10 text-techpay-purple",
  },
  {
    Icon: ImageIcon,
    title: "WhatsApp Status Pack",
    desc: "Ready-made creatives for your status",
    className: "bg-techpay-pink/10 text-techpay-pink",
  },
  {
    Icon: ClipboardList,
    title: "Commission Rate Card",
    desc: "Earnings per OEM & device category",
    className: "bg-techpay-primary/10 text-techpay-primary",
  },
  {
    Icon: CircleHelp,
    title: "FAQ for Customers",
    desc: "Answer any question with confidence",
    className: "bg-techpay-purple/10 text-techpay-purple",
  },
];

const achievements: Array<{
  Icon: LucideIcon;
  name: string;
  locked?: boolean;
}> = [
  { Icon: Rocket, name: "First Sale" },
  { Icon: ListChecks, name: "10 Sales" },
  { Icon: Gem, name: "Gold Partner", locked: true },
  { Icon: Globe2, name: "City Champion", locked: true },
  { Icon: Megaphone, name: "Community Star", locked: true },
  { Icon: Building2, name: "10 PIN Codes", locked: true },
];

const tagLabels: Array<{ Icon: LucideIcon; label: string }> = [
  { Icon: Lightbulb, label: "Tip" },
  { Icon: Trophy, label: "Win" },
  { Icon: CircleHelp, label: "Question" },
  { Icon: MapPin, label: "My City" },
];

const rankClassNames: Partial<Record<number, string>> = {
  1: "border-amber-200 bg-amber-100 text-amber-700",
  2: "border-slate-200 bg-slate-100 text-slate-600",
  3: "border-orange-200 bg-orange-100 text-orange-700",
};

export default function AssociateCommunity() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [likes, setLikes] = useState(() =>
    posts.reduce<Record<string, { count: number; liked: boolean }>>((state, post) => {
      if ("likes" in post) {
        state[post.id] = { count: post.likes, liked: post.liked };
      }

      return state;
    }, {})
  );

  function toggleTag(label: string) {
    setSelectedTags((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label]
    );
  }

  function toggleLike(id: string) {
    setLikes((current) => {
      const postLike = current[id];

      if (!postLike) {
        return current;
      }

      return {
        ...current,
        [id]: {
          count: postLike.liked ? postLike.count - 1 : postLike.count + 1,
          liked: !postLike.liked,
        },
      };
    });
  }

  return (
    <section
      id="community"
      className="bg-[#f7f7fb] px-5 pb-20 pt-28 md:px-[60px] md:pb-24 md:pt-36"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
              Associate Retailer Community
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Connect, share, and grow with TechPay partners across India
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 rounded-[22px] border border-slate-200 bg-white p-4 text-center shadow-[0_18px_48px_rgba(15,23,42,0.06)]">
            <CommunityStat label="Members" value="2,847" />
            <CommunityStat label="Cities" value="184" />
            <CommunityStat
              label="Active now"
              value={
                <span className="inline-flex items-center justify-center gap-1.5">
                  <Radio aria-hidden="true" className="h-4 w-4" />
                  Live
                </span>
              }
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <div className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_18px_48px_rgba(15,23,42,0.06)]">
              <div className="flex gap-3">
                <Avatar className="bg-techpay-primary" initials="P" />
                <textarea
                  className="min-h-[72px] flex-1 resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-techpay-primary focus:ring-4 focus:ring-techpay-primary/10"
                  placeholder="Share a win, ask a question, or help a fellow partner..."
                />
              </div>
              <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-wrap gap-2">
                  {tagLabels.map(({ Icon, label }) => {
                    const selected = selectedTags.includes(label);

                    return (
                      <Button
                        key={label}
                        className={`min-h-8 rounded-lg px-3 py-1.5 text-xs ${
                          selected
                            ? "!border-techpay-primary/30 !bg-techpay-primary/10 !text-techpay-primary [&_span]:!text-current"
                            : "!border-slate-200 !bg-white !text-slate-700 hover:!bg-slate-50 [&_span]:!text-current"
                        }`}
                        leftIcon={<Icon aria-hidden="true" className="h-3.5 w-3.5" />}
                        onClick={() => toggleTag(label)}
                        size="compact"
                        type="button"
                        variant="lightIcon"
                      >
                        {label}
                      </Button>
                    );
                  })}
                </div>
                <Button
                  className="!text-white [&_span]:!text-white"
                  rightIcon={<ArrowRight aria-hidden="true" className="h-4 w-4" />}
                  size="compact"
                  type="button"
                  variant="primary"
                >
                  Post
                </Button>
              </div>
            </div>

            <div className="mt-5 grid gap-5">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className={`rounded-[22px] border p-5 shadow-[0_18px_48px_rgba(15,23,42,0.06)] ${
                    "official" in post
                      ? "border-techpay-primary/30 bg-techpay-primary/8"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex gap-3">
                    <Avatar className={post.avatarClass} initials={post.initials} />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-bold text-slate-950">
                          {post.author}
                        </h3>
                        {"badge" in post ? <Badge>{post.badge}</Badge> : null}
                      </div>
                      <p className="mt-1 text-xs text-slate-500">{post.detail}</p>
                    </div>
                  </div>

                  <div className="mt-4 text-sm leading-7 text-slate-700">
                    {post.body}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {"earnings" in post ? (
                    <div className="mt-4 flex items-center gap-3 rounded-2xl border border-techpay-primary/20 bg-techpay-primary/8 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-techpay-primary/10 text-techpay-primary">
                        <Flame aria-hidden="true" className="h-5 w-5" />
                      </div>
                      <p className="text-2xl font-bold text-techpay-primary">
                        {post.earnings.value}
                      </p>
                      <div>
                        <p className="text-xs font-semibold text-techpay-primary">
                          {post.earnings.label}
                        </p>
                        <p className="text-xs text-slate-400">{post.earnings.detail}</p>
                      </div>
                    </div>
                  ) : null}

                  <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-4">
                    {"likes" in post ? (
                      <Button
                        className={`min-h-0 border-0 bg-transparent px-0 py-0 text-sm shadow-none hover:bg-transparent ${
                          likes[post.id]?.liked
                            ? "!text-techpay-primary"
                            : "!text-slate-600 hover:!text-techpay-primary"
                        }`}
                        leftIcon={
                          <Heart
                            aria-hidden="true"
                            className="h-4 w-4"
                            fill={likes[post.id]?.liked ? "currentColor" : "none"}
                          />
                        }
                        onClick={() => toggleLike(post.id)}
                        size="compact"
                        type="button"
                        variant="lightIcon"
                      >
                        <span>{likes[post.id]?.count ?? post.likes}</span> Likes
                      </Button>
                    ) : (
                      <Button
                        className="min-h-0 !border-0 !bg-transparent px-0 py-0 text-sm !text-slate-600 shadow-none hover:!bg-transparent [&_span]:!text-current"
                        leftIcon={
                          <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
                        }
                        size="compact"
                        type="button"
                        variant="lightIcon"
                      >
                        {post.attending}
                      </Button>
                    )}
                    <Button
                      className="min-h-0 !border-0 !bg-transparent px-0 py-0 text-sm !text-slate-600 shadow-none hover:!bg-transparent [&_span]:!text-current"
                      leftIcon={<MessageCircle aria-hidden="true" className="h-4 w-4" />}
                      size="compact"
                      type="button"
                      variant="lightIcon"
                    >
                      {post.comments}
                    </Button>
                    {"attending" in post ? (
                      <Button
                        className="!text-white [&_span]:!text-white"
                        rightIcon={<ArrowRight aria-hidden="true" className="h-4 w-4" />}
                        size="compact"
                        type="button"
                        variant="primary"
                      >
                        Register
                      </Button>
                    ) : (
                      <Button
                        className="min-h-0 !border-0 !bg-transparent px-0 py-0 text-sm !text-slate-600 shadow-none hover:!bg-transparent [&_span]:!text-current"
                        leftIcon={<Repeat2 aria-hidden="true" className="h-4 w-4" />}
                        size="compact"
                        type="button"
                        variant="lightIcon"
                      >
                        Share
                      </Button>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="grid gap-5 lg:sticky lg:top-28 lg:max-h-[calc(100vh-7rem)] lg:content-start lg:overflow-y-auto lg:overscroll-contain lg:pr-1">
            <SidebarCard
              icon={<Trophy aria-hidden="true" className="h-4 w-4" />}
              title="Top Earners This Month"
            >
              <div className="grid gap-1">
                {topEarners.map((earner) => (
                  <div
                    key={`${earner.rank}-${earner.name}`}
                    className="grid grid-cols-[36px_1fr_auto] items-center gap-3 border-b border-slate-200 py-3 last:border-b-0"
                  >
                    <span
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-xl border text-xs font-bold",
                        rankClassNames[earner.rank] ??
                          "border-slate-200 bg-white text-slate-500"
                      )}
                    >
                      {earner.rank <= 3 ? (
                        <Medal aria-hidden="true" className="h-4 w-4" />
                      ) : (
                        earner.rank
                      )}
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-slate-800">
                        {earner.name}
                      </span>
                      <span className="block text-xs text-slate-400">{earner.city}</span>
                    </span>
                    <span className="text-sm font-bold text-techpay-primary">
                      {earner.earn}
                    </span>
                  </div>
                ))}
              </div>
            </SidebarCard>

            <SidebarCard
              icon={<CalendarDays aria-hidden="true" className="h-4 w-4" />}
              title="Upcoming Events"
            >
              <div className="grid gap-1">
                {events.map((event) => (
                  <div
                    key={event.title}
                    className="border-b border-slate-200 py-3 last:border-b-0"
                  >
                    <p className="text-xs font-bold uppercase text-techpay-primary">
                      {event.date}
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-800">{event.title}</p>
                    <p className="mt-1 text-xs text-slate-400">{event.type}</p>
                  </div>
                ))}
              </div>
            </SidebarCard>

            <SidebarCard
              icon={<BookOpen aria-hidden="true" className="h-4 w-4" />}
              title="Resources"
            >
              <div className="grid gap-1">
                {resources.map(({ Icon, ...resource }) => (
                  <div
                    key={resource.title}
                    className="flex gap-3 border-b border-slate-200 py-3 last:border-b-0"
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${resource.className}`}
                    >
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-slate-800">
                        {resource.title}
                      </span>
                      <span className="block text-xs text-slate-400">{resource.desc}</span>
                    </span>
                  </div>
                ))}
              </div>
            </SidebarCard>

            <SidebarCard
              icon={<Medal aria-hidden="true" className="h-4 w-4" />}
              title="Your Achievements"
            >
              <div className="grid grid-cols-2 gap-2">
                {achievements.map(({ Icon, ...achievement }) => (
                  <div
                    key={achievement.name}
                    className={`rounded-xl bg-slate-50 p-3 text-center ${
                      achievement.locked ? "opacity-45" : ""
                    }`}
                  >
                    <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-white text-techpay-primary shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </div>
                    <p className="mt-2 text-xs font-bold text-slate-700">
                      {achievement.name}
                    </p>
                  </div>
                ))}
              </div>
            </SidebarCard>
          </aside>
        </div>
      </div>
    </section>
  );
}

function CommunityStat({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div>
      <p className="text-lg font-bold text-techpay-primary">{value}</p>
      <p className="mt-1 text-xs font-semibold text-slate-400">{label}</p>
    </div>
  );
}

function Avatar({ className, initials }: { className: string; initials: string }) {
  return (
    <span
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${className}`}
    >
      {initials}
    </span>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-techpay-primary/20 bg-techpay-primary/8 px-3 py-1 text-xs font-semibold text-techpay-primary">
      {children}
    </span>
  );
}

function SidebarCard({
  children,
  className,
  icon,
  title,
}: {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  title: string;
}) {
  return (
    <section
      className={cn(
        "rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_18px_48px_rgba(15,23,42,0.06)]",
        className
      )}
    >
      <h3 className="flex items-center gap-2 text-sm font-bold text-slate-950">
        {icon ? (
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-techpay-primary/10 text-techpay-primary">
            {icon}
          </span>
        ) : null}
        {title}
      </h3>
      <div className="mt-3">{children}</div>
    </section>
  );
}
