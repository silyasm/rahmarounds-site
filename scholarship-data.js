/* ===========================================================
   SCHOLARSHIP DATA
   -----------------------------------------------------------
   This is the only file you need to edit to add, remove, or
   change a scholarship post. Each entry is one "blog post"
   card on the Scholarships page. The page automatically
   builds the search index and tag filters from this list —
   you don't need to touch scholarships.html or the JS logic.

   HOW TO ADD A NEW SCHOLARSHIP:
   1. Copy one of the { ... } blocks below.
   2. Paste it inside the [ ] array, separated by a comma.
   3. Fill in your own title, org, excerpt, tags, and link.
   4. Give it a unique "id" (just increase the number by 1).
   5. Save the file — no other changes needed.

   FIELD GUIDE:
   - id:      unique number, e.g. 20
   - title:   scholarship name, shows as the card headline
   - org:     who offers it (organization/sponsor name).
              Leave as "" to hide that line on the card.
   - excerpt: 1-3 sentence description of the scholarship
   - tags:    array of short labels used for filtering, e.g.
              ["Muslim Scholarship","Open to All"]. Reuse tags
              across entries so the filter chips stay tidy.
   - link:    the URL to the full application/details page
=========================================================== */

const SCHOLARSHIPS = [
  {
    id: 1,
    title: "Sylvia Parkinson Fund",
    org: "Sylvia Parkinson Fund",
    excerpt: "Designated for medical students and prospective medical students chosen for scholarships to fully accredited medical schools, as the Board of Directors deems advisable. Award amount is $2,000-$5,000.",
    tags: ["Open to All", "Medical School"],
    link: "https://www.grantinterface.com/Home/Logon?urlkey=hartfordscholarship"
  },
  {
    id: 2,
    title: "Iranian-American Scholarship Fund",
    org: "Iranian-American Scholarship Fund (IASF)",
    excerpt: "Scholarship applicants are limited to receiving two years of undergraduate funding and/or one year of graduate scholarship from IASF.",
    tags: ["Iranian Heritage"],
    link: "https://iasfund.org/"
  },
  {
    id: 3,
    title: "Endowment for South Asian Students of Indian Descent (ESASID) Scholarship",
    org: "Pennsylvania Medical Society Foundation",
    excerpt: "Established by Drs. Jitendra M. and Saryu J. Desai in 2002. Available each year to a South Asian student of Indian descent enrolled full-time in their second, third, or fourth year at an accredited Pennsylvania medical school. Applicants must be Pennsylvania residents.",
    tags: ["South Asian", "Pennsylvania Residents"],
    link: "https://www.foundationpamedsoc.org/student-financial-services/scholarships/esasid-scholarship"
  },
  {
    id: 4,
    title: "The White Coat Investor Scholarship",
    org: "The White Coat Investor",
    excerpt: "Awards upwards of $70,000, split equally among ten students. All winners also receive a White Coat Investor online course. Students cannot come from an online school background and must be enrolled full-time in a medical school or other professional program (law, dentistry, pharmacy, and others). Schools must be located in the U.S.; students of any citizenship appear to be eligible.",
    tags: ["Open to All", "Graduate/Professional"],
    link: "https://www.whitecoatinvestor.com/medical-school-scholarship/"
  },
  {
    id: 5,
    title: "TYLENOL® Future Care Scholarship",
    org: "TYLENOL®",
    excerpt: "TYLENOL® awards 10 students with $10,000 scholarships and 25 students with $5,000 scholarships.",
    tags: ["Open to All"],
    link: "https://www.tylenol.com/news/scholarship"
  },
  {
    id: 6,
    title: "P.D. Soros Fellowship for New Americans",
    org: "Paul & Daisy Soros Fellowships",
    excerpt: "For applicants under 31 years old who are the child of parents born outside the U.S. as non-U.S. citizens. Finalists are invited to virtual interviews, and Fellows receive stipend and tuition support plus an all-expenses-paid Fall Conference. Award up to $90,000.",
    tags: ["Open to All", "Immigrant Family"],
    link: "https://pdsoros.org/application-process/"
  },
  {
    id: 7,
    title: "OSMOSIS Scholarships",
    org: "American Medical Women's Association (AMWA)",
    excerpt: "Provides study techniques to help you retain, understand, and study more efficiently throughout med school and prepare for the USMLE®. Awarded toward one Osmosis subscription (valued at $199). Awardees must be national AMWA members chosen based on embodiment of AMWA's goals; financial need is also considered.",
    tags: ["AMWA", "Fee Waiver"],
    link: "https://www.amwa-doc.org/osmosis-scholarship/"
  },
  {
    id: 8,
    title: "AMWA Underrepresented Students in Medicine Scholarships",
    org: "American Medical Women's Association (AMWA)",
    excerpt: "AMWA awards two $2,000 scholarships to underrepresented students in medicine, as part of an effort to minimize health disparities and increase diversity in medicine.",
    tags: ["AMWA", "Underrepresented Minority"],
    link: "https://www.amwa-doc.org/underrepresented-students-in-medicine-scholarship/"
  },
  {
    id: 9,
    title: "AMWA Medical Education Scholarships",
    org: "American Medical Women's Association (AMWA)",
    excerpt: "AMWA awards four $500 scholarships to women currently enrolled in medical school. Awardees are chosen based on embodiment of AMWA's goals; financial need, though not a requirement, is also considered.",
    tags: ["AMWA", "Women in Medicine"],
    link: "https://www.amwa-doc.org/students/awards/medical-education-scholarship/"
  },
  {
    id: 10,
    title: "AMWA Membership Fee Waiver",
    org: "American Medical Women's Association (AMWA)",
    excerpt: "AMWA awards six scholarships that waive the cost of national AMWA membership ($75.00 value per person for all years in medical school). Awardees are chosen based on embodiment of AMWA's goals; financial need, though not a requirement, is also considered.",
    tags: ["AMWA", "Fee Waiver"],
    link: "https://www.amwa-doc.org/students/awards/membership-fee-waiver/"
  },
  {
    id: 11,
    title: "Haffizulla Family Scholarship",
    org: "American Medical Women's Association (AMWA)",
    excerpt: "Meant to perpetuate the involvement of young leaders in disease prevention and national health and wellness. Up to two $1,000 scholarships are awarded by Dr. Farzanna Haffizulla or her designee at the annual AMWA awards luncheon. Requires at least 2 years of active involvement in the AMWA student division and current good standing.",
    tags: ["AMWA", "One-Year"],
    link: "https://www.amwa-doc.org/students/awards/haffizulla-family-scholarship-application/"
  },
  {
    id: 12,
    title: "AAMC Herbert W. Nickens Medical Student Scholarships",
    org: "Association of American Medical Colleges (AAMC)",
    excerpt: "Students must be nominated by their medical school (one nomination per school per year). For students entering their third year who have shown leadership addressing inequities in medical education and health care for racial and ethnic minorities. Applicants must be U.S. citizens, permanent residents, or DACA recipients.",
    tags: ["Nomination-Based", "Underrepresented Minority"],
    link: "https://www.aamc.org/what-we-do/aamc-awards/nickens-medical-student-scholarships"
  },
  {
    id: 13,
    title: "The Zahir Family Scholarship",
    org: "Islamic Medical Association of North America (IMANA)",
    excerpt: "A one-year, merit-based scholarship intended to cover tuition and qualified educational expenses at the recipient's chosen collegiate institution ($2,500). Open to all applicants who meet the requirements — looking for passionate young leaders with a demonstrated commitment to causes serving humanity.",
    tags: ["Open to All", "Muslim Scholarship", "One-Year"],
    link: "https://imana.awardspring.com/Home/ScholarshipDetails/269665"
  },
  {
    id: 14,
    title: "The Professor and Mrs. Musahib-UD-Din Khan Scholarship",
    org: "Islamic Medical Association of North America (IMANA)",
    excerpt: "A one-year scholarship intended to cover tuition and qualified educational expenses at the recipient's chosen collegiate institution ($5,000). Open to all applicants who meet the requirements — looking for passionate young leaders with a demonstrated commitment to causes serving humanity.",
    tags: ["Open to All", "Muslim Scholarship", "One-Year"],
    link: "https://imana.awardspring.com/Home/ScholarshipDetails/274142"
  },
  {
    id: 15,
    title: "Kaleem-Hundal Family Scholarship",
    org: "Islamic Medical Association of North America (IMANA)",
    excerpt: "Awarded annually to one medical or optometry student, intended to cover tuition and qualified educational expenses ($3,000). Open to all applicants regardless of race, socioeconomic status, religion, or background. Requires meeting all qualifications in one of two tracks (Optometry, GPA 3.5+, U.S. citizen/permanent resident/DACA, U.S. accredited institution — or Medical degree with intent to pursue Ophthalmology, same additional requirements).",
    tags: ["Open to All", "Muslim Scholarship"],
    link: "https://imana.awardspring.com/Home/ScholarshipDetails/269667"
  },
  {
    id: 16,
    title: "IMANA Medical Scholarship",
    org: "Islamic Medical Association of North America (IMANA)",
    excerpt: "A one-year, merit-based scholarship intended to cover tuition and qualified educational expenses at the recipient's chosen collegiate institution ($5,000). Open to all applicants who meet the requirements, regardless of race, socioeconomic status, religion, or any other background factors.",
    tags: ["Muslim Scholarship", "Open to All"],
    link: "https://www.imana.org/scholarships/"
  },
  {
    id: 17,
    title: "Drs. Sarfaraz and Raafat Family of Awards",
    org: "Islamic Medical Association of North America (IMANA)",
    excerpt: "A one-year scholarship intended to cover tuition and qualified educational expenses at the recipient's chosen collegiate institution ($5,000).",
    tags: ["Open to All", "Muslim Scholarship"],
    link: "https://imana.awardspring.com/Home/ScholarshipDetails/274143"
  },
  {
    id: 18,
    title: "Habib Kothawala Scholarship",
    org: "Islamic Medical Association of North America (IMANA)",
    excerpt: "A one-year scholarship intended to cover tuition and qualified educational expenses at the recipient's chosen collegiate institution ($5,000).",
    tags: ["Muslim Scholarship", "Open to All"],
    link: "https://imana.awardspring.com/Home/ScholarshipDetails/278024"
  },
  {
    id: 19,
    title: "IMANA-FEF Combined Allied Health Professional Scholarship",
    org: "Islamic Medical Association of North America (IMANA-FEF)",
    excerpt: "A renewable scholarship intended to cover tuition and qualified educational expenses at the recipient's chosen collegiate institution ($2,500 per year, $7,500 maximum across 3 years). Open to all applicants who meet the requirements — looking for passionate young leaders with a demonstrated commitment to causes serving humanity.",
    tags: ["Muslim Scholarship", "Open to All", "Renewable"],
    link: "https://imana.awardspring.com/Home/ScholarshipDetails/274141"
  }
];
