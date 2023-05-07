

const PublicRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route {...rest} render={(props) =>
      currentUser ? (
        <Redirect to='/' />
      ) : (
        <Component {...props} />
      )
    } />
  );
};

export default PublicRoute