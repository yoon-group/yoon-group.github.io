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
        },{id: "post-trace-metals",
        
          title: 'Trace Metals <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How to collect samples for trace metals and As speciation procedure",
        section: "Posts",
        handler: () => {
          
            window.open("https://uflorida-my.sharepoint.com/:w:/r/personal/yoon_s_ufl_edu/Documents/GroupNotes/SOP-SamplingTraceMetals.docx?d=w11deff14315548409dd3d6ad2e86990f&csf=1&web=1&e=B6Etcp", "_blank");
          
        },
      },{id: "post-lab-inventory",
        
          title: 'Lab Inventory <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Lab inventory management spreadsheet",
        section: "Posts",
        handler: () => {
          
            window.open("https://uflorida-my.sharepoint.com/:x:/r/personal/yoon_s_ufl_edu/Documents/GroupNotes/Lab_Inventory.xlsx?d=w8d299cfdeadb4cd7b5cf48518c612967&csf=1&web=1&e=wypycg", "_blank");
          
        },
      },{id: "post-gc-sampling",
        
          title: 'GC sampling <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How to sample for GC",
        section: "Posts",
        handler: () => {
          
            window.open("https://uflorida-my.sharepoint.com/:w:/r/personal/yoon_s_ufl_edu/Documents/GroupNotes/SOP-GC.docx?d=w619bfd09c68540838d554ef9e70a08f8&csf=1&web=1&e=L0uETE", "_blank");
          
        },
      },{id: "post-ysi",
        
          title: 'YSI <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How to operate YSI probe",
        section: "Posts",
        handler: () => {
          
            window.open("https://uflorida-my.sharepoint.com/:w:/r/personal/yoon_s_ufl_edu/Documents/GroupNotes/SOP-YSI.docx?d=w221c6f950ea74dba924ca374b3cfa3ea&csf=1&web=1&e=X9liol", "_blank");
          
        },
      },{id: "post-carbon-isotope-analysis",
        
          title: 'Carbon isotope analysis <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How to operate Picarro (carbon)",
        section: "Posts",
        handler: () => {
          
            window.open("https://uflorida-my.sharepoint.com/:w:/r/personal/yoon_s_ufl_edu/Documents/GroupNotes/SOP-Picarro_carbon.docx?d=w640ad35557a04469adc1bfccde3f115f&csf=1&web=1&e=oVH1MU", "_blank");
          
        },
      },{id: "post-ic",
        
          title: 'IC <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How to operate IC",
        section: "Posts",
        handler: () => {
          
            window.open("https://uflorida-my.sharepoint.com/:w:/r/personal/yoon_s_ufl_edu/Documents/GroupNotes/SOP-IC.docx?d=w06d47078a1d8402b811f8131d7b08252&csf=1&web=1&e=D5REpc", "_blank");
          
        },
      },{id: "post-master-mold-photolithography",
        
          title: 'Master mold (photolithography) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How to produce master mold for microfluidics",
        section: "Posts",
        handler: () => {
          
            window.open("https://uflorida-my.sharepoint.com/:w:/r/personal/yoon_s_ufl_edu/Documents/GroupNotes/SOP-masterMold%20(Suex%20thick).docx?d=wd727e172c5a944c0b7ec844597a33c3d&csf=1&web=1&e=b20QYX", "_blank");
          
        },
      },{id: "post-carbon-pacekt-process",
        
          title: 'Carbon pacekt process <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How to handle and process carbon packets for dye tracing",
        section: "Posts",
        handler: () => {
          
            window.open("https://uflorida-my.sharepoint.com/:w:/r/personal/yoon_s_ufl_edu/Documents/GroupNotes/SOP-carbon%20packet.docx?d=w3e8b684053f14c5b999d8418fa89d4c8&csf=1&web=1&e=Jjc8Ya", "_blank");
          
        },
      },{id: "post-uv-vis",
        
          title: 'UV-Vis <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How to operate UV-Vis",
        section: "Posts",
        handler: () => {
          
            window.open("https://uflorida-my.sharepoint.com/:w:/r/personal/yoon_s_ufl_edu/Documents/GroupNotes/SOP-UV_Vis.docx?d=w3b79c4edb7a64c209f70df07c318cf57&csf=1&web=1&e=Zh3OvX", "_blank");
          
        },
      },{id: "post-aa3",
        
          title: 'AA3 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How to operate AA3",
        section: "Posts",
        handler: () => {
          
            window.open("https://uflorida-my.sharepoint.com/:w:/r/personal/yoon_s_ufl_edu/Documents/GroupNotes/SOP-AA3.docx?d=w425b604741ed48458ba12d77e2b2f33e&csf=1&web=1&e=3gYq3R", "_blank");
          
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
          
            window.open("https://uflorida-my.sharepoint.com/:w:/r/personal/yoon_s_ufl_edu/Documents/GroupNotes/SOP-PDMS%20processing.docx?d=w35dad7189fe344c380b845f07d4f03d1&csf=1&web=1&e=e2pEe5", "_blank");
          
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
          
            window.open("https://uflorida-my.sharepoint.com/:w:/r/personal/yoon_s_ufl_edu/Documents/GroupNotes/SOP-Spectrofluorometer_Shimdazu.docx?d=w8ba358c128b247d3a1b468640a32bca7&csf=1&web=1&e=lf0knj", "_blank");
          
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
