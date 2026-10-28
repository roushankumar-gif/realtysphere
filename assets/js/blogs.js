/* ARTICLE DATA. To publish a new article, copy one object below, change every field, add a comma, and upload the file.
   'content' is HTML. Use <h2> and <h3> for headings (the table of contents is built from them). */
const CATEGORIES = [
  "Residential Projects",
  "Upcoming Projects",
  "Location Guides",
  "Home-Buying Guides",
  "Property Investment",
  "Market Trends",
  "RERA & Documentation"
];

const BLOGS = [
  {
    "id": 1,
    "title": "How to Evaluate a Residential Project Before Buying",
    "slug": "evaluate-residential-project-before-buying",
    "excerpt": "A practical checklist for researching a residential project: approvals, developer record, location, layout and paperwork.",
    "content": "<p>Choosing a home is one of the largest financial decisions most people make. A structured review helps you compare projects on facts rather than brochures.</p>\n<h2>Start with legal standing</h2>\n<h3>Registration and approvals</h3>\n<p>Look up the project on your state's official RERA website and note the registration details, declared completion date and sanctioned plans. Always copy details from the official portal, not from an advertisement.</p>\n<h3>Land title</h3>\n<p>Ask for the title documents and have an independent property lawyer review them before you pay a booking amount.</p>\n<h2>Research the developer</h2>\n<ul><li>Past projects: were they delivered, and how close to the promised dates?</li><li>Any complaints or orders listed on the RERA portal or in court records.</li><li>Conversations with residents of earlier projects.</li></ul>\n<h2>Check the product itself</h2>\n<table><tr><th>Area</th><th>Questions to ask</th></tr><tr><td>Layout</td><td>Is the carpet area stated clearly? How are rooms oriented for light and ventilation?</td></tr><tr><td>Specifications</td><td>Are materials and brands written into the agreement?</td></tr><tr><td>Amenities</td><td>Which are ready at handover and which are promised later?</td></tr><tr><td>Maintenance</td><td>What are the proposed charges and who manages the property?</td></tr></table>\n<blockquote>If a promise matters to you, make sure it is written in the agreement.</blockquote>\n<h2>Evaluate the surroundings</h2>\n<p>Visit at different times of day. Check commute, water, schools, healthcare and noise. Our <a href=\"article.html?slug=how-to-research-a-neighbourhood\">neighbourhood research guide</a> explains how.</p>\n<h2>Review the money</h2>\n<p>Compare the total cost, including registration, taxes and other charges, with your budget and loan eligibility. Read the <a href=\"article.html?slug=reading-a-builder-buyer-agreement\">builder-buyer agreement guide</a> before you sign.</p>",
    "featuredImage": "assets/images/evaluate-residential-project-before-buying.jpg",
    "imageAlt": "Illustration for: How to Evaluate a Residential Project Before Buying",
    "category": "Residential Projects",
    "author": "RealtySphere Editorial Team",
    "publishedDate": "2026-10-01",
    "updatedDate": "2026-10-20",
    "seoTitle": "How to Evaluate a Residential Project Before Buying | RealtySphere",
    "metaDescription": "A practical checklist for researching a residential project: approvals, developer record, location, layout and paperwork."
  },
  {
    "id": 2,
    "title": "RERA Basics for Homebuyers",
    "slug": "rera-basics-for-homebuyers",
    "excerpt": "What the Real Estate (Regulation and Development) Act, 2016 means for buyers and which details to verify.",
    "content": "<p>The Real Estate (Regulation and Development) Act, 2016, usually called RERA, created state-level regulators to bring more transparency to property sales. Rules differ by state, so always confirm details with your state authority.</p>\n<h2>What buyers should know</h2>\n<h3>Project registration</h3>\n<p>Many projects must be registered with the state regulator before they are advertised or sold. Registered projects publish key details on the regulator's website.</p>\n<h3>Carpet area</h3>\n<p>The Act defines carpet area as the net usable floor area of an apartment, which makes prices easier to compare than \"super built-up\" figures.</p>\n<h3>Escrow of project funds</h3>\n<p>Promoters are required to deposit a portion of buyer payments in a separate project account to be used for that project.</p>\n<h3>Defect liability</h3>\n<p>The Act provides for the promoter to fix certain structural defects reported within a defined period after possession.</p>\n<h2>How to verify a project</h2>\n<ul><li>Find your state's official RERA portal.</li><li>Search by project or promoter name.</li><li>Compare the registered details with your agreement.</li><li>Note the declared completion date.</li></ul>\n<p class=\"note\">This article is general information, not legal advice. Consult a qualified property lawyer for your situation.</p>",
    "featuredImage": "assets/images/rera-basics-for-homebuyers.jpg",
    "imageAlt": "Illustration for: RERA Basics for Homebuyers",
    "category": "RERA & Documentation",
    "author": "RealtySphere Editorial Team",
    "publishedDate": "2026-09-22",
    "updatedDate": "2026-10-18",
    "seoTitle": "RERA Basics for Homebuyers | RealtySphere",
    "metaDescription": "What the Real Estate (Regulation and Development) Act, 2016 means for buyers and which details to verify."
  },
  {
    "id": 3,
    "title": "How to Research a Neighbourhood Before You Buy",
    "slug": "how-to-research-a-neighbourhood",
    "excerpt": "A repeatable method for judging a locality: connectivity, daily needs, development plans and what to see on a site visit.",
    "content": "<p>A good home in the wrong location can be hard to live in and hard to resell. Use the same steps for every area you consider so comparisons stay fair.</p>\n<h2>Map the daily routine</h2>\n<p>Test the actual commute to your workplace at peak hours. Check the nearest schools, clinics, markets and public transport stops.</p>\n<h2>Look at infrastructure</h2>\n<h3>Existing infrastructure</h3>\n<p>Roads, drainage, water supply, power reliability and internet options matter more than amenities listed in brochures.</p>\n<h3>Planned infrastructure</h3>\n<p>Check official master plans and authority notices for proposed roads, metro lines or other projects. Treat verbal promises and unofficial maps with caution.</p>\n<h2>Visit like a resident</h2>\n<ul><li>Go on a weekday morning, an evening and a weekend.</li><li>Walk the last kilometre instead of driving.</li><li>Talk to people who already live there.</li></ul>\n<h2>Compare locations side by side</h2>\n<table><tr><th>Factor</th><th>Location A</th><th>Location B</th></tr><tr><td>Commute time</td><td></td><td></td></tr><tr><td>Schools nearby</td><td></td><td></td></tr><tr><td>Water and power</td><td></td><td></td></tr><tr><td>Noise and traffic</td><td></td><td></td></tr></table>",
    "featuredImage": "assets/images/how-to-research-a-neighbourhood.jpg",
    "imageAlt": "Illustration for: How to Research a Neighbourhood Before You Buy",
    "category": "Location Guides",
    "author": "RealtySphere Editorial Team",
    "publishedDate": "2026-09-15",
    "updatedDate": "2026-10-10",
    "seoTitle": "How to Research a Neighbourhood Before You Buy | RealtySphere",
    "metaDescription": "A repeatable method for judging a locality: connectivity, daily needs, development plans and what to see on a site visit."
  },
  {
    "id": 4,
    "title": "A Property Investment Checklist for First-Time Investors",
    "slug": "property-investment-checklist",
    "excerpt": "The questions to answer about cash flow, risk, holding costs and exit before you invest in property.",
    "content": "<p>Property can be a long-term asset, but it is illiquid and carries costs beyond the purchase price. This checklist keeps the focus on fundamentals. It is not financial advice.</p>\n<h2>Define your goal</h2>\n<p>Are you aiming for rental income, long-term appreciation or both? Your goal decides which locations and property types make sense.</p>\n<h2>Understand the full cost</h2>\n<ul><li>Registration and stamp duty</li><li>Loan interest and processing charges</li><li>Maintenance, property tax and repairs</li><li>Periods without a tenant</li></ul>\n<h2>Stress-test your plan</h2>\n<h3>Cash flow</h3>\n<p>Can you pay the instalments if rent stops for several months?</p>\n<h3>Exit</h3>\n<p>Think about how you would sell, who the likely buyers are and how long it could take.</p>\n<h2>Verify before you commit</h2>\n<p>Confirm the project's registration, review the agreement and speak with a qualified tax professional about the rules that apply to you. See also our <a href=\"article.html?slug=rera-basics-for-homebuyers\">RERA basics</a>.</p>",
    "featuredImage": "assets/images/property-investment-checklist.jpg",
    "imageAlt": "Illustration for: A Property Investment Checklist for First-Time Investors",
    "category": "Property Investment",
    "author": "RealtySphere Editorial Team",
    "publishedDate": "2026-09-08",
    "updatedDate": "2026-10-05",
    "seoTitle": "A Property Investment Checklist for First-Time Investors | RealtySphere",
    "metaDescription": "The questions to answer about cash flow, risk, holding costs and exit before you invest in property."
  },
  {
    "id": 5,
    "title": "Reading a Builder-Buyer Agreement: Clauses to Check",
    "slug": "reading-a-builder-buyer-agreement",
    "excerpt": "Key clauses to read carefully in a builder-buyer agreement, from payment schedule to delay terms.",
    "content": "<p>The agreement is the document that defines what you are buying and what happens if things go wrong. Read the whole thing, and have a lawyer review it before signing.</p>\n<h2>Clauses worth extra attention</h2>\n<h3>Description of the unit</h3>\n<p>Check unit number, floor, carpet area and the specifications promised.</p>\n<h3>Payment schedule</h3>\n<p>Make sure payments are linked to construction stages and match the amounts you were quoted.</p>\n<h3>Possession date and delay terms</h3>\n<p>Look for the committed possession date and what compensation applies if it is missed.</p>\n<h3>Cancellation and refunds</h3>\n<p>Understand the deductions that apply if either side cancels.</p>\n<h2>Keep a paper trail</h2>\n<ul><li>Receipts for every payment</li><li>Copies of approved plans</li><li>Written confirmation of any change to what was promised</li></ul>\n<blockquote>Verbal assurances are hard to rely on. If it is not in writing, treat it as not promised.</blockquote>\n<p class=\"note\">General information only. This is not legal advice.</p>",
    "featuredImage": "assets/images/reading-a-builder-buyer-agreement.jpg",
    "imageAlt": "Illustration for: Reading a Builder-Buyer Agreement: Clauses to Check",
    "category": "RERA & Documentation",
    "author": "RealtySphere Editorial Team",
    "publishedDate": "2026-09-01",
    "updatedDate": "2026-10-12",
    "seoTitle": "Reading a Builder-Buyer Agreement: Clauses to Check | RealtySphere",
    "metaDescription": "Key clauses to read carefully in a builder-buyer agreement, from payment schedule to delay terms."
  },
  {
    "id": 6,
    "title": "How to Read Real Estate Market Trends Without the Hype",
    "slug": "reading-real-estate-market-trends",
    "excerpt": "Which indicators matter when reading market reports, and how to avoid drawing conclusions from a single headline.",
    "content": "<p>Market headlines can swing from boom to bust within a week. A calmer approach is to look at a few indicators over longer periods and from several sources.</p>\n<h2>Indicators to watch</h2>\n<table><tr><th>Indicator</th><th>What it can tell you</th></tr><tr><td>Registered sales</td><td>Actual transactions in an area</td></tr><tr><td>New launches</td><td>Developer confidence and supply</td></tr><tr><td>Unsold inventory</td><td>Whether supply is outpacing demand</td></tr><tr><td>Rental trends</td><td>Local demand from residents</td></tr><tr><td>Interest rates</td><td>Home-loan affordability</td></tr></table>\n<h2>Good habits</h2>\n<h3>Use primary sources</h3>\n<p>Prefer government data, regulator portals and published reports over social media summaries.</p>\n<h3>Compare like with like</h3>\n<p>Prices for different property types and locations are not directly comparable.</p>\n<h3>Look past one data point</h3>\n<p>A single quarter is rarely a trend. Check whether several indicators agree.</p>",
    "featuredImage": "assets/images/reading-real-estate-market-trends.jpg",
    "imageAlt": "Illustration for: How to Read Real Estate Market Trends Without the Hype",
    "category": "Market Trends",
    "author": "RealtySphere Editorial Team",
    "publishedDate": "2026-10-15",
    "updatedDate": "2026-10-22",
    "seoTitle": "How to Read Real Estate Market Trends Without the Hype | RealtySphere",
    "metaDescription": "Which indicators matter when reading market reports, and how to avoid drawing conclusions from a single headline."
  },
  {
    "id": 7,
    "title": "How to Research an Upcoming Residential Project",
    "slug": "researching-upcoming-residential-projects",
    "excerpt": "Before booking in a pre-launch project, here is how to check what is confirmed and what is only marketing.",
    "content": "<p>Pre-launch and under-construction projects rely on promises, so research matters more than usual.</p>\n<h2>Separate confirmed from claimed</h2>\n<ul><li>Is the project registered on the state RERA portal?</li><li>Are the plans approved, and can you see the approvals?</li><li>What is the stated possession date?</li></ul>\n<h2>Check the developer</h2>\n<p>Review earlier projects, delivery history and any listed complaints. Visit a completed project if you can.</p>\n<h2>Read the offer carefully</h2>\n<h3>Booking amounts</h3>\n<p>Ask what is refundable and under which conditions, in writing.</p>\n<h3>Pricing</h3>\n<p>Ask for a full cost sheet. Do not rely on a headline price alone.</p>\n<h2>Go slowly</h2>\n<p>Urgency is a common sales tactic. A good project will still be there after you complete your checks. Start with our <a href=\"article.html?slug=evaluate-residential-project-before-buying\">evaluation checklist</a>.</p>",
    "featuredImage": "assets/images/researching-upcoming-residential-projects.jpg",
    "imageAlt": "Illustration for: How to Research an Upcoming Residential Project",
    "category": "Upcoming Projects",
    "author": "RealtySphere Editorial Team",
    "publishedDate": "2026-10-20",
    "updatedDate": "2026-10-26",
    "seoTitle": "How to Research an Upcoming Residential Project | RealtySphere",
    "metaDescription": "Before booking in a pre-launch project, here is how to check what is confirmed and what is only marketing."
  }
];
