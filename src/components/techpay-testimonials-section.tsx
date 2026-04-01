import {
  StaggerTestimonials,
  type StaggerTestimonialItem,
} from "@/components/ui/stagger-testimonials";

const testimonials: StaggerTestimonialItem[] = [
  {
    id: "maria-colombia",
    testimonial:
      "I was nervous about buying a laptop because I did not want to choose the wrong one. The store explained everything clearly and helped me find exactly what my children needed for school. The monthly payment felt manageable from day one.",
    by: "Maria, Colombia",
    imgSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "adaeze-nigeria",
    testimonial:
      "I needed a laptop for my tailoring business, but paying all at once was difficult. The store guided me through the options, and I was approved while I was still there. It changed what felt possible for me.",
    by: "Adaeze, Nigeria",
    imgSrc:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "daniel-kenya",
    testimonial:
      "What I liked most was the confidence. I could ask questions, compare options, and make a decision without feeling rushed. It felt like someone was actually helping me, not just selling to me.",
    by: "Daniel, Kenya",
    imgSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "sofie-peru",
    testimonial:
      "I bought my first laptop for online classes through TechPay.ai. The store broke everything down in simple words, and the payment plan meant I could start learning immediately instead of waiting for months.",
    by: "Sofie, Peru",
    imgSrc:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "kwame-ghana",
    testimonial:
      "We needed a reliable computer for our small printing shop, but cash flow changes every month. TechPay.ai made it realistic to invest in the right machine without putting pressure on the business.",
    by: "Kwame, Ghana",
    imgSrc:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "nadia-egypt",
    testimonial:
      "The best part was not feeling alone in the process. I could explain what I needed for work, compare a few options, and walk out knowing I had made a smart decision for my family.",
    by: "Nadia, Egypt",
    imgSrc:
      "https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "benjamin-philippines",
    testimonial:
      "Approval was fast, the laptop recommendation made sense, and the store support felt honest. It gave me the confidence to upgrade sooner than I thought I could.",
    by: "Benjamin, Philippines",
    imgSrc:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=600&q=80",
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
        <div className="absolute bottom-[-4rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-techpay-orange/6 blur-3xl" />
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
