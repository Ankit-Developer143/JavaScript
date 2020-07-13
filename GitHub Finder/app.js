//Init Github =>>Github is a class
//another class import here
const github = new Github();
const ui =new UI();


//Search Input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    //Get  input text
    const userText = e.target.value;
    if (userText !== ' ') {

        //Make http call 
        github.getUser(userText)

            //Print 
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    //alert
                    

                }else{
                    //clear profile
                    ui.showProfile(data.profile)

                }

            })
        }
    });

            

    
