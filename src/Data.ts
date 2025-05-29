export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "/home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/profile",
        icon: "/user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "/user.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "/product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "/order.svg",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "/post2.svg",
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: "/element.svg",
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: "/note.svg",
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: "/form.svg",
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: "/calendar.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: "/setting.svg",
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: "/backup.svg",
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "/chart.svg",
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "/log.svg",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "Elva McDonald",
    email: "elva@gmail.com",
    amount: "3.668",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Linnie Nelson",
    email: "linnie@gmail.com",
    amount: "3.256",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Brent Reeves",
    email: "brent@gmail.com",
    amount: "2.998",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Adeline Watson",
    email: "adeline@gmail.com",
    amount: "2.512",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Juan Harrington",
    email: "juan@gmail.com",
    amount: "2.134",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Augusta McGee",
    email: "augusta@gmail.com",
    amount: "1.932",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Angel Thomas",
    email: "angel@gmail.com",
    amount: "1.560",
  },
];

export const chartBoxUser = {
  color: "#6254ff",
  icon: "/chart-line-up.png",
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/chart-line-up.png",
  title: "Total Products",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/chart-line-up.png",
  title: "Total Revenue",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "#ff8042",
  icon: "/chart-line-up.png",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#6254ff",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4,
    },
    {
      name: "Mon",
      visit: 12,
    },
    {
      name: "Tue",
      visit: 1,
    },
    {
      name: "Wed",
      visit: 2,
    },
    {
      name: "Thu",
      visit: 9,
    },
    {
      name: "Fri",
      visit: 5,
    },
    {
      name: "Sat",
      visit: 20,
    },
  ],
};

