import Image from "next/image";

export default function LogoMark({ priority = false }: { priority?: boolean }) {
  return (
    <Image
      src="/assets/logo.svg"
      alt="TechPay.ai"
      width={128}
      height={22}
      className="block h-[22px] w-auto"
      priority={priority}
    />
  );
}
