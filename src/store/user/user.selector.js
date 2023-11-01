export const selectCurrentUser = (state) => state.user.currentUser

export const selectProfileDropdown = (state) => state.user.isProfileDropdownOpen

export const selectIsPopUpOpen = (state) => state.user.isPopUpOpen

export const selectAuthError = (state) => state.user.error