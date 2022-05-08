import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCollection } from '../../firebase/services';

const initialState = {
  blogLoading: 'idle',
  blogs: [
    {
      id: '1',
      title:
        'Sức lôi cuốn không thể chối từ của burger tôm hai tầng cho người thưởng thức',
      contents: [
        'Một chiếc burger tôm truyền thống đã làm những người thưởng thức nó nao lòng. Vậy còn gì tuyệt hơn khi có sự kết hợp hai tầng tôm trong cùng một chiếc bánh. Khám phá ngay chiếc burger tôm hai tầng qua bài viết sau để giúp bạn có thêm lựa chọn thú vị trong mỗi bữa ăn của mình nào.',
        'Burger tôm hai tầng có nguyên liệu chính là những con tôm nõn, thêm vào đó là những lá rau sống tươi mát, vỏ bánh mì mềm, thơm, lớp sốt sánh quyện. Bạn sẽ không khỏi bất ngờ ngay từ khi thưởng thức miếng bánh đầu tiên đâu đấy. Lần lượt từ lớp bánh mịn bao bọc bên ngoài, cho đến những con tôm giòn rụm ở lớp nhân và hương thơm, vị bùi của lớp rau xà lách được sắp xếp đan xen.',
        'Sự kết hợp ăn ý, hòa nhập, làm nên món bánh burger bổ ích, hấp dẫn. Người dùng sẽ không phải lo sự ngấy mỡ như một số món ăn khác, mà đối với chiếc burger này thì những lớp tôm thật sự rất giòn bởi được chiên theo cách thức rất riêng, đặc biệt.',
      ],
      category: 'burger',
      images: [
        'https://chianui.vn/wp-content/uploads/2019/08/hamburger-ga-2-tang-compressed.jpg',
        'https://chianui.vn/wp-content/uploads/2019/03/burger-tom-hai-tang-.png',
      ],
      timeGroup: '07-2021',
      createdAt: null,
      updatedAt: null,
    },
  ],
};

export const getBlogs = createAsyncThunk('blogs/getBlogs', async () => {
  return await getCollection('blogs');
});

export const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: {
    [getBlogs.pending]: (state) => {
      state.blogLoading = 'pending';
    },
    [getBlogs.fulfilled]: (state, action) => {
      state.blogLoading = 'success';
      state.blogs = action.payload;
    },
    [getBlogs.rejected]: (state) => {
      state.blogLoading = 'failed';
    },
  },
});

export default blogsSlice.reducer;
