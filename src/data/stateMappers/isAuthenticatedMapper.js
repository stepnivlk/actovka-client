const isAuthenticatedMapper = (state) => ({
  isAuthenticated: state.login.isAuthenticated,
});

export default isAuthenticatedMapper;
