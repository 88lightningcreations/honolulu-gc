
import React from 'react';
import styles from '../page.module.css';
import InteractiveFAQ from '@/components/InteractiveFAQ';
import JsonLdFaq from '@/components/JsonLdFaq';

const faqs = [
  {
    question: "How can we control construction costs when nearly every material must be shipped to the island?",
    answer: "The most effective strategy is completing design decisions early, identifying long-lead items, and consolidating orders to avoid late changes and emergency freight. For residences, this means selecting all finishes and fixtures upfront, while for commercial projects, it includes major systems like elevators and HVAC. A detailed procurement schedule and a realistic budget for freight and contingencies are essential to prevent delays and cost overruns."
  },
  {
    question: "What construction features matter most for a coastal home or commercial building in Hawaiʻi?",
    answer: "The highest-value features are those that protect the building envelope and reduce maintenance, such as corrosion-resistant fasteners, durable roofing, and effective drainage. For homes, focus on lanais, windows, and doors, while for commercial buildings, protect storefronts and rooftop equipment. Proper material selection and installation are critical for long-term durability in salt-air environments."
  },
  {
    question: "How do lava zones, steep lots, drainage, or remote access change a project on Hawaiʻi Island or another outer island?",
    answer: "These conditions significantly impact design, engineering, and costs, often requiring geotechnical reviews, retaining walls, or specialized drainage. Remote properties demand careful planning for access, utilities, and worker transportation. A thorough site evaluation before finalizing the design is crucial to address these challenges and avoid unforeseen expenses."
  },
  {
    question: "Can you build a luxury pool, jacuzzi bath, water feature, large garage, or game room without creating future maintenance problems?",
    answer: "Yes, by designing them as integrated engineered systems rather than decorative add-ons. Pools and spas require robust structural, plumbing, and electrical plans with service access in mind. Garages and specialty rooms should be designed to accommodate the owner’s specific equipment and usage needs, including power, ventilation, and acoustics."
  },
  {
    question: "What should a commercial owner do before buying land or signing a construction contract?",
    answer: "Before committing, a commercial owner must investigate zoning, access, utilities, and other site constraints to ensure the property can support the intended business. Prepare a detailed operational brief outlining all business needs, and create a comprehensive budget that includes all costs from design to commissioning. The strongest projects begin with a feasibility review to align the site, program, and finances before architectural design begins."
  }
];

