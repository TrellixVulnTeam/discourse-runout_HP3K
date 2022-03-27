//Simply run this in your browser(with login session of course)
main();

async function main(){
  const config = {
    "username": "winslow", //Change this to your username!
    "host": window.location.protocol + "//" + window.location.host
  }
  
  var postIDList = [];
  var CSRFToken = document.getElementsByName("csrf-token")[0].content; //获取CSRF凭证
  
}
async function fetchPostIteration(currentOffset){
  
    //https://limelight.moe/user_actions.json?offset=21&username=winslow
  try{
    let requestData = await $.post(
    config.host + "/user_actions.json?offset="+currentOffset+"&username="+config.username
    ); //Maximum fetch per time: 30, out of offset = less
    fetchPostIteration(currentOffset + 30);
  }catch(){
    console.warn("Error encountered when fetching OFFSET" + currenOffset + ",skipping...");
  }

}

async function postRemoveLoop(){
  
}

function removePost(postID,csrf){
  let requestData = {
    "_method":"delete",
    "headers": {
      "x-csrf-token": CSRFToken
    },
    "creaditals": "include"
  };
  try{
    $.post(config.host + "/posts/"+postID,requestData);
  }catch(){}
}
