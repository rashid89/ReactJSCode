const Welcome = ({user, onSignOut})=> {
    // This is a "stateless" component
    return (
      <div>
        Welcome to home <strong>{user.username} !</strong>
        <br></br>
        <a href="javascript:;" onClick={onSignOut}>Sign out</a>
      </div>
    )
  }

  export default Welcome;