const NewConstructionPage = () => {
  return (
    <div className={styles.servicePageContainer}>
      <JsonLdFaq faqs={faqs} />
      <header>
        <h1 className={styles.servicePageTitle}>New Construction Across Hawaiʻi</h1>
        <p className={styles.servicePageDescription}>Three Service Levels for Homes and Entire Commercial Buildings</p>
      </header>

      <article className={styles.servicePageContent}>
        <p>
          For nearly 30 years, our general contracting team has helped property owners build, expand, and improve projects across the Hawaiian Islands. From Oʻahu’s urban neighborhoods to the remote communities of Molokaʻi and Lānaʻi, we understand that construction in Hawaiʻi is never one-size-fits-all: each island has different terrain, weather exposure, shipping conditions, labor availability, permitting requirements, and community needs.
        </p>
        <p>
          Our role is to coordinate the entire project—from early budgeting and site planning through construction, inspections, finish work, and final handover. We serve both residential clients, where the focus is the home and the people who live in it, and commercial clients, where the focus is the complete building, its operations, code requirements, employees, customers, tenants, and long-term maintenance.
        </p>
        <p>
          Every project is shaped by the property. Coastal homes may require stronger corrosion protection and hurricane-conscious detailing. Upcountry projects may need careful grading, retaining walls, water planning, and access coordination. Properties on Hawaiʻi Island may require additional attention to lava-zone conditions, volcanic exposure, or long material-haul distances. Commercial buildings may require more extensive structural, fire-life-safety, accessibility, electrical, plumbing, parking, and site-development coordination.
        </p>
        <p>
          The three service levels below provide a practical way to understand how scope, materials, durability, comfort, and customization can change with the project budget.
        </p>

        <section>
          <h2>Builder-Grade Construction</h2>
          <p>
            Builder-grade construction is designed for clients who want a well-planned, code-compliant, functional building with disciplined selections and efficient use of funds. This level can work especially well for a primary residence, workforce housing, a modest rental property, an accessory dwelling, a small office, a neighborhood retail building, or a commercial structure where durability and operating efficiency matter more than extensive customization.
          </p>
          <h3>Residential builder-grade homes</h3>
          <p>
            For a residential project, builder-grade does not mean careless or disposable. It means that the design uses proven layouts, readily available materials, practical fixtures, and a controlled finish schedule. We focus on the essentials that protect the home and make daily life comfortable:
          </p>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Structure</strong></td>
                  <td>A durable structural system appropriate for the site and local conditions.</td>
                </tr>
                <tr>
                  <td><strong>Exterior</strong></td>
                  <td>Practical roofing, siding, windows, and exterior doors.</td>
                </tr>
                <tr>
                  <td><strong>Floor Plan</strong></td>
                  <td>Efficient floor plans that reduce unnecessary framing, plumbing runs, and construction waste.</td>
                </tr>
                <tr>
                  <td><strong>Finishes</strong></td>
                  <td>Standard cabinetry, countertops, plumbing fixtures, lighting, flooring, and appliances.</td>
                </tr>
                <tr>
                  <td><strong>Outdoor</strong></td>
                  <td>Basic outdoor improvements such as a functional driveway, walkways, drainage, and modest landscaping.</td>
                </tr>
                <tr>
                  <td><strong>Energy</strong></td>
                  <td>Energy-conscious lighting and ventilation.</td>
                </tr>
                <tr>
                  <td><strong>Moisture Protection</strong></td>
                  <td>Moisture-resistant details in kitchens, bathrooms, laundry areas, and other wet zones.</td>
                </tr>
                <tr>
                  <td><strong>Site Work</strong></td>
                  <td>Proper site drainage and water management based on the property’s slope and exposure.</td>
                </tr>
                <tr>
                  <td><strong>Logistics</strong></td>
                  <td>A construction schedule coordinated around material availability and island logistics.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3>Commercial builder-grade buildings</h3>
          <p>
            For an entire commercial building, builder-grade construction is typically organized around reliable operations and a clear tenant or business use. Possible project types include:
          </p>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Project Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Small offices</td>
                </tr>
                <tr>
                  <td>Professional service buildings</td>
                </tr>
                <tr>
                  <td>Retail stores</td>
                </tr>
                <tr>
                  <td>Restaurants with straightforward kitchen requirements</td>
                </tr>
                <tr>
                  <td>Warehouses and storage buildings</td>
                </tr>
                <tr>
                  <td>Small multi-tenant buildings</td>
                </tr>
                <tr>
                  <td>Maintenance facilities</td>
                </tr>
                <tr>
                  <td>Community-serving buildings</td>
                </tr>
                <tr>
                  <td>Small lodging or staff-housing projects, subject to applicable approvals</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Select-Grade Construction</h2>
          <p>
            Select-grade construction gives clients more flexibility in layout, finishes, technology, comfort, and durability. This level is appropriate for a higher-quality custom home, a significant renovation, a multi-generational residence, a professional office, a hospitality property, a medical or wellness building, a higher-end retail project, or a commercial building where the customer experience and long-term performance are important.
          </p>
          <h3>Residential select-grade homes</h3>
          <p>A select-grade home may include a more customized floor plan, better exterior materials, larger openings, improved ventilation, upgraded kitchens, enhanced bathrooms, and more carefully integrated outdoor living areas. Common features include:</p>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Cabinetry</strong></td>
                  <td>Custom or semi-custom cabinetry.</td>
                </tr>
                <tr>
                  <td><strong>Countertops</strong></td>
                  <td>Quartz, natural stone, or higher-grade solid-surface countertops.</td>
                </tr>
                <tr>
                  <td><strong>Lighting</strong></td>
                  <td>Better lighting plans with layered ambient, task, and accent lighting.</td>
                </tr>
                <tr>
                  <td><strong>Windows</strong></td>
                  <td>Larger or strategically placed windows for daylight and views.</td>
                </tr>
                <tr>
                  <td><strong>Outdoor Living</strong></td>
                  <td>Improved shading, overhangs, lanais, and covered outdoor rooms.</td>
                </tr>
                <tr>
                  <td><strong>Flooring</strong></td>
                  <td>Enhanced flooring selections such as porcelain tile, engineered wood, or premium resilient materials.</td>
                </tr>
                <tr>
                  <td><strong>Plumbing & Bath</strong></td>
                  <td>Upgraded plumbing fixtures and bathroom finishes.</td>
                </tr>
                <tr>
                  <td><strong>Appliances</strong></td>
                  <td>Better appliance packages.</td>
                </tr>
                <tr>
                  <td><strong>Doors & Trim</strong></td>
                  <td>More substantial doors, hardware, and trim.</td>
                </tr>
                <tr>
                  <td><strong>Smart Home</strong></td>
                  <td>Smart-home systems for lighting, security, climate control, and access.</td>
                </tr>
                <tr>
                  <td><strong>Sound Control</strong></td>
                  <td>Improved sound control in bedrooms, offices, media rooms, and multi-generational spaces.</td>
                </tr>
                <tr>
                  <td><strong>Storage</strong></td>
                  <td>More robust storage, mudrooms, pantries, laundry rooms, and utility areas.</td>
                </tr>
                <tr>
                  <td><strong>Energy</strong></td>
                  <td>Solar-readiness, battery-readiness, electric-vehicle charging, and energy-monitoring options.</td>
                </tr>
                <tr>
                  <td><strong>Landscaping</strong></td>
                  <td>Carefully planned landscaping, irrigation, outdoor kitchens, and gathering areas.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3>Commercial select-grade buildings</h3>
          <p>For commercial clients, select-grade construction emphasizes a stronger public-facing experience and a more capable building infrastructure. This can be valuable when the entire building is part of the brand. Examples include:</p>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Project Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Medical Office</strong></td>
                  <td>Improved patient flow, sound privacy, and specialized requirements.</td>
                </tr>
                <tr>
                  <td><strong>Restaurant</strong></td>
                  <td>A distinctive dining room and upgraded kitchen infrastructure.</td>
                </tr>
                <tr>
                  <td><strong>Boutique Hotel</strong></td>
                  <td>Premium common areas and durable guest-room finishes.</td>
                </tr>
                <tr>
                  <td><strong>Professional Office</strong></td>
                  <td>Conference rooms, employee amenities, and flexible work areas.</td>
                </tr>
                <tr>
                  <td><strong>Retail Building</strong></td>
                  <td>Better storefront visibility and customer flow.</td>
                </tr>
                <tr>
                  <td><strong>Mixed-Use Building</strong></td>
                  <td>Improved residential and commercial separation.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Luxury Construction</h2>
          <p>
            Luxury construction is a fully customized experience built around architecture, craftsmanship, wellness, privacy, entertainment, technology, and long-term performance. For a residential client, the entire home is designed as a personal retreat. For a commercial client, the entire building is designed as an elevated experience.
          </p>
          <h3>Luxury residential homes</h3>
          <p>Luxury homes in Hawaiʻi often emphasize the relationship between the house and the land. Depending on the property, the design may include:</p>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Feature Category</th>
                  <th>Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Outdoor Living</strong></td>
                  <td>Large covered lanais, outdoor kitchens, resort-style pools, spas, water features.</td>
                </tr>
                <tr>
                  <td><strong>Garages & Storage</strong></td>
                  <td>Large garages with workshop areas, vehicle lifts, or boat storage.</td>
                </tr>
                <tr>
                  <td><strong>Entertainment</strong></td>
                  <td>Game rooms, dedicated theaters, media rooms, wine rooms.</td>
                </tr>
                <tr>
                  <td><strong>Wellness</strong></td>
                  <td>Private gyms, yoga studios, saunas, and wellness suites.</td>
                </tr>
                <tr>
                  <td><strong>Accommodations</strong></td>
                  <td>Primary suites with spa-style bathrooms, guest wings, multigenerational suites, or detached guest houses.</td>
                </tr>
                <tr>
                  <td><strong>Convenience</strong></td>
                  <td>Elevator access, home offices, libraries, and creative studios.</td>
                </tr>
                <tr>
                  <td><strong>Technology</strong></td>
                  <td>Fully integrated home automation, high-performance glazing, backup power, solar integration.</td>
                </tr>
                <tr>
                  <td><strong>Landscaping & Security</strong></td>
                  <td>Private gardens, tropical landscaping, custom stonework, secure gates, camera systems.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3>Luxury commercial buildings</h3>
          <p>Luxury commercial construction treats the entire building as an experience rather than a simple enclosure. It may be appropriate for:</p>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Project Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Boutique hotels and luxury lodging properties</td>
                </tr>
                <tr>
                  <td>High-end restaurants and culinary destinations</td>
                </tr>
                <tr>
                  <td>Private clubs and wellness facilities</td>
                </tr>
                <tr>
                  <td>Medical, dental, or aesthetic centers</td>
                </tr>
                <tr>
                  <td>Executive offices and corporate headquarters</td>
                </tr>
                <tr>
                  <td>Premium retail or showroom buildings</td>
                </tr>
                <tr>
                  <td>High-end condominium or mixed-use projects</td>
                </tr>
                <tr>
                  <td>Event venues and private gathering spaces</td>
                </tr>
                <tr>
                  <td>Resort support buildings and guest amenities</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Island-by-Island Construction Needs</h2>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Island</th>
                  <th>Common Needs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Oʻahu</strong></td>
                  <td>Tight-site construction, ADUs, coastal corrosion protection, drainage work, parking solutions, and careful scheduling.</td>
                </tr>
                <tr>
                  <td><strong>Maui</strong></td>
                  <td>Outdoor living structures, pools, water-conscious landscaping, wildfire-conscious planning, and salt-air protection.</td>
                </tr>
                <tr>
                  <td><strong>Kauaʻi</strong></td>
                  <td>Roof and water management, mold-resistant detailing, covered walkways, corrosion-resistant hardware, and careful delivery planning.</td>
                </tr>
                <tr>
                  <td><strong>Hawaiʻi Island</strong></td>
                  <td>Drainage, grading, retaining walls, moisture management in wet areas, shading in dry areas, lava-zone review, and long-distance material hauling.</td>
                </tr>
                <tr>
                  <td><strong>Molokaʻi</strong></td>
                  <td>Early material ordering, durable finishes, water storage, resilient utility planning, and practical workshops.</td>
                </tr>
                <tr>
                  <td><strong>Lānaʻi</strong></td>
                  <td>Consolidated procurement, early shipping confirmation, durable materials, simplified maintenance access, and backup systems.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Permitting, Design, and Project Control</h2>
          <p>
            Hawaiʻi construction is administered through state and county requirements that vary by island. Our process is built around early discovery:
          </p>
          <ul>
            <li>Review the property, zoning, access, utilities, and site constraints.</li>
            <li>Establish a preliminary scope and budget before detailed selections.</li>
            <li>Identify all necessary consultants (architect, engineer, surveyor, etc.).</li>
            <li>Develop a realistic, island-specific logistics plan.</li>
            <li>Coordinate permit documents and agency responses.</li>
            <li>Procure long-lead materials early.</li>
            <li>Build with documented quality control and inspections.</li>
            <li>Complete commissioning, closeout documents, and owner orientation.</li>
          </ul>
        </section>
      </article>

      <div className={styles.faqContainer}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        <InteractiveFAQ faqs={faqs} />
      </div>
    </div>
  );
};

export default NewConstructionPage;
