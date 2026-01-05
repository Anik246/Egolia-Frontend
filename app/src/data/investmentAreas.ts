
export type InvestmentArea = {
  title: string;
  desc: string;
  imageSrc: string;
  imageAlt?: string;
  href: string; // where it should navigate
};

export const investmentAreas: InvestmentArea[] = [
  {
    title: 'Real Estate',
    desc: 'Selective exposure across prime locations and resilient asset classes.',
    imageSrc: '/investments/real-estate.png',
    imageAlt: 'Real estate',
    href: '/investments/real-estate',
  },
  {
    title: 'Minerals',
    desc: 'Strategic resources and metals with a disciplined risk framework.',
    imageSrc: '/investments/minerals.png',
    imageAlt: 'Minerals',
    href: '/investments/minerals',
  },
  {
    title: 'Agriculture',
    desc: 'Sustainable agriculture and long-term supply chain opportunities.',
    imageSrc: '/investments/agriculture.png',
    imageAlt: 'Agriculture',
    href: '/investments/agriculture',
  },
  {
    title: 'Exchange',
    desc: 'Liquidity access and structured solutions designed for investors.',
    imageSrc: '/investments/exchange.png',
    imageAlt: 'Exchange',
    href: '/investments/exchange',
  },
  {
    title: 'Private Equity',
    desc: 'Private market opportunities focused on durable cash-flow growth.',
    imageSrc: '/investments/private-equity.png',
    imageAlt: 'Private equity',
    href: '/investments/private-equity',
  },
  {
    title: 'Research',
    desc: 'Research-led analytics to uncover trends and optimize allocations.',
    imageSrc: '/investments/research.png',
    imageAlt: 'Research',
    href: '/investments/research',
  },
];
