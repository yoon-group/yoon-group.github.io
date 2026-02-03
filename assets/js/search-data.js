// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
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
        },{id: "post-workstations",
        
          title: "Workstations",
        
        description: "How to access group workstations",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/notes/workstations/";
          
        },
      },{id: "post-codes",
        
          title: "Codes",
        
        description: "Group GitHub Repositories",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/notes/github/";
          
        },
      },{id: "post-expectations",
        
          title: "Expectations",
        
        description: "Expectations in Yoon Research Group",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/notes/expectations/";
          
        },
      },{id: "post-pdms-process",
        
          title: "PDMS Process",
        
        description: "How to make PDMS chips",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/notes/pdms/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-paper-in-collaboration-with-lichun-wang-at-tianjin-university-on-solute-transport-dependence-on-fracture-and-rock-matrix-interaction-has-been-accepted-in-journal-of-hyrology",
          title: 'Paper in collaboration with Lichun Wang at Tianjin University on solute transport dependence...',
          description: "",
          section: "News",},{id: "news-hongfan-s-paper-titled-emergence-of-unstable-focused-flow-induced-by-variable-density-flows-in-vertical-fractures-accepted-in-water-resources-reesarch-congraturations-hongfan",
          title: 'Hongfan’s paper titled “Emergence of unstable focused flow induced by variable-density flows in...',
          description: "",
          section: "News",},{id: "news-sean-started-a-tenure-track-faculty-position-in-the-department-of-geological-sciences-at-the-university-of-florida",
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
          description: "This intensive field- and lab-based course introduces students to groundwater flow, karst hydrogeology, and surface water-groundwater interactions through classroom instruction, laboratory exercises, and multi-day field investigations. Students will collect, analyze, and synthesize hydrogeologic and hydrochemical data into professional technical reports.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/hydrocamp/";
            },},{id: "teachings-hydrogeologic-modeling",
          title: 'Hydrogeologic Modeling',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
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
