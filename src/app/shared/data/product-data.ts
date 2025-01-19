import { IProduct } from "../types/product-d-t";

const product_data:IProduct[] = [
  {
    id: 1,
    img: 'assets/img/nyglo/1.jpeg', 
    trending:true,
    banner:true,
    related_images: [
      'assets/img/nyglo/1.jpeg',
      'assets/img/nyglo/1.jpeg',
      'assets/img/nyglo/1.jpeg'
    ],
    thumb_img: 'assets/img/nyglo/1.jpeg',
    banner_img:'assets/img/shop/banner/banner-big-1.jpg',
    parentCategory:'Decoration & Accessories',
    category: 'Accessories',
    brand: 'Sony',
    title: 'Nyglo New Diane',
    price: 1500,
    old_price: 2200,
    rating: 3,
    quantity:8,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'XL', 'XXL'],
    colors: ['Yellow', 'Blue', 'White','Ocean Blue'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 2,
    img:'assets/img/nyglo/2.jpeg',
    trending:true,
    related_images: [
      'assets/img/nyglo/2.jpeg',
      'assets/img/nyglo/2.jpeg',
      'assets/img/nyglo/2.jpeg'
    ],
    thumb_img: 'assets/img/nyglo/2.jpeg',
    parentCategory:'Lighting & Chair',
    category: 'Chair',
    brand: 'Sony',
    title: 'Nyglo javel',
    price: 900,
    old_price: 1100,
    rating: 4,
    quantity:5,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XL', 'L'],
    colors: ['White','Ocean Blue'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      }
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 3,
    img: 'assets/img/nyglo/5.jpeg',
    trending:true,
    banner:true,
    related_images: [
      'assets/img/nyglo/5.jpeg',
      'assets/img/nyglo/5.jpeg',
      'assets/img/nyglo/5.jpeg'
    ],
    thumb_img: 'assets/img/nyglo/5.jpeg',
    banner_img:'assets/img/shop/banner/banner-big-2.jpg',
    parentCategory:'Clothing & Oil',
    category: 'Clothing',
    brand: 'Panasonic',
    title: 'Nyglo Hone clean',
    price: 2300,
    old_price: 2500,
    rating: 5,
    quantity:7,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XXL', 'M'],
    colors: ['Orange','Green'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 4,
    img: 'assets/img/nyglo/8.jpeg',
    trending:true,
    discount:8,
    new:true,
    related_images: [
      'assets/img/nyglo/8.jpeg',
      'assets/img/nyglo/8.jpeg',
      'assets/img/nyglo/8.jpeg'
    ],
    thumb_img: 'assets/img/nyglo/8.jpeg',
    parentCategory:'Lighting & Chair',
    category: 'Lighting',
    brand: 'Panasonic',
    title: 'Nyglo scouring powder',
    price: 6700,
    old_price: 8000,
    rating: 4,
    quantity:8,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'M'],
    colors: ['Black','White'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 5,
    img: 'assets/img/nyglo/9.jpeg',
    trending:true,
    related_images: [
      'assets/img/nyglo/9.jpeg',
      'assets/img/nyglo/9.jpeg',
      'assets/img/nyglo/9.jpeg'
    ],
    thumb_img: 'assets/img/nyglo/9.jpeg',
    parentCategory:'Decoration & Accessories',
    category: 'Decoration',
    brand: 'Apple',
    title: 'Nyglo Air Freshener',
    price: 1800,
    old_price: 2000,
    rating: 4.5,
    quantity:10,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'XXL'],
    colors: ['Red','White'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 6,
    img: 'assets/img/nyglo/10.jpeg',
    trending:true,
    related_images: [
      'assets/img/nyglo/10.jpeg',
      'assets/img/nyglo/10.jpeg',
      'assets/img/nyglo/10.jpeg'
    ],
    thumb_img: 'assets/img/nyglo/10.jpeg',
    parentCategory:'FASHION FOR MEN’S',
    category: 'Shirt',
    brand: 'Apple',
    title: 'Nyglo Home clean Grand',
    price: 2700,
    old_price: 2900,
    rating: 4,
    quantity:11,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'XXL'],
    colors: ['Red','White'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 7,
    img: 'assets/img/nyglo/11.jpeg',
    trending:true,
    new:true,
    related_images: [
      'assets/img/nyglo/11.jpeg',
      'assets/img/nyglo/11.jpeg',
      'assets/img/nyglo/11.jpeg'
    ],
    thumb_img: 'assets/img/nyglo/11.jpeg',
    parentCategory:'Clothing & Oil',
    category: 'Oil',
    brand: 'Apple',
    title: 'Nyglo New Diane lime flavour',
    price: 3200,
    old_price: 3250,
    rating: 4,
    quantity:15,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XXL', 'M'],
    colors: ['Black','Green'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 8,
    img: 'assets/img/nyglo/12.jpeg',
    trending:true,
    related_images: [
      'assets/img/nyglo/12.jpeg',
      'assets/img/nyglo/12.jpeg',
      'assets/img/nyglo/12.jpeg'
    ],
    thumb_img: 'assets/img/nyglo/12.jpeg',
    parentCategory:'Decoration & Accessories',
    category: 'Decoration',
    brand: 'Samsung',
    title: 'Nyglo Mwimp glass cleaner',
    price: 3500,
    old_price: 3800,
    rating: 4,
    quantity:4,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XXL', 'M'],
    colors: ['Black','White'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 9,
    img: 'assets/img/nyglo/13.jpeg',
    discount:12,
    related_images: [
      'assets/img/nyglo/13.jpeg',
      'assets/img/nyglo/13.jpeg',
      'assets/img/nyglo/13.jpeg'
    ],
    thumb_img: 'assets/img/nyglo/13.jpeg',
    parentCategory:'Lighting & Chair',
    category: 'Chair',
    brand: 'Samsung',
    title: 'Nyglo Toilet Bowl Cleaner',
    price: 4000,
    rating: 4,
    quantity:3,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XL', 'L'],
    colors: ['Gray','White'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 10,
    img: 'assets/img/nyglo/15.jpeg',
    discount:25,
    related_images: [
      'assets/img/nyglo/15.jpeg',
      'assets/img/nyglo/15.jpeg',
      'assets/img/nyglo/15.jpeg'
    ],
    thumb_img: 'assets/img/nyglo/15.jpeg',
    parentCategory:'Clothing & Oil',
    category: 'Clothing',
    brand: 'Apple',
    title: "Nyglo Javel Bleach stain remover",
    price: 4200,
    rating: 4,
    quantity:6,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'XL'],
    colors: ['Gray','White'],
    weight: .28,
    dimension: '62 × 60 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },


  // {
  //   id: 11,
  //   img: 'assets/img/nyglo/11.jpeg',
  //   trending:true,
  //   discount:16,
  //   related_images: [
  //     'assets/img/nyglo/11.jpeg',
  //     'assets/img/nyglo/12.jpeg',
  //     'assets/img/nyglo/13.jpeg'
  //   ],
  //   thumb_img: 'assets/img/nyglo/9.jpeg',
  //   parentCategory:'Decoration & Accessories',
  //   category: 'Decoration',
  //   brand: 'Sony',
  //   title: "Cotton Twill Suit",
  //   price: 450,
  //   rating: 4,
  //   quantity:7,
  //   sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
  //   sizes: ['M', 'XXL'],
  //   colors: ['Red','Orange'],
  //   weight: .28,
  //   dimension: '62 × 60 × 12',
  //   reviews: [
  //     {
  //       img: 'assets/img/blog/comments/avater-1.png',
  //       name: 'Siarhei Dzenisenka',
  //       time: '3 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-2.png',
  //       name: 'Julias Roy',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-3.png',
  //       name: 'Arista Williamson',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //   ],
  //   details:{
  //     details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list:[
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.'
  //      ],
  //      details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
  //   }
  // },
  // {
  //   id: 12,
  //   img: 'assets/img/nyglo/12.jpeg',
  //   discount:8,
  //   new:true,
  //   related_images: [
  //     'assets/img/nyglo/12.jpeg',
  //     'assets/img/nyglo/13.jpeg',
  //     'assets/img/nyglo/14.jpeg'
  //   ],
  //   thumb_img: 'assets/img/nyglo/10.jpeg',
  //   parentCategory:'Decoration & Accessories',
  //   category: 'Accessories',
  //   brand: 'Panasonic',
  //   title: "Big sale canvas basket",
  //   price: 480,
  //   rating: 4,
  //   quantity:9,
  //   sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
  //   sizes: ['L', 'XL'],
  //   colors: ['Green','Orange'],
  //   weight: .28,
  //   dimension: '62 × 60 × 12',
  //   reviews: [
  //     {
  //       img: 'assets/img/blog/comments/avater-1.png',
  //       name: 'Siarhei Dzenisenka',
  //       time: '3 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-2.png',
  //       name: 'Julias Roy',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-3.png',
  //       name: 'Arista Williamson',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //   ],
  //   details:{
  //     details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list:[
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.'
  //      ],
  //      details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
  //   }
  // },
  // {
  //   id: 13,
  //   img: 'assets/img/nyglo/13.jpeg',
  //   discount:14,
  //   trending:true,
  //   related_images: [
  //     'assets/img/nyglo/13.jpeg',
  //     'assets/img/nyglo/14.jpeg',
  //     'assets/img/nyglo/15.jpeg'
  //   ],
  //   thumb_img: 'assets/img/nyglo/11.jpeg',
  //   parentCategory:'Lighting & Chair',
  //   category: 'Lighting',
  //   brand: 'Panasonic',
  //   title: "Adrianna Papell Women's",
  //   price: 370,
  //   rating: 3,
  //   quantity:11,
  //   sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
  //   sizes: ['XL', 'M'],
  //   colors: ['White','Orange'],
  //   weight: .28,
  //   dimension: '62 × 60 × 12',
  //   reviews: [
  //     {
  //       img: 'assets/img/blog/comments/avater-1.png',
  //       name: 'Siarhei Dzenisenka',
  //       time: '3 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-2.png',
  //       name: 'Julias Roy',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-3.png',
  //       name: 'Arista Williamson',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //   ],
  //   details:{
  //     details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list:[
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.'
  //      ],
  //      details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
  //   }
  // },
  // {
  //   id: 14,
  //   img: 'assets/img/nyglo/14.jpeg',
  //   discount:20,
  //   bestSeller:true,
  //   related_images: [
  //     'assets/img/nyglo/14.jpeg',
  //     'assets/img/nyglo/15.jpeg',
  //     'assets/img/nyglo/16.jpeg'
  //   ],
  //   thumb_img: 'assets/img/nyglo/13.jpeg',
  //   parentCategory:'Clothing & Oil',
  //   category: 'Clothing',
  //   brand: 'Sony',
  //   title: "Calvin Klein Women's",
  //   price: 269,
  //   rating: 5,
  //   quantity:8,
  //   sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
  //   sizes: ['XL'],
  //   colors: ['White','Black'],
  //   weight: .28,
  //   dimension: '62 × 60 × 12',
  //   reviews: [
  //     {
  //       img: 'assets/img/blog/comments/avater-1.png',
  //       name: 'Siarhei Dzenisenka',
  //       time: '3 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-2.png',
  //       name: 'Julias Roy',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-3.png',
  //       name: 'Arista Williamson',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //   ],
  //   details:{
  //     details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list:[
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.'
  //      ],
  //      details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
  //   }
  // },
  // {
  //   id: 15,
  //   img: 'assets/img/nyglo/15.jpeg',
  //   trending:true,
  //   related_images: [
  //     'assets/img/nyglo/15.jpeg',
  //     'assets/img/nyglo/16.jpeg',
  //     'assets/img/nyglo/18.jpeg'
  //   ],
  //   thumb_img: 'assets/img/nyglo/13.jpeg',
  //   big_img:'assets/img/shop/product/product-big-1.jpg',
  //   parentCategory:'Decoration & Accessories',
  //   category: 'Decoration',
  //   discount:10,
  //   brand: 'Apple',
  //   title: "Creative Design <br>Juicy Pendant Lamp",
  //   price: 180,
  //   rating: 5,
  //   quantity:10,
  //   sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
  //   sizes: ['XL','XXL'],
  //   colors: ['White','Black'],
  //   weight: .28,
  //   dimension: '62 × 60 × 12',
  //   reviews: [
  //     {
  //       img: 'assets/img/blog/comments/avater-1.png',
  //       name: 'Siarhei Dzenisenka',
  //       time: '3 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-2.png',
  //       name: 'Julias Roy',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-3.png',
  //       name: 'Arista Williamson',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //   ],
  //   details:{
  //     details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list:[
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.'
  //      ],
  //      details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
  //   }
  // },
  // {
  //   id: 16,
  //   img: 'assets/img/nyglo/16.jpeg',
  //   discount:13,
  //   related_images: [
  //     'assets/img/nyglo/16.jpeg',
  //     'assets/img/nyglo/18.jpeg',
  //     'assets/img/nyglo/17.jpeg'
  //   ],
  //   thumb_img: 'assets/img/nyglo/13.jpeg',
  //   parentCategory:'Lighting & Chair',
  //   category: 'Lighting',
  //   brand: 'Samsung',
  //   title: "Eunice coffee table",
  //   price: 300,
  //   rating: 3,
  //   quantity:12,
  //   sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
  //   sizes: ['XL'],
  //   colors: ['Green','Orange'],
  //   weight: .28,
  //   dimension: '62 × 60 × 12',
  //   reviews: [
  //     {
  //       img: 'assets/img/blog/comments/avater-1.png',
  //       name: 'Siarhei Dzenisenka',
  //       time: '3 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-2.png',
  //       name: 'Julias Roy',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-3.png',
  //       name: 'Arista Williamson',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //   ],
  //   details:{
  //     details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list:[
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.'
  //      ],
  //      details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
  //   }
  // },
  // {
  //   id: 17,
  //   img: 'assets/img/nyglo/18.jpeg',
  //   bestSeller:true,
  //   related_images: [
  //     'assets/img/nyglo/18.jpeg',
  //     'assets/img/nyglo/17.jpeg',
  //     'assets/img/nyglo/19.jpeg'
  //   ],
  //   thumb_img: 'assets/img/nyglo/15.jpeg',
  //   big_img:'assets/img/shop/product/fashion/fashion-b2.webp',
  //   parentCategory:'Decoration & Accessories',
  //   category: 'Accessories',
  //   discount:8,
  //   topRated:true,
  //   brand: 'Samsung',
  //   title: "Euvira Rocking Chair",
  //   price: 450,
  //   rating: 3,
  //   quantity:8,
  //   sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
  //   sizes: ['M','XL'],
  //   colors: ['Cyan-blue','Pink','Yellow'],
  //   weight: .28,
  //   dimension: '62 × 60 × 12',
  //   reviews: [
  //     {
  //       img: 'assets/img/blog/comments/avater-1.png',
  //       name: 'Siarhei Dzenisenka',
  //       time: '3 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-2.png',
  //       name: 'Julias Roy',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-3.png',
  //       name: 'Arista Williamson',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //   ],
  //   details:{
  //     details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list:[
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.'
  //      ],
  //      details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
  //   }
  // },
  // {
  //   id: 18,
  //   img: 'assets/img/nyglo/17.jpeg',
  //   topRated:true,
  //   bestSeller:true,
  //   related_images: [
  //     'assets/img/nyglo/17.jpeg',
  //     'assets/img/nyglo/19.jpeg',
  //     'assets/img/nyglo/20.jpeg'
  //   ],
  //   thumb_img: 'assets/img/nyglo/16.jpeg',
  //   big_img:'assets/img/shop/product/fashion/fashion-b1.webp',
  //   discount:5,
  //   parentCategory:'Clothing & Oil',
  //   category: 'Clothing',
  //   brand: 'Sony',
  //   title: "Micro Eslabon Wall Clock",
  //   price: 420,
  //   rating: 3,
  //   quantity:5,
  //   sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
  //   sizes: ['M','L','S'],
  //   colors: ['Cyan-blue','Pink','Yellow'],
  //   weight: .28,
  //   dimension: '62 × 60 × 12',
  //   reviews: [
  //     {
  //       img: 'assets/img/blog/comments/avater-1.png',
  //       name: 'Siarhei Dzenisenka',
  //       time: '3 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-2.png',
  //       name: 'Julias Roy',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-3.png',
  //       name: 'Arista Williamson',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //   ],
  //   details:{
  //     details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list:[
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.'
  //      ],
  //      details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
  //   }
  // },
  // {
  //   id: 19,
  //   img: 'assets/img/nyglo/19.jpeg',
  //   topRated:true,
  //   bestSeller:true,
  //   related_images: [
  //     'assets/img/nyglo/19.jpeg',
  //     'assets/img/nyglo/20.jpeg',
  //     'assets/img/nyglo/21.jpeg'
  //   ],
  //   thumb_img: 'assets/img/nyglo/18.jpeg',
  //   parentCategory:'FASHION FOR MEN’S',
  //   category: 'Shirt',
  //   brand: 'Apple',
  //   title: "Micro Eslabon Fashion",
  //   price: 200,
  //   rating: 3,
  //   quantity:6,
  //   sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
  //   sizes: ['M','S'],
  //   colors: ['Cyan-blue','Pink','Green'],
  //   weight: .28,
  //   dimension: '62 × 60 × 12',
  //   reviews: [
  //     {
  //       img: 'assets/img/blog/comments/avater-1.png',
  //       name: 'Siarhei Dzenisenka',
  //       time: '3 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-2.png',
  //       name: 'Julias Roy',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-3.png',
  //       name: 'Arista Williamson',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //   ],
  //   details:{
  //     details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list:[
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.'
  //      ],
  //      details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
  //   }
  // },
  // {
  //   id: 20,
  //   img: 'assets/img/nyglo/20.jpeg',
  //   topRated:true,
  //   bestSeller:true,
  //   related_images: [
  //     'assets/img/nyglo/20.jpeg',
  //     'assets/img/nyglo/21.jpeg',
  //     'assets/img/nyglo/12.jpeg'
  //   ],
  //   thumb_img: 'assets/img/nyglo/17.jpeg',
  //   discount:8,
  //   parentCategory:'Clothing & Oil',
  //   category:'Oil',
  //   brand: 'Apple',
  //   title: "Panasonic Eslabon Oil",
  //   price: 149,
  //   rating: 4,
  //   quantity:6,
  //   sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
  //   sizes: ['XXL','S'],
  //   colors: ['Hue','Pink','Green'],
  //   weight: .30,
  //   dimension: '62 × 60 × 12',
  //   reviews: [
  //     {
  //       img: 'assets/img/blog/comments/avater-1.png',
  //       name: 'Siarhei Dzenisenka',
  //       time: '3 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-2.png',
  //       name: 'Julias Roy',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-3.png',
  //       name: 'Arista Williamson',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //   ],
  //   details:{
  //     details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list:[
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.'
  //      ],
  //      details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
  //   }
  // },
  // {
  //   id: 21,
  //   img: 'assets/img/nyglo/21.jpeg',
  //   trending:true,
  //   topRated:true,
  //   related_images: [
  //     'assets/img/nyglo/21.jpeg',
  //     'assets/img/nyglo/12.jpeg',
  //     'assets/img/nyglo/11.jpeg'
  //   ],
  //   thumb_img: 'assets/img/nyglo/16.jpeg',
  //   big_img:'assets/img/shop/product/product-big-3.jpg',
  //   parentCategory:'FASHION FOR WOMEN’S',
  //   category: 'Shoes',
  //   discount:10,
  //   brand: 'Apple',
  //   title: "Big Sale <br> Canvas Basket",
  //   price: 150,
  //   rating: 5,
  //   quantity:8,
  //   sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
  //   sizes: ['XL','XXL','S'],
  //   colors: ['White','Black'],
  //   weight: .28,
  //   dimension: '62 × 60 × 12',
  //   reviews: [
  //     {
  //       img: 'assets/img/blog/comments/avater-1.png',
  //       name: 'Siarhei Dzenisenka',
  //       time: '3 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-2.png',
  //       name: 'Julias Roy',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-3.png',
  //       name: 'Arista Williamson',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //   ],
  //   details:{
  //     details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list:[
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.'
  //      ],
  //      details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
  //   }
  // },
  // {
  //   id: 22,
  //   img: 'assets/img/nyglo/12.jpeg',
  //   trending:true,
  //   topRated:true,
  //   related_images: [
  //     'assets/img/nyglo/12.jpeg',
  //     'assets/img/nyglo/11.jpeg',
  //     'assets/img/nyglo/21.jpeg'
  //   ],
  //   thumb_img: 'assets/img/nyglo/19.jpeg',
  //   parentCategory:"FASHION FOR BABY",
  //   category: 'Shoes',
  //   brand: 'Apple',
  //   title: 'Bottle With Wooden Cork',
  //   price: 99,
  //   rating: 5,
  //   quantity:8,
  //   sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
  //   sizes: ['M','S'],
  //   colors: ['Pink','Black'],
  //   weight: .30,
  //   dimension: '62 × 60 × 12',
  //   reviews: [
  //     {
  //       img: 'assets/img/blog/comments/avater-1.png',
  //       name: 'Siarhei Dzenisenka',
  //       time: '3 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-2.png',
  //       name: 'Julias Roy',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-3.png',
  //       name: 'Arista Williamson',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //   ],
  //   details:{
  //     details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list:[
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.'
  //      ],
  //      details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
  //   }
  // },
  // {
  //   id: 23,
  //   img: 'assets/img/nyglo/11.jpeg',
  //   bestSeller:true,
  //   related_images: [
  //     'assets/img/nyglo/11.jpeg',
  //     'assets/img/nyglo/21.jpeg',
  //     'assets/img/nyglo/20.jpeg'
  //   ],
  //   thumb_img: 'assets/img/nyglo/11.jpeg',
  //   parentCategory:'FASHION FOR MEN’S',
  //   category: 'Shirt',
  //   brand: 'Apple',
  //   title: 'Bottle With Wooden Cork',
  //   price: 99,
  //   rating: 5,
  //   quantity:8,
  //   sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
  //   sizes: ['M','S','XL'],
  //   colors: ['Pink','Black'],
  //   weight: .30,
  //   dimension: '62 × 60 × 12',
  //   reviews: [
  //     {
  //       img: 'assets/img/blog/comments/avater-1.png',
  //       name: 'Siarhei Dzenisenka',
  //       time: '3 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-2.png',
  //       name: 'Julias Roy',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-3.png',
  //       name: 'Arista Williamson',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
  //     },
  //   ],
  //   details:{
  //     details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list:[
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.'
  //      ],
  //      details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
  //   }
  // },
]

export default product_data;