export const userRows = [
  {
    _id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Hubbard",
    firstName: "Eula",
    email: "kewez@@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    _id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Manning",
    firstName: "Stella",
    email: "comhuhmit@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    _id: 3,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Greer",
    firstName: "Mary",
    email: "ujudokon@hottmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    _id: 4,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williamson",
    firstName: "Mildred",
    email: "tinhavabe@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    _id: 5,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gross",
    firstName: "Jose",
    email: "gobtagbes@yahoo.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    _id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Sharp",
    firstName: "Jeremy",
    email: "vulca.eder@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    _id: 7,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Lowe",
    firstName: "Christina",
    email: "reso.bilic@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    _id: 8,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dean",
    firstName: "Garrett",
    email: "codaic@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    _id: 9,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Parsons",
    firstName: "Leah",
    email: "uzozor@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    _id: 10,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Reid",
    firstName: "Elnora",
    email: "tuhkabapu@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    _id: 11,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dunn",
    firstName: "Gertrude",
    email: "gibo@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    _id: 12,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williams",
    firstName: "Mark",
    email: "tic.harvey@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    _id: 13,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Cruz",
    firstName: "Charlotte",
    email: "ceuc@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    _id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Harper",
    firstName: "Sara",
    email: "bafuv@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    _id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Griffin",
    firstName: "Eric",
    email: "ubi@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
];

export const products = [
  {
    _id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "Sony",
    price: "$250.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    _id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    title: "Dell Laptop KR211822",
    color: "black",
    producer: "Dell",
    price: "$499.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    _id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "Samsung TV 4K SmartTV",
    color: "gray",
    producer: "Samsung",
    price: "$999.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    _id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Apple Iphone 14 Pro Max",
    color: "white",
    producer: "Apple",
    price: "$799.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    _id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    title: "Philips Hue Play Gradient",
    color: "rainbow",
    producer: "Philips",
    price: "$39.99",
    createdAt: "01.02.2023",
  },
  {
    _id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX Master 3",
    color: "black",
    producer: "Logitech",
    price: "$59.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    _id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    title: "Rode Podcast Microphone",
    color: "gray",
    producer: "Rode",
    price: "$119.49",
    createdAt: "01.02.2023",
  },
  {
    _id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    color: "white",
    producer: "Toshiba",
    price: "$899.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    _id: 9,
    img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    title: "Sony Bravia KDL-47W805A",
    color: "black",
    producer: "Sony",
    price: "$970.49",
    createdAt: "01.02.2023",
  },
  {
    _id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    title: "Acer Laptop 16 KL-4804",
    color: "black",
    producer: "Acer",
    price: "$599.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
];

export const orders = [
{
    _id: 1,
    productId: 3,
    productTitle: "Samsung TV 4K SmartTV",
    customerName: "Khaled Hassan",
    quantity: 1,
    totalPrice: "$999.49",
    orderDate: "10.03.2025",
    status: "delivered"
  },
{
    _id: 2,
    productId: 1,
    productTitle: "Playstation 5 Digital Edition",
    customerName: "Layla Farah",
    quantity: 3,
    totalPrice: "$752.97",
    orderDate: "28.04.2025",
    status: "cancelled"
  },
{
    _id: 3,
    productId: 3,
    productTitle: "Samsung TV 4K SmartTV",
    customerName: "Khaled Malik",
    quantity: 2,
    totalPrice: "$1998.98",
    orderDate: "04.10.2023",
    status: "delivered"
  },
{
    _id: 4,
    productId: 6,
    productTitle: "Logitech MX Master 3",
    customerName: "Nour Khan",
    quantity: 2,
    totalPrice: "$118.98",
    orderDate: "26.05.2023",
    status: "shipped"
  },
{
    _id: 5,
    productId: 3,
    productTitle: "Samsung TV 4K SmartTV",
    customerName: "Ahmed Farah",
    quantity: 3,
    totalPrice: "$2998.47",
    orderDate: "15.02.2023",
    status: "shipped"
  },
{
    _id: 6,
    productId: 4,
    productTitle: "Apple Iphone 14 Pro Max",
    customerName: "Fatima Tariq",
    quantity: 2,
    totalPrice: "$1598.98",
    orderDate: "09.12.2023",
    status: "pending"
  },
{
    _id: 7,
    productId: 2,
    productTitle: "Dell Laptop KR211822",
    customerName: "Zainab Farah",
    quantity: 1,
    totalPrice: "$499.99",
    orderDate: "17.11.2024",
    status: "delivered"
  },
{
    _id: 8,
    productId: 7,
    productTitle: "Rode Podcast Microphone",
    customerName: "Nour Osman",
    quantity: 3,
    totalPrice: "$358.47",
    orderDate: "15.01.2024",
    status: "cancelled"
  },
{
    _id: 9,
    productId: 2,
    productTitle: "Dell Laptop KR211822",
    customerName: "Zainab Ibrahim",
    quantity: 1,
    totalPrice: "$499.99",
    orderDate: "18.04.2024",
    status: "delivered"
  },
{
    _id: 10,
    productId: 5,
    productTitle: "Philips Hue Play Gradient",
    customerName: "Mustafa Abbas",
    quantity: 2,
    totalPrice: "$79.98",
    orderDate: "01.03.2025",
    status: "pending"
  },
{
    _id: 11,
    productId: 7,
    productTitle: "Rode Podcast Microphone",
    customerName: "Hassan Zahra",
    quantity: 3,
    totalPrice: "$358.47",
    orderDate: "31.01.2023",
    status: "cancelled"
  },
{
    _id: 12,
    productId: 6,
    productTitle: "Logitech MX Master 3",
    customerName: "Mustafa Zahra",
    quantity: 2,
    totalPrice: "$118.98",
    orderDate: "21.05.2023",
    status: "pending"
  },
{
    _id: 13,
    productId: 4,
    productTitle: "Apple Iphone 14 Pro Max",
    customerName: "Zainab Khan",
    quantity: 2,
    totalPrice: "$1598.98",
    orderDate: "27.09.2024",
    status: "shipped"
  },
{
    _id: 14,
    productId: 4,
    productTitle: "Apple Iphone 14 Pro Max",
    customerName: "Zainab Malik",
    quantity: 3,
    totalPrice: "$2398.47",
    orderDate: "04.05.2025",
    status: "cancelled"
  },
{
    _id: 15,
    productId: 1,
    productTitle: "Playstation 5 Digital Edition",
    customerName: "Khaled Qureshi",
    quantity: 2,
    totalPrice: "$501.98",
    orderDate: "12.03.2024",
    status: "cancelled"
  },
{
    _id: 16,
    productId: 1,
    productTitle: "Playstation 5 Digital Edition",
    customerName: "Khaled Tariq",
    quantity: 1,
    totalPrice: "$250.99",
    orderDate: "22.08.2024",
    status: "delivered"
  },
{
    _id: 17,
    productId: 2,
    productTitle: "Dell Laptop KR211822",
    customerName: "Hassan Zahra",
    quantity: 3,
    totalPrice: "$1499.97",
    orderDate: "18.06.2024",
    status: "pending"
  },
{
    _id: 18,
    productId: 1,
    productTitle: "Playstation 5 Digital Edition",
    customerName: "Hassan Siddiqui",
    quantity: 2,
    totalPrice: "$501.98",
    orderDate: "22.05.2023",
    status: "delivered"
  },
{
    _id: 19,
    productId: 4,
    productTitle: "Apple Iphone 14 Pro Max",
    customerName: "Mustafa Siddiqui",
    quantity: 1,
    totalPrice: "$799.49",
    orderDate: "25.10.2024",
    status: "cancelled"
  },
{
    _id: 20,
    productId: 4,
    productTitle: "Apple Iphone 14 Pro Max",
    customerName: "Ahmed Said",
    quantity: 1,
    totalPrice: "$799.49",
    orderDate: "09.12.2024",
    status: "cancelled"
  }
];

export const posts = [
{
    _id: 1,
    title: "Toshiba Split AC 2 Tips and Tricks",
    content: "Discover hidden features and expert advice for your Toshiba Split AC 2. These tips will help you become a power user.",
    author: "Industry Analyst",
    createdAt: "08.01.2023",
    tags: ["tech", "tips", "home", "video", "gadgets"]
  },
{
    _id: 2,
    title: "The Ultimate Guide to Apple Iphone 14 Pro Max",
    content: "This comprehensive guide covers everything you need to know about the Apple Iphone 14 Pro Max, from setup to advanced usage.",
    author: "Tech Guru",
    createdAt: "08.04.2025",
    tags: ["smart home", "deals", "audio", "comparison", "video"]
  },
{
    _id: 3,
    title: "How to Get the Most Out of Your Playstation 5 Digital Edition",
    content: "Own a Playstation 5 Digital Edition? Learn some useful tips and tricks to maximize its potential and enhance your experience.",
    author: "Tech Guru",
    createdAt: "14.03.2025",
    tags: ["audio", "deals", "smart home", "tips", "comparison"]
  },
{
    _id: 4,
    title: "Top 5 Features of the Dell Laptop KR211822",
    content: "The Dell Laptop KR211822 comes packed with features. We highlight the top 5 things you need to know about this exciting product.",
    author: "Admin",
    createdAt: "05.04.2024",
    tags: ["tips", "gaming", "deals"]
  },
{
    _id: 5,
    title: "Philips Hue Play Gradient Review: Is It Worth It?",
    content: "We recently got our hands on the Philips Hue Play Gradient. Here's our detailed review, covering design, functionality, and value for money.",
    author: "Support Team",
    createdAt: "19.08.2023",
    tags: ["lifestyle", "audio", "news", "review", "mobile"]
  },
{
    _id: 6,
    title: "Top 5 Features of the Rode Podcast Microphone",
    content: "The Rode Podcast Microphone comes packed with features. We highlight the top 5 things you need to know about this exciting product.",
    author: "Gamer Zone",
    createdAt: "21.03.2025",
    tags: ["tips", "home", "guide", "mobile", "lifestyle"]
  },
{
    _id: 7,
    title: "Samsung TV 4K SmartTV Tips and Tricks",
    content: "Discover hidden features and expert advice for your Samsung TV 4K SmartTV. These tips will help you become a power user.",
    author: "Support Team",
    createdAt: "25.06.2023",
    tags: ["lifestyle", "gadgets"]
  },
{
    _id: 8,
    title: "Exploring the New Philips Hue Play Gradient",
    content: "In this post, we take a closer look at the features and performance of the Philips Hue Play Gradient. Find out if it meets your needs.",
    author: "Product Reviewer",
    createdAt: "18.07.2024",
    tags: ["home", "lifestyle"]
  },
{
    _id: 9,
    title: "Samsung TV 4K SmartTV vs Logitech MX Master 3: Which is Better?",
    content: "Choosing between the Samsung TV 4K SmartTV and the Logitech MX Master 3? This comparison guide breaks down the key differences to help you decide.",
    author: "Home Expert",
    createdAt: "23.09.2023",
    tags: ["gadgets", "computer", "tech", "smart home"]
  },
{
    _id: 10,
    title: "Why We Love the Philips Hue Play Gradient",
    content: "There are many reasons to love the Philips Hue Play Gradient. We share our favorite aspects and why we think it's a great choice.",
    author: "Tech Guru",
    createdAt: "02.03.2025",
    tags: ["deals", "review", "computer", "audio", "guide"]
  },
{
    _id: 11,
    title: "A Deep Dive into Dell Laptop KR211822 Technology",
    content: "Let's explore the innovative technology behind the Dell Laptop KR211822. Understand what makes it stand out from the competition.",
    author: "Tech Guru",
    createdAt: "25.07.2024",
    tags: ["video", "updates", "review"]
  },
{
    _id: 12,
    title: "How to Get the Most Out of Your Playstation 5 Digital Edition",
    content: "Own a Playstation 5 Digital Edition? Learn some useful tips and tricks to maximize its potential and enhance your experience.",
    author: "Gamer Zone",
    createdAt: "13.01.2024",
    tags: ["tips", "gadgets", "computer", "lifestyle"]
  },
{
    _id: 13,
    title: "Playstation 5 Digital Edition vs Apple Iphone 14 Pro Max: Which is Better?",
    content: "Choosing between the Playstation 5 Digital Edition and the Apple Iphone 14 Pro Max? This comparison guide breaks down the key differences to help you decide.",
    author: "Home Expert",
    createdAt: "05.11.2023",
    tags: ["tech", "comparison"]
  },
{
    _id: 14,
    title: "Logitech MX Master 3 Tips and Tricks",
    content: "Discover hidden features and expert advice for your Logitech MX Master 3. These tips will help you become a power user.",
    author: "Home Expert",
    createdAt: "07.04.2023",
    tags: ["audio", "tech"]
  },
{
    _id: 15,
    title: "The Ultimate Guide to Toshiba Split AC 2",
    content: "This comprehensive guide covers everything you need to know about the Toshiba Split AC 2, from setup to advanced usage.",
    author: "Industry Analyst",
    createdAt: "28.01.2025",
    tags: ["home", "deals", "smart home", "audio", "guide"]
  },
{
    _id: 16,
    title: "How to Get the Most Out of Your Logitech MX Master 3",
    content: "Own a Logitech MX Master 3? Learn some useful tips and tricks to maximize its potential and enhance your experience.",
    author: "Admin",
    createdAt: "25.02.2023",
    tags: ["video", "computer"]
  },
{
    _id: 17,
    title: "Top 5 Features of the Toshiba Split AC 2",
    content: "The Toshiba Split AC 2 comes packed with features. We highlight the top 5 things you need to know about this exciting product.",
    author: "Support Team",
    createdAt: "04.02.2023",
    tags: ["news", "smart home", "tips", "updates", "mobile"]
  },
{
    _id: 18,
    title: "Toshiba Split AC 2 Review: Is It Worth It?",
    content: "We recently got our hands on the Toshiba Split AC 2. Here's our detailed review, covering design, functionality, and value for money.",
    author: "Product Reviewer",
    createdAt: "21.05.2025",
    tags: ["updates", "comparison"]
  },
{
    _id: 19,
    title: "Playstation 5 Digital Edition vs Philips Hue Play Gradient: Which is Better?",
    content: "Choosing between the Playstation 5 Digital Edition and the Philips Hue Play Gradient? This comparison guide breaks down the key differences to help you decide.",
    author: "Gamer Zone",
    createdAt: "02.09.2023",
    tags: ["lifestyle", "smart home", "deals"]
  },
{
    _id: 20,
    title: "Exploring the New Philips Hue Play Gradient",
    content: "In this post, we take a closer look at the features and performance of the Philips Hue Play Gradient. Find out if it meets your needs.",
    author: "Tech Guru",
    createdAt: "23.06.2023",
    tags: ["gadgets", "lifestyle", "tech"]
  }
];


export const singleUser = {
  _id: "1",
  title: "John Doe",
  img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  info: {
    username: "Johndoe99",
    fullname: "John Doe",
    email: "johndoe@gmail.com",
    phone: "123 456 789",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#6254ff" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "John Doe added 3 items into their wishlist",
      time: "1 week ago",
    },
    {
      text: "John Doe purchased Sony Bravia KD-32w800",
      time: "2 weeks ago",
    },
    {
      text: "John Doe reviewed a product",
      time: "1 month ago",
    },
    {
      text: "John Doe added 1 items into their wishlist",
      time: "1 month ago",
    },
    {
      text: "John Doe reviewed a product",
      time: "2 months ago",
    },
  ],
};
export const singleProduct = {
  _id: "1",
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#6254ff" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Mike Doe purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      text: "Anna Doe reviewed the product",
      time: "1 month ago",
    },
    {
      text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Helen Doe reviewed the product",
      time: "2 months ago",
    },
  ],
};