import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    axios.post('https://task-api-eight-flax.vercel.app/api/login', { email, password })
      .then(response => {
        console.log('Login successful:', "token", response.data.token);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", email);
        toast('Login successful! Redirecting...');
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      })
      .catch(error => {
        toast('Login failed. Please try again.')
      });
    console.log(email, password)
  }

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate, token]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F8FAFC] font-sans">
      <ToastContainer />
      {/* Login Card */}
      <div className="w-full max-w-md bg-white p-10 rounded-[32px] shadow-sm border border-gray-100">

        {/* Logo & Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 border-[3px] border-[#166534] rounded-full border-t-transparent"></div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Donezo</h1>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Welcome back!</h2>
          <p className="text-gray-500 text-sm mt-2">Please enter your details to sign in.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 ml-1">Email Address</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#166534] transition-colors">
                <Mail size={18} />
              </div>
              <input
                type="email"
                name='email'
                placeholder="tmichael20@mail.com"
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-[#166534] transition-all text-sm"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-sm font-medium text-gray-700">Password</label>
              {/* <a href="#" className="text-xs font-semibold text-[#166534] hover:underline">Forgot?</a> */}
            </div>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#166534] transition-colors">
                <Lock size={18} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                name='password'
                className="w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-[#166534] transition-all text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          {/* <div className="flex items-center gap-2 ml-1">
            <input 
              type="checkbox" 
              id="remember" 
              className="w-4 h-4 rounded border-gray-300 text-[#166534] focus:ring-[#166534]" 
            />
            <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">Remember for 30 days</label>
          </div> */}

          {/* Sign In Button */}
          <button className="w-full bg-[#166534] hover:bg-[#14532d] text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-900/10 active:scale-[0.98]">
            Sign In
            <ArrowRight size={18} />
          </button>
        </form>

        {/* Footer */}
        {/* <p className="text-center mt-8 text-sm text-gray-500">
          Don't have an account? 
          <a href="#" className="ml-1 font-bold text-[#166534] hover:underline">Create Account</a>
        </p> */}
      </div>

      {/* Subtle Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden opacity-40 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-100 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gray-200 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Login;