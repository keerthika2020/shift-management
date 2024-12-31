import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";

const doctorsData = {
  cardiology: [
    { name: "Dr. K R Kirshnaveni", specialization: "Senior Consultant - Interventional Cardiologist", image: "/assets/med2.png", details: "Cardiology" },
    { name: "Dr. Samuktha M", specialization: "Senior Consultant - Interventional Cardiologist", image: "/assets/med2.png", details: "Cardiology" },
    { name: "Dr. Arun V", specialization: "Senior Consultant - Heart Failure Specialist", image: "/assets/med2.png", details: "Cardiology" },
   
  ],
  neurology: [
    { name: "Dr. Suresh Menon", specialization: "Senior Consultant - Neurologist", image: "/assets/med2.png", details: "Neurology" },
    { name: "Dr. Anjali R", specialization: "Consultant - Neurophysiologist", image: "/assets/med2.png", details: "Neurology" },
    { name: "Dr. Ajay Tiwari", specialization: "Consultant - Neuro-Oncologist", image: "/assets/med2.png", details: "Neurology" },
  ],
  gastroenterology: [
    { name: "Dr. Rekha Nair", specialization: "Senior Consultant - Gastroenterologist", image: "assets/med2.png", details: "Gastroenterology" },
    { name: "Dr. Vivek Sharma", specialization: "Consultant - Hepatologist", image: "assets/med2.png", details: "Gastroenterology" },
    { name: "Dr. Karthik Menon", specialization: "Senior Consultant - Liver Transplant Specialist", image: "assets/med2.png", details: "Gastroenterology" },
  ],
  pediatrics: [
    { name: "Dr. Shweta Arora", specialization: "Senior Consultant - Pediatrician", image: "/assets/med2.png", details: "Pediatrics" },
    { name: "Dr. Rohan Verma", specialization: "Consultant - Neonatologist", image: "/assets/med2.png", details: "Pediatrics" },
    { name: "Dr. Neha Gupta", specialization: "Senior Consultant - Pediatric Endocrinologist", image: "/assets/med2.png", details: "Pediatrics" },
    { name: "Dr. Mahesh K", specialization: "Consultant - Child Development Specialist", image: "/assets/med2.png", details: "Pediatrics" },
  ],
  endocrinology: [
    { name: "Dr. Arun Bansal", specialization: "Senior Consultant - Endocrinologist", image: "/assets/med2.png", details: "Endocrinology" },
    { name: "Dr. Shalini Gupta", specialization: "Consultant - Diabetologist", image: "/assets/med2.png", details: "Endocrinology" },
    { name: "Dr. Kavitha Rao", specialization: "Consultant - Reproductive Endocrinologist", image: "/assets/med2.png", details: "Endocrinology" },
  ],
  orthopedics: [
    { name: "Dr. Rahul Nambiar", specialization: "Senior Consultant - Joint Replacement Specialist", image: "/assets/med2.png", details: "Orthopedics" },
    { name: "Dr. Ritu Kapoor", specialization: "Consultant - Pediatric Orthopedic Surgeon", image: "/assets/med2.png", details: "Orthopedics" },
    { name: "Dr. Kunal Mehra", specialization: "Consultant - Sports Injury Specialist", image: "/assets/med2.png", details: "Orthopedics" },
    { name: "Dr. Sneha Bhardwaj", specialization: "Senior Consultant - Spine Surgeon", image: "/assets/med2.png", details: "Orthopedics" },
  ],
  oncology: [
    { name: "Dr. Shantanu Roy", specialization: "Senior Consultant - Medical Oncologist", image: "/assets/med2.png", details: "Oncology" },
    { name: "Dr. Pallavi Agarwal", specialization: "Consultant - Radiation Oncologist", image: "/assets/med2.png", details: "Oncology" },
    { name: "Dr. Swetha Rao", specialization: "Consultant - Hematologist", image: "/assets/med2.png", details: "Oncology" },
  ],
  gynecology: [
    { name: "Dr. Sunita Reddy", specialization: "Senior Consultant - Obstetrician and Gynecologist", image: "/assets/med2.png", details: "Gynecology" },
    { name: "Dr. Meghna Patel", specialization: "Consultant - High-Risk Pregnancy Specialist", image: "/assets/med2.png", details: "Gynecology" },
    { name: "Dr. Priyanka Joshi", specialization: "Consultant - Minimally Invasive Surgery Specialist", image: "/assets/med2.png", details: "Gynecology" },
    { name: "Dr. Anjali Khanna", specialization: "Senior Consultant - Endometriosis Specialist", image: "/assets/med2.png", details: "Gynecology" },
  ],
  urology: [
    { name: "Dr. Ashok Kumar", specialization: "Senior Consultant - Urologist", image: "/assets/med2.png", details: "Urology" },
    { name: "Dr. Snehal Shah", specialization: "Consultant - Pediatric Urologist", image: "/assets/med2.png", details: "Urology" },
    { name: "Dr. Harsh Mehta", specialization: "Senior Consultant - Andrologist", image: "/assets/med2.png", details: "Urology" },
    { name: "Dr. Priya Iyer", specialization: "Consultant - Female Urologist", image: "/assets/med2.png", details: "Urology" },
  ],
  pulmonology: [
    { name: "Dr. Sanjay Gupta", specialization: "Senior Consultant - Pulmonologist", image: "/assets/med2.png", details: "Pulmonology" },
    { name: "Dr. Manisha Jain", specialization: "Consultant - Asthma Specialist", image: "/assets/med2.png", details: "Pulmonology" },
    { name: "Dr. Sneha Nair", specialization: "Consultant - Lung Cancer Specialist", image: "/assets/med2.png", details: "Pulmonology" },
  ],
  dermatology: [
    { name: "Dr. Pooja Sharma", specialization: "Senior Consultant - Dermatologist", image: "/assets/med2.png", details: "Dermatology" },
    { name: "Dr. Naveen Reddy", specialization: "Consultant - Hair Restoration Specialist", image: "/assets/med2.png", details: "Dermatology" },
    { name: "Dr. Anjali Tiwari", specialization: "Senior Consultant - Laser Specialist", image: "/assets/med2.png", details: "Dermatology" },
    { name: "Dr. Rohit Khanna", specialization: "Consultant - Acne and Scar Treatment Specialist", image: "/assets/med2.png", details: "Dermatology" },
  ],
  ophthalmology: [
    { name: "Dr. Rekha Menon", specialization: "Senior Consultant - Ophthalmologist", image: "/assets/med2.png", details: "Ophthalmology" },
    { name: "Dr. Suresh Iyer", specialization: "Consultant - Glaucoma Specialist", image: "/assets/med2.png", details: "Ophthalmology" },
    { name: "Dr. Rina Sharma", specialization: "Senior Consultant - Retinal Specialist", image: "/assets/med2.png", details: "Ophthalmology" },
    { name: "Dr. Ravi Kapoor", specialization: "Consultant - Corneal Transplant Specialist", image: "/assets/med2.png", details: "Ophthalmology" },
  ],

  rheumatology: [
    { name: "Dr. Meena Kapoor", specialization: "Senior Consultant - Rheumatologist", image: "/assets/med2.png", details: "Rheumatology" },
    { name: "Dr. Rajesh Gupta", specialization: "Consultant - Arthritis Specialist", image: "/assets/med2.png", details: "Rheumatology" },
    { name: "Dr. Priya Sharma", specialization: "Senior Consultant - Fibromyalgia Specialist", image: "/assets/med2.png", details: "Rheumatology" },
    { name: "Dr. Harish Kumar", specialization: "Consultant - Connective Tissue Disorder Specialist", image: "/assets/med2.png", details: "Rheumatology" },
  ],
  neurosurgery: [
    { name: "Dr. Ramesh Iyer", specialization: "Senior Consultant - Neurosurgeon", image: "/assets/med2.png", details: "Neurosurgery" },
    { name: "Dr. Kavita Menon", specialization: "Consultant - Epilepsy Surgery Specialist", image: "/assets/med2.png", details: "Neurosurgery" },
    { name: "Dr. Ravi Sharma", specialization: "Senior Consultant - Vascular Neurosurgeon", image: "/assets/med2.png", details: "Neurosurgery" },
    { name: "Dr. Sneha Joshi", specialization: "Consultant - Pediatric Neurosurgeon", image: "/assets/med2.png", details: "Neurosurgery" },
  ],
  radiology: [
    { name: "Dr. Rajiv Khanna", specialization: "Senior Consultant - Interventional Radiologist", image: "/assets/med2.png", details: "Radiology" },
    { name: "Dr. Priya Menon", specialization: "Consultant - Diagnostic Radiologist", image: "/assets/med2.png", details: "Radiology" },
    { name: "Dr. Rohan Desai", specialization: "Senior Consultant - Neuroradiologist", image: "/assets/med2.png", details: "Radiology" },
    { name: "Dr. Ananya Sharma", specialization: "Consultant - Pediatric Radiologist", image: "/assets/med2.png", details: "Radiology" },
  ],
  nephrology: [
    { name: "Dr. Harish Nair", specialization: "Senior Consultant - Nephrologist", image: "/assets/med2.png", details: "Nephrology" },
    { name: "Dr. Sanjay Menon", specialization: "Senior Consultant - Chronic Kidney Disease Specialist", image: "/assets/med2.png", details: "Nephrology" },
    { name: "Dr. Priya Sharma", specialization: "Consultant - Hypertension Specialist", image: "/assets/med2.png", details: "Nephrology" },
  ],
  plastic_surgery: [
    { name: "Dr. Kavita Sharma", specialization: "Senior Consultant - Plastic and Reconstructive Surgeon", image: "/assets/med2.png", details: "Plastic Surgery" },
    { name: "Dr. Rohan Gupta", specialization: "Consultant - Cosmetic Surgeon", image: "/assets/med2.png", details: "Plastic Surgery" },
    { name: "Dr. Swati Desai", specialization: "Senior Consultant - Burn Specialist", image: "/assets/med2.png", details: "Plastic Surgery" },
    { name: "Dr. Rajiv Iyer", specialization: "Consultant - Hand Surgery Specialist", image: "/assets/med2.png", details: "Plastic Surgery" },
  ],
  neonatology: [
    { name: "Dr. Anita Sharma", specialization: "Senior Consultant - Neonatologist", image: "/assets/med2.png", details: "Neonatology" },
    { name: "Dr. Ramesh Desai", specialization: "Consultant - Preterm Baby Specialist", image: "/assets/med2.png", details: "Neonatology" },
   ],
  vascular_surgery: [
    { name: "Dr. Rajesh Kumar", specialization: "Senior Consultant - Vascular Surgeon", image: "/assets/med2.png", details: "Vascular Surgery" },
    { name: "Dr. Anjali Kapoor", specialization: "Consultant - Endovascular Specialist", image: "/assets/med2.png", details: "Vascular Surgery" },
    { name: "Dr. Manisha Gupta", specialization: "Senior Consultant - Diabetic Foot Specialist", image: "/assets/med2.png", details: "Vascular Surgery" },
    { name: "Dr. Rohan Sharma", specialization: "Consultant - Peripheral Artery Disease Specialist", image: "/assets/med2.png", details: "Vascular Surgery" },
  ],
  psychiatry: [
    { name: "Dr. Sanjay Menon", specialization: "Senior Consultant - Psychiatrist", image: "/assets/med2.png", details: "Psychiatry" },
    { name: "Dr. Priya Gupta", specialization: "Consultant - Child Psychiatrist", image: "/assets/med2.png", details: "Psychiatry" },
    { name: "Dr. Rajiv Desai", specialization: "Senior Consultant - Anxiety and Depression Specialist", image: "/assets/med2.png", details: "Psychiatry" },
    { name: "Dr. Niharika Joshi", specialization: "Consultant - Geriatric Psychiatrist", image: "/assets/med3.png", details: "Psychiatry" },
  ],
};

function DoctorsList() {
  const { specialization } = useParams();
  const doctors = doctorsData[specialization.toLowerCase().replace(/\s+/g, '_')] || [];


  return (
    <div style={{ padding: "20px",background: "#0F6A6B" }}>
      <Typography
        variant="h3"
        gutterBottom
        style={{
          color: "#fff",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        {specialization.charAt(0).toUpperCase() + specialization.slice(1)}
      </Typography>
      <Grid container spacing={3}>
        {doctors.map((doctor, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{ borderRadius: "15px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
              <CardMedia
                component="img"
                alt={doctor.name}
                height="300"
                width="200"
                image={doctor.image}
                style={{ borderRadius: "15px 15px 0 0" }}
              />
              <CardContent style={{ textAlign: "center" }}>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  {doctor.name}
                </Typography>
                <Typography style={{ color: "#555" }}>
                  {doctor.specialization}
                </Typography>
                <Typography style={{ color: "#777", marginBottom: "15px" }}>
                  {doctor.details}
                </Typography>
                
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default DoctorsList;