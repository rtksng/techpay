import {
  StaggerTestimonials,
  type StaggerTestimonialItem,
} from "@/components/ui/stagger-testimonials";

const testimonials: StaggerTestimonialItem[] = [
  {
    id: "student-coding-pune",
    persona: "Student",
    useCase: "Coding & Technical Projects",
    testimonial:
      "I needed a laptop for a coding bootcamp and didn't want to guess on memory or storage specs. The retail store executive explained the hardware details like a friend would. The offers on TechPay.ai platform fit my budget perfectly, so I could focus on my bootcamp instead of the cost.",
    by: "Rohan Mehta (Pune, India)",
  },
  {
    id: "student-creative-penang",
    persona: "Student",
    useCase: "Creative & Digital Art",
    testimonial:
      "I am design student from Penang. I was worried about hidden fees & payment options before visiting a TechPay.ai powered Phygital store. The store was upfront about everything, and I walked out with a laptop that handles high-fidelity rendering and digital art like a 'piece of a cake'. The flexible payments & easy instalments took away all my worries.",
    by: "Aisha Rahman (Penang, Malaysia)",
  },
  {
    id: "professional-office-mumbai",
    persona: "Professional",
    useCase: "Everyday Office Work",
    testimonial:
      "Running an accounting practice requires a reliable machine. From Number crunching to GST filings & record keeping & what not. The recommendation tool gave me a real comparison, and the monthly plan meant I didn't have to drain my working capital to stay productive.",
    by: "Arjun Sharma (Mumbai, India)",
  },
  {
    id: "professional-engineering-shah-alam",
    persona: "Professional",
    useCase: "Development & Engineering",
    testimonial:
      "Since my old device had broken down, I needed a new device urgently for work. A device that could handle design applications like Autodesk & also load large excel files. Buying a device on TechPay.ai was almost instantenous, giving me the speed I needed for my daily office work without any administrative delay.",
    by: "Daniel Tan (Shah Alam, Malaysia)",
  },
  {
    id: "professional-sales-chennai",
    persona: "Professional",
    useCase: "Sales & Field Work",
    testimonial:
      "My daily commute in the Chennai heat meant I needed something light with strong battery life for field work. The store let me test the hardware, then sorted the financing in one visit with no awkward surprises later.",
    by: "Vikram Iyer (Chennai, India)",
  },
  {
    id: "creative-video-bengaluru",
    persona: "Creative",
    useCase: "Design & Video Editing",
    testimonial:
      "I was unsure of which laptop to pick for my freelance design work. The AI tool on TechPay.ai gave me a personalized reommendation that amazed me. Getting finance approval on the spot made it possible to start my video editing work contract the same week.",
    by: "Priya Nair (Bengaluru, India)",
  },
  {
    id: "creative-portfolio-malaka",
    persona: "Creative",
    useCase: "Portfolio Design & High Performance",
    testimonial:
      "I needed a laptop for my architecture classes and was worried high-performance models may not available in my city. TechPay.ai platform was able to source my device from the distributor directly & ship it the store in my neighborhood.",
    by: "Nur Iman Hassan (Melaka, Malaysia)",
  },
  {
    id: "gamer-high-frame-rate-ipoh",
    persona: "Gamer",
    useCase: "Competitive & High Frame-Rate",
    testimonial:
      "I am an amature gamer. I needed a device that supports high frame-rate gaming & streaming. I also wanted to use the device for my project work in school. The store manager explained the technical differences & helped me pick a device that actually fits for my school work and gaming needs.",
    by: "Amirul Hakim (Ipoh, Malaysia)",
  },
  {
    id: "home-office-johor-bahru",
    persona: "Home User",
    useCase: "Home Office & Remote Work",
    testimonial:
      "Paying upfront for a quality laptop felt out of reach for our family business in Johor Bahru. We needed it for accounts and accessing our partner sites. The easy instalments on TechPay.ai provided us with the cash flow relief so we did not have to worry about upfront capex investment for our home office.",
    by: "Siti Farah (Johor Bahru, Malaysia)",
  },
  {
    id: "home-learning-delhi",
    persona: "Home User",
    useCase: "Learning & Family Hobbies",
    testimonial:
      "We bought a budget friendly desktop through a TechPay.ai partner store for our kids to self-learn from educational apps & AI tools. Having a personalized help-desk support as part of the purchase was the best decision we made.",
    by: "Neha Gupta (Delhi, India)",
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
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-[60px]">
        <div className="mb-10 max-w-6xl md:mb-14">
          <p className="mb-4 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-techpay-primary">
            FROM FIRST STEPS TO BIG WINS
          </p>
          <h2 className="mb-[18px] font-display text-[1.85rem] font-bold leading-[1.12] tracking-[-0.03em] text-[#111111] md:text-[clamp(2rem,4vw,3.25rem)]">
            Real Stories Real Progress
          </h2>
          <p className="max-w-[620px] text-[1.05rem] leading-[1.7] text-[#555555]">
            Families, students, workers, and small business owners are using
            TechPay.ai to take the next step.
          </p>
        </div>
      </div>

      <StaggerTestimonials items={testimonials} />
    </section>
  );
}
