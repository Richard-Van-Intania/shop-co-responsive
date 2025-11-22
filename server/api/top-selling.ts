const items: ItemData[] = [
  { source: "/items/Frame 32.png", label: "T-Shirt With Tape Details", rating: 4.5, price: 120, discounted: null },
  { source: "/items/Frame 33.png", label: "Skinny Fit Jeans", rating: 3.5, price: 260, discounted: 240 },
  { source: "/items/Frame 34.png", label: "Checkered Shirt", rating: 4.5, price: 180, discounted: null },
  { source: "/items/Frame 38.png", label: "Sleeve Striped T-Shirt", rating: 4.5, price: 160, discounted: 130 },
  { source: "/items/Frame 32(1).png", label: "Polo with Contrast Trims", rating: 4.0, price: 242, discounted: 212 },
  { source: "/items/Frame 33(1).png", label: "Gradient Graphic T-shirt", rating: 3.5, price: 145, discounted: null },
];

export default defineEventHandler((event) => {
  return items;
});
