const mockData = [
  {
    id: 1,
    title: "introduction to node",
    lecturer: "ben lee",
    url: "https://vimeo.com/386151568",
    tags: ["node", "express"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    timestamps: [
      { time: 0, timedesc: "start" },
      { time: 120, timedesc: "intro" },
      { time: 240, timedesc: "how it works" },
    ],
  },
  {
    id: 2,
    title: "lecture on react",
    lecturer: "tao sharma",
    url: "https://vimeo.com/479767101",
    tags: ["react"],
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
    timestamps: [
      { time: 0, timedesc: "start" },
      { time: 45, timedesc: "preamble" },
      { time: 120, timedesc: "tips" },
      { time: 150, timedesc: "intro" },
      { time: 300, timedesc: "how it works" },
    ],
  },
  {
    id: 3,
    title: "lecture on agile",
    lecturer: "chris meah",
    url: "https://vimeo.com/489084514",
    tags: ["agile", "scrum", "waterfall"],
    description:
      "Vivamus sed feugiat est. Aenean sit amet faucibus ex. Aenean at augue quis velit maximus cursus at sit amet nisi. Curabitur rhoncus, lorem ultrices posuere vulputate, ante dui laoreet massa, sed tempor tellus ante feugiat leo.",
    timestamps: [
      { time: 0, timedesc: "start" },
      { time: 37, timedesc: "facts" },
      { time: 150, timedesc: "discussion" },
      { time: 180, timedesc: "process" },
    ],
  },
  {
    id: 4,
    title: "lecture on object oriented programming",
    lecturer: "liz kaufmann",
    url: "https://vimeo.com/489315569",
    tags: ["objects", "javascript"],
    description:
      "Donec sapien tortor, pulvinar nec justo at, eleifend fringilla sapien. Morbi consectetur lorem urna, vel faucibus sem sagittis vel. Nunc feugiat ut velit nec elementum.",
    timestamps: [
      { time: 0, timedesc: "start" },
      { time: 66, timedesc: "objects" },
      { time: 221, timedesc: "javascript" },
    ],
  },
  {
    id: 225,
    title: "lecture on x",
    lecturer: "mr x",
    url: "https://vimeo.com/489315569",
    tags: ["x", "x"],
    description: "xxx.",
    timestamps: [
      { time: 0, timedesc: "start" },
      { time: 66, timedesc: "x" },
      { time: 221, timedesc: "end" },
    ],
  },
  {
    id: 16,
    title: "lecture on y",
    lecturer: "mr y",
    url: "https://vimeo.com/489315569",
    tags: ["x", "x"],
    description: "xxx.",
    timestamps: [
      { time: 0, timedesc: "start" },
      { time: 66, timedesc: "x" },
      { time: 221, timedesc: "end" },
    ],
  },
];

// const mockData = "hello world";

export default mockData;
