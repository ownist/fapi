export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "water Bottle",
      price: 530,
    },
    {
      id: 2,
      name: "School Bag",
      price: 900,
    },
  ]);
}
