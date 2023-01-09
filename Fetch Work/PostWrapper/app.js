fetch("https://www.fintag.co/Auth/LoginForUser",
{
      method: "POST",
      header:{
        Accept:"application/json",
        "Content-Type":"application/json",
      },
   
      body:JSON.stringify ({
      Phone: "string",
      Password: "string",
      AppVersion: "string"      
    }),

    
})
.then((res) => res.json())
.then((res) => console.log(res))
.catch(function(res){ console.log(res) })