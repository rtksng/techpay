import Image from "next/image";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function LogoMark({ priority = false }: { priority?: boolean }) {
  return (
    <Image
      src={`${publicBasePath}/assets/logo.svg`}
      alt="TechPay.ai"
      width={128}
      height={22}
      className="block h-[22px] w-auto"
      priority={priority}
    />
  );
}
