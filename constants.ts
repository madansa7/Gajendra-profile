import { ExperienceItem, EducationItem, SkillMetric, CertificationItem } from './types';

export const PROFILE = {
  name: "Gajendra Chauhan",
  tagline: "Oncology Nurse | Healthcare Team Leader | Patient Care Specialist",
  location: "Gandhinagar, Gujarat, India",
  email: "gajendrachouhan@live.com",
  phone: "+91 95106 96106",
  linkedin: "", 
  summary: "Dedicated and compassionate Healthcare Professional with over 5 years of specialized experience in Oncology and General Nursing. Currently serving as an Oncology Nurse at KD Hospital, leveraging deep expertise in chemotherapy administration, patient safety, and symptom management. Proven track record in team leadership and clinical operations, committed to delivering high-quality patient-centric care.",
};

export const TOP_SKILLS_DATA: SkillMetric[] = [
  { subject: 'Oncology Care', A: 95, fullMark: 100 },
  { subject: 'Patient Safety', A: 98, fullMark: 100 },
  { subject: 'Team Leadership', A: 90, fullMark: 100 },
  { subject: 'Clinical Ops', A: 88, fullMark: 100 },
  { subject: 'Communication', A: 92, fullMark: 100 },
  { subject: 'Critical Thinking', A: 85, fullMark: 100 },
];

export const CERTIFICATIONS: CertificationItem[] = [
  { name: "Team Management & Leadership" },
  { name: "Oncology Nursing Specialization" },
  { name: "Patient Care & Counseling" },
  { name: "Clinical Documentation" },
  { name: "Languages: English, Hindi, Gujarati, Rajasthani" },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Madhya Pradesh Medical Science University",
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
      "Provide specialized nursing care to oncology patients, including administration of chemotherapy and symptom management.",
      "Monitor patient health conditions and vital signs, reporting changes to the medical team immediately.",
      "Educate patients and families regarding treatment plans, side effects, and home care strategies.",
      "Collaborate with a multidisciplinary team to ensure comprehensive patient care and safety."
    ]
  },
  {
    company: "HCG Cancer Center, Sola Ahmedabad",
    role: "Team Lead (Incharge)",
    period: "3 Years",
    duration: "3 years",
    location: "Ahmedabad, Gujarat",
    description: [
      "Led and supervised a team of nurses to ensure efficient departmental operations and high standards of care.",
      "Managed shift schedules, patient assignments, and resource allocation.",
      "Acted as a liaison between the nursing staff, physicians, and hospital administration.",
      "Mentored junior staff and conducted training on new protocols and patient safety measures."
    ]
  },
  {
    company: "Shreyas Speciality Hospital",
    role: "Staff Nurse",
    period: "1 Year",
    duration: "1 year",
    location: "India",
    description: [
      "Delivered compassionate bedside care to patients in a speciality setting.",
      "Administered medications and treatments as prescribed by physicians.",
      "Maintained accurate patient records and documentation regarding patient progress.",
      "Assisted doctors during medical procedures and ensured a sterile environment."
    ]
  },
  {
    company: "Apollo LIFE",
    role: "Staff Nurse",
    period: "6 Months",
    duration: "6 months",
    location: "India",
    description: [
      "Provided quality healthcare services and support to patients.",
      "Conducted initial patient assessments and prepared patients for examinations.",
      "Ensured adherence to hospital policies and infection control standards."
    ]
  }
];