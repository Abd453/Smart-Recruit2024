import React, { useState } from 'react';
import  {useEffect} from 'react';
import logo from "../../assets/ie.png";
import bgimg from "../../assets/bgImg/bgimg2.jpg"
import NavbarE from './navbarE';
import axios from "axios";
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';


export default function ApplyForm() {
    const {userId} = useParams();
    console.log("user id ",userId);
    const [data, setData] = useState({
        jobtitle: "",
        fname: "",
        lname: "",
        phoneno: "",
        email: "",
        physicaladdress: "",
        cv: null
    });
    const [jobOptions, setJobOptions] = useState([]);
    useEffect(() => {
        // Fetch job titles and their IDs from the server
        axios.get('http://localhost:8001/jobs')
            .then(response => {
                setJobOptions(response.data);
            })
            .catch(err => console.log(err));
    }, []);
    useEffect(() => {
        if (userId) {
          axios.get(`http://localhost:8001/signupuser/${userId}`) // Fetch user data from backend
            .then(res => {
              setUser(res.data);
            })
            .catch(err => console.error(err));
        }
      }, [userId]);

    
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(true);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        };
      

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        let validationErrors = {};

        if (data.jobtitle === "") {
            isValid = false;
            validationErrors.jobtitle = "Job title required";
        }
        if (data.fname === "") {
            isValid = false;
            validationErrors.fname = "First name required";
        }
        if (data.lname === "") {
            isValid = false;
            validationErrors.lname = "Last name required";
        }
        if (data.phoneno === "") {
            isValid = false;
            validationErrors.phoneno = "Phone number required";
        }
        if (data.email === "") {
            isValid = false;
            validationErrors.email = "Email required";
        }
        if (data.physicaladdress === "") {
            isValid = false;
            validationErrors.physicaladdress = "Physical address required";
        }
        if (!data.cv) {
            isValid = false;
            validationErrors.cv = "CV required";
        }

        setErrors(validationErrors);
        setValid(isValid);

        if (isValid) {
            

            
            axios.put(`http://localhost:8001/signupuser/${userId}`, data) // Update user data on backend
            .then(result => {
                    alert("Success");
                    setData({
                        jobtitle: "",
                        fname: "",
                        lname: "",
                        phoneno: "",
                        email: "",
                        physicaladdress: "",
                        password:"",
                        cv: null
                    });
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div>
        <NavbarE userId={userId}/>
        <div className='  bg-cover bg-center flex'
        style={{ backgroundImage: `url(${bgimg})` }}>
        <div className="max-w-4xl  mx-auto font-sans p-6"
        >
            <div className="text-center mb-16">
                <a href="">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-52 inline-block"
                    />
                </a>
                <h4 className="text-white text-base font-bold shadow-md shadow-black pb-8 pt-4 flex items-center justify-center mt-6">
                    Job Apply Form
                </h4>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-8">
                <div>
                        <label className="text-white text-sm mb-2 block">Job Title</label>
                        <select
                            name="jobtitle"
                            value={data.jobtitle}
                            onChange={handleChange}
                            className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                        >
                            <option value="">Select Job Title</option>
                            {jobOptions.map(job => (
                                <option key={job.id} value={job.id}>{job.title}</option>
                            ))}
                        </select>
                        {errors.jobtitle && <p className="text-red-500 text-sm">{errors.jobtitle}</p>}
                    </div>
                    <div>
                        <label className="text-white text-sm mb-2 block">First Name</label>
                        <input
                            name="fname"
                            type="text"
                            value={data.fname}
                            onChange={handleChange}
                            className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                            placeholder="First name"
                        />
                        {errors.fname && <p className="text-red-500 text-sm">{errors.fname}</p>}
                    </div>
                    <div>
                        <label className="text-white text-sm mb-2 block">Last Name</label>
                        <input
                            name="lname"
                            type="text"
                            value={data.lname}
                            onChange={handleChange}
                            className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                            placeholder="Last name"
                        />
                        {errors.lname && <p className="text-red-500 text-sm">{errors.lname}</p>}
                    </div>
                    <div>
                        <label className="text-white text-sm mb-2 block">Phone Number</label>
                        <input
                            name="phoneno"
                            type="text"
                            value={data.phoneno}
                            onChange={handleChange}
                            className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                            placeholder="Phone number"
                        />
                        {errors.phoneno && <p className="text-red-500 text-sm">{errors.phoneno}</p>}
                    </div>
                    <div>
                        <label className="text-white text-sm mb-2 block">Email</label>
                        <input
                            name="email"
                            type="email"
                            value={data.email}
                            onChange={handleChange}
                            className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                            placeholder="Email"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div>
                        <label className="text-white text-sm mb-2 block">Physical Address</label>
                        <input
                            name="physicaladdress"
                            type="text"
                            value={data.physicaladdress}
                            onChange={handleChange}
                            className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                            placeholder="Physical address"
                        />
                        {errors.physicaladdress && <p className="text-red-500 text-sm">{errors.physicaladdress}</p>}
                    </div>
                    <div>
                        <label className="text-white text-sm mb-2 block">Upload CV</label>
                        <input
                            name="cv"
                            type="file"
                            onChange={handleChange}
                            className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                        />
                        {errors.cv && <p className="text-red-500 text-sm">{errors.cv}</p>}
                    </div>
                </div>

                <div className="mt-12 flex justify-center">
                    <button
                        type="submit"
                        className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                    >
                        Submit
                    </button>
                </div>
            </form>
            
        </div>

        
        </div>
        <Footer />
        </div>
    )
}
