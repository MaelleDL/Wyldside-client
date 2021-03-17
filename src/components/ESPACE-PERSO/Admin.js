


function Admin({user}) {
    const handleLogout = () => {
        localStorage.clear();
      };
    return(
        <div>
            <button onClick={handleLogout}>logout</button>
            <h1>{user.role}</h1></div>
    )
}

export default Admin;