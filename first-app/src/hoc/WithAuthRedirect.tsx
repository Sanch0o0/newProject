

export const withAuthRedirect = (Component: React.ComponentType) => {
  // if(!props.isAuth)  return <Navigate to={'/Login'}/>;
  return <Component />;
}