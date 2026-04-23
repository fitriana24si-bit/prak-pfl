const orders = [
  {
    id: "ORD001",
    customer: "Andi Saputra",
    status: "Completed",
    total: 250000,
    date: "2026-04-01"
  },
  {
    id: "ORD002",
    customer: "Budi Santoso",
    status: "Pending",
    total: 150000,
    date: "2026-04-02"
  },
  {
    id: "ORD003",
    customer: "Citra Dewi",
    status: "Cancelled",
    total: 100000,
    date: "2026-04-03"
  },
  {
    id: "ORD004",
    customer: "Dedi Pratama",
    status: "Completed",
    total: 300000,
    date: "2026-04-04"
  },
  {
    id: "ORD005",
    customer: "Eka Putri",
    status: "Pending",
    total: 200000,
    date: "2026-04-05"
  },
  {
    id: "ORD006",
    customer: "Fajar Nugroho",
    status: "Cancelled",
    total: 120000,
    date: "2026-04-06"
  },
  {
    id: "ORD007",
    customer: "Gina Lestari",
    status: "Completed",
    total: 275000,
    date: "2026-04-07"
  },
  {
    id: "ORD008",
    customer: "Hendra Wijaya",
    status: "Pending",
    total: 180000,
    date: "2026-04-08"
  },
  {
    id: "ORD009",
    customer: "Indah Permata",
    status: "Completed",
    total: 220000,
    date: "2026-04-09"
  },
  {
    id: "ORD010",
    customer: "Joko Susilo",
    status: "Cancelled",
    total: 90000,
    date: "2026-04-10"
  },
  {
    id: "ORD011",
    customer: "Kartika Sari",
    status: "Completed",
    total: 310000,
    date: "2026-04-11"
  },
  {
    id: "ORD012",
    customer: "Lukman Hakim",
    status: "Pending",
    total: 140000,
    date: "2026-04-12"
  },
  {
    id: "ORD013",
    customer: "Maya Putri",
    status: "Completed",
    total: 260000,
    date: "2026-04-13"
  },
  {
    id: "ORD014",
    customer: "Nanda Prasetyo",
    status: "Cancelled",
    total: 110000,
    date: "2026-04-14"
  },
  {
    id: "ORD015",
    customer: "Oki Ramadhan",
    status: "Pending",
    total: 170000,
    date: "2026-04-15"
  },
  {
    id: "ORD016",
    customer: "Putri Ayu",
    status: "Completed",
    total: 290000,
    date: "2026-04-16"
  },
  {
    id: "ORD017",
    customer: "Rian Saputra",
    status: "Cancelled",
    total: 130000,
    date: "2026-04-17"
  },
  {
    id: "ORD018",
    customer: "Sari Dewi",
    status: "Completed",
    total: 240000,
    date: "2026-04-18"
  },
  {
    id: "ORD019",
    customer: "Tono Wijaya",
    status: "Pending",
    total: 210000,
    date: "2026-04-19"
  },
  {
    id: "ORD020",
    customer: "Umar Faruq",
    status: "Completed",
    total: 330000,
    date: "2026-04-20"
  },
  {
    id: "ORD021",
    customer: "Vina Lestari",
    status: "Cancelled",
    total: 150000,
    date: "2026-04-21"
  },
  {
    id: "ORD022",
    customer: "Wawan Setiawan",
    status: "Completed",
    total: 280000,
    date: "2026-04-22"
  },
  {
    id: "ORD023",
    customer: "Xavier Putra",
    status: "Pending",
    total: 190000,
    date: "2026-04-23"
  },
  {
    id: "ORD024",
    customer: "Yuni Kartika",
    status: "Completed",
    total: 260000,
    date: "2026-04-24"
  },
  {
    id: "ORD025",
    customer: "Zaki Maulana",
    status: "Cancelled",
    total: 100000,
    date: "2026-04-25"
  },
  {
    id: "ORD026",
    customer: "Agus Salim",
    status: "Completed",
    total: 310000,
    date: "2026-04-26"
  },
  {
    id: "ORD027",
    customer: "Bella Putri",
    status: "Pending",
    total: 175000,
    date: "2026-04-27"
  },
  {
    id: "ORD028",
    customer: "Chandra Wijaya",
    status: "Completed",
    total: 295000,
    date: "2026-04-28"
  },
  {
    id: "ORD029",
    customer: "Dina Sari",
    status: "Cancelled",
    total: 120000,
    date: "2026-04-29"
  },
  {
    id: "ORD030",
    customer: "Eko Prasetyo",
    status: "Completed",
    total: 350000,
    date: "2026-04-30"
  },
    {
    id: "ORD031",
    customer: "Andi Saputra",
    status: "Pending",
    total: 180000,
    date: "2026-05-01"
  },
  {
    id: "ORD032",
    customer: "Budi Santoso",
    status: "Completed",
    total: 260000,
    date: "2026-05-02"
  },
  {
    id: "ORD033",
    customer: "Citra Dewi",
    status: "Cancelled",
    total: 130000,
    date: "2026-05-03"
  },
  {
    id: "ORD034",
    customer: "Dedi Pratama",
    status: "Completed",
    total: 310000,
    date: "2026-05-04"
  },
  {
    id: "ORD035",
    customer: "Eka Putri",
    status: "Pending",
    total: 210000,
    date: "2026-05-05"
  },
  {
    id: "ORD036",
    customer: "Fajar Nugroho",
    status: "Cancelled",
    total: 140000,
    date: "2026-05-06"
  },
  {
    id: "ORD037",
    customer: "Gina Lestari",
    status: "Completed",
    total: 280000,
    date: "2026-05-07"
  },
  {
    id: "ORD038",
    customer: "Hendra Wijaya",
    status: "Pending",
    total: 190000,
    date: "2026-05-08"
  },
  {
    id: "ORD039",
    customer: "Indah Permata",
    status: "Completed",
    total: 240000,
    date: "2026-05-09"
  },
  {
    id: "ORD040",
    customer: "Joko Susilo",
    status: "Cancelled",
    total: 110000,
    date: "2026-05-10"
  },

  {
    id: "ORD041",
    customer: "Kartika Sari",
    status: "Completed",
    total: 320000,
    date: "2026-05-11"
  },
  {
    id: "ORD042",
    customer: "Lukman Hakim",
    status: "Pending",
    total: 150000,
    date: "2026-05-12"
  },
  {
    id: "ORD043",
    customer: "Maya Putri",
    status: "Completed",
    total: 270000,
    date: "2026-05-13"
  },
  {
    id: "ORD044",
    customer: "Nanda Prasetyo",
    status: "Cancelled",
    total: 120000,
    date: "2026-05-14"
  },
  {
    id: "ORD045",
    customer: "Oki Ramadhan",
    status: "Pending",
    total: 180000,
    date: "2026-05-15"
  },
  {
    id: "ORD046",
    customer: "Putri Ayu",
    status: "Completed",
    total: 300000,
    date: "2026-05-16"
  },
  {
    id: "ORD047",
    customer: "Rian Saputra",
    status: "Cancelled",
    total: 140000,
    date: "2026-05-17"
  },
  {
    id: "ORD048",
    customer: "Sari Dewi",
    status: "Completed",
    total: 250000,
    date: "2026-05-18"
  },
  {
    id: "ORD049",
    customer: "Tono Wijaya",
    status: "Pending",
    total: 220000,
    date: "2026-05-19"
  },
  {
    id: "ORD050",
    customer: "Umar Faruq",
    status: "Completed",
    total: 340000,
    date: "2026-05-20"
  },
    {
    id: "ORD051",
    customer: "Vina Lestari",
    status: "Cancelled",
    total: 160000,
    date: "2026-05-21"
  },
  {
    id: "ORD052",
    customer: "Wawan Setiawan",
    status: "Completed",
    total: 290000,
    date: "2026-05-22"
  },
  {
    id: "ORD053",
    customer: "Xavier Putra",
    status: "Pending",
    total: 200000,
    date: "2026-05-23"
  },
  {
    id: "ORD054",
    customer: "Yuni Kartika",
    status: "Completed",
    total: 270000,
    date: "2026-05-24"
  },
  {
    id: "ORD055",
    customer: "Zaki Maulana",
    status: "Cancelled",
    total: 110000,
    date: "2026-05-25"
  },
  {
    id: "ORD056",
    customer: "Agus Salim",
    status: "Completed",
    total: 320000,
    date: "2026-05-26"
  },
  {
    id: "ORD057",
    customer: "Bella Putri",
    status: "Pending",
    total: 180000,
    date: "2026-05-27"
  },
  {
    id: "ORD058",
    customer: "Chandra Wijaya",
    status: "Completed",
    total: 300000,
    date: "2026-05-28"
  },
  {
    id: "ORD059",
    customer: "Dina Sari",
    status: "Cancelled",
    total: 130000,
    date: "2026-05-29"
  },
  {
    id: "ORD060",
    customer: "Eko Prasetyo",
    status: "Completed",
    total: 350000,
    date: "2026-05-30"
  },

  {
    id: "ORD061",
    customer: "Andi Saputra",
    status: "Pending",
    total: 210000,
    date: "2026-06-01"
  },
  {
    id: "ORD062",
    customer: "Budi Santoso",
    status: "Completed",
    total: 280000,
    date: "2026-06-02"
  },
  {
    id: "ORD063",
    customer: "Citra Dewi",
    status: "Cancelled",
    total: 150000,
    date: "2026-06-03"
  },
  {
    id: "ORD064",
    customer: "Dedi Pratama",
    status: "Completed",
    total: 330000,
    date: "2026-06-04"
  },
  {
    id: "ORD065",
    customer: "Eka Putri",
    status: "Pending",
    total: 220000,
    date: "2026-06-05"
  },
  {
    id: "ORD066",
    customer: "Fajar Nugroho",
    status: "Cancelled",
    total: 160000,
    date: "2026-06-06"
  },
  {
    id: "ORD067",
    customer: "Gina Lestari",
    status: "Completed",
    total: 290000,
    date: "2026-06-07"
  },
  {
    id: "ORD068",
    customer: "Hendra Wijaya",
    status: "Pending",
    total: 200000,
    date: "2026-06-08"
  },
  {
    id: "ORD069",
    customer: "Indah Permata",
    status: "Completed",
    total: 260000,
    date: "2026-06-09"
  },
  {
    id: "ORD070",
    customer: "Joko Susilo",
    status: "Cancelled",
    total: 140000,
    date: "2026-06-10"
  },

  {
    id: "ORD071",
    customer: "Kartika Sari",
    status: "Completed",
    total: 340000,
    date: "2026-06-11"
  },
  {
    id: "ORD072",
    customer: "Lukman Hakim",
    status: "Pending",
    total: 170000,
    date: "2026-06-12"
  },
  {
    id: "ORD073",
    customer: "Maya Putri",
    status: "Completed",
    total: 300000,
    date: "2026-06-13"
  },
  {
    id: "ORD074",
    customer: "Nanda Prasetyo",
    status: "Cancelled",
    total: 150000,
    date: "2026-06-14"
  },
  {
    id: "ORD075",
    customer: "Oki Ramadhan",
    status: "Pending",
    total: 210000,
    date: "2026-06-15"
  },
  {
    id: "ORD076",
    customer: "Putri Ayu",
    status: "Completed",
    total: 320000,
    date: "2026-06-16"
  },
  {
    id: "ORD077",
    customer: "Rian Saputra",
    status: "Cancelled",
    total: 160000,
    date: "2026-06-17"
  },
  {
    id: "ORD078",
    customer: "Sari Dewi",
    status: "Completed",
    total: 270000,
    date: "2026-06-18"
  },
  {
    id: "ORD079",
    customer: "Tono Wijaya",
    status: "Pending",
    total: 230000,
    date: "2026-06-19"
  },
  {
    id: "ORD080",
    customer: "Umar Faruq",
    status: "Completed",
    total: 360000,
    date: "2026-06-20"
  },

  {
    id: "ORD081",
    customer: "Vina Lestari",
    status: "Cancelled",
    total: 170000,
    date: "2026-06-21"
  },
  {
    id: "ORD082",
    customer: "Wawan Setiawan",
    status: "Completed",
    total: 300000,
    date: "2026-06-22"
  },
  {
    id: "ORD083",
    customer: "Xavier Putra",
    status: "Pending",
    total: 210000,
    date: "2026-06-23"
  },
  {
    id: "ORD084",
    customer: "Yuni Kartika",
    status: "Completed",
    total: 280000,
    date: "2026-06-24"
  },
  {
    id: "ORD085",
    customer: "Zaki Maulana",
    status: "Cancelled",
    total: 140000,
    date: "2026-06-25"
  },
  {
    id: "ORD086",
    customer: "Agus Salim",
    status: "Completed",
    total: 330000,
    date: "2026-06-26"
  },
  {
    id: "ORD087",
    customer: "Bella Putri",
    status: "Pending",
    total: 190000,
    date: "2026-06-27"
  },
  {
    id: "ORD088",
    customer: "Chandra Wijaya",
    status: "Completed",
    total: 310000,
    date: "2026-06-28"
  },
  {
    id: "ORD089",
    customer: "Dina Sari",
    status: "Cancelled",
    total: 150000,
    date: "2026-06-29"
  },
  {
    id: "ORD090",
    customer: "Eko Prasetyo",
    status: "Completed",
    total: 370000,
    date: "2026-06-30"
  },

  {
    id: "ORD091",
    customer: "Andi Saputra",
    status: "Pending",
    total: 220000,
    date: "2026-07-01"
  },
  {
    id: "ORD092",
    customer: "Budi Santoso",
    status: "Completed",
    total: 300000,
    date: "2026-07-02"
  },
  {
    id: "ORD093",
    customer: "Citra Dewi",
    status: "Cancelled",
    total: 160000,
    date: "2026-07-03"
  },
  {
    id: "ORD094",
    customer: "Dedi Pratama",
    status: "Completed",
    total: 340000,
    date: "2026-07-04"
  },
  {
    id: "ORD095",
    customer: "Eka Putri",
    status: "Pending",
    total: 230000,
    date: "2026-07-05"
  },
  {
    id: "ORD096",
    customer: "Fajar Nugroho",
    status: "Cancelled",
    total: 170000,
    date: "2026-07-06"
  },
  {
    id: "ORD097",
    customer: "Gina Lestari",
    status: "Completed",
    total: 310000,
    date: "2026-07-07"
  },
  {
    id: "ORD098",
    customer: "Hendra Wijaya",
    status: "Pending",
    total: 220000,
    date: "2026-07-08"
  },
  {
    id: "ORD099",
    customer: "Indah Permata",
    status: "Completed",
    total: 280000,
    date: "2026-07-09"
  },
  {
    id: "ORD100",
    customer: "Joko Susilo",
    status: "Cancelled",
    total: 150000,
    date: "2026-07-10"
  },

  {
    id: "ORD101",
    customer: "Kartika Sari",
    status: "Completed",
    total: 350000,
    date: "2026-07-11"
  },
  {
    id: "ORD102",
    customer: "Lukman Hakim",
    status: "Pending",
    total: 180000,
    date: "2026-07-12"
  },
  {
    id: "ORD103",
    customer: "Maya Putri",
    status: "Completed",
    total: 320000,
    date: "2026-07-13"
  },
  {
    id: "ORD104",
    customer: "Nanda Prasetyo",
    status: "Cancelled",
    total: 170000,
    date: "2026-07-14"
  },
  {
    id: "ORD105",
    customer: "Oki Ramadhan",
    status: "Pending",
    total: 240000,
    date: "2026-07-15"
  },
  {
    id: "ORD106",
    customer: "Putri Ayu",
    status: "Completed",
    total: 340000,
    date: "2026-07-16"
  },
  {
    id: "ORD107",
    customer: "Rian Saputra",
    status: "Cancelled",
    total: 180000,
    date: "2026-07-17"
  },
  {
    id: "ORD108",
    customer: "Sari Dewi",
    status: "Completed",
    total: 290000,
    date: "2026-07-18"
  },
  {
    id: "ORD109",
    customer: "Tono Wijaya",
    status: "Pending",
    total: 250000,
    date: "2026-07-19"
  },
  {
    id: "ORD110",
    customer: "Umar Faruq",
    status: "Completed",
    total: 380000,
    date: "2026-07-20"
  },

  {
    id: "ORD111",
    customer: "Vina Lestari",
    status: "Cancelled",
    total: 190000,
    date: "2026-07-21"
  },
  {
    id: "ORD112",
    customer: "Wawan Setiawan",
    status: "Completed",
    total: 310000,
    date: "2026-07-22"
  },
  {
    id: "ORD113",
    customer: "Xavier Putra",
    status: "Pending",
    total: 220000,
    date: "2026-07-23"
  },
  {
    id: "ORD114",
    customer: "Yuni Kartika",
    status: "Completed",
    total: 300000,
    date: "2026-07-24"
  },
  {
    id: "ORD115",
    customer: "Zaki Maulana",
    status: "Cancelled",
    total: 160000,
    date: "2026-07-25"
  },
  {
    id: "ORD116",
    customer: "Agus Salim",
    status: "Completed",
    total: 350000,
    date: "2026-07-26"
  },
  {
    id: "ORD117",
    customer: "Bella Putri",
    status: "Pending",
    total: 230000,
    date: "2026-07-27"
  },
  {
    id: "ORD118",
    customer: "Chandra Wijaya",
    status: "Completed",
    total: 320000,
    date: "2026-07-28"
  },
  {
    id: "ORD119",
    customer: "Dina Sari",
    status: "Cancelled",
    total: 170000,
    date: "2026-07-29"
  },
  {
    id: "ORD120",
    customer: "Eko Prasetyo",
    status: "Completed",
    total: 400000,
    date: "2026-07-30"
  }
];

export default orders;