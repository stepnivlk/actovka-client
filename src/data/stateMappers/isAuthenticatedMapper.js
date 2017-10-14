const isAuthenticatedMapper = (state) => ({
  isAuthenticated: state.currentUser.isAuthenticated,
});

export default isAuthenticatedMapper;
