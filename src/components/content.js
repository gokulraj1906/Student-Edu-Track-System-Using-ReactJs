import React from "react";
import './content.css';
import logo from './assets/logo.png';
import { FaUsers } from "react-icons/fa";
import { LuMonitor } from "react-icons/lu";
import { RiDiscountPercentFill } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { HiDocumentReport } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { IoManSharp } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaClinicMedical } from "react-icons/fa";

function Content(){
    return(
        <div className="content">
            <div className="c1">
                <div className="logo">
                    <img src={logo} id="logo"></img>
                </div>
                <div className="sm">
                    <FaUsers size={80}/>
                    <h3>Student Management</h3>
                </div>
                <div className="fm">
                    <LuMonitor size={80}/>
                    <h3>Financial Management</h3>
                </div>
                <div className="qc">
                    <RiDiscountPercentFill size={80}/>
                    <h3>Quality Control</h3>
                </div>
                <div className="rc">
                    <TbReport size={80}/>
                    <h3>Report Delivery</h3>
                </div>
                <div className="at">
                    <HiDocumentReport size={80}/>
                    <h3>Attendence</h3>
                </div>
            </div>
            <div className="c2">
                <div className="r1">
                    <h3>Student Management</h3>
                </div>
                <div className="r2">
                    <div className="r2r1">
                        <div className="r2r1c1">
                            <div>
                                <FaUser size={100}/>
                            </div>
                            <div>
                                <h1></h1>
                                <h3>Regular Students</h3><br></br>
                                <h1>06</h1>
                            </div>
                        </div>
                        <div className="r2r1c1">
                            <div>
                            <FaUserTie size={100}/>
                            </div>
                            <div>
                                <h1></h1>
                                <h3>Remedial Students</h3>
                            </div>
                        </div>
                        <div className="r2r1c1">
                            <div>
                            <IoManSharp size={100}/>
                            </div>
                            <div>
                                <h1></h1>
                                <h3>Club</h3>
                            </div>
                        </div>
                    </div>
                    <div className="r3">
                        <h5>Menu</h5>
                    </div>
                    <div className="r4">
                        <div className="r4c1">
                            <FaUser size={50}/>
                            <h4>Regular Enrollment</h4>
                        </div>
                        <div className="r4c2">
                            <FaBook size={50}/>
                            <h4>Remedial Enrollment</h4>
                        </div>
                        <div className="r4c3">
                            <IoManSharp size={50}/>
                            <h4>Club Management</h4>
                        </div>
                    </div>
                    <div className="r5">
                        <div className="r5c1">
                            <FaBookReader size={50}/>
                            <h4>Classroom Management</h4>
                        </div>
                        <div className="r5c2">
                            <IoMail size={50}/>
                            <h4>SMS/MAIL</h4>
                        </div>
                        <div className="r5c3">
                            <HiDocumentReport size={50}/>
                            <h4>Attendence</h4>
                        </div>
                    </div>
                    <div className="r6">
                        <FaClinicMedical size={50} />
                        <h4>Clinic</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Content;