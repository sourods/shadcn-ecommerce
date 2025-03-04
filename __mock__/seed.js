
const categories = [
    {
        category: 'women',
        type: 'shirts',
        items: [
            'https://images.unsplash.com/photo-1616006897093-5e4635c0de35',
            'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8',
            'https://images.unsplash.com/photo-1592278743983-1bdf837dd459',
            'https://images.unsplash.com/photo-1611679716683-20203c9b0f02',
            'https://images.unsplash.com/photo-1589902818128-b557d782c2d4',
            'https://images.unsplash.com/photo-1544274270-3e0f956a2556'
        ]
    },
    {
        category: 'women',
        type: 'jeans',
        items: [
            'https://images.unsplash.com/photo-1578693082747-50c396cacd81',
            'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec',
            'https://images.unsplash.com/photo-1616178193482-4dad15347c26',
            'https://images.unsplash.com/photo-1541099649105-f69ad21f3246',
        ]
    },
    {
        category: 'women',
        type: 'trousers',
        items: [
            'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1',
        ]
    },
    {
        category: 'men',
        type: 'shirts',
        items: [
            'https://images.unsplash.com/photo-1618517351616-38fb9c5210c6',
            'https://images.unsplash.com/photo-1627225924765-552d49cf47ad',
            'https://images.unsplash.com/photo-1571945153237-4929e783af4a',
            'https://images.unsplash.com/photo-1613447326896-c7b8a0ab9b43',
            'https://images.unsplash.com/photo-1624373607006-348f61ea2d76',
        ]
    },
    {
        category: 'men',
        type: 'jeans',
        items: [
            'https://images.unsplash.com/photo-1582552938357-32b906df40cb',
            'https://images.unsplash.com/photo-1511196044526-5cb3bcb7071b'
        ]
    },
    {
        category: 'men',
        type: 'trousers',
        items: [
            'https://images.unsplash.com/photo-1473966968600-fa801b869a1a',
            'https://images.unsplash.com/photo-1514311548104-ae305aac4688'
        ]
    },
    {
        category: 'unisex',
        type: 'jeans',
        items: [
            'https://plus.unsplash.com/premium_photo-1690820318676-1609f3cc3d8f',
        ]
    },
    {
        category: 'men',
        type: 'hoodies',
        items: [
            'https://images.unsplash.com/photo-1604638823130-f69b793242e4',
            'https://images.unsplash.com/photo-1609873177255-8b458ad2141e',
            'https://images.unsplash.com/photo-1600923678350-bffdd369a828',
            'https://images.unsplash.com/photo-1592485641225-bdbadeaa601e',
            'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5',
            'https://images.unsplash.com/photo-1615397587950-3cbb55f95b77',
            'https://images.unsplash.com/photo-1617171594207-430a01a9da3f'
        ]
    },
    {
        category: 'women',
        type: 'hoodies',
        items: [
            'https://images.unsplash.com/photo-1633292750937-120a94f5c2bb',
            'https://images.unsplash.com/photo-1592485641225-bdbadeaa601e',
            'https://images.unsplash.com/photo-1601396344868-31e008cd6e7c',
            'https://images.unsplash.com/photo-1553728437-e15abbe95e6b',
        ]
    },
    {
        category: 'women',
        type: 'shorts',
        items: [
            'https://images.unsplash.com/photo-1543331707-30e9129663e0',
            'https://plus.unsplash.com/premium_photo-1689371958019-cf543b5cd1b3',
            'https://images.unsplash.com/photo-1597844961694-d6b8729699e0',
            'https://images.unsplash.com/photo-1560843416-c5a05f7378ee',
            'https://images.unsplash.com/photo-1585145197502-8f36802f0a26',
            'https://images.unsplash.com/photo-1598522325074-042db73aa4e6'
        ]
    },
    {
        category: 'men',
        type: 'shorts',
        items: [
            'https://images.unsplash.com/photo-1522098427438-f10a7755aa86',
            'https://images.unsplash.com/photo-1617952385804-1da4f8d71ba9',
            'https://images.unsplash.com/photo-1617951907145-53f6eb87a3a3',
            'https://images.unsplash.com/photo-1617953644310-e690da9be982',
            'https://images.unsplash.com/photo-1602132664379-dd392de2854e',
        ]
    },
    {
        category: 'men',
        type: 'shoes',
        items: [
            'https://images.unsplash.com/photo-1491553895911-0055eca6402d',
            'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb',
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772',
            'https://images.unsplash.com/photo-1543508282-6319a3e2621f',
            'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77'
        ]
    },
    {
        category: 'women',
        type: 'shoes',
        items: [
            'https://images.unsplash.com/photo-1605732440685-d0654d81aa30',
            'https://images.unsplash.com/photo-1605408499391-6368c628ef42',
            'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a',
            'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95',
            'https://images.unsplash.com/photo-1543163521-1bf539c55dd2',
            'https://images.unsplash.com/photo-1605733513549-de9b150bd70d',
            'https://images.unsplash.com/photo-1494955464529-790512c65305'
        ]
    },
]

function generateUniqueId() {
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).slice(2, 5);
    return timestamp + randomString;
}

const products = categories.reduce((accumulator, categorie) => [...accumulator, categorie.items.map(item => ({
    _id: generateUniqueId(),
    name: `${categorie.gender} ${categorie.type}`,
    slug: `${categorie.gender}-${categorie.type}`,
    category: categorie.gender,
    type: categorie.type,
    price: (Math.random() * (70 - 30) + 30).toFixed(2),
    images: [
        item,
        "https://dummyimage.com/600x400/0033ff/fff.png&text=Product+!",
        "https://dummyimage.com/600x400/0033ff/fff.png&text=Product+!"
    ],
    description: "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla."
}))], [])

console.log(JSON.stringify(products))