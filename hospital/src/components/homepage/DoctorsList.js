import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";

const doctorsData = {
  cardiology: [
    { name: "Dr. K R Kirshnaveni", specialization: "Senior Consultant - Interventional Cardiologist", image: "/assets/med2.png", details: "Cardiology" },
    { name: "Dr. Samuktha M", specialization: "Senior Consultant - Interventional Cardiologist", image: "/assets/med2.png", details: "Cardiology" },
    { name: "Dr. Arun V", specialization: "Senior Consultant - Heart Failure Specialist", image: "/assets/med2.png", details: "Cardiology" },
    { name: "Dr. Meghana Rao", specialization: "Consultant - Electrophysiologist", image: "/assets/med2.png", details: "Cardiology" },
    { name: "Dr. Mohit Khanna", specialization: "Consultant - Pediatric Cardiologist", image: "/assets/med2.png", details: "Cardiology" },
    { name: "Dr. Priya Sharma", specialization: "Consultant - Cardiothoracic Surgeon", image: "/assets/med2.png", details: "Cardiology" },
  ],
  neurology: [
    { name: "Dr. Suresh Menon", specialization: "Senior Consultant - Neurologist", image: "/assets/med2.png", details: "Neurology" },
    { name: "Dr. Anjali R", specialization: "Consultant - Neurophysiologist", image: "/assets/med2.png", details: "Neurology" },
    { name: "Dr. Varun Patel", specialization: "Senior Consultant - Epileptologist", image: "/assets/med2.png", details: "Neurology" },
    { name: "Dr. Deepak Jain", specialization: "Consultant - Stroke Specialist", image: "/assets/med2.png", details: "Neurology" },
    { name: "Dr. Rina Kaur", specialization: "Senior Consultant - Movement Disorder Specialist", image: "/assets/med2.png", details: "Neurology" },
    { name: "Dr. Ajay Tiwari", specialization: "Consultant - Neuro-Oncologist", image: "/assets/med2.png", details: "Neurology" },
  ],
  gastroenterology: [
    { name: "Dr. Rekha Nair", specialization: "Senior Consultant - Gastroenterologist", image: "assets/med2.png", details: "Gastroenterology" },
    { name: "Dr. Vivek Sharma", specialization: "Consultant - Hepatologist", image: "assets/med2.png", details: "Gastroenterology" },
    { name: "Dr. Meenakshi Rao", specialization: "Senior Consultant - Pediatric Gastroenterologist", image: "assets/med2.png", details: "Gastroenterology" },
    { name: "Dr. Nishanth K", specialization: "Consultant - Endoscopy Specialist", image: "assets/med2.png", details: "Gastroenterology" },
    { name: "Dr. Archana S", specialization: "Consultant - Pancreatic Specialist", image: "assets/med2.png", details: "Gastroenterology" },
    { name: "Dr. Karthik Menon", specialization: "Senior Consultant - Liver Transplant Specialist", image: "assets/med2.png", details: "Gastroenterology" },
  ],
  pediatrics: [
    { name: "Dr. Shweta Arora", specialization: "Senior Consultant - Pediatrician", image: "/assets/med2.png", details: "Pediatrics" },
    { name: "Dr. Rohan Verma", specialization: "Consultant - Neonatologist", image: "/assets/med2.png", details: "Pediatrics" },
    { name: "Dr. Neha Gupta", specialization: "Senior Consultant - Pediatric Endocrinologist", image: "/assets/med2.png", details: "Pediatrics" },
    { name: "Dr. Mahesh K", specialization: "Consultant - Child Development Specialist", image: "/assets/med2.png", details: "Pediatrics" },
    { name: "Dr. Akash Iyer", specialization: "Senior Consultant - Pediatric Neurologist", image: "/assets/med2.png", details: "Pediatrics" },
    { name: "Dr. Tanya Kapoor", specialization: "Consultant - Pediatric Gastroenterologist", image: "/assets/med2.png", details: "Pediatrics" },
  ],
  endocrinology: [
    { name: "Dr. Arun Bansal", specialization: "Senior Consultant - Endocrinologist", image: "/assets/med2.png", details: "Endocrinology" },
    { name: "Dr. Shalini Gupta", specialization: "Consultant - Diabetologist", image: "/assets/med2.png", details: "Endocrinology" },
    { name: "Dr. Vivek Rana", specialization: "Senior Consultant - Pediatric Endocrinologist", image: "/assets/med2.png", details: "Endocrinology" },
    { name: "Dr. Priya Desai", specialization: "Consultant - Thyroid Specialist", image: "/assets/med2.png", details: "Endocrinology" },
    { name: "Dr. Rajesh Nair", specialization: "Senior Consultant - Hormonal Specialist", image: "/assets/med2.png", details: "Endocrinology" },
    { name: "Dr. Kavitha Rao", specialization: "Consultant - Reproductive Endocrinologist", image: "/assets/med2.png", details: "Endocrinology" },
  ],
  orthopedics: [
    { name: "Dr. Rahul Nambiar", specialization: "Senior Consultant - Joint Replacement Specialist", image: "/assets/med2.png", details: "Orthopedics" },
    { name: "Dr. Ritu Kapoor", specialization: "Consultant - Pediatric Orthopedic Surgeon", image: "/assets/med2.png", details: "Orthopedics" },
    { name: "Dr. Kunal Mehra", specialization: "Consultant - Sports Injury Specialist", image: "/assets/med2.png", details: "Orthopedics" },
    { name: "Dr. Sneha Bhardwaj", specialization: "Senior Consultant - Spine Surgeon", image: "/assets/med2.png", details: "Orthopedics" },
    { name: "Dr. Vijay K", specialization: "Consultant - Trauma Surgeon", image: "/assets/med2.png", details: "Orthopedics" },
    { name: "Dr. Priyanka Sharma", specialization: "Senior Consultant - Bone Health Specialist", image: "/assets/med2.png", details: "Orthopedics" },
  ],
  oncology: [
    { name: "Dr. Shantanu Roy", specialization: "Senior Consultant - Medical Oncologist", image: "/assets/med2.png", details: "Oncology" },
    { name: "Dr. Pallavi Agarwal", specialization: "Consultant - Radiation Oncologist", image: "/assets/med2.png", details: "Oncology" },
    { name: "Dr. Arvind Menon", specialization: "Senior Consultant - Surgical Oncologist", image: "/assets/med2.png", details: "Oncology" },
    { name: "Dr. Rashmi Nair", specialization: "Consultant - Pediatric Oncologist", image: "/assets/med2.png", details: "Oncology" },
    { name: "Dr. Nitin Singh", specialization: "Senior Consultant - Breast Cancer Specialist", image: "/assets/med2.png", details: "Oncology" },
    { name: "Dr. Swetha Rao", specialization: "Consultant - Hematologist", image: "/assets/med2.png", details: "Oncology" },
  ],
  gynecology: [
    { name: "Dr. Sunita Reddy", specialization: "Senior Consultant - Obstetrician and Gynecologist", image: "/assets/med2.png", details: "Gynecology" },
    { name: "Dr. Meghna Patel", specialization: "Consultant - High-Risk Pregnancy Specialist", image: "/assets/med2.png", details: "Gynecology" },
    { name: "Dr. Ravi Chandran", specialization: "Senior Consultant - Reproductive Medicine Specialist", image: "/assets/med2.png", details: "Gynecology" },
    { name: "Dr. Roshni Desai", specialization: "Consultant - Gynecological Oncologist", image: "/assets/med2.png", details: "Gynecology" },
    { name: "Dr. Priyanka Joshi", specialization: "Consultant - Minimally Invasive Surgery Specialist", image: "/assets/med2.png", details: "Gynecology" },
    { name: "Dr. Anjali Khanna", specialization: "Senior Consultant - Endometriosis Specialist", image: "/assets/med2.png", details: "Gynecology" },
  ],
  urology: [
    { name: "Dr. Ashok Kumar", specialization: "Senior Consultant - Urologist", image: "/assets/med2.png", details: "Urology" },
    { name: "Dr. Snehal Shah", specialization: "Consultant - Pediatric Urologist", image: "/assets/med2.png", details: "Urology" },
    { name: "Dr. Harsh Mehta", specialization: "Senior Consultant - Andrologist", image: "/assets/med2.png", details: "Urology" },
    { name: "Dr. Kavita Menon", specialization: "Consultant - Minimally Invasive Urology Specialist", image: "/assets/med2.png", details: "Urology" },
    { name: "Dr. Ramesh Reddy", specialization: "Senior Consultant - Kidney Transplant Specialist", image: "/assets/med2.png", details: "Urology" },
    { name: "Dr. Priya Iyer", specialization: "Consultant - Female Urologist", image: "/assets/med2.png", details: "Urology" },
  ],
  pulmonology: [
    { name: "Dr. Sanjay Gupta", specialization: "Senior Consultant - Pulmonologist", image: "/assets/med2.png", details: "Pulmonology" },
    { name: "Dr. Manisha Jain", specialization: "Consultant - Asthma Specialist", image: "/assets/med2.png", details: "Pulmonology" },
    { name: "Dr. Sharat Reddy", specialization: "Senior Consultant - Sleep Medicine Specialist", image: "/assets/med2.png", details: "Pulmonology" },
    { name: "Dr. Nidhi Kumar", specialization: "Consultant - Tuberculosis Specialist", image: "/assets/med2.png", details: "Pulmonology" },
    { name: "Dr. Karthik Rao", specialization: "Senior Consultant - Interventional Pulmonologist", image: "/assets/med2.png", details: "Pulmonology" },
    { name: "Dr. Sneha Nair", specialization: "Consultant - Lung Cancer Specialist", image: "/assets/med2.png", details: "Pulmonology" },
  ],
  dermatology: [
    { name: "Dr. Pooja Sharma", specialization: "Senior Consultant - Dermatologist", image: "/assets/med2.png", details: "Dermatology" },
    { name: "Dr. Rajeev Menon", specialization: "Consultant - Cosmetic Dermatologist", image: "/assets/med2.png", details: "Dermatology" },
    { name: "Dr. Sonia Gupta", specialization: "Senior Consultant - Pediatric Dermatologist", image: "/assets/med2.png", details: "Dermatology" },
    { name: "Dr. Naveen Reddy", specialization: "Consultant - Hair Restoration Specialist", image: "/assets/med2.png", details: "Dermatology" },
    { name: "Dr. Anjali Tiwari", specialization: "Senior Consultant - Laser Specialist", image: "/assets/med2.png", details: "Dermatology" },
    { name: "Dr. Rohit Khanna", specialization: "Consultant - Acne and Scar Treatment Specialist", image: "/assets/med2.png", details: "Dermatology" },
  ],
  ophthalmology: [
    { name: "Dr. Rekha Menon", specialization: "Senior Consultant - Ophthalmologist", image: "/assets/med2.png", details: "Ophthalmology" },
    { name: "Dr. Arjun Patel", specialization: "Consultant - Cataract Surgeon", image: "/assets/med2.png", details: "Ophthalmology" },
    { name: "Dr. Deepa Nair", specialization: "Senior Consultant - Pediatric Ophthalmologist", image: "/assets/med2.png", details: "Ophthalmology" },
    { name: "Dr. Suresh Iyer", specialization: "Consultant - Glaucoma Specialist", image: "/assets/med2.png", details: "Ophthalmology" },
    { name: "Dr. Rina Sharma", specialization: "Senior Consultant - Retinal Specialist", image: "/assets/med2.png", details: "Ophthalmology" },
    { name: "Dr. Ravi Kapoor", specialization: "Consultant - Corneal Transplant Specialist", image: "/assets/med2.png", details: "Ophthalmology" },
  ],

  rheumatology: [
    { name: "Dr. Meena Kapoor", specialization: "Senior Consultant - Rheumatologist", image: "/assets/med2.png", details: "Rheumatology" },
    { name: "Dr. Rahul Nair", specialization: "Consultant - Pediatric Rheumatologist", image: "/assets/med2.png", details: "Rheumatology" },
    { name: "Dr. Sneha Menon", specialization: "Senior Consultant - Autoimmune Disease Specialist", image: "/assets/med2.png", details: "Rheumatology" },
    { name: "Dr. Rajesh Gupta", specialization: "Consultant - Arthritis Specialist", image: "/assets/med2.png", details: "Rheumatology" },
    { name: "Dr. Priya Sharma", specialization: "Senior Consultant - Fibromyalgia Specialist", image: "/assets/med2.png", details: "Rheumatology" },
    { name: "Dr. Harish Kumar", specialization: "Consultant - Connective Tissue Disorder Specialist", image: "/assets/med2.png", details: "Rheumatology" },
  ],
  neurosurgery: [
    { name: "Dr. Ramesh Iyer", specialization: "Senior Consultant - Neurosurgeon", image: "/assets/med2.png", details: "Neurosurgery" },
    { name: "Dr. Anjali Nair", specialization: "Consultant - Spine Neurosurgeon", image: "/assets/med2.png", details: "Neurosurgery" },
    { name: "Dr. Sanjay Gupta", specialization: "Senior Consultant - Brain Tumor Specialist", image: "/assets/med2.png", details: "Neurosurgery" },
    { name: "Dr. Kavita Menon", specialization: "Consultant - Epilepsy Surgery Specialist", image: "/assets/med2.png", details: "Neurosurgery" },
    { name: "Dr. Ravi Sharma", specialization: "Senior Consultant - Vascular Neurosurgeon", image: "/assets/med2.png", details: "Neurosurgery" },
    { name: "Dr. Sneha Joshi", specialization: "Consultant - Pediatric Neurosurgeon", image: "/assets/med2.png", details: "Neurosurgery" },
  ],
  radiology: [
    { name: "Dr. Rajiv Khanna", specialization: "Senior Consultant - Interventional Radiologist", image: "/assets/med2.png", details: "Radiology" },
    { name: "Dr. Priya Menon", specialization: "Consultant - Diagnostic Radiologist", image: "/assets/med2.png", details: "Radiology" },
    { name: "Dr. Rohan Desai", specialization: "Senior Consultant - Neuroradiologist", image: "/assets/med2.png", details: "Radiology" },
    { name: "Dr. Swati Iyer", specialization: "Consultant - Breast Imaging Specialist", image: "/assets/med2.png", details: "Radiology" },
    { name: "Dr. Arun Reddy", specialization: "Senior Consultant - Abdominal Imaging Specialist", image: "/assets/med2.png", details: "Radiology" },
    { name: "Dr. Ananya Sharma", specialization: "Consultant - Pediatric Radiologist", image: "/assets/med2.png", details: "Radiology" },
  ],
  nephrology: [
    { name: "Dr. Harish Nair", specialization: "Senior Consultant - Nephrologist", image: "/assets/med2.png", details: "Nephrology" },
    { name: "Dr. Manisha Kapoor", specialization: "Consultant - Dialysis Specialist", image: "/assets/med2.png", details: "Nephrology" },
    { name: "Dr. Ramesh Gupta", specialization: "Senior Consultant - Kidney Transplant Specialist", image: "/assets/med2.png", details: "Nephrology" },
    { name: "Dr. Sneha Reddy", specialization: "Consultant - Pediatric Nephrologist", image: "/assets/med2.png", details: "Nephrology" },
    { name: "Dr. Sanjay Menon", specialization: "Senior Consultant - Chronic Kidney Disease Specialist", image: "/assets/med2.png", details: "Nephrology" },
    { name: "Dr. Priya Sharma", specialization: "Consultant - Hypertension Specialist", image: "/assets/med2.png", details: "Nephrology" },
  ],
  plastic_surgery: [
    { name: "Dr. Kavita Sharma", specialization: "Senior Consultant - Plastic and Reconstructive Surgeon", image: "/assets/med2.png", details: "Plastic Surgery" },
    { name: "Dr. Rohan Gupta", specialization: "Consultant - Cosmetic Surgeon", image: "/assets/med2.png", details: "Plastic Surgery" },
    { name: "Dr. Swati Desai", specialization: "Senior Consultant - Burn Specialist", image: "/assets/med2.png", details: "Plastic Surgery" },
    { name: "Dr. Rajiv Iyer", specialization: "Consultant - Hand Surgery Specialist", image: "/assets/med2.png", details: "Plastic Surgery" },
    { name: "Dr. Snehal Reddy", specialization: "Senior Consultant - Craniofacial Surgery Specialist", image: "/assets/med2.png", details: "Plastic Surgery" },
    { name: "Dr. Niharika Menon", specialization: "Consultant - Breast Reconstruction Specialist", image: "/assets/med2.png", details: "Plastic Surgery" },
  ],
  neonatology: [
    { name: "Dr. Anita Sharma", specialization: "Senior Consultant - Neonatologist", image: "/assets/med2.png", details: "Neonatology" },
    { name: "Dr. Ramesh Desai", specialization: "Consultant - Preterm Baby Specialist", image: "/assets/med2.png", details: "Neonatology" },
    { name: "Dr. Sneha Kapoor", specialization: "Senior Consultant - Neonatal Intensive Care Specialist", image: "/assets/med2.png", details: "Neonatology" },
    { name: "Dr. Arjun Nair", specialization: "Consultant - Neonatal Nutrition Specialist", image: "/assets/med2.png", details: "Neonatology" },
   ],
  vascular_surgery: [
    { name: "Dr. Rajesh Kumar", specialization: "Senior Consultant - Vascular Surgeon", image: "/assets/med2.png", details: "Vascular Surgery" },
    { name: "Dr. Anjali Kapoor", specialization: "Consultant - Endovascular Specialist", image: "/assets/med2.png", details: "Vascular Surgery" },
    { name: "Dr. Sneha Iyer", specialization: "Senior Consultant - Aortic Surgery Specialist", image: "/assets/med2.png", details: "Vascular Surgery" },
    { name: "Dr. Arun Reddy", specialization: "Consultant - Vein Disease Specialist", image: "/assets/med2.png", details: "Vascular Surgery" },
    { name: "Dr. Manisha Gupta", specialization: "Senior Consultant - Diabetic Foot Specialist", image: "/assets/med2.png", details: "Vascular Surgery" },
    { name: "Dr. Rohan Sharma", specialization: "Consultant - Peripheral Artery Disease Specialist", image: "/assets/med2.png", details: "Vascular Surgery" },
  ],
  psychiatry: [
    { name: "Dr. Sanjay Menon", specialization: "Senior Consultant - Psychiatrist", image: "/assets/med2.png", details: "Psychiatry" },
    { name: "Dr. Priya Gupta", specialization: "Consultant - Child Psychiatrist", image: "/assets/med2.png", details: "Psychiatry" },
    { name: "Dr. Snehal Reddy", specialization: "Senior Consultant - Addiction Specialist", image: "/assets/med2.png", details: "Psychiatry" },
    { name: "Dr. Kavita Sharma", specialization: "Consultant - Adolescent Psychiatry Specialist", image: "/assets/med2.png", details: "Psychiatry" },
    { name: "Dr. Rajiv Desai", specialization: "Senior Consultant - Anxiety and Depression Specialist", image: "/assets/med2.png", details: "Psychiatry" },
    { name: "Dr. Niharika Joshi", specialization: "Consultant - Geriatric Psychiatrist", image: "/assets/med3.png", details: "Psychiatry" },
  ],
};

function DoctorsList() {
  const { specialization } = useParams();
  const doctors = doctorsData[specialization.toLowerCase()] || [];

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
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    backgroundColor: "#0078AA",
                    color: "#fff",
                    textTransform: "none",
                    padding: "8px 16px",
                  }}
                >
                  Know More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default DoctorsList;
