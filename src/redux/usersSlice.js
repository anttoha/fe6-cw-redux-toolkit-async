import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers", // типу "ID"
  async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    return data;
  },
);

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  // reducers - обробляє СИНХРОННІ операції
  reducers: {}, // Приймає {ключ: значення}
  // extraReducers - обробляє АСИНХРОННІ операції
  extraReducers: (builder) => { // Тільки для запитів. Приймає колбек функцію яка приймає параметром builder. builder дозволяє обробити кожен стан запита
    builder
      // Getting users list
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, actions) => {
        state.loading = false;
        state.users = actions.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.error = "Щось пішло не так...";
      });
  },
});

const {} = usersSlice.actions;

export default usersSlice.reducer;
