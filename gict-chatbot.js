// GICT Chatbot Widget - JavaScript with Integrated Knowledge Base
class GICTChatbot {
    constructor() {
        // GICT Knowledge Base - All institute data embedded directly
        this.knowledgeBase = this.getGICTKnowledgeBase();
        this.initialize();
    }

    async initialize() {
        console.log('GICT Chatbot initialized successfully');
        
        // Initialize chatbot UI
        this.initUI();
        
        // Add event listeners
        this.addEventListeners();
    }

    getGICTKnowledgeBase() {
        // Complete GICT Institute Data
        return {
            "institute": {
                "name": "Global Institute of Training (GICT)",
                "tagline": "Empowering Future IT Professionals",
                "established": "2019",
                "affiliation": "Affiliated to UGC Recognized Universities",
                "logo_url": "gict.JPEG", // Replace with actual logo URL
                "responses": {
                    "about": "🏫 <strong>Global Institute of Training (GICT)</strong> is a premier IT training institute established in 2010. We offer comprehensive online and offline courses in Information Technology and Computer Applications.<br><br>" +
                            "✅ <strong>Our Highlights:</strong><br>" +
                            "• 13+ Years of Excellence in IT Education<br>" +
                            "• 5000+ Successful Students<br>" +
                            "• 100% Placement Assistance<br>" +
                            "• Industry-Expert Faculty<br>" +
                            "• State-of-the-art Computer Labs<br>" +
                            "• Online & Offline Learning Options<br>" +
                            "• Affordable Fee Structure<br>" +
                            "• Government Recognized Certifications",
                    
                    "mission": "🎯 <strong>Our Mission:</strong><br>" +
                              "To provide quality IT education that bridges the gap between academic knowledge and industry requirements, making students job-ready professionals.",
                    
                    "vision": "🔭 <strong>Our Vision:</strong><br>" +
                             "To become the leading IT training institute recognized for producing skilled IT professionals who contribute to the digital transformation of India.",
                    
                    "facilities": "🏢 <strong>Our Facilities:</strong><br>" +
                                 "• <strong>Computer Labs:</strong> 100+ latest computers with high-speed internet<br>" +
                                 "• <strong>Smart Classrooms:</strong> Projector-enabled modern classrooms<br>" +
                                 "• <strong>Library:</strong> Extensive collection of IT books and resources<br>" +
                                 "• <strong>Wi-Fi Campus:</strong> Free high-speed internet access<br>" +
                                 "• <strong>Online Platform:</strong> Live virtual classrooms for online students<br>" +
                                 "• <strong>Practice Labs:</strong> 24/7 access for hands-on practice",
                    
                    "placement": "💼 <strong>Placement Assistance:</strong><br>" +
                                "We provide comprehensive placement support:<br><br>" +
                                "• <strong>Placement Cell:</strong> Dedicated team for job placements<br>" +
                                "• <strong>Mock Interviews:</strong> Regular interview preparation sessions<br>" +
                                "• <strong>Resume Building:</strong> Professional resume assistance<br>" +
                                "• <strong>Industry Connect:</strong> Tie-ups with 100+ IT companies<br>" +
                                "• <strong>Job Fairs:</strong> Annual placement drives<br>" +
                                "• <strong>Placement Record:</strong> 85%+ placement rate<br><br>" +
                                "🏢 <strong>Top Recruiters:</strong> TCS, Infosys, Wipro, HCL, Tech Mahindra, Accenture, Capgemini"
                }
            },
            
            "courses": {
                "categories": ["Degree Courses", "Diploma Courses", "Certificate Courses", "Professional Courses"],
                "responses": {
                    "bca": "📚 <strong>BCA - Bachelor of Computer Applications</strong><br><br>" +
                          "⏱️ <strong>Duration:</strong> 3 Years (6 Semesters)<br>" +
                          "🎓 <strong>Eligibility:</strong> 10+2 with minimum 45% marks<br>" +
                          "💰 <strong>Course Fees:</strong><br>" +
                          "• Annual Fee: ₹35,000<br>" +
                          "• Total Course Fee: ₹1,05,000<br>" +
                          "• Exam Fee: ₹2,000 per semester<br><br>" +
                          "📖 <strong>Course Curriculum:</strong><br>" +
                          "• Programming Languages (C, C++, Java, Python)<br>" +
                          "• Web Development (HTML, CSS, JavaScript, PHP)<br>" +
                          "• Database Management (SQL, Oracle)<br>" +
                          "• Software Engineering<br>" +
                          "• Data Structures & Algorithms<br>" +
                          "• Operating Systems<br>" +
                          "• Computer Networks<br>" +
                          "• Mobile App Development<br><br>" +
                          "💼 <strong>Career Opportunities:</strong><br>" +
                          "• Software Developer<br>" +
                          "• Web Developer<br>" +
                          "• System Administrator<br>" +
                          "• Database Administrator<br>" +
                          "• IT Support Specialist<br><br>" +
                          "🏫 <strong>Mode:</strong> Online & Offline Available",
                    
                    "mca": "📚 <strong>MCA - Master of Computer Applications</strong><br><br>" +
                          "⏱️ <strong>Duration:</strong> 2 Years (4 Semesters)<br>" +
                          "🎓 <strong>Eligibility:</strong> Graduation with Mathematics at 10+2 or Graduation level<br>" +
                          "💰 <strong>Course Fees:</strong><br>" +
                          "• Annual Fee: ₹55,000<br>" +
                          "• Total Course Fee: ₹1,10,000<br>" +
                          "• Exam Fee: ₹3,000 per semester<br><br>" +
                          "📖 <strong>Course Curriculum:</strong><br>" +
                          "• Advanced Programming (Java, Python, .NET)<br>" +
                          "• Artificial Intelligence & Machine Learning<br>" +
                          "• Cloud Computing<br>" +
                          "• Big Data Analytics<br>" +
                          "• Cyber Security<br>" +
                          "• Software Project Management<br>" +
                          "• Internet of Things (IoT)<br>" +
                          "• Blockchain Technology<br><br>" +
                          "💼 <strong>Career Opportunities:</strong><br>" +
                          "• Software Engineer<br>" +
                          "• Data Scientist<br>" +
                          "• IT Project Manager<br>" +
                          "• System Architect<br>" +
                          "• Research Analyst<br><br>" +
                          "🏫 <strong>Mode:</strong> Online & Offline Available",
                    
                    "bsc_it": "📚 <strong>B.Sc. IT - Bachelor of Science in Information Technology</strong><br><br>" +
                            "⏱️ <strong>Duration:</strong> 3 Years (6 Semesters)<br>" +
                            "🎓 <strong>Eligibility:</strong> 10+2 with Science/Commerce with minimum 40% marks<br>" +
                            "💰 <strong>Course Fees:</strong><br>" +
                            "• Annual Fee: ₹30,000<br>" +
                            "• Total Course Fee: ₹90,000<br>" +
                            "• Exam Fee: ₹1,500 per semester<br><br>" +
                            "📖 <strong>Course Curriculum:</strong><br>" +
                            "• Computer Fundamentals & Office Automation<br>" +
                            "• Programming with C & C++<br>" +
                            "• Web Technologies<br>" +
                            "• Database Systems<br>" +
                            "• Networking & Security<br>" +
                            "• E-Commerce & Digital Marketing<br>" +
                            "• Cloud Computing Basics<br>" +
                            "• IT Project Management<br><br>" +
                            "💼 <strong>Career Opportunities:</strong><br>" +
                            "• IT Consultant<br>" +
                            "• Network Administrator<br>" +
                            "• Technical Support Engineer<br>" +
                            "• Web Designer<br>" +
                            "• Digital Marketing Executive<br><br>" +
                            "🏫 <strong>Mode:</strong> Online & Offline Available",
                    
                    "basic_computer": "💻 <strong>Basic Computer Course</strong><br><br>" +
                                     "⏱️ <strong>Duration:</strong> 3 Months / 6 Months<br>" +
                                     "🎓 <strong>Eligibility:</strong> No minimum qualification required<br>" +
                                     "💰 <strong>Course Fees:</strong><br>" +
                                     "• 3 Months Course: ₹5,000<br>" +
                                     "• 6 Months Advanced Course: ₹8,000<br><br>" +
                                     "📖 <strong>Course Content:</strong><br>" +
                                     "• Computer Fundamentals<br>" +
                                     "• Microsoft Windows<br>" +
                                     "• MS Office (Word, Excel, PowerPoint)<br>" +
                                     "• Internet & Email<br>" +
                                     "• Computer Typing (English & Hindi)<br>" +
                                     "• Basic Troubleshooting<br>" +
                                     "• Online Banking & Digital Payments<br>" +
                                     "• Social Media Basics<br><br>" +
                                     "🎯 <strong>Who Should Join:</strong><br>" +
                                     "• Students with no computer knowledge<br>" +
                                     "• Working professionals<br>" +
                                     "• Senior citizens<br>" +
                                     "• Housewives<br>" +
                                     "• Anyone wanting computer literacy<br><br>" +
                                     "🏫 <strong>Mode:</strong> Online & Offline Available<br>" +
                                     "📜 <strong>Certificate:</strong> Provided after course completion",
                    
                    "tally": "📊 <strong>Tally Course (TallyPrime with GST)</strong><br><br>" +
                            "⏱️ <strong>Duration:</strong> 3 Months / 6 Months Diploma<br>" +
                            "🎓 <strong>Eligibility:</strong> 10th Pass with basic math knowledge<br>" +
                            "💰 <strong>Course Fees:</strong><br>" +
                            "• 3 Months Certificate: ₹7,000<br>" +
                            "• 6 Months Diploma: ₹12,000<br>" +
                            "• 1 Year Advanced Diploma: ₹18,000<br><br>" +
                            "📖 <strong>Course Content:</strong><br>" +
                            "• Accounting Fundamentals<br>" +
                            "• TallyPrime Basics & Advanced<br>" +
                            "• GST (Goods & Services Tax)<br>" +
                            "• TDS & TCS<br>" +
                            "• Payroll Management<br>" +
                            "• Inventory Management<br>" +
                            "• Balance Sheet & P&L<br>" +
                            "• Bank Reconciliation<br>" +
                            "• E-Way Bill Generation<br>" +
                            "• Income Tax Filing<br><br>" +
                            "💼 <strong>Career Opportunities:</strong><br>" +
                            "• Accountant<br>" +
                            "• Accounts Executive<br>" +
                            "• Tax Consultant<br>" +
                            "• GST Practitioner<br>" +
                            "• Finance Assistant<br><br>" +
                            "🏫 <strong>Mode:</strong> Online & Offline Available<br>" +
                            "📜 <strong>Certificate:</strong> Authorized Tally Certificate<br>" +
                            "💡 <strong>Special:</strong> Free GST Software training included",
                    
                    "web_development": "🌐 <strong>Web Development Course</strong><br><br>" +
                                      "⏱️ <strong>Duration:</strong> 6 Months<br>" +
                                      "🎓 <strong>Eligibility:</strong> Basic computer knowledge<br>" +
                                      "💰 <strong>Course Fees:</strong> ₹15,000<br><br>" +
                                      "📖 <strong>Course Content:</strong><br>" +
                                      "• HTML5, CSS3, JavaScript<br>" +
                                      "• Bootstrap & Responsive Design<br>" +
                                      "• React.js / Angular<br>" +
                                      "• Node.js & Express<br>" +
                                      "• PHP & MySQL<br>" +
                                      "• WordPress Development<br>" +
                                      "• Git & GitHub<br>" +
                                      "• Live Project<br><br>" +
                                      "🏫 <strong>Mode:</strong> Online & Offline Available",
                    
                    "digital_marketing": "📱 <strong>Digital Marketing Course</strong><br><br>" +
                                        "⏱️ <strong>Duration:</strong> 3 Months / 6 Months<br>" +
                                        "🎓 <strong>Eligibility:</strong> 12th Pass<br>" +
                                        "💰 <strong>Course Fees:</strong><br>" +
                                        "• 3 Months: ₹8,000<br>" +
                                        "• 6 Months Advanced: ₹15,000<br><br>" +
                                        "📖 <strong>Course Content:</strong><br>" +
                                        "• SEO (Search Engine Optimization)<br>" +
                                        "• Google Ads & PPC<br>" +
                                        "• Social Media Marketing<br>" +
                                        "• Email Marketing<br>" +
                                        "• Content Marketing<br>" +
                                        "• YouTube Marketing<br>" +
                                        "• Google Analytics<br>" +
                                        "• Affiliate Marketing<br><br>" +
                                        "🏫 <strong>Mode:</strong> Online & Offline Available"
                }
            },
            
            "faculty": {
                "responses": {
                    "director": "👨‍💼 <strong>Institute Director</strong><br>" +
                               "<strong>Name:</strong> Prof. Brijesh Patel<br>" +
                               "<strong>Qualification:</strong> M.Tech (Computer Science), PhD<br>" +
                               "<strong>Experience:</strong> 20+ Years in IT Industry & Education<br>" +
                               "<strong>Specialization:</strong> Artificial Intelligence, Software Engineering<br>" +
                               "<strong>Email:</strong> director@gict.in<br><br>" +
                               "Former IT Consultant at TCS with vast industry experience. Under his leadership, GICT has trained 5000+ students.",
                    
                    "faculty_list": "👨‍🏫 <strong>Our Expert Faculty Team</strong><br><br>" +
                                   "1. <strong>Prof. Amit Sharma</strong> (MCA, NET Qualified)<br>" +
                                   "   • Head of Computer Science Dept.<br>" +
                                   "   • 12 Years Experience<br>" +
                                   "   • Specialization: Programming & Web Development<br><br>" +
                                   "2. <strong>Prof. Priya Verma</strong> (M.Sc. IT, B.Ed)<br>" +
                                   "   • Senior Faculty - BCA & B.Sc. IT<br>" +
                                   "   • 10 Years Experience<br>" +
                                   "   • Specialization: Database & Networking<br><br>" +
                                   "3. <strong>Mr. Suresh Patel</strong> (B.Com, Tally Certified)<br>" +
                                   "   • Head - Accounts & Tally Department<br>" +
                                   "   • 15 Years Industry Experience<br>" +
                                   "   • Specialization: Tally, GST, Accounting<br><br>" +
                                   "4. <strong>Ms. Neha Gupta</strong> (MCA, Digital Marketing Certified)<br>" +
                                   "   • Digital Marketing Trainer<br>" +
                                   "   • 8 Years Experience<br>" +
                                   "   • Specialization: SEO, Social Media Marketing<br><br>" +
                                   "5. <strong>Mr. Vikram Singh</strong> (M.Tech - IT)<br>" +
                                   "   • Technical Trainer<br>" +
                                   "   • 11 Years Experience<br>" +
                                   "   • Specialization: Cloud Computing, Cyber Security<br><br>" +
                                   "6. <strong>Ms. Anjali Desai</strong> (MCA, Basic Computer Trainer)<br>" +
                                   "   • Basic Computer Faculty<br>" +
                                   "   • 7 Years Experience<br>" +
                                   "   • Specialization: MS Office, Computer Basics<br><br>" +
                                   "7. <strong>Mr. Deepak Joshi</strong> (BCA, Web Developer)<br>" +
                                   "   • Web Development Trainer<br>" +
                                   "   • 6 Years Industry Experience<br>" +
                                   "   • Specialization: Full Stack Development"
                }
            },
            
            "contact": {
                "responses": {
                    "main": "📞 <strong>Contact GICT - Global College Of IT</strong><br><br>" +
                           "<strong>📍 Address:</strong><br>" +
                           "Global Institute of IT (GICT)<br>" +
                           "Madardiah  Mugra badshahpur <br>" +
                           "Jaunpur - 222202, Uttar Pradesh, India<br><br>" +
                           "<strong>📱 Phone Numbers:</strong><br>" +
                           "• Reception: +91-8433377466<br>" +
                           "• Admission Cell: +91-8433377466<br>" +
                           "• Placement Cell: +91-8433377466<br><br>" +
                           "<strong>📧 Email Addresses:</strong><br>" +
                           "• General Enquiry: gictcomputer.edu@gmail.com<br>" +
                           "• Admissions: admission@gict.in<br>" +
                           "• Placement: placement@gict.in<br>" +
                           "• Support: support@gict.in<br><br>" +
                           "<strong>🌐 Website:</strong> www.gict.org.in<br><br>" +
                           "<strong>⏰ Office Hours:</strong><br>" +
                           "• Monday to Friday: 8:00 AM - 7:00 PM<br>" +
                           "• Saturday: 9:00 AM - 5:00 PM<br>" +
                           "• Sunday: Closed<br>" +
                           "• Online Support: 24/7 Available",
                    
                    "admission": "🎓 <strong>Admission Information</strong><br><br>" +
                               "<strong>For Admissions Contact:</strong><br>" +
                               "📱 Phone: +91-8433377466<br>" +
                               "📧 Email: admission@gict.in<br><br>" +
                               "<strong>Admission Process:</strong><br>" +
                               "1. Visit the institute or fill online form<br>" +
                               "2. Submit required documents<br>" +
                               "3. Pay registration fee (₹500)<br>" +
                               "4. Confirm your admission<br><br>" +
                               "<strong>Required Documents:</strong><br>" +
                               "• 10th & 12th Marksheets<br>" +
                               "• Graduation Marksheets (for PG courses)<br>" +
                               "• ID Proof (Aadhar Card)<br>" +
                               "• 4 Passport size photos<br>" +
                               "• Transfer Certificate (if applicable)",
                    
                    "online_support": "💻 <strong>Online Learning Support</strong><br><br>" +
                                    "For online students, we provide:<br>" +
                                    "• 📧 Email Support: support@gict.in<br>" +
                                    "• 📱 WhatsApp Support: +91-8433377466<br>" +
                                    "• 🎥 Live Technical Support: 10 AM - 6 PM<br>" +
                                    "• 📚 LMS Access: lms.gict.in<br>" +
                                    "• 📝 Query Resolution: Within 24 hours"
                }
            },
            
            "admission": {
                "responses": {
                    "process": "📝 <strong>Admission Process at GICT</strong><br><br>" +
                              "<strong>Step-by-Step Process:</strong><br>" +
                              "1️⃣ <strong>Enquiry:</strong> Contact us or visit website<br>" +
                              "2️⃣ <strong>Counselling:</strong> Free career counselling session<br>" +
                              "3️⃣ <strong>Application:</strong> Fill admission form (Online/Offline)<br>" +
                              "4️⃣ <strong>Documentation:</strong> Submit required documents<br>" +
                              "5️⃣ <strong>Fee Payment:</strong> Pay course fee (Installment options available)<br>" +
                              "6️⃣ <strong>Confirmation:</strong> Receive admission confirmation & ID card<br>" +
                              "7️⃣ <strong>Orientation:</strong> Attend orientation program<br>" +
                              "8️⃣ <strong>Start Classes:</strong> Begin your learning journey!<br><br>" +
                              "🎯 <strong>Special Benefits:</strong><br>" +
                              "• Early Bird Discount: 10% off<br>" +
                              "• Group Admission: 15% discount<br>" +
                              "• Referral Bonus: ₹1,000 per referral<br>" +
                              "• Scholarship for Meritorious Students<br>" +
                              "• EMI Option Available",
                    
                    "fees": "💰 <strong>Course Fee Structure</strong><br><br>" +
                           "<strong>Degree Courses:</strong><br>" +
                           "• BCA: ₹35,000/year (Total: ₹1,05,000 for 3 years)<br>" +
                           "• MCA: ₹55,000/year (Total: ₹1,10,000 for 2 years)<br>" +
                           "• B.Sc. IT: ₹30,000/year (Total: ₹90,000 for 3 years)<br><br>" +
                           "<strong>Diploma & Certificate Courses:</strong><br>" +
                           "• Basic Computer (3 Months): ₹5,000<br>" +
                           "• Basic Computer (6 Months): ₹8,000<br>" +
                           "• Tally (3 Months): ₹7,000<br>" +
                           "• Tally (6 Months): ₹12,000<br>" +
                           "• Tally (1 Year): ₹18,000<br>" +
                           "• Web Development (6 Months): ₹15,000<br>" +
                           "• Digital Marketing (3 Months): ₹8,000<br>" +
                           "• Digital Marketing (6 Months): ₹15,000<br><br>" +
                           "<strong>Additional Fees:</strong><br>" +
                           "• Registration Fee: ₹500 (One-time)<br>" +
                           "• Exam Fee: As per course<br>" +
                           "• Library Fee: ₹1,000/year<br>" +
                           "• Lab Fee: ₹2,000/year (for technical courses)<br><br>" +
                           "💳 <strong>Payment Options:</strong><br>" +
                           "• Cash, Card, UPI, Net Banking<br>" +
                           "• EMI Available (3/6/12 months)<br>" +
                           "• Education Loan Assistance",
                    
                    "scholarship": "🎓 <strong>Scholarship Programs</strong><br><br>" +
                                 "GICT offers various scholarships:<br><br>" +
                                 "1. <strong>Merit Scholarship:</strong><br>" +
                                 "   • 90%+ in qualifying exam: 50% fee waiver<br>" +
                                 "   • 80-89%: 25% fee waiver<br>" +
                                 "   • 70-79%: 15% fee waiver<br><br>" +
                                 "2. <strong>Economically Weaker Section:</strong><br>" +
                                 "   • Family income < ₹2 Lakh/annum: 40% discount<br>" +
                                 "   • Family income ₹2-5 Lakh/annum: 20% discount<br><br>" +
                                 "3. <strong>Special Category:</strong><br>" +
                                 "   • SC/ST/OBC: 25% fee concession<br>" +
                                 "   • Female Students: 10% additional discount<br>" +
                                 "   • Physically Challenged: 50% fee waiver<br><br>" +
                                 "4. <strong>Sports Quota:</strong><br>" +
                                 "   • State Level Players: 20% discount<br>" +
                                 "   • National Level Players: 40% discount<br><br>" +
                                 "📝 <strong>Note:</strong> Documents required for scholarship verification."
                }
            },
            
            "faq": {
                "questions": [
                    {
                        "keywords": ["timing", "batch", "class time", "schedule", "when classes"],
                        "answer": "⏰ <strong>Class Timings & Batches at GICT</strong><br><br>" +
                                 "<strong>Regular Batches (Offline):</strong><br>" +
                                 "• Morning Batch: 8:00 AM - 10:00 AM<br>" +
                                 "• Day Batch: 10:00 AM - 1:00 PM<br>" +
                                 "• Afternoon Batch: 2:00 PM - 4:00 PM<br>" +
                                 "• Evening Batch: 5:00 PM - 7:00 PM<br><br>" +
                                 "<strong>Online Batches:</strong><br>" +
                                 "• Morning: 9:00 AM - 11:00 AM<br>" +
                                 "• Evening: 7:00 PM - 9:00 PM<br>" +
                                 "• Weekend Batch: Sat-Sun, 10 AM - 2 PM<br><br>" +
                                 "<strong>Special Fast-track Batches Available</strong>"
                    },
                    {
                        "keywords": ["duration", "how long", "course duration", "period"],
                        "answer": "⏱️ <strong>Course Durations at GICT</strong><br><br>" +
                                 "• BCA: 3 Years (6 Semesters)<br>" +
                                 "• MCA: 2 Years (4 Semesters)<br>" +
                                 "• B.Sc. IT: 3 Years (6 Semesters)<br>" +
                                 "• Basic Computer: 3 or 6 Months<br>" +
                                 "• Tally: 3, 6 or 12 Months<br>" +
                                 "• Web Development: 6 Months<br>" +
                                 "• Digital Marketing: 3 or 6 Months<br><br>" +
                                 "📅 All courses start from 1st of every month."
                    },
                    {
                        "keywords": ["certificate", "degree", "recognition", "valid", "accredited"],
                        "answer": "📜 <strong>Certification & Recognition</strong><br><br>" +
                                 "GICT provides recognized certifications:<br><br>" +
                                 "• <strong>BCA/MCA/B.Sc. IT:</strong> University Degree (UGC Recognized)<br>" +
                                 "• <strong>Tally:</strong> Tally Authorized Certificate (Industry Valid)<br>" +
                                 "• <strong>Other Courses:</strong> GICT Certificate (ISO 9001:2015 Certified)<br><br>" +
                                 "✅ All certificates are valid for government and private jobs.<br>" +
                                 "✅ Our degrees are recognized worldwide."
                    },
                    {
                        "keywords": ["job", "placement", "career", "salary", "package"],
                        "answer": "💼 <strong>Placement & Career Support</strong><br><br>" +
                                 "<strong>Placement Record:</strong><br>" +
                                 "• Average Package: ₹2.5-4 LPA (freshers)<br>" +
                                 "• Highest Package: ₹12 LPA<br>" +
                                 "• Placement Rate: 85%+<br><br>" +
                                 "<strong>Placement Services:</strong><br>" +
                                 "• Resume Building<br>" +
                                 "• Mock Interviews<br>" +
                                 "• Soft Skills Training<br>" +
                                 "• Job Fairs<br>" +
                                 "• Company Tie-ups (100+ companies)<br><br>" +
                                 "<strong>Top Recruiters:</strong> TCS, Infosys, Wipro, HCL, Tech Mahindra, etc."
                    },
                    {
                        "keywords": ["hostel", "accommodation", "stay", "pg", "living"],
                        "answer": "🏠 <strong>Hostel & Accommodation</strong><br><br>" +
                                 "GICT provides accommodation support:<br><br>" +
                                 "<strong>Hostel Facility:</strong><br>" +
                                 "• Separate hostels for Boys & Girls<br>" +
                                 "• Walking distance from institute<br>" +
                                 "• 24/7 Security & CCTV<br>" +
                                 "• Wi-Fi enabled<br>" +
                                 "• Mess facility (Veg & Non-Veg)<br>" +
                                 "• Fees: ₹3,500 - ₹5,000/month<br><br>" +
                                 "<strong>PG/Hostel assistance provided for outstation students.</strong>"
                    },
                    {
                        "keywords": ["online class", "virtual", "distance learning", "remote"],
                        "answer": "💻 <strong>Online Learning at GICT</strong><br><br>" +
                                 "Our online courses offer:<br><br>" +
                                 "• <strong>Live Interactive Classes:</strong> Real-time with faculty<br>" +
                                 "• <strong>Recorded Lectures:</strong> Lifetime access<br>" +
                                 "• <strong>Virtual Labs:</strong> Hands-on practice<br>" +
                                 "• <strong>Online Exams:</strong> Flexible scheduling<br>" +
                                 "• <strong>Digital Certificate:</strong> Same as offline students<br>" +
                                 "• <strong>LMS Access:</strong> Study material 24/7<br>" +
                                 "• <strong>Doubt Sessions:</strong> Dedicated Q&A sessions<br><br>" +
                                 "📱 <strong>Requirements:</strong> Smartphone/Laptop + Internet connection<br>" +
                                 "✅ Online and Offline certificates have equal value."
                    }
                ]
            },
            
            "keywords": {
                "greetings": ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "namaste", "namaskar"],
                "farewell": ["bye", "goodbye", "see you", "thanks", "thank you", "dhanyavad"],
                "courses": ["course", "bca", "mca", "bsc", "tally", "computer", "degree", "diploma", "certificate", "class", "training", "learn"],
                "admission": ["admission", "enroll", "join", "register", "apply", "form", "seat", "vacancy"],
                "fees": ["fee", "fees", "price", "cost", "amount", "payment", "emi", "discount", "scholarship"],
                "faculty": ["teacher", "faculty", "professor", "trainer", "staff", "director", "hod"],
                "contact": ["contact", "phone", "number", "email", "address", "location", "where", "reach", "direction"],
                "placement": ["placement", "job", "career", "salary", "package", "recruiter", "interview", "company"],
                "timing": ["timing", "batch", "schedule", "duration", "time", "when", "hours", "morning", "evening"],
                "about": ["about", "institute", "college", "gict", "information", "establish", "history"]
            },
            
            "default_responses": {
                "greeting": "👋 <strong>Namaste!</strong> Welcome to <strong>GICT - Global Institute of Training</strong>!<br><br>" +
                           "I'm <strong>GIC</strong>, your virtual assistant. I can help you with:<br><br>" +
                           "📚 Course Information (BCA, MCA, B.Sc. IT, Tally, etc.)<br>" +
                           "💰 Fee Structure & Scholarships<br>" +
                           "👨‍🏫 Faculty Details<br>" +
                           "📞 Contact Information<br>" +
                           "🎓 Admission Process<br>" +
                           "💼 Placement Assistance<br><br>" +
                           "How can I assist you today? Feel free to ask any question!",
                
                "farewell": "👋 <strong>Thank you for connecting with GICT!</strong><br><br>" +
                           "For any further queries:<br>" +
                           "📞 Call us at +91-8433377466<br>" +
                           "📧 Email: info@gict.in<br>" +
                           "🌐 Visit: www.gict.in<br><br>" +
                           "Wishing you success in your career! 🎓<br>" +
                           "<strong>GICT - Shaping IT Careers!</strong>",
                
                "unknown": "🤔 I'm not sure I understand your query. But don't worry! I can help you with information about GICT.<br><br>" +
                          "You can ask me about:<br>" +
                          "• 📚 Our <strong>courses</strong> (BCA, MCA, B.Sc. IT, Tally, etc.)<br>" +
                          "• 💰 <strong>Fee structure</strong> and scholarships<br>" +
                          "• 👨‍🏫 Our experienced <strong>faculty</strong><br>" +
                          "• 🎓 <strong>Admission process</strong><br>" +
                          "• 💼 <strong>Placement assistance</strong><br>" +
                          "• 📞 <strong>Contact details</strong><br>" +
                          "• ⏰ <strong>Class timings & batches</strong><br><br>" +
                          "💡 Try asking: 'What courses do you offer?' or 'Tell me about BCA fees'"
            }
        };
    }

    initUI() {
        // Create chatbot container if it doesn't exist
        if (!document.getElementById('gict-chatbot-container')) {
            const container = document.createElement('div');
            container.id = 'gict-chatbot-container';
            container.innerHTML = `
                <button id="gict-toggle-btn" title="Chat with GIC">
                    <span><img src="gict.jpeg" alt="GICT" style="width:30px;height:30px;border-radius:50%;"> 💬</span>
                </button>
                
                <div id="gict-chat-window" class="gict-hidden">
                    <div class="gict-chat-header">
                        <div style="display: flex; align-items: center;">
                            <img src="gict.jpeg" alt="GICT Logo" class="gict-chat-header-logo" style="width:40px;height:40px;margin-right:10px;border-radius:50%;">
                            <h3>GIC - GICT Assistant</h3>
                        </div>
                        <button id="gict-close-btn" title="Close">×</button>
                    </div>
                    
                    <div id="gict-chat-messages">
                        <div class="gict-message gict-bot-message">
                            <img src="gict.jpeg" alt="GICT" class="gict-bot-avatar" style="width:25px;height:25px;border-radius:50%;margin-right:8px;">
                            <div>
                                ${this.knowledgeBase.default_responses.greeting}
                            </div>
                        </div>
                    </div>
                    
                    <div class="gict-quick-replies" id="gict-quick-replies">
                        <div class="gict-quick-reply" data-question="What courses do you offer?">📚 Our Courses</div>
                        <div class="gict-quick-reply" data-question="What is the fee structure?">💰 Fee Details</div>
                        <div class="gict-quick-reply" data-question="Tell me about admission process">🎓 Admission</div>
                        <div class="gict-quick-reply" data-question="Contact details of GICT">📞 Contact Us</div>
                    </div>
                    
                    <div class="gict-chat-input-area">
                        <input type="text" id="gict-user-input" placeholder="Ask about GICT courses, fees, admission..." autocomplete="off">
                        <button id="gict-send-btn">Send</button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(container);
            
            // Inject styles
            this.injectStyles();
        }
    }

    injectStyles() {
        const styles = `
            <style>
                /* GICT Chatbot Styles */
                #gict-chatbot-container {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    z-index: 9999;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }

                #gict-toggle-btn {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
                    border: none;
                    cursor: pointer;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    transition: all 0.3s ease;
                    color: white;
                }

                #gict-toggle-btn:hover {
                    transform: scale(1.1);
                    box-shadow: 0 6px 20px rgba(0,0,0,0.4);
                }

                #gict-chat-window {
                    position: fixed;
                    bottom: 90px;
                    right: 20px;
                    width: 380px;
                    height: 550px;
                    background: white;
                    border-radius: 15px;
                    box-shadow: 0 8px 30px rgba(0,0,0,0.2);
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }

                .gict-hidden {
                    display: none !important;
                }

                .gict-chat-header {
                    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
                    color: white;
                    padding: 15px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .gict-chat-header h3 {
                    margin: 0;
                    font-size: 16px;
                    font-weight: 600;
                }

                .gict-chat-header-logo {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    margin-right: 10px;
                    border: 2px solid white;
                }

                #gict-close-btn {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 28px;
                    cursor: pointer;
                    padding: 0;
                    line-height: 1;
                }

                #gict-close-btn:hover {
                    opacity: 0.8;
                }

                #gict-chat-messages {
                    flex: 1;
                    overflow-y: auto;
                    padding: 20px;
                    background: #f5f7fa;
                }

                .gict-message {
                    margin-bottom: 15px;
                    padding: 10px 15px;
                    border-radius: 10px;
                    max-width: 80%;
                    word-wrap: break-word;
                    animation: gict-fadeIn 0.3s ease;
                }

                @keyframes gict-fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .gict-bot-message {
                    background: white;
                    color: #333;
                    border: 1px solid #e1e8ed;
                    align-self: flex-start;
                    display: flex;
                    align-items: flex-start;
                }

                .gict-bot-avatar {
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                    margin-right: 8px;
                    border: 1px solid #1e3c72;
                }

                .gict-user-message {
                    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
                    color: white;
                    margin-left: auto;
                }

                .gict-quick-replies {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    padding: 10px 20px;
                    background: white;
                    border-top: 1px solid #e1e8ed;
                }

                .gict-quick-reply {
                    background: #f0f4f8;
                    border: 1px solid #d1dce5;
                    padding: 8px 12px;
                    border-radius: 20px;
                    cursor: pointer;
                    font-size: 13px;
                    transition: all 0.2s ease;
                    white-space: nowrap;
                }

                .gict-quick-reply:hover {
                    background: #1e3c72;
                    color: white;
                    border-color: #1e3c72;
                }

                .gict-chat-input-area {
                    display: flex;
                    padding: 15px;
                    background: white;
                    border-top: 1px solid #e1e8ed;
                }

                #gict-user-input {
                    flex: 1;
                    padding: 10px 15px;
                    border: 1px solid #d1dce5;
                    border-radius: 25px;
                    outline: none;
                    font-size: 14px;
                    margin-right: 10px;
                }

                #gict-user-input:focus {
                    border-color: #1e3c72;
                }

                #gict-send-btn {
                    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 25px;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.2s ease;
                }

                #gict-send-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
                }

                /* Typing Indicator */
                .gict-typing-indicator {
                    display: flex;
                    gap: 4px;
                    padding: 10px 15px;
                    background: white;
                    border-radius: 10px;
                    margin-bottom: 15px;
                    width: fit-content;
                }

                .gict-typing-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #1e3c72;
                    animation: gict-typing 1.4s infinite;
                }

                .gict-typing-dot:nth-child(2) {
                    animation-delay: 0.2s;
                }

                .gict-typing-dot:nth-child(3) {
                    animation-delay: 0.4s;
                }

                @keyframes gict-typing {
                    0%, 60%, 100% { transform: translateY(0); }
                    30% { transform: translateY(-10px); }
                }

                /* Scrollbar Styling */
                #gict-chat-messages::-webkit-scrollbar {
                    width: 6px;
                }

                #gict-chat-messages::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                #gict-chat-messages::-webkit-scrollbar-thumb {
                    background: #1e3c72;
                    border-radius: 3px;
                }

                /* Responsive Design */
                @media (max-width: 480px) {
                    #gict-chat-window {
                        width: 100%;
                        height: 100%;
                        bottom: 0;
                        right: 0;
                        border-radius: 0;
                    }
                    
                    #gict-toggle-btn {
                        width: 50px;
                        height: 50px;
                    }
                }
            </style>
        `;
        
        document.head.insertAdjacentHTML('beforeend', styles);
    }

    addEventListeners() {
        // Toggle chatbot
        document.getElementById('gict-toggle-btn')?.addEventListener('click', () => {
            this.toggleChat();
        });

        // Close chatbot
        document.getElementById('gict-close-btn')?.addEventListener('click', () => {
            this.closeChat();
        });

        // Send message
        document.getElementById('gict-send-btn')?.addEventListener('click', () => {
            this.sendMessage();
        });

        // Enter key to send
        document.getElementById('gict-user-input')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });

        // Quick reply buttons
        document.querySelectorAll('.gict-quick-reply').forEach(button => {
            button.addEventListener('click', (e) => {
                const question = e.target.getAttribute('data-question');
                this.processQuickReply(question);
            });
        });
    }

    toggleChat() {
        const chatWindow = document.getElementById('gict-chat-window');
        chatWindow.classList.toggle('gict-hidden');
        
        if (!chatWindow.classList.contains('gict-hidden')) {
            document.getElementById('gict-user-input').focus();
        }
    }

    closeChat() {
        document.getElementById('gict-chat-window').classList.add('gict-hidden');
    }

    async sendMessage() {
        const input = document.getElementById('gict-user-input');
        const message = input.value.trim();
        
        if (message) {
            // Add user message
            this.addMessage(message, 'user');
            input.value = '';
            
            // Show typing indicator
            this.showTypingIndicator();
            
            // Get response after delay
            setTimeout(() => {
                this.removeTypingIndicator();
                const response = this.getResponse(message);
                this.addMessage(response, 'bot');
            }, 800 + Math.random() * 800);
        }
    }

    processQuickReply(question) {
        document.getElementById('gict-user-input').value = question;
        this.sendMessage();
    }

    addMessage(text, sender) {
        const chatMessages = document.getElementById('gict-chat-messages');
        const messageDiv = document.createElement('div');
        
        messageDiv.className = `gict-message gict-${sender}-message`;
        
        if (sender === 'user') {
            messageDiv.textContent = text;
        } else {
            messageDiv.innerHTML = `
                <img src="gict.jpeg" alt="GICT" class="gict-bot-avatar" style="width:25px;height:25px;border-radius:50%;margin-right:8px;">
                <div>${text}</div>
            `;
        }
        
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Update quick replies based on conversation
        this.updateQuickReplies(text, sender);
    }

    showTypingIndicator() {
        const chatMessages = document.getElementById('gict-chat-messages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'gict-typing-indicator';
        typingDiv.id = 'gict-typing-indicator';
        typingDiv.innerHTML = `
            <img src="gict.jpeg" alt="GICT" style="width:25px;height:25px;border-radius:50%;margin-right:8px;">
            <div class="gict-typing-dot"></div>
            <div class="gict-typing-dot"></div>
            <div class="gict-typing-dot"></div>
        `;
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    removeTypingIndicator() {
        const typingIndicator = document.getElementById('gict-typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    getResponse(userMessage) {
        const message = userMessage.toLowerCase().trim();
        
        // Check greetings
        if (this.knowledgeBase.keywords?.greetings?.some(keyword => 
            message.includes(keyword))) {
            return this.knowledgeBase.default_responses.greeting;
        }
        
        // Check farewell
        if (this.knowledgeBase.keywords?.farewell?.some(keyword => 
            message.includes(keyword))) {
            return this.knowledgeBase.default_responses.farewell;
        }
        
        // Check specific course queries
        if (message.includes('bca')) {
            return this.knowledgeBase.courses.responses.bca;
        }
        if (message.includes('mca')) {
            return this.knowledgeBase.courses.responses.mca;
        }
        if (message.includes('bsc') || message.includes('b.sc')) {
            return this.knowledgeBase.courses.responses.bsc_it;
        }
        if (message.includes('basic computer') || message.includes('basic course')) {
            return this.knowledgeBase.courses.responses.basic_computer;
        }
        if (message.includes('tally') || message.includes('accounting') || message.includes('gst')) {
            return this.knowledgeBase.courses.responses.tally;
        }
        if (message.includes('web') || message.includes('website')) {
            return this.knowledgeBase.courses.responses.web_development;
        }
        if (message.includes('digital marketing') || message.includes('seo')) {
            return this.knowledgeBase.courses.responses.digital_marketing;
        }
        
        // Check course keywords
        if (this.knowledgeBase.keywords?.courses?.some(keyword => 
            message.includes(keyword))) {
            return this.getCourseOverview();
        }
        
        // Check fees
        if (this.knowledgeBase.keywords?.fees?.some(keyword => 
            message.includes(keyword))) {
            return this.knowledgeBase.admission.responses.fees;
        }
        
        // Check admission
        if (this.knowledgeBase.keywords?.admission?.some(keyword => 
            message.includes(keyword))) {
            return this.knowledgeBase.admission.responses.process;
        }
        
        // Check faculty
        if (this.knowledgeBase.keywords?.faculty?.some(keyword => 
            message.includes(keyword))) {
            return this.knowledgeBase.faculty.responses.faculty_list;
        }
        
        // Check contact
        if (this.knowledgeBase.keywords?.contact?.some(keyword => 
            message.includes(keyword))) {
            return this.knowledgeBase.contact.responses.main;
        }
        
        // Check placement
        if (this.knowledgeBase.keywords?.placement?.some(keyword => 
            message.includes(keyword))) {
            return this.knowledgeBase.institute.responses.placement;
        }
        
        // Check timing
        if (this.knowledgeBase.keywords?.timing?.some(keyword => 
            message.includes(keyword))) {
            return this.searchFAQ(message);
        }
        
        // Check about
        if (this.knowledgeBase.keywords?.about?.some(keyword => 
            message.includes(keyword))) {
            return this.knowledgeBase.institute.responses.about;
        }
        
        // Check FAQ
        const faqResponse = this.searchFAQ(message);
        if (faqResponse) {
            return faqResponse;
        }
        
        // Default response
        return this.knowledgeBase.default_responses.unknown;
    }

    getCourseOverview() {
        return "📚 <strong>Courses Offered at GICT</strong><br><br>" +
               "<strong>Degree Courses:</strong><br>" +
               "• 🎓 BCA (3 Years) - ₹35,000/year<br>" +
               "• 🎓 MCA (2 Years) - ₹55,000/year<br>" +
               "• 🎓 B.Sc. IT (3 Years) - ₹30,000/year<br><br>" +
               "<strong>Diploma & Certificate Courses:</strong><br>" +
               "• 💻 Basic Computer (3/6 Months) - ₹5,000/₹8,000<br>" +
               "• 📊 Tally with GST (3/6/12 Months) - ₹7,000/₹12,000/₹18,000<br>" +
               "• 🌐 Web Development (6 Months) - ₹15,000<br>" +
               "• 📱 Digital Marketing (3/6 Months) - ₹8,000/₹15,000<br><br>" +
               "📝 Ask me about any specific course for detailed information!<br>" +
               "All courses available in <strong>Online & Offline</strong> mode.";
    }

    searchFAQ(message) {
        if (!this.knowledgeBase.faq?.questions) {
            return null;
        }
        
        for (const faq of this.knowledgeBase.faq.questions) {
            for (const keyword of faq.keywords) {
                if (message.includes(keyword)) {
                    return faq.answer;
                }
            }
        }
        
        return null;
    }

    updateQuickReplies(message, sender) {
        if (sender === 'user') {
            const quickReplies = document.getElementById('gict-quick-replies');
            
            // Update based on user's message
            const msg = message.toLowerCase();
            
            if (msg.includes('course')) {
                quickReplies.innerHTML = `
                    <div class="gict-quick-reply" data-question="Tell me about BCA course">📚 BCA</div>
                    <div class="gict-quick-reply" data-question="Tell me about MCA course">📚 MCA</div>
                    <div class="gict-quick-reply" data-question="Tell me about Tally course">📊 Tally</div>
                    <div class="gict-quick-reply" data-question="What is the fee structure?">💰 Fees</div>
                `;
            } else if (msg.includes('fee')) {
                quickReplies.innerHTML = `
                    <div class="gict-quick-reply" data-question="BCA course fees">BCA Fees</div>
                    <div class="gict-quick-reply" data-question="Tally course fees">Tally Fees</div>
                    <div class="gict-quick-reply" data-question="Scholarship details">🎓 Scholarship</div>
                    <div class="gict-quick-reply" data-question="Admission process">📝 Admission</div>
                `;
            } else if (msg.includes('admission')) {
                quickReplies.innerHTML = `
                    <div class="gict-quick-reply" data-question="Admission process details">📝 Process</div>
                    <div class="gict-quick-reply" data-question="Course fee structure">💰 Fees</div>
                    <div class="gict-quick-reply" data-question="Contact details of GICT">📞 Contact</div>
                    <div class="gict-quick-reply" data-question="What courses do you offer?">📚 Courses</div>
                `;
            }
            
            // Re-add event listeners
            document.querySelectorAll('.gict-quick-reply').forEach(button => {
                button.addEventListener('click', (e) => {
                    const question = e.target.getAttribute('data-question');
                    this.processQuickReply(question);
                });
            });
        }
    }
}

// Initialize chatbot when page loads
document.addEventListener('DOMContentLoaded', () => {
    window.gictChatbot = new GICTChatbot();
});
