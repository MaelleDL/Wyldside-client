const authHeader=()=> {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user) {
        let Token=user;
        
      return {Authorization: 'Bearer '+ Token};
    } else {
      return {};
    }
  }

  export default authHeader;