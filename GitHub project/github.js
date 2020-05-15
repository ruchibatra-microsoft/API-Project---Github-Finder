class GitHub{
  constructor(){
    this.client_id='9d1d728df279a74ef7cc';
    this.client_secret='770b2d1bc5b364a1fd1143f59ecd4feeb3d34ae8';
    this.repos_sort= 'created: asc';
    this.repos_count= 5;
  }

  async getuser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const profile=await profileResponse.json();
    const repos=await reposResponse.json();



    return{
      profile,
      repos
    }
    
    
 
  }


}