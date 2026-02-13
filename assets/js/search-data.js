// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-people",
          title: "People",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Tentative Course Plans",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-notes",
          title: "Notes",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/notes/index.html";
          },
        },{id: "nav-join-us",
          title: "Join Us!",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/opening/";
          },
        },{id: "post-gc-sampling",
        
          title: 'GC sampling <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How to sample for GC",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.dropbox.com/scl/fi/iawc1zfy6loulhr4k4cvp/SOP-GC.docx?rlkey=rwmem5x9e04ku5yh77ne11ag6&st=q372ry78&dl=0", "_blank");
          
        },
      },{id: "post-ysi",
        
          title: 'YSI <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How to operate YSI probe",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.dropbox.com/scl/fi/oo8a1fnsiz1y3deb6gbuf/SOP-YSI.docx?rlkey=85nxdzwqw1ga8eec5415illre&st=fb2gam7k&dl=0", "_blank");
          
        },
      },{id: "post-carbon-isotope-analysis",
        
          title: 'Carbon isotope analysis <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How to operate Picarro (carbon)",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.dropbox.com/scl/fi/bffpuh44dw6jn39hausga/SOP-Picarro_carbon.docx?rlkey=a91fo19b12d1vf164sv139byv&st=88xqs0nk&dl=0", "_blank");
          
        },
      },{id: "post-ic",
        
          title: 'IC <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How to operate IC",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.dropbox.com/scl/fi/7jy396m23gvn4nob723fd/SOP-IC.docx?rlkey=lma6yidl4fkog0qu9enijyepr&st=3xbx4mfp&dl=0", "_blank");
          
        },
      },{id: "post-master-mold-photolithography",
        
          title: 'Master mold (photolithography) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How to produce master mold for microfluidics",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.dropbox.com/scl/fi/swoyoiohme9cjycliigua/SOP-masterMold-Suex-thick.docx?rlkey=aqzpf1zgbrdl9a656p4hrbrk6&st=6s9ro73b&dl=0", "_blank");
          
        },
      },{id: "post-carbon-pacekt-process",
        
          title: 'Carbon pacekt process <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How to handle and process carbon packets for dye tracing",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.dropbox.com/scl/fi/lfx4uwy2hy9ykp8ceallj/SOP-carbon-packet.docx?rlkey=k3hwumkzl9z1ouhgd1ygt96bp&st=oe8zgbm3&dl=0", "_blank");
          
        },
      },{id: "post-aa3",
        
          title: 'AA3 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How to operate AA3",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.dropbox.com/scl/fi/8geidsrpzb6kyi02bpsmt/SOP-AA3.docx?rlkey=cup6ca16gb2gp1eirpjqzzjo3&st=b6wfgbka&dl=0", "_blank");
          
        },
      },{id: "post-workstations",
        
          title: "Workstations",
        
        description: "How to access group workstations",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/notes/workstations/";
          
        },
      },{id: "post-pdms-process",
        
          title: 'PDMS Process <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How to make PDMS chips",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.dropbox.com/scl/fi/ovfp5intqaz0waqlpzo8v/SOP-PDMS-processing.docx?rlkey=b795ka9grbaxw78lxckr1n9xz&st=5le9yhb2&dl=0", "_blank");
          
        },
      },{id: "post-codes",
        
          title: "Codes",
        
        description: "Group GitHub Repositories",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/notes/github/";
          
        },
      },{id: "post-spectrofluorophotometer",
        
          title: 'Spectrofluorophotometer <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How to operate Shimadzu spectrofluorophotometer",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.dropbox.com/scl/fi/mnun40r1wsjwhfd7bc3s0/SOP-Spectrofluorometer_Shimdazu.docx?rlkey=gzylnm0ulctfm74w5jm5izs3g&st=urf4rodt&dl=0", "_blank");
          
        },
      },{id: "post-expectations",
        
          title: "Expectations",
        
        description: "Expectations in Yoon Research Group",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/notes/expectations/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-sean-started-a-tenure-track-faculty-position-in-the-department-of-geological-sciences-at-the-university-of-florida",
          title: 'Sean started a tenure-track faculty position in the Department of Geological Sciences at...',
          description: "",
          section: "News",},{id: "news-sean-will-serve-on-the-faculty-advisory-committee-at-the-uf-water-institute-for-the-upcoming-three-year-term-link",
          title: 'Sean will serve on the Faculty Advisory Committee at the UF Water Institute...',
          description: "",
          section: "News",},{id: "news-fabian-joined-the-group-as-a-ph-d-student-welcome-fabian",
          title: 'Fabian joined the group as a Ph.D. student. Welcome Fabian!',
          description: "",
          section: "News",},{id: "news-madison-joined-the-group-as-an-assistant-scientist-welcome-madison",
          title: 'Madison joined the group as an Assistant Scientist. Welcome Madison!',
          description: "",
          section: "News",},{id: "news-madison-successfuly-presented-her-microfluidic-study-titled-microfluidic-analysis-of-n2o-cycling-in-karst-linking-hydro-bio-geochemical-processes-at-interpore2025-link",
          title: 'Madison successfuly presented her microfluidic study titled “Microfluidic Analysis of N2O Cycling in...',
          description: "",
          section: "News",},{id: "news-keith-joined-the-group-as-an-msc-student-welcome-keith",
          title: 'Keith joined the group as an MSc student. Welcome Keith!',
          description: "",
          section: "News",},{id: "news-dr-charlotte-garing-from-the-university-of-georgia-visited-us-to-share-her-research-and-deliver-a-talk-titled-micro-ct-in-geosciences-thank-you-dr-garing-for-coming-to-gainesville-and-speaking-with-us",
          title: 'Dr. Charlotte Garing from the University of Georgia visited us to share her...',
          description: "",
          section: "News",},{id: "news-fabian-received-a-travel-award-from-the-uf-water-institute-to-support-his-research-presentation-at-agu-2025-link-congratulations",
          title: 'Fabian received a travel award from the UF Water Institute to support his...',
          description: "",
          section: "News",},{id: "news-madison-has-moved-on-from-the-group-to-begin-the-next-stage-of-her-career-we-sincerely-appreciate-all-of-her-contributions-and-wish-her-every-success-and-happiness-ahead-thank-you-madison",
          title: 'Madison has moved on from the group to begin the next stage of...',
          description: "",
          section: "News",},{id: "news-bohyun-joined-the-group-as-a-post-doctoral-research-associate-welcome-bohyun",
          title: 'Bohyun joined the group as a post-doctoral research associate. Welcome Bohyun!',
          description: "",
          section: "News",},{id: "news-our-group-shared-two-research-efforts-at-agu-2025-fabian-presented-our-dye-tracing-work-and-sean-presented-our-study-on-n-o-cycling-in-karst-aquifers",
          title: 'Our group shared two research efforts at AGU 2025: Fabian presented our dye-tracing...',
          description: "",
          section: "News",},{id: "teachings-hydrogeology-field-camp",
          title: 'Hydrogeology Field Camp',
          description: "This 2-credit intensive field- and lab-based course introduces students to groundwater flow, karst hydrogeology, and surface water-groundwater interactions through classroom instruction, laboratory exercises, and multi-day field investigations. Students will collect, analyze, and synthesize hydrogeologic and hydrochemical data into professional technical reports.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/hydrocamp/";
            },},{id: "teachings-hydrogeologic-modeling",
          title: 'Hydrogeologic Modeling',
          description: "This course provides an introduction to numerical methods for flow and transport in subsurface groundwater systesm. Students will learn about groundwater flow and solute transport equations and numerical schemes to sovle them via finite volume methods.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/hydrogeologic-modling/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },];
