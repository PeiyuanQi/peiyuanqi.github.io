const data = [
  {
    title: 'MARSFORGE',
    subtitle: 'Robot-Powered Mars Program',
    slug: 'marsforge',
    images: [
      '/images/projects/marsforge/mars-arrival.webp',
      '/images/projects/marsforge/gameplay-card.png',
    ],
    image: '/images/projects/marsforge/mars-arrival.webp',
    videos: [],
    date: '2026-08-09',
    summary:
      'A compact browser strategy game where you command robot minions, build an industrial spaceport, assemble Redfront One, and launch toward Mars.',
    desc:
      'A robot-powered browser strategy game about building a path to Mars.',
    details: [
      'Marsforge turns a dusty outpost into a working Mars launch program. Assign minions, gather resources, build industry, research missing technology, and assemble Redfront One piece by piece.',
      'The game combines an approachable strategy loop with a growing 3D spaceport, multiple starting eras, typed and optional Grok voice commands, local saves, and a cinematic launch toward Mars.',
    ],
    links: [
      {
        external: true,
        label: 'Play Marsforge',
        href: 'https://mishu.tech/projects/marsforge/',
      },
      {
        external: true,
        label: 'View on GitHub',
        href: 'https://github.com/PeiyuanQi/grokthon-2026',
      },
    ],
    tags: [
      'Browser Game',
      'Strategy',
      'Grokathon 2026',
    ],
    facts: [
      {
        label: 'Type',
        value: 'Robot-powered browser strategy game',
      },
      {
        label: 'Mission',
        value: 'Build industry, assemble Redfront One, and launch toward Mars',
      },
      {
        label: 'Built with',
        value: 'TypeScript, Three.js, Vite, and optional Grok integrations',
      },
      {
        label: 'Event',
        value: 'SpaceXAI Grokathon 2026',
      },
      {
        label: 'Play',
        value: 'mishu.tech/projects/marsforge/',
        href: 'https://mishu.tech/projects/marsforge/',
      },
    ],
  },
  {
    title: '卡益 (BeniPin)',
    subtitle: 'Privacy-First iOS Benefit Organizer',
    slug: 'beni-pin',
    images: [
      '/images/projects/beni-pin.png',
    ],
    image: '/images/projects/beni-pin.png',
    videos: [],
    date: '2026-07-20',
    summary:
      'A bilingual, privacy-first iOS app for finding, organizing, and tracking recurring U.S. credit-card benefits.',
    desc:
      'A native iOS organizer for credit-card benefits.',
    details: [
      '卡益 (BeniPin) brings credit-card benefit discovery into a native SwiftUI app. Users manually add the products they own, switch between benefit and earning-rate views, and mark recurring benefits as used for the current period.',
      'The app keeps selected card IDs, benefit-use state, and editable point valuations on-device. It does not connect to bank accounts or store card numbers or transactions.',
    ],
    links: [
      {
        label: 'Visit product page',
        href: '/projects/benipin/',
      },
      {
        external: true,
        label: 'View on GitHub',
        href: 'https://github.com/PeiyuanQi/beni-pin',
      },
    ],
    tags: [
      'SwiftUI',
      'Privacy-First',
      'Bilingual',
    ],
    facts: [
      {
        label: 'Type',
        value: 'Native iOS credit-card benefit organizer',
      },
      {
        label: 'Platform',
        value: 'iOS 17+ with SwiftUI',
      },
      {
        label: 'Privacy',
        value: 'No card numbers, balances, transactions, or bank login',
      },
      {
        label: 'Status',
        value: 'Coming to the App Store',
      },
      {
        label: 'Product page',
        value: 'peiyuanqi.me/projects/benipin/',
        href: 'https://peiyuanqi.me/projects/benipin/',
      },
    ],
  },
  {
    title: 'Celestial Mandate',
    subtitle: 'Historical Strategy Game Design',
    slug: 'celestial-mandate',
    images: [
      '/projects/celestial-mandate/images/hero-command-table.png',
      '/projects/celestial-mandate/images/hero-po-zhen-zi-southern-ming.png',
      '/projects/celestial-mandate/images/hero-wiki-archive-index.png',
    ],
    image: '/projects/celestial-mandate/images/hero-command-table.png',
    videos: [],
    date: '2026-06-19',
    summary:
      'A design site for a history-first strategy game about legitimacy, communication, local power, and late-Ming crisis management.',
    desc:
      'A compact concept site for a historical strategy game.',
    details: [
      'Celestial Mandate is a strategy-game planning project built around historical systems rather than a simple map-painting loop. The current site sketches how authority, rumor, orders, logistics, occupation, and local actors can become playable pressure.',
      'The public concept site also collects the first DLC-style research frame, Po Zhen Zi, with archive-like pages that connect Southern Ming people, places, events, and game-facing design notes.',
    ],
    links: [
      {
        label: 'Visit website',
        href: '/projects/celestial-mandate/',
      },
    ],
    tags: [
      'Game Design',
      'Historical Systems',
      'Research Site',
    ],
    facts: [
      {
        label: 'Type',
        value: 'Strategy game concept and design archive',
      },
      {
        label: 'Focus',
        value: 'Authority, logistics, rumor, and local agency',
      },
      {
        label: 'Current site',
        value: 'peiyuanqi.me/projects/celestial-mandate/',
        href: 'https://peiyuanqi.me/projects/celestial-mandate/',
      },
      {
        label: 'Status',
        value: 'Active concept development',
      },
    ],
  },
  {
    title: 'AI Trader',
    subtitle: 'Local Strategy Terminal',
    slug: 'ai-trader',
    images: [
      '/images/projects/ai-trader.svg',
    ],
    image: '/images/projects/ai-trader.svg',
    videos: [],
    date: '2026-04-12',
    summary:
      'A local trading research terminal with a Python strategy server, Node TUI, market-data sync, and backtest tooling.',
    desc:
      'A local AI-assisted trading research and backtest tool.',
    details: [
      'AI Trader is a local research tool that combines a FastAPI trade server with a terminal client. It is built for strategy development, provider integration, and quick inspection of market-data workflows before ideas become server-facing logic.',
      'The project includes a Chan theory analysis engine, local parquet market data, IBKR sync support, and a development harness that can render interactive charts for backtest and structural review.',
    ],
    tags: [
      'Trading Research',
      'FastAPI',
      'Terminal UI',
    ],
    facts: [
      {
        label: 'Type',
        value: 'Private strategy research tool',
      },
      {
        label: 'Backend',
        value: 'Python FastAPI strategy and backtest APIs',
      },
      {
        label: 'Client',
        value: 'Node terminal UI',
      },
      {
        label: 'Focus',
        value: 'Local research, market data, and strategy validation',
      },
    ],
  },
  {
    title: 'Hot Glue - 1/2',
    subtitle: 'Model Radio Control Boat',
    slug: 'hot-glue-rc-boat',
    images: [
      '/images/projects/rcboat.jpeg',
      '/images/projects/rc-boat/rc-boat-detail-01.jpg',
      '/images/projects/rc-boat/rc-boat-detail-02.jpg',
    ],
    image: '/images/projects/rcboat.jpeg',
    videos: [
      {
        src: '/images/projects/rc-boat/rc-boat-test-01.mp4',
        captions: '/images/projects/rc-boat/rc-boat-test-01.vtt',
        title: 'Water test clip',
        type: 'video/mp4',
      },
      {
        src: '/images/projects/rc-boat/rc-boat-test-02.mp4',
        captions: '/images/projects/rc-boat/rc-boat-test-02.vtt',
        title: 'Control test clip',
        type: 'video/mp4',
      },
    ],
    date: '2022-06-01',
    summary:
      'A pair of foam-and-hot-glue radio-control boat prototypes, built quickly to test hull shape, waterproofing, and control packaging.',
    desc:
      'RC Sailboat and Motor Boat built by hot glue '
      + 'and foam.',
    details: [
      'This project explored how far a lightweight hull could be pushed with cheap materials and a fast build loop. The goal was to make something that could get on the water quickly, survive testing, and leave enough room for electronics and adjustments.',
      'The build focused on hands-on fabrication decisions: shaping the foam body, sealing weak points, fitting the radio-control components, and tuning the balance between weight, buoyancy, and stability.',
    ],
    tags: [
      'Radio Control',
      'Foam Hull',
      'Rapid Prototype',
    ],
    facts: [
      {
        label: 'Build',
        value: 'Sailboat and motor boat prototypes',
      },
      {
        label: 'Materials',
        value: 'Foam, hot glue, and RC electronics',
      },
      {
        label: 'Focus',
        value: 'Fast iteration and water testing',
      },
      {
        label: 'Media',
        value: 'Build photos and test footage',
      },
    ],
  },
];

export default data;
