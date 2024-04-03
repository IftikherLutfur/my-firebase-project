import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";


const Login = () => {

  const {signInUser,signInWithGoogle} = useContext(AuthContext)

  const navigate = useNavigate()
   
    const handleSubmitForLogin = e =>{
		e.preventDefault();
		// const name = e.target.name.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		// const confirmPassword = e.target.confirmPassword.value;
		console.log(email,password); 

    signInUser(email,password)
    .then(result=>{
      console.log(result.user)
      e.target.reset();
      navigate('/')
    })
    .catch(error=>{
      console.log(error);
    })

	}

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result=>{console.log(result.user)})
    .catch(error =>{
      console.log(error);
    })
  }


    return (
        <div>
               <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmitForLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>

          </label>

          <input 
		name="email" 
		type="email" 
		placeholder="email" 
		className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
		name="password" 
		type="password" 
    placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <span>Are You New? <NavLink to='/up'><a href="">Register</a></NavLink></span>
      </form>
        <p><button onClick={handleGoogleSignIn} className="btn btn-link">Google</button></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;