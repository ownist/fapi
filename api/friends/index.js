export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "Abid",
      username: "m_abid",
      address: {
        city: "Bosila, Dhaka",
        country: "Bangladesh",
      },
      contact: {
        phone: "01256985555",
        wp: true,
      },
    },
    {
      id: 2,
      name: "Sabbir",
      username: "sabbir_ahmed",
      address: {
        city: "Dhaka",
        country: "Bangladesh",
      },
      contact: {
        phone: "01745896522",
        wp: false,
      },
    },
    {
      id: 3,
      name: "Zayan Siam",
      username: "z_siam",
      address: {
        city: "Gazipur",
        country: "Bangladesh",
      },
      contact: {
        phone: "01632010025",
        wp: true,
      },
    },
    {
      id: 4,
      name: "Sabbir Shikdar",
      username: "sabbir_shkdr",
      address: {
        city: "Kaliyakoir, Gazipur",
        country: "Bangladesh",
      },
      contact: {
        phone: "01456321788",
        wp: false,
      },
    },
    {
      id: 5,
      name: "Shahed",
      username: "ownist",
      address: {
        city: "Dhaka",
        country: "Bangladesh",
      },
      contact: {
        phone: "01565482566",
        wp: true,
      },
    },
  ]);
}
