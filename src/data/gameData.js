export const toolsData = [
  { id: 1, icon: "🔧", name: "Wrench" },
  { id: 2, icon: "⚙️", name: "Gear" },
  { id: 3, icon: "🪛", name: "Screwdriver" },
  { id: 4, icon: "🔋", name: "Battery" },
];

export const getSequenceLength = (level) => {
  switch (level) {
    case "Intermediate":
      return 5;
    case "Expert":
      return 8;
    case "Beginner":
    default:
      return 3;
  }
};
