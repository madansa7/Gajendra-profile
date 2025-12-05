import { ExperienceItem, EducationItem, SkillMetric, CertificationItem } from './types';

export const PROFILE = {
  name: "Gajendra Chauhan",
  tagline: "Oncology Nurse | Healthcare Team Leader | Patient Care Specialist",
  location: "Gandhinagar, Gujarat, India",
  email: "gajendrachouhan@live.com",
  phone: "+91 95106 96106",
  linkedin: "", 
  summary: "Dedicated and compassionate Healthcare Professional with experience in Oncology and General Nursing. Currently serving as an Oncology Nurse at KD Hospital, Ahmedabad. Strong background as a Team Lead with expertise in patient care, leadership, and organizational management. Punctual, disciplined, and possessing excellent communication skills with a focus on delivering quality health care.",
};

export const TOP_SKILLS_DATA: SkillMetric[] = [
  { subject: 'Oncology Care', A: 95, fullMark: 100 },
  { subject: 'Patient Safety', A: 90, fullMark: 100 },
  { subject: 'Team Leadership', A: 85, fullMark: 100 },
  { subject: 'Communication', A: 92, fullMark: 100 },
  { subject: 'Clinical Ops', A: 80, fullMark: 100 },
  { subject: 'Punctuality', A: 95, fullMark: 100 },
];

export const CERTIFICATIONS: CertificationItem[] = [
  { name: "Team Leadership & Management" },
  { name: "Oncology Nursing" },
  { name: "Patient Care & Safety" },
  { name: "Organizational Leadership" },
  { name: "Languages: English, Hindi, Gujarati, Rajasthani" },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Madhya Pradesh Medical Science University, Jabalpur",
    degree: "Post Basic B.Sc. Nursing",
    period: "Result Awaited"
  },
  {
    institution: "Rajiv Gandhi University of Health Sciences, Bangalore",
    degree: "GNM (General Nursing and Midwifery)",
    period: "2010 - 2017"
  },
  {
    institution: "RBSE, Ajmer",
    degree: "Higher Secondary (10+2)",
    period: "2008"
  },
  {
    institution: "RBSE, Ajmer",
    degree: "Secondary (10th)",
    period: "2006"
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "KD Hospital, Ahmedabad",
    role: "Oncology Nurse",
    period: "Present",
    duration: "Current",
    location: "Ahmedabad, Gujarat",
    description: [
      "Currently working as an Oncology Nurse, providing specialized care to cancer patients.",
      "Utilizing skills and experience to ensure quality health care delivery.",
      "Focusing on patient safety and comfort in a high-acuity environment."
    ]
  },
  {
    company: "HCG Cancer Center, Sola Ahmedabad",
    role: "Team Lead (Incharge)",
    period: "3 Years",
    duration: "3 years",
    location: "Ahmedabad, Gujarat",
    description: [
      "Served as a Team Lead (Incharge), managing nursing staff and daily operations.",
      "Demonstrated strong leadership skills in organizing departmental workflow.",
      "Ensured efficient coordination between nursing staff and physicians."
    ]
  },
  {
    company: "Shreyas Speciality Hospital",
    role: "Staff Nurse",
    period: "1 Year",
    duration: "1 year",
    location: "India",
    description: [
      "Gained foundational experience as a staff nurse in a speciality hospital setting.",
      "Provided compassionate bedside care and assisted with medical procedures."
    ]
  },
  {
    company: "Apollo LIFE",
    role: "Staff Nurse",
    period: "6 Months",
    duration: "6 months",
    location: "India",
    description: [
      "Worked as a staff nurse, contributing to patient care and recovery.",
      "Developed key nursing skills in a professional healthcare environment."
    ]
  }
];