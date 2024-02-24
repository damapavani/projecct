import React, { useState } from 'react'
import axios from 'axios'
export default function PatientsInfo() {
    const [name, setName] = useState("")
    const [Age, setAge] = useState("")
    const [Gender, setGender] = useState("")
    const [weight, setWeight] = useState("")
    const [Disease, setDisease] = useState("")
    const [Doctor, setDoctor] = useState("")
    function addPatient() {
        if (name == "" && Age == "" && Gender == "" && weight == "" && Disease == "" && Doctor == "") {
            alert("fill the details")
        }
        else{
            axios.post("https://doc-back.onrender.com/patients", {
                name, age:Age, gender:Gender, weight, disease:Disease, doctor:Doctor
            })
            .then((res) => {
                 console.log(res)
                 alert("added successfully")
            })
            setAge("");
            setName("");
            setGender("");
            setDisease("");
            setDoctor("");
            setWeight("");

        }
    }
    return (
        <div class="patient-details">
            <p>
                <input placeholder="enter your name"
                value={name}
                    onChange={(e) => setName(e.target.value)} />
            </p>
            <p>
                <input placeholder="enter your Age"
                 value={Age}
                    onChange={(e) => setAge(e.target.value)} />
            </p>
            <p>
                <input placeholder="enter your Gender"
                 value={Gender}
                    onChange={(e) => setGender(e.target.value)} />
            </p>
            <p>
                <input placeholder="enter your Weight"
                 value={weight}
                    onChange={(e) => setWeight(e.target.value)} />
            </p>
            <p>
                <input placeholder="enter your disease"
                 value={Disease}
                    onChange={(e) => setDisease(e.target.value)} />
            </p>
            <p>
                <input placeholder="enter your  doctor name"
                 value={Doctor}
                    onChange={(e) => setDoctor(e.target.value)} />
            </p>
            <button onClick={addPatient}>Add Patient</button>
        </div>
    )
}
