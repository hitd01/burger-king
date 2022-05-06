import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loadingProduct: 'idle',
  products: [
    {
      id: 'UkliQmFoWQrr6zm6FkjR',
      name: 'Burger bò nướng whopper',
      photoURL:
        'https://rayoflightthemes.com/htmltemplates/burgos_street_food_html5_template/burgos_html/images/product1b.png',
      price: 115000,
      description:
        'Luôn được ưu chuộng dù bất kì ở chi nhánh hay cửa hàng nào đó là món Whopper trứ danh với các nguyên liệu hấp dẫn không thể chối từ như thịt nướng xém lửa thơm ngon mềm mại nhưng không kém phần bổ dưỡng, những lát cà chua và rau tươi ngon, và điều quan trọng làm nên món bánh hấp dẫn này đó chính là nước sốt mayonnaise và mustard hấp dẫn, không ở đâu có được. Ngoài món Whopper trứ danh đó ra thì bạn không thể bỏ lỡ Burger gà với miếng ức gà được chiên vàng giòn rụm ăn kèm với rau xà lách và cà chua tươi ngon, ăn rất quyện vị với hai lát bánh mềm mỏng, một món ăn nhanh tuyệt vời, vừa đáp ứng được hai tiêu chí vừa ngon vừa rẻ. Nếu bạn bỏ lỡ món bánh Burger Bò hấp dẫn tại Quick Food thì quả thật đó là một sai sót khá lớn. Không gì tuyệt vời hơn với những lát thịt nguội bacon giòn tan hòa quyện với lát phô mai Cheddar và thịt bò nướng lửa. Ngoài những món bánh burger đã làm nên tên tuổi của Quick Food đó ra thì bạn có thể thưởng thức các món ăn kèm như khoai tây chiên giòn, mực chiên vòng, gà miếng,..',
      category: 'burger',
      avgRating: 0,
    },
    {
      id: 'Bey1Yu3zf67mWcYDbQOQ',
      name: 'Burger 2 miếng bò nướng phô mai thịt xông khói whopper',
      photoURL:
        'https://burgerking.vn/media/catalog/product/cache/1/small_image/1000x/9df78eab33525d08d6e5fb8d27136e95/b/b/bb_whopper-v1-min.png',
      price: 145000,
      description:
        'Một bữa ăn đầy đủ chất dinh dưỡng cho bạn sức khỏe tốt, sự dẻo dai, và thân hình đúng chuẩn. Trong xã hội hiện đại, mọi thứ được tối giản đáng kể, và các món ăn cũng vậy. Bạn không phải mất công chuẩn bị nhiều món để tương xứng với số lượng dưỡng chất nạp vào cơ thể, mà nay trong một chiếc burger cũng giúp bạn thực hiện dễ dàng điều này. Vậy nguyên liệu chính làm nên chiếc bánh nhỏ xinh này bao gồm những gì? Đó là tôm tươi, thịt gà sạch, xúc xích và một chút phô mai béo ngậy, thơm ngọt. Ngoài ra, khi thực hiện món ăn này tại nhà hoặc đặt hàng từ các quán burger thì bạn cũng có thể thêm một ít rau sống, vừa giúp bổ sung chất xơ, vừa tạo sự hài hòa, thanh mát cho tổng thể món ăn. Bạn là tín đồ của thịt bò ? Bạn muốn biến tấu những miếng thịt bò thành một món ăn khác? Đừng lo, hãy đến với Quick Food, bạn sẽ được thưởng thức những suất hamburger bò đặc biệt tại cửa hàng này.',
      category: 'burger',
      avgRating: 0,
    },
  ],
  productReviews: [
    {
      userId: '0XZgnXYdfyiieQeF9QNGA4BVGXQ3',
      productId: 'UkliQmFoWQrr6zm6FkjR',
      rating: 0,
      comments: ['great', 'wow'],
    },
  ],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default productsSlice.reducer;
