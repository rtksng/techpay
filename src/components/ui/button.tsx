import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "darkIcon"
  | "lightIcon"
  | "socialIcon"
  | "market"
  | "marketActive";

export type ButtonSize =
  | "compact"
  | "md"
  | "lg"
  | "icon"
  | "iconLg"
  | "socialIcon"
  | "market";

type ButtonVisualProps = {
  active?: boolean;
  className?: string;
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  loadingLabel?: ReactNode;
  rightIcon?: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

const baseButtonClasses =
  "relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap no-underline font-semibold transition-[transform,box-shadow,background-color,border-color,color,opacity] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-techpay-primary/45 focus-visible:ring-offset-2 focus-visible:ring-offset-techpay-bg disabled:pointer-events-none disabled:opacity-55 aria-disabled:pointer-events-none aria-disabled:opacity-55 data-[loading=true]:pointer-events-none data-[loading=true]:opacity-80";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "btn-primary btn-pill isolate text-white shadow-[0_16px_36px_rgba(237,29,95,0.24)]",
  secondary:
    "border border-white/14 bg-white/6 text-techpay-heading hover:border-techpay-primary/45 hover:bg-white/10 hover:text-white",
  ghost:
    "border border-transparent bg-transparent text-techpay-heading hover:border-white/12 hover:bg-white/8",
  darkIcon:
    "rounded-full border border-white/12 bg-white/8 text-techpay-heading hover:border-techpay-orange/35 hover:bg-white/14",
  lightIcon:
    "border border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-100 focus-visible:ring-slate-400 focus-visible:ring-offset-white",
  socialIcon:
    "rounded-full border border-techpay-muted/20 bg-transparent text-techpay-muted hover:border-techpay-primary/45 hover:bg-techpay-primary/8 hover:text-techpay-heading",
  market:
    "border border-white/12 bg-white/6 text-techpay-muted hover:border-white/20 hover:bg-white/10 hover:text-techpay-heading",
  marketActive:
    "border border-techpay-orange/45 bg-techpay-orange/12 text-techpay-heading hover:border-techpay-orange/55 hover:bg-techpay-orange/16",
};

const sizeClasses: Record<ButtonSize, string> = {
  compact: "min-h-11 px-5 py-3 text-[0.84rem]",
  md: "min-h-12 px-6 py-3 text-sm",
  lg: "min-h-14 px-8 py-4 text-[1rem]",
  icon: "h-10 w-10 p-0",
  iconLg: "h-10 w-10 p-0 md:h-11 md:w-11",
  socialIcon: "h-9 w-9 p-0",
  market: "min-h-10 min-w-[90px] px-4 py-2 text-[0.76rem] uppercase tracking-[0.08em]",
};

export function buttonClassName({
  active,
  className,
  fullWidth,
  isLoading,
  size = "md",
  variant = "primary",
}: Pick<
  ButtonVisualProps,
  "active" | "className" | "fullWidth" | "isLoading" | "size" | "variant"
>) {
  const resolvedVariant = active && variant === "market" ? "marketActive" : variant;

  return cn(
    baseButtonClasses,
    variantClasses[resolvedVariant],
    sizeClasses[size],
    fullWidth && "w-full",
    isLoading && "cursor-wait",
    className
  );
}

export function ButtonContent({
  children,
  isLoading,
  leftIcon,
  loadingLabel,
  rightIcon,
}: Pick<ButtonVisualProps, "isLoading" | "leftIcon" | "loadingLabel" | "rightIcon"> & {
  children: ReactNode;
}) {
  const content = isLoading && loadingLabel ? loadingLabel : children;

  return (
    <>
      {isLoading ? (
        <span
          className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      ) : (
        leftIcon
      )}
      <span>{content}</span>
      {!isLoading ? rightIcon : null}
    </>
  );
}

export type ButtonProps = Omit<ComponentProps<"button">, "className"> &
  ButtonVisualProps;

export function Button({
  active,
  children,
  className,
  disabled,
  fullWidth,
  isLoading,
  leftIcon,
  loadingLabel,
  rightIcon,
  size,
  type = "button",
  variant,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      {...props}
      aria-busy={isLoading || undefined}
      className={buttonClassName({
        active,
        className,
        fullWidth,
        isLoading,
        size,
        variant,
      })}
      data-loading={isLoading || undefined}
      disabled={isDisabled}
      type={type}
    >
      <ButtonContent
        isLoading={isLoading}
        leftIcon={leftIcon}
        loadingLabel={loadingLabel}
        rightIcon={rightIcon}
      >
        {children}
      </ButtonContent>
    </button>
  );
}

export type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> &
  ButtonVisualProps & {
    disabled?: boolean;
  };

export function ButtonLink({
  active,
  children,
  className,
  disabled,
  fullWidth,
  isLoading,
  leftIcon,
  loadingLabel,
  rightIcon,
  size,
  variant,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      {...props}
      aria-busy={isLoading || undefined}
      aria-disabled={disabled || isLoading || undefined}
      className={buttonClassName({
        active,
        className,
        fullWidth,
        isLoading,
        size,
        variant,
      })}
      data-loading={isLoading || undefined}
      tabIndex={disabled || isLoading ? -1 : props.tabIndex}
    >
      <ButtonContent
        isLoading={isLoading}
        leftIcon={leftIcon}
        loadingLabel={loadingLabel}
        rightIcon={rightIcon}
      >
        {children}
      </ButtonContent>
    </Link>
  );
}

export type ButtonAnchorProps = Omit<ComponentProps<"a">, "className"> &
  ButtonVisualProps & {
    disabled?: boolean;
  };

export function ButtonAnchor({
  active,
  children,
  className,
  disabled,
  fullWidth,
  isLoading,
  leftIcon,
  loadingLabel,
  rightIcon,
  size,
  variant,
  ...props
}: ButtonAnchorProps) {
  return (
    <a
      {...props}
      aria-busy={isLoading || undefined}
      aria-disabled={disabled || isLoading || undefined}
      className={buttonClassName({
        active,
        className,
        fullWidth,
        isLoading,
        size,
        variant,
      })}
      data-loading={isLoading || undefined}
      tabIndex={disabled || isLoading ? -1 : props.tabIndex}
    >
      <ButtonContent
        isLoading={isLoading}
        leftIcon={leftIcon}
        loadingLabel={loadingLabel}
        rightIcon={rightIcon}
      >
        {children}
      </ButtonContent>
    </a>
  );
}
