import { Component, useState,  } from "react";


function Main(){

     const[username, setusername]=useState('') 
     const[email, setemail]=useState('')
     const[password,setpassword]=useState('')
     const[cpassword,setcpassword]=useState('')

    const[eusername, seteusername]=useState('') 
    const[eemail, seteemail]=useState('')
    const[epassword,setepassword]=useState('')
    const[ecpassword,setecpassword]=useState('')
    
    const[ucolor, setucolor]=useState('')
    const[ecolor, setecolor]=useState('')
    const[pcolor, setpcolor]=useState('')
    const[ccolor, setccolor]=useState('')
    
    

    function validate() 
    {

        if(username.length < 8 ){
            seteusername('Users name is not long enough !')
            setucolor('red')
        }
        else{
            
            seteusername('')
            setucolor('green')

        }
        if(password.length > 8){
            setepassword('')
            setpcolor('green')

            
        }
        else{
            setepassword('Password should be more than 8 characters')
            setucolor('red')
        }
        if(cpassword == password){
            setecpassword('')
            setccolor('green')
        }
        else{
                setecpassword('passwords dont match')
                setccolor('red')
        }

        if(email.includes('@gmail.com')){
            seteemail('')
            setecolor('green')

        }
        else{
            seteemail('Email doesnot have @gmail.com in it')
            setecolor('red')
        }

    }

  
    return(
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5" class="shadow-lg p-4 mb-6 bg-white rounded">
                    <h1>Form Validation</h1>
                    <input type="text" placeholder='Username' className='form-control' value={username} style={{borderColor:ucolor}}  onChange={(e)=> {setusername(e.target.value)}} />
                            <p>{eusername}</p>
                    <input type="text" placeholder='Email' className='form-control' value={email} style={{borderColor:ecolor}} onChange={(e)=> {setemail(e.target.value)}} />
                            <p>{eemail}</p>
                    <input type="password" placeholder='Password' className='form-control' value={password} style={{borderColor:pcolor}} onChange={(e)=> {setpassword(e.target.value)}} />
                            <p>{epassword}</p>
                    <input type='password' placeholder='confirm Password' className='form-control' value={cpassword} style={{borderColor:ccolor}}  onChange={(e)=> {setcpassword(e.target.value)}} />
                            <p>{ecpassword}</p>
                   <br></br>
                   <button className='btn btn-sucess' onClick={validate} >  Submit</button>


                </div>
            </div>

        </div>
       
    );
}


export default Main;