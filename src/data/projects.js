const data = [
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
