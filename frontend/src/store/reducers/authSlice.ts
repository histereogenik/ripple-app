import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { isTokenExpired } from "../../utils/tokenUtils"
import { apiSlice } from "../../services/apiSlice"

interface AuthState {
  token: string | null
}

const token = localStorage.getItem("authToken")
const isTokenValid = token && !isTokenExpired(token)

const initialState: AuthState = {
  token: isTokenValid ? token : null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ access: string; refresh: string }>
    ) => {
      state.token = action.payload.access
      localStorage.setItem("authToken", action.payload.access)
      localStorage.setItem("refreshToken", action.payload.refresh)
    },
    logout: (state) => {
      state.token = null
      localStorage.removeItem("authToken")
      localStorage.removeItem("refreshToken")
    },
  },
  extraReducers: (builder) => {
    builder.addCase(apiSlice.util.resetApiState, () => {})
  },
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer
