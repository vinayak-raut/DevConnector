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
const icon=document.querySelector('.fa-location-dot');

const togglebtn = document.querySelector("#theme");



btn.addEventListener('click',(e)=>{
    e.preventDefault(); // prevent reload
    const searchinput=input.value.trim();
    console.log(searchinput);
    if(searchinput!==''){
        const urlupdate=`${URL}${searchinput}`;
        console.log(urlupdate);
        const getUser=async()=>{
            try{

                loginName.innerHTML=`Loading...`;
                name.innerHTML=`Loading...`;
                bio.innerHTML=`Loading...`;
                userlocation.innerHTML=`Loading...`;
                pubreposcount.innerHTML=`Loading...`;
                followerscount.innerHTML=`Loading...`;
                followingcount.innerHTML=`Loading...`;

                console.log("loading");
                let response=await axios.get(urlupdate);
                console.log(response.data);
                const data=response.data;

                loginName.innerHTML=data.login;
                name.innerHTML=data.name || '';
                bio.innerHTML=data.bio ?(data.bio.length>50?data.bio.slice(0,50)+'...':data.bio):'';
                pubreposcount.innerHTML=data.public_repos || 'N/A';
                followerscount.innerHTML=data.followers || 'N/A';
                followingcount.innerHTML=data.following || 'N/A';
                avatar.style.backgroundImage=`url(${data.avatar_url})`;
                avatar.style.backgroundSize='cover';
                if(data.location==null||data.location==undefined){
                    icon.style.display='none'
                    userlocation.innerHTML=''
                }else{
                    userlocation.innerHTML=data.location;
                }
                input.value='';
            }catch(e){
                console.log("err-",e);
                loginName.innerHTML=`404User not found`;
                name.innerHTML=``;
                bio.innerHTML=``;
                userlocation.innerHTML=``;
                pubreposcount.innerHTML=``;
                followerscount.innerHTML=``;
                followingcount.innerHTML=``;
                avatar.style.backgroundImage=`url(https://agreatdream.com/wp-content/uploads/2012/04/question-mark.jpg)`;
                avatar.style.backgroundSize='cover';
                icon.style.display='none';
                

            } 
        };getUser();
    }
})
togglebtn.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
})
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') btn.click();
});
