import Image from "next/image";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function LogoMark({ eager = false }: { eager?: boolean }) {
  return (
    <Image
      src={`${publicBasePath}/assets/logo.svg`}
      alt="TechPay.ai"
      width={128}
      height={22}
      className="block"
      fetchPriority={eager ? "high" : undefined}
      loading={eager ? "eager" : "lazy"}
      style={{ height: "22px", width: "auto" }}
    />
  );
}
