import {
  StaggerTestimonials,
  type StaggerTestimonialItem,
} from "@/components/ui/stagger-testimonials";

const testimonials: StaggerTestimonialItem[] = [
  {
    id: "arjun-sharma",
    testimonial:
      "I run a small accounting practice in Mumbai and needed something reliable for GST filings and client video calls. The store team compared two models honestly, and the monthly plan meant I did not have to drain working capital in one shot.",
    by: "Arjun Sharma, India",
    imgSrc:
      "https://images.pexels.com/photos/7529112/pexels-photo-7529112.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "priya-nair",
    testimonial:
      "I was unsure which laptop to pick for my freelance work, but the Bengaluru store walked me through specs and budget without pressure. Getting approved on the spot and splitting the cost made it possible to start the same week.",
    by: "Priya Nair, India",
    imgSrc:
      "https://images.pexels.com/photos/13109152/pexels-photo-13109152.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "rohan-mehta",
    testimonial:
      "This was my first laptop for a coding bootcamp in Pune. I did not want to guess on RAM or SSD, and the associate explained everything like a friend would. The payment schedule fit what I could manage while studying.",
    by: "Rohan Mehta, India",
    imgSrc:
      "https://images.pexels.com/photos/30109427/pexels-photo-30109427.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "ananya-iyer",
    testimonial:
      "I needed a laptop for architecture classes in Hyderabad and was worried the good models would be out of reach. TechPay.ai kept the terms clear, and I left with a machine that can actually handle rendering work.",
    by: "Ananya Iyer, India",
    imgSrc:
      "https://images.pexels.com/photos/16499147/pexels-photo-16499147.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "vikram-malhotra",
    testimonial:
      "Chennai heat and daily commute meant I wanted something light with strong battery life. The store let me test the keyboard and trackpad, then sorted TechPay.ai in one visit with no awkward follow-ups or surprises later.",
    by: "Vikram Malhotra, India",
    imgSrc:
      "https://images.pexels.com/photos/7276199/pexels-photo-7276199.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "juvita-majimbun",
    testimonial:
      "I work in finance in Kuala Lumpur and needed a faster machine for spreadsheets, dashboards, and calls. Approval took minutes in store, and the staff gave me time to compare screens and keyboards until the choice felt right.",
    by: "Juvita Majimbun, Malaysia",
    imgSrc:
      "https://images.pexels.com/photos/13763023/pexels-photo-13763023.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "rogayah-singgon",
    testimonial:
      "As a design student in Penang, I was worried about instalments and hidden fees. The store showed everything upfront, and I walked out with a laptop that actually handles my software instead of the cheapest model on the shelf.",
    by: "Rogayah Singgon, Malaysia",
    imgSrc:
      "https://images.pexels.com/photos/30604887/pexels-photo-30604887.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "welson-bujang",
    testimonial:
      "Paying upfront for a good laptop felt out of reach for our family business in Johor Bahru. TechPay.ai explained the instalments clearly, and we left with a machine we could start using for orders and accounts immediately.",
    by: "Welson Bujang, Malaysia",
    imgSrc:
      "https://images.pexels.com/photos/16737552/pexels-photo-16737552.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "linsay-ganyun",
    testimonial:
      "We bought through a partner store in Petaling Jaya for our home-based business. Splitting the payment made it easier to buy a proper machine now instead of compromising and replacing it in a year.",
    by: "Linsay Ganyun, Malaysia",
    imgSrc:
      "https://images.pexels.com/photos/3197569/pexels-photo-3197569.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "rayner-jinggut",
    testimonial:
      "I wanted to upgrade in Shah Alam for heavier coursework and video meetings, but I did not want a rushed sales pitch. The team explained the differences clearly and let me choose the laptop that actually fit how I work.",
    by: "Rayner Jinggut, Malaysia",
    imgSrc:
      "https://images.pexels.com/photos/2751061/pexels-photo-2751061.jpeg?auto=compress&cs=tinysrgb&w=600",
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
