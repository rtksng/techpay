import {
  StaggerTestimonials,
  type StaggerTestimonialItem,
} from "@/components/ui/stagger-testimonials";

const testimonials: StaggerTestimonialItem[] = [
  {
    id: "priya-india",
    testimonial:
      "I was unsure which laptop to pick for my freelance work, but the store in Bengaluru walked me through specs and budget without pressure. Getting approved on the spot and splitting the cost made it possible to start the same week.",
    by: "Priya, India",
    imgSrc:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "hakim-malaysia",
    testimonial:
      "Paying upfront for a good laptop felt out of reach for our family. TechPay.ai at the KL store explained the instalments clearly, and we left with a machine my daughter could use for school — the process felt fair and straightforward.",
    by: "Hakim, Malaysia",
    imgSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "arjun-india",
    testimonial:
      "I run a small accounting practice in Mumbai and needed something reliable for GST filings and video calls with clients. The team compared two models honestly, and the monthly plan meant I did not have to drain working capital in one shot.",
    by: "Arjun, India",
    imgSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "mei-ling-malaysia",
    testimonial:
      "As a design student in Penang, I was worried about EMIs and hidden fees. The store showed everything upfront, and I walked out with a laptop that actually handles my software — not the cheapest one they could push.",
    by: "Mei Ling, Malaysia",
    imgSrc:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "kavitha-india",
    testimonial:
      "My son needed a laptop for college in Hyderabad, and we had a fixed budget. TechPay.ai helped us stretch to a better build quality with instalments we could plan around. Support after purchase answered his setup questions quickly.",
    by: "Kavitha, India",
    imgSrc:
      "https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "danial-malaysia",
    testimonial:
      "I work from Johor and wanted to upgrade for heavier spreadsheets and calls. Approval took minutes in store, and the staff did not rush me — I compared screens and keyboards until it felt right.",
    by: "Danial, Malaysia",
    imgSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "rohan-india",
    testimonial:
      "First laptop for my coding bootcamp in Pune. I did not want to guess on RAM or SSD. The associate explained it like a friend would, and the payment schedule matched what I could manage while studying.",
    by: "Rohan, India",
    imgSrc:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "nur-malaysia",
    testimonial:
      "We bought through a partner store in Petaling Jaya for our home business. Being able to split payments made it easier to buy a proper machine instead of compromising and replacing it in a year.",
    by: "Nur, Malaysia",
    imgSrc:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "vikram-india",
    testimonial:
      "Chennai heat and commute meant I wanted something light with good battery. The store let me try the keyboard and trackpad, then sorted TechPay.ai in one visit. No awkward follow-ups or surprises on the statement.",
    by: "Vikram, India",
    imgSrc:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
];

export default function TechPayTestimonialsSection() {
  return (
    <section
      className="relative z-[3] overflow-hidden bg-[#f7f7fb] pb-24 pt-16 md:pb-28 md:pt-20"
      id="testimonials"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-6%] top-10 h-64 w-64 rounded-full bg-techpay-primary/8 blur-3xl" />
        <div className="absolute right-[-8%] top-1/4 h-72 w-72 rounded-full bg-techpay-purple/8 blur-3xl" />
        {/* <div className="absolute bottom-[-4rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-techpay-orange/6 blur-3xl" /> */}
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-[60px]">
        <div className="mb-10 max-w-6xl md:mb-14">
          <p className="mb-4 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-techpay-primary">
            Real Stories. Real Progress.
          </p>
          <h2 className="mb-[18px] font-display text-[1.85rem] font-bold leading-[1.12] tracking-[-0.03em] text-[#111111] md:text-[clamp(2rem,4vw,3.25rem)]">
            Families, students, workers, and small business owners are already
            using TechPay.ai to take the next step.
          </h2>
        </div>
      </div>

      <StaggerTestimonials items={testimonials} />
    </section>
  );
}
