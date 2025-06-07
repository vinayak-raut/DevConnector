const URL="https://api.github.com/users/";
const input=document.querySelector('#input');
const btn=document.querySelector('#btn');

const loginName=document.querySelector('.loginname');
const name=document.querySelector('.name');
const userlocation=document.querySelector('.userlocation');
const bio=document.querySelector('.bio');
const pubreposcount=document.querySelector('.pubreposcount');
const followerscount=document.querySelector('.followerscount');
const followingcount=document.querySelector('.followingcount');
const avatar=document.querySelector('.avatar')

btn.addEventListener('click',(e)=>{
    e.preventDefault(); // prevent reload
    const searchinput=input.value.trim();
    console.log(searchinput);
    if(searchinput!==''){
        const urlupdate=`${URL}${searchinput}`;
        console.log(urlupdate);
        const getUser=async()=>{
            try{
                

                
                console.log("loading");
                let response=await axios.get(urlupdate);
                console.log(response.data);

                loginName.innerHTML=`${response.data.login}`;
                console.log(response.data.login)
                name.innerHTML=`${response.data.name}`;
                console.log(response.data.name)
                bio.innerHTML=`${response.data.bio}`;
                console.log(response.data.bio)
                userlocation.innerHTML=`${response.data.location}`;
                console.log(response.data.location)
                pubreposcount.innerHTML=`${response.data.public_repos}`;
                console.log(response.data.public_repos)
                followerscount.innerHTML=`${response.data.followers}`;
                console.log(response.data.followers)
                followingcount.innerHTML=`${response.data.followingcount}`;
                console.log(response.data.followingcount)
                location.innerHTML=`${response.data.location}`;
                console.log(response.data.location)
                avatar.style.backgroundImage=`url(${response.data.avatar_url})`;
                avatar.style.backgroundSize='cover';
                console.log(response.data.avatar_url)
            }catch(e){
                console.log("err-",e);
            } 
        };getUser();
    }
})