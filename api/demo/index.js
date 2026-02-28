export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "Laptop",
      price: 75000,
    },
    {
      id: 2,
      name: "Phone",
      price: 15000,
    },
  ]);
}
