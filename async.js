async function showAvatar() {
   // await new Promise((resolve, reject) => setTimeout(resolve, 3000));
    // // read our JSON
    // let response = await fetch('/article/promise-chaining/user.json');
    // let user = await response.json();
  
    // read github user
    try{
     let githubResponse =  await fetch(`https://api.github.com/users/kiran-blockchain`)
     let githubUser = await githubResponse.json();
    // // show the avatar
    // let img = document.createElement('img');
    // img.src = githubUser.avatar_url;
    // img.className = "promise-avatar-example";
    // document.body.append(img);
    // wait 3 seconds
    img.remove();
    return githubUser;
    }
    catch(ex){
        return ex;
    }
  }
  
  showAvatar();




try{
  let r1 = await call1();
  let r2 = await call2(r1);
  let r3 = await call3(r2);
}
catch(ex){

}
