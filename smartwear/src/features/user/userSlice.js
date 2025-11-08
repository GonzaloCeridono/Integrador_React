import { createSlice } from "@reduxjs/toolkit";

// Ver si ya hay un usuario guardado en localStorage
const savedUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: savedUser || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const newUser = action.payload;
      localStorage.setItem("registeredUser", JSON.stringify(newUser));
      state.user = newUser;
      localStorage.setItem("user", JSON.stringify(newUser)); // lo logueamos directo después de registrarse
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

      if (
        storedUser &&
        storedUser.email === email &&
        storedUser.password === password
      ) {
        state.user = storedUser;
        localStorage.setItem("user", JSON.stringify(storedUser));
      } else {
        alert("Credenciales incorrectas o usuario no registrado");
      }
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
