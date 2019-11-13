const InitialState = [
    {
        id:1,
        name:'Iphone 7',
        image:'https://ita-binhdinh.com.vn/wp-content/uploads/2019/04/iphonex-TA-1.jpg',
        description : 'Sản phẩm do Apple sản xuất',
        price : 700,
        inventory : 10,
        rating : 4
    },
    {
        id:2,
        name:'Samsung',
        image:'https://images.samsung.com/is/image/samsung/vn-galaxy-a80-a805-sm-a805fzkdxxv-frontblack-173767390?$PD_GALLERY_L_JPG$',
        description : 'Sản phẩm do Samsung sản xuất',
        price : 800,
        inventory : 15,
        rating : 3
    },
    {
        id:3,
        name:'Oppo',
        image:'https://i.gadgets360cdn.com/products/large/1530947258_635_oppo_a5.jpg',
        description : 'Sản phẩm do Oppo sản xuất',
        price : 900,
        inventory : 20,
        rating : 2
    }
    
]
const products = (state = InitialState, action) => {
    switch (action.type) {       
        default:
            return [...state];
    }
}

export default products;