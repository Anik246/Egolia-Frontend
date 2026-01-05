import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ButtonVariant, ButtonSize } from '@/types';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButtonProps
  extends ButtonBaseProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> {
  as?: 'button';
  href?: never;
}

interface ButtonAsLinkProps
  extends ButtonBaseProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> {
  as: 'link';
  href: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-linear-to-r from-primary-500 to-primary-600 text-white hover:from-primary-400 hover:to-primary-500 shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30',
  secondary:
    'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20',
  outline:
    'bg-transparent border border-primary-500/50 text-primary-200 hover:bg-primary-500/10 hover:border-primary-300',
  ghost: 'bg-transparent text-gray-300 hover:text-white hover:bg-white/5',
  gold:
    'bg-linear-to-r from-[#f6c453] to-[#dca636] text-[#120f07] border border-[#f6c453]/25 hover:brightness-105 shadow-lg shadow-black/25',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3 text-base',
  lg: 'px-9 py-4 text-lg',
};

const Spinner = () => (
  <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    />
  </svg>
);

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    className,
    children,
    ...rest
  } = props;

  const base = cn(
    'inline-flex items-center justify-center rounded-xl font-medium',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary',
    'transition-all duration-300 ease-out active:scale-[0.98]',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {isLoading ? (
        <Spinner />
      ) : leftIcon ? (
        <span className="mr-2 transition-transform duration-300 group-hover:-translate-x-0.5">
          {leftIcon}
        </span>
      ) : null}

      {children}

      {rightIcon && !isLoading && (
        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">
          {rightIcon}
        </span>
      )}
    </>
  );

  if (props.as === 'link') {
    const { as: _as, href, ...linkProps } = rest as ButtonAsLinkProps;
    return (
      <Link href={href} className={cn(base, 'group')} {...linkProps}>
        {content}
      </Link>
    );
  }

  const { as: _as, ...buttonProps } = rest as ButtonAsButtonProps;
  return (
    <button
      className={cn(base, 'group')}
      disabled={(buttonProps as ButtonAsButtonProps).disabled || isLoading}
      aria-busy={isLoading}
      {...buttonProps}
    >
      {content}
    </button>
  );
};
