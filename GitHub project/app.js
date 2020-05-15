const github=new GitHub;
const searchUser = document.getElementById('searchUser');
const ui=new UI;
searchUser.addEventListener('keyup',(e)=>{
  const userText = e.target.value;

  if(userText !=''){
    github.getuser(userText)
    .then(data=>{
      if(data.profile.message=='Not Found')
      {
       
        // alert('not found');
        ui.showAlert("User not found","alert alert-danger");
      }
      else
      {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
          //show profile 

      }
    })
  }
  else
  {
    ui.clearProfile();
    //clear profile
  }
})