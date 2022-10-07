const  Books = [
  {
    title: "OutLawed",
    id: 1,
    url: "https://s26162.pcdn.co/wp-content/uploads/2020/12/91RmVwAyYpL-674x1024.jpg",
    author: "Anna North",
    year_written: 1814,
    edition: "Penguin",
    price: 18.2,
  },
  {
    title: "Mona",
    id: 2,
    url: "https://s26162.pcdn.co/wp-content/uploads/2021/03/9780374211899_c46f3.jpeg",
    author: "Pola Olaixarao",
    year_written: 1865,
    edition: "Penguin",
    price: 12.7,
  },
  {
    title: "With Teeth",
    id: 3,
    url: "https://s26162.pcdn.co/wp-content/uploads/2020/12/image-1-679x1024.jpg",
    author: "Kristen Arnett",
    year_written: 1875,
    edition: "Penguin",
    price: 13.5,
  },
  {
    title: "After the Sun",
    id: 4,
    url: "https://s26162.pcdn.co/wp-content/uploads/2021/11/81awmLv4S4S-652x1024.jpg",
    author: "Jonas Eika",
    year_written: 1925,
    edition: "Harcourt Brace",
    price: 25,
  },
  {
    title: "Speak, Okinawa",
    id: 5,
    url: "https://s26162.pcdn.co/wp-content/uploads/2021/02/71QrVb8KJkL-706x1024.jpg",
    author: "Elizabeth Miki Brina",
    year_written: 1999,
    edition: "Harcourt Brace",
    price: 12.35,
  },
  {
    title: "My Year Abroad",
    id: 6,
    url: "https://s26162.pcdn.co/wp-content/uploads/2020/12/91HFMgnZCbL-678x1024.jpg",
    author: "Chang Rae-Lee",
    year_written: 1865,
    edition: "Penguin",
    price: 5.76,
  },
  {
    title: "Falling",
    id: 7,
    url: "https://s26162.pcdn.co/wp-content/uploads/2021/07/56614951.jpg",
    author: "T.J Newman",
    year_written: 1870,
    edition: "Random House",
    price: 5.75,
  },
  {
    title: "The Double Trio",
    id: 8,
    url: "https://s26162.pcdn.co/wp-content/uploads/2021/04/200623_Double_Trio_1-01-copy.jpg",
    author: "Nathaniel Mackey",
    year_written: 1862,
    edition: "Random House",
    price: 7.75,
  },
  {
    title: "The Water Statues",
    id: 9,
    url: "https://s26162.pcdn.co/wp-content/uploads/2021/09/9780811229753-copy.jpg",
    author: "Fleur Jaeggy, tr. Gini Alhadeff",
    year_written: 1922,
    edition: "Penguin",
    price: 29,
  },
  {
    title:"The Shimmering State",
    id: 10,
    url: "https://s26162.pcdn.co/wp-content/uploads/2021/08/the-shimmering-state_westgate-678x1024.jpeg",
    author: "Meredith Westgate",
    year_written: 2000,
    edition: "Harcourt Brace",
    price: 19.95,
  },
  {
    title: "Crying in H Mart",
    id: 11,
    url: "https://s26162.pcdn.co/wp-content/uploads/2021/04/91g9WrIwBIL-693x1024.jpg",
    author: "Michelle Zauner",
    year_written: 1967,
    edition: "Harper  Perennial",
    price: 14.0,
  },
  {
    title: "Machete",
    id: 12,
    url: "https://s26162.pcdn.co/wp-content/uploads/2021/11/Unknown-712x1024.png",
    author: "Tomás Q. Morín",
    year_written: 1603,
    edition: "Signet  Classics",
    price: 7.95,
  },
  {
    title: "Harrow",
    id: 13,
    url: "https://s26162.pcdn.co/wp-content/uploads/2021/06/71XSZd8kBXL-693x1024.jpg",
    author: "Joy Williams",
    year_written: 2000,
    edition: "Signet  Classics",
    price: 10.50,
  },
  {
    title: "Pessoa: A Biography",
    id: 14,
    url: "https://s26162.pcdn.co/wp-content/uploads/2021/07/NORTON_0713_Pessoa_AD-Steve-Attardo_Design-by-Yang-Kim.jpg",
    author: "Joy Williams",
    year_written: 2010,
    edition: "Penguin",
    price: 18,
  },
  {
    title: "Milk Fed",
    id: 15,
    url: "https://s26162.pcdn.co/wp-content/uploads/2021/12/54304105.jpg",
    author: "Melissa Border",
    year_written: 2010,
    edition: "Penguin",
    price: 20,
  },
  {
    title: "LASER WRITER II",
    id: 16,
    url: "https://s26162.pcdn.co/wp-content/uploads/2021/06/9780374602574.jpg",
    author: "Tamara Shopsin",
    year_written: 2010,
    edition: "Penguin",
    price: 13.50,
  },
  {
    title: "Orwell's Roses",
    id: 17,
    url: "https://s26162.pcdn.co/wp-content/uploads/2021/10/roses_custom-259c8d962954453264115469e338e2bacb92d23b.jpg",
    author: "Rebecca Solnit",
    year_written: 2010,
    edition: "Penguin",
    price: 35,
  },
  {
    title: "God of Mercy",
    id: 18,
    url: "https://s26162.pcdn.co/wp-content/uploads/2021/11/god-of-mercy_okezie-nwoka-678x1024.jpeg",
    author: "Okezie Nwoka",
    year_written: 2010,
    edition: "Penguin",
    price: 25.99,
  },
  {
    title: "O",
    id: 19,
    url: "https://s26162.pcdn.co/wp-content/uploads/2021/12/81qh1AQVseL._SL1500_.jpg",
    author: "Stewen  Caroll",
    year_written: 2010,
    edition: "Penguin",
    price: 19.99,
  },
  {
    title: "Civilizations",
    id: 20,
    url: "https://s26162.pcdn.co/wp-content/uploads/2021/06/91jwAmyjL2S-668x1024.jpg",
    author: "Sam Taylor",
    year_written: 2010,
    edition: "Penguin",
    price: 9.99,
  }
];
export default Books;