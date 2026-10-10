
import styles from '../page.module.css';
import InteractiveFAQ from '@/components/InteractiveFAQ';
import JsonLdFaq from '@/components/JsonLdFaq';

const faqs = [
    {
        question: "Can you add a second story or expand my home if the existing foundation was not designed for it?",
        answer: "An existing-condition investigation is required to determine if the foundation can support added loads. In some cases, reinforcement is possible, while in others, a new foundation or a different addition layout may be more cost-effective. We coordinate with design professionals to ensure the existing structure can support the proposed addition. This is why a reliable final price cannot be determined from square footage alone."
    },
    {
        question: "How do you keep a commercial business open while constructing an addition?",
        answer: "We develop a phasing and access plan before construction begins, which may include separating customers from work areas and scheduling disruptive activities outside business hours. For restaurants, offices, clinics, and retail spaces, we also consider dust, vibration, noise, and other factors to minimize disruption. The goal is to protect the business while the addition is being built. This ensures that your business can continue to operate with minimal impact on your revenue and customer experience."
    },
    {
        question: "What should I budget for a luxury outdoor kitchen, pool, or jacuzzi area beyond the visible finishes?",
        answer: "The visible appliances and finishes are only part of the cost. Luxury outdoor areas may require upgraded electrical service, gas lines, plumbing, drainage, and more. The site can have an even greater effect, as a flat, accessible lot is very different from a steep or remote property. We review the complete system, including utilities and drainage, before treating an outdoor feature as a simple finish upgrade."
    },
    {
        question: "Can you build an addition for family use now and convert it into a rental or guest suite later?",
        answer: "It may be possible, but the future use should be considered during the first design. Plumbing locations, separate entrances, parking, and other factors can affect whether a later conversion is practical. Designing for flexibility does not guarantee that a future rental use will be approved. County rules and property-specific restrictions must be checked before construction to avoid expensive rework later."
    },
    {
        question: "Why can two additions with the same square footage have very different prices on different Hawaiian islands?",
        answer: "Square footage is only one part of the project. Price can change because of site access, shipping, labor availability, and foundation conditions. A simple room addition near an accessible urban property may have a very different cost from a luxury addition on a remote or sloped lot. We evaluate the actual property, not just the size of the proposed floor plan, so the budget reflects the conditions that will shape construction."
    }
];

const HomeAdditionsPage = () => {
  return (
    <div className={styles.servicePageContainer}>
      <JsonLdFaq faqs={faqs} />
      <header>
        <h1 className={styles.servicePageTitle}>Home and Commercial Additions Across Hawaiʻi</h1>
      </header>
      
      <article className={styles.servicePageContent}>
        <p>
          For nearly 30 years, our general contracting team has helped property owners across all major Hawaiian islands expand, improve, and modernize the places where they live and work. From a practical family-room addition in Hilo to a high-end indoor-outdoor entertaining wing in Kailua, we understand that every project must respond to the island’s climate, terrain, materials, access, permitting requirements, and local way of life.
        </p>
        <p>
          An addition should do more than increase square footage. It should improve how the property functions, protect the investment, and feel as though it belongs there from the beginning. We provide addition planning, design coordination, permitting support, site preparation, structural construction, electrical and plumbing work, roofing, finish work, and project management for residential and commercial clients.
        </p>
        <p>
          The right scope depends on the property, the island, and the intended use. A builder-grade addition may focus on durable function and efficient construction. A select-grade addition adds stronger design coordination and upgraded finishes. A luxury addition can become a complete lifestyle environment with indoor-outdoor kitchens, resort-style bathrooms, pools, spas, game rooms, garages, guest suites, and smart-home systems.
        </p>
        <p>
          Because requirements vary by county and project type, permitting must be evaluated early. For example, Honolulu County states that permits may be required for additions, structural alterations, swimming pools, solar panels, certain electrical work, plumbing work, and other improvements. Kauaʻi and Hawaiʻi County also require specific application documents, plans, zoning reviews, and agency coordination for many residential and commercial projects.
        </p>

        <h2>Three Addition Budgets</h2>
        <p>The following tiers are designed to help owners understand what may be included in a project. Final pricing depends on location, square footage, foundation conditions, utility upgrades, architectural requirements, material availability, site access, and permitting.</p>
        
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Budget Level</th>
              <th>Best For</th>
              <th>Typical Scope</th>
              <th>Finish Approach</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Budget Level">Builder Grade</td>
              <td data-label="Best For">Practical expansions and income-producing space</td>
              <td data-label="Typical Scope">Bedrooms, bathrooms, offices, storage, basic kitchens, and covered lanais</td>
              <td data-label="Finish Approach">Durable, readily available materials</td>
            </tr>
            <tr>
              <td data-label="Budget Level">Select Grade</td>
              <td data-label="Best For">Long-term comfort and improved resale value</td>
              <td data-label="Typical Scope">Larger kitchens, primary suites, upgraded windows, lanais, better lighting, and flooring</td>
              <td data-label="Finish Approach">Coordinated materials and upgraded fixtures</td>
            </tr>
            <tr>
              <td data-label="Budget Level">Luxury</td>
              <td data-label="Best For">Custom estates, resort-style homes, executive spaces, and high-end commercial properties</td>
              <td data-label="Typical Scope">Indoor-outdoor living, pools, spas, game rooms, garages, guest suites, and custom millwork</td>
              <td data-label="Finish Approach">Fully customized design, premium materials, and integrated technology</td>
            </tr>
          </tbody>
        </table>

        <h3>Builder-Grade Additions</h3>
        <p>Builder-grade does not mean careless or temporary. It means the project is designed around value, function, durability, and controlled material costs. This level is often ideal for families who need more usable space without adding unnecessary architectural complexity.</p>
        <p>Common builder-grade residential additions include:</p>
        <ul>
          <li>One or more bedrooms</li>
          <li>A standard bathroom or powder room</li>
          <li>A home office or study</li>
          <li>A family room or enclosed lanai</li>
          <li>A laundry room</li>
          <li>A modest kitchen expansion</li>
          <li>A storage room</li>
          <li>A covered carport or basic garage extension</li>
          <li>An accessory dwelling or rental-oriented space, where zoning and approvals allow</li>
        </ul>
        <p>Builder-grade commercial additions may include:</p>
        <ul>
          <li>Office space</li>
          <li>Small retail expansions</li>
          <li>Break rooms</li>
          <li>Employee restrooms</li>
          <li>Storage and inventory rooms</li>
          <li>Service counters</li>
          <li>Clinic or professional-use rooms</li>
          <li>Maintenance buildings</li>
          <li>Covered customer waiting areas</li>
          <li>Basic warehouse or workshop extensions</li>
        </ul>
        <p>The design typically uses practical flooring, standard cabinetry, dependable plumbing fixtures, energy-conscious windows, conventional roofing, and readily available exterior finishes. We still pay close attention to moisture control, ventilation, corrosion resistance, drainage, and proper connections to the existing structure.</p>
        <p>A builder-grade addition is often the best choice when the main objective is to create functional space quickly and responsibly. It can also be a sound option for owners preparing a property for rental use, multigenerational living, or a future sale.</p>

        <h3>Select-Grade Additions</h3>
        <p>Select-grade additions offer more design flexibility and a higher level of comfort. This tier is appropriate for owners who want the addition to feel integrated with the original home rather than simply attached to it.</p>
        <p>Residential examples include:</p>
        <ul>
          <li>A larger kitchen with an improved layout</li>
          <li>A primary-bedroom suite with a walk-in closet</li>
          <li>A bathroom with upgraded tile and fixtures</li>
          <li>A family room opening to a covered lanai</li>
          <li>Expanded windows or sliding doors</li>
          <li>A home office with built-in storage</li>
          <li>A guest suite for extended family</li>
          <li>A dedicated media room</li>
          <li>A better-organized laundry and utility area</li>
          <li>An upgraded garage, workshop, or hobby area</li>
        </ul>
        <p>Select-grade commercial work may include:</p>
        <ul>
          <li>A more welcoming reception area</li>
          <li>Improved customer circulation</li>
          <li>Executive offices</li>
          <li>Conference rooms</li>
          <li>High-quality employee kitchens</li>
          <li>Restaurant or hospitality expansions</li>
          <li>Upgraded guest accommodations</li>
          <li>Better acoustics and lighting</li>
          <li>New storefronts or larger glazing systems</li>
          <li>Improved accessibility and restroom layouts</li>
        </ul>
        <p>Materials may include upgraded cabinetry, engineered stone countertops, larger-format tile, luxury vinyl or engineered wood flooring, higher-quality doors and windows, decorative lighting, built-in storage, and enhanced mechanical systems. The addition may also include better insulation, solar-control glazing, ceiling fans, and shaded outdoor areas.</p>
        <p>This tier is especially useful for properties in competitive neighborhoods where comfort, appearance, and long-term usability matter. It allows owners to make a meaningful improvement without moving into the complexity and cost of fully custom luxury construction.</p>

        <h3>Luxury Additions</h3>
        <p>Luxury additions are planned as complete environments rather than simple expansions. The goal is to create a distinctive experience while integrating the new construction with the existing property, landscape, views, privacy, and daily routines.</p>
        <p>Luxury residential features may include:</p>
        <ul>
          <li>Indoor-outdoor kitchens with matching cabinetry and coordinated appliances</li>
          <li>Outdoor cooking stations with grills, refrigerators, sinks, pizza ovens, and beverage centers</li>
          <li>Large retractable or multi-panel glass doors</li>
          <li>Covered lanais with ceiling fans, heaters, lighting, and motorized screens</li>
          <li>Resort-style primary bathrooms</li>
          <li>Jacuzzi or soaking tubs</li>
          <li>Steam showers and oversized walk-in showers</li>
          <li>Heated towel systems and custom vanities</li>
          <li>Swimming pools and infinity-edge pools where site and approvals allow</li>
          <li>Spa or jacuzzi areas connected to the pool environment</li>
          <li>Water features and custom landscape lighting</li>
          <li>Game rooms with billiards, shuffleboard, arcade systems, or sports-viewing areas</li>
          <li>Home theaters</li>
          <li>Wine rooms and tasting areas</li>
          <li>Custom garages for multiple vehicles, boats, motorcycles, or recreational equipment</li>
          <li>Guest suites and private-entry accommodations</li>
          <li>Home gyms and wellness rooms</li>
          <li>Elevator or lift systems where appropriate</li>
          <li>Smart-home controls for lighting, security, climate, shading, and entertainment</li>
          <li>Solar, battery storage, backup power, and electric-vehicle charging</li>
          <li>Custom millwork, stonework, wood ceilings, and architectural metalwork</li>
        </ul>
        <p>Luxury commercial additions may include:</p>
        <ul>
          <li>Boutique hotel suites</li>
          <li>Resort villas</li>
          <li>High-end restaurant expansions</li>
          <li>Private dining rooms</li>
          <li>Spa and wellness facilities</li>
          <li>Clubhouses</li>
          <li>Executive offices</li>
          <li>Premium retail interiors</li>
          <li>Showrooms</li>
          <li>Entertainment rooms</li>
          <li>Guest arrival and valet structures</li>
          <li>High-end event and hospitality spaces</li>
          <li>Commercial kitchens and outdoor service areas</li>
        </ul>
        <p>Luxury work requires more than selecting expensive finishes. It requires careful coordination between architects, engineers, landscape designers, pool contractors, mechanical trades, technology specialists, and the general contractor. A pool, outdoor kitchen, spa, or large glass opening can affect drainage, structure, electrical distribution, waterproofing, ventilation, and permitting.</p>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Luxury Feature</th>
              <th>Planning Issues We Coordinate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Luxury Feature">Pool or spa</td>
              <td data-label="Planning Issues We Coordinate">Excavation, drainage, structural design, equipment, safety, electrical, and permits</td>
            </tr>
            <tr>
              <td data-label="Luxury Feature">Indoor-outdoor kitchen</td>
              <td data-label="Planning Issues We Coordinate">Gas or electrical service, plumbing, ventilation, counters, and weather exposure</td>
            </tr>
            <tr>
              <td data-label="Luxury Feature">Jacuzzi bath</td>
              <td data-label="Planning Issues We Coordinate">Floor structure, waterproofing, plumbing capacity, ventilation, and access</td>
            </tr>
            <tr>
              <td data-label="Luxury Feature">Game room</td>
              <td data-label="Planning Issues We Coordinate">Sound control, electrical loads, lighting, flooring, and cooling</td>
            </tr>
            <tr>
              <td data-label="Luxury Feature">Custom garage</td>
              <td data-label="Planning Issues We Coordinate">Foundation, vehicle access, storage, ventilation, and fire separation</td>
            </tr>
            <tr>
              <td data-label="Luxury Feature">Large glass openings</td>
              <td data-label="Planning Issues We Coordinate">Structural headers, wind exposure, water intrusion protection, and shading</td>
            </tr>
            <tr>
              <td data-label="Luxury Feature">Smart-home systems</td>
              <td data-label="Planning Issues We Coordinate">Wiring, network design, equipment locations, and backup power</td>
            </tr>
          </tbody>
        </table>
        
        <h2>Oʻahu Additions</h2>
        <p>Oʻahu has the state’s largest concentration of residential neighborhoods, commercial activity, older homes, high-demand urban areas, and complex site conditions. Projects may range from compact additions in Honolulu to large custom expansions in East Oʻahu, Central Oʻahu, or the North Shore.</p>

        <h3>Residential Needs</h3>
        <p>In Honolulu, many homeowners need to make better use of limited lots. Popular projects include:</p>
        <ul>
          <li>Kitchen and living-area expansions</li>
          <li>Primary-suite additions</li>
          <li>Additional bedrooms for multigenerational households</li>
          <li>Enclosed lanais</li>
          <li>Home offices</li>
          <li>Accessory living spaces</li>
          <li>Garage conversions where permitted</li>
          <li>Covered outdoor entertaining areas</li>
          <li>Storage and laundry improvements</li>
        </ul>
        <p>In older neighborhoods, the existing structure may have outdated wiring, plumbing, roofing, or foundations. An addition can reveal conditions that must be addressed before the new space is connected. We evaluate the existing property so the expansion does not create a new finished room that depends on failing infrastructure.</p>
        <p>In Kailua, Kāneʻohe, Hawaiʻi Kai, and parts of the North Shore, owners often prioritize indoor-outdoor living, covered lanais, pool areas, outdoor kitchens, guest suites, and spaces that take advantage of views and prevailing breezes. In Hawaiʻi Kai and coastal areas, moisture, salt air, drainage, and corrosion-resistant materials deserve special attention.</p>

        <h3>Commercial Needs</h3>
        <p>Oʻahu commercial additions commonly include:</p>
        <ul>
          <li>Restaurant and café expansions</li>
          <li>Medical and professional offices</li>
          <li>Retail improvements</li>
          <li>Warehouses and service areas</li>
          <li>Hospitality renovations</li>
          <li>Tenant improvements</li>
          <li>Office reconfigurations</li>
          <li>Employee facilities</li>
          <li>Covered customer areas</li>
          <li>Accessibility upgrades</li>
        </ul>
        <p>In active commercial districts, maintaining operations is a major part of the project. Phasing, temporary barriers, off-hours work, dust control, delivery planning, and careful coordination with tenants can protect revenue while construction proceeds.</p>

        <h3>Neighborhood and Market Differences</h3>
        <p>Oʻahu has significant variation in property values and development pressure. More budget-sensitive areas may include parts of West Oʻahu, Central Oʻahu, and older urban neighborhoods where owners often focus on practical space, rental flexibility, maintenance, and long-term durability. More expensive areas commonly include Kahala, Diamond Head, Hawaiʻi Kai, Kailua, Kāneʻohe waterfront areas, and selected sections of the North Shore. These locations may support more extensive custom work, premium materials, pools, guest suites, large garages, and complex outdoor living areas.</p>
        <p>This does not mean every project follows a neighborhood stereotype. Lot size, view, zoning, existing improvements, access, and the owner’s goals matter more than the address alone. Our role is to design and build the right addition for the property rather than force a standard package onto every client.</p>

        <h2>Maui Additions</h2>
        <p>Maui projects require careful consideration of geography, access, climate, and the differences between Central Maui, South Maui, West Maui, Upcountry communities, and the North Shore.</p>

        <h3>Residential Needs</h3>
        <p>In Kahului and Wailuku, homeowners often seek practical additions that improve everyday use:</p>
        <ul>
          <li>Additional bedrooms</li>
          <li>Primary suites</li>
          <li>Kitchens and family rooms</li>
          <li>Home offices</li>
          <li>Storage</li>
          <li>Laundry rooms</li>
          <li>Carports and garages</li>
          <li>Covered lanais</li>
          <li>Rental or multigenerational spaces</li>
        </ul>
        <p>In Kihei, Wailea, and Mākena, additions often focus on outdoor living and resort-style comfort. Owners may request:</p>
        <ul>
          <li>Pool courtyards</li>
          <li>Outdoor kitchens</li>
          <li>Cabana structures</li>
          <li>Covered dining areas</li>
          <li>Guest suites</li>
          <li>High-performance sliding doors</li>
          <li>Primary bathrooms with soaking tubs</li>
          <li>Entertainment and game rooms</li>
          <li>Custom garages for vehicles and recreational equipment</li>
        </ul>
        <p>Upcountry homes in areas such as Kula may require different planning for slope, wind, cooler nighttime temperatures, agricultural surroundings, and longer travel for materials and crews. Additions may include sunrooms, workshops, agricultural support buildings, garages, storage areas, and family living spaces.</p>

        <h3>Commercial Needs</h3>
        <p>Maui commercial additions may serve:</p>
        <ul>
          <li>Hotels and resorts</li>
          <li>Restaurants</li>
          <li>Vacation-oriented properties</li>
          <li>Retail businesses</li>
          <li>Medical and professional offices</li>
          <li>Agricultural operations</li>
          <li>Warehousing and service businesses</li>
          <li>Community and event facilities</li>
        </ul>
        <p>Hospitality work requires careful attention to guest experience. Construction staging, noise, access, safety, and visual separation are critical when the business remains open. A new restaurant kitchen, pool-support building, guest wing, or event area must be coordinated with operations and utility capacity.</p>

        <h3>Neighborhood and Market Differences</h3>
        <p>More cost-conscious projects are often found in parts of Kahului, Wailuku, and other working communities where owners prioritize durable construction, family space, rental functionality, and efficient maintenance. Higher-end work is more common in Wailea, Mākena, Kapalua, selected West Maui neighborhoods, and certain Upcountry properties with views and larger lots.</p>
        <p>Luxury construction in these areas often includes indoor-outdoor kitchens, resort bathrooms, pools, spas, lanais, guest houses, and custom garages. Because Maui properties can have challenging access and long material lead times, early procurement and realistic scheduling are essential.</p>

        <h2>Hawaiʻi Island Additions</h2>
        <p>Hawaiʻi Island includes a wide range of climates, elevations, lot sizes, and building conditions. A project in Hilo may face different moisture and rainfall concerns than one in Kona, while properties in Puna, Waimea, or South Kona bring their own site and access considerations.</p>

        <h3>Residential Needs</h3>
        <p>In Hilo and East Hawaiʻi, homeowners frequently consider:</p>
        <ul>
          <li>Covered lanais</li>
          <li>Enclosed living areas</li>
          <li>Roof and drainage improvements</li>
          <li>Moisture-resistant bathrooms</li>
          <li>Kitchen expansions</li>
          <li>Bedrooms for extended family</li>
          <li>Home offices</li>
          <li>Storage buildings</li>
          <li>Workshops</li>
          <li>Carports and garages</li>
        </ul>
        <p>In Kona and West Hawaiʻi, additions often emphasize:</p>
        <ul>
          <li>Shaded outdoor living</li>
          <li>Large openings and view corridors</li>
          <li>Outdoor kitchens</li>
          <li>Pool and spa areas</li>
          <li>Guest suites</li>
          <li>Entertainment rooms</li>
          <li>Primary suites</li>
          <li>Custom garages</li>
          <li>Solar and backup-power systems</li>
        </ul>
        <p>In Puna, the site may require detailed evaluation of access, utilities, drainage, vegetation, and existing construction. A practical addition may be more valuable than an elaborate interior if the property first needs improvements to circulation, weather protection, storage, or utility service.</p>
        <p>Waimea and other upland communities may benefit from enclosed gathering rooms, offices, workshops, garages, and additions designed for cooler temperatures and wind exposure.</p>

        <h3>Commercial Needs</h3>
        <p>Commercial additions on Hawaiʻi Island may include:</p>
        <ul>
          <li>Restaurant expansions</li>
          <li>Farm and agricultural support buildings</li>
          <li>Retail and service spaces</li>
          <li>Medical offices</li>
          <li>Professional offices</li>
          <li>Workshops</li>
          <li>Storage and distribution areas</li>
          <li>Hospitality facilities</li>
          <li>Employee housing or support areas where permitted</li>
          <li>Visitor-oriented amenities</li>
        </ul>
        <p>Hawaiʻi County permit applications may involve site plans, floor plans, structural information, ownership documentation, and review by multiple agencies depending on the project. Commercial projects may require more extensive electrical, plumbing, fire, engineering, and accessibility documentation than a straightforward residential addition.</p>

        <h3>Neighborhood and Market Differences</h3>
        <p>More budget-conscious additions are often found in working communities and rural areas where owners prioritize durability, space, access, and maintenance. Hilo, Puna, and parts of South Hawaiʻi Island may have strong demand for functional family additions, workshops, storage, rental-oriented improvements, and covered outdoor space.</p>
        <p>Higher-end projects are more common in resort and view-oriented areas near Kailua-Kona, Kohala Coast communities, Waimea, and selected South Kona locations. These additions may include pools, spas, outdoor kitchens, entertainment areas, guest wings, and custom garages designed around the owner’s lifestyle.</p>

        <h2>Kauaʻi Additions</h2>
        <p>Kauaʻi’s terrain, rainfall, limited road network, and island-wide logistics make early planning especially important. The island includes dense areas around Līhuʻe, resort-oriented communities in Poʻipū and Princeville, rural properties, and heavily landscaped or sloped sites.</p>

        <h3>Residential Needs</h3>
        <p>Common residential additions include:</p>
        <ul>
          <li>Covered lanais</li>
          <li>Screened or enclosed outdoor rooms</li>
          <li>Kitchen expansions</li>
          <li>Primary-bedroom suites</li>
          <li>Guest accommodations</li>
          <li>Home offices</li>
          <li>Storage</li>
          <li>Garages and equipment rooms</li>
          <li>Workshops</li>
          <li>Laundry and utility improvements</li>
          <li>Pool and spa areas</li>
        </ul>
        <p>Rainfall and moisture management are important throughout the island, particularly in wetter areas. Roofing transitions, gutters, flashing, waterproofing, ventilation, grading, and site drainage should be addressed as part of the design rather than after problems appear.</p>
        <p>In resort and view-oriented areas, homeowners may prioritize expansive openings, shaded outdoor rooms, outdoor kitchens, private pool courtyards, spa bathrooms, and guest spaces. In rural areas, practical storage, agricultural support, equipment garages, workshops, and durable covered structures may be more important.</p>

        <h3>Commercial Needs</h3>
        <p>Kauaʻi commercial additions may support:</p>
        <ul>
          <li>Resorts and vacation accommodations</li>
          <li>Restaurants</li>
          <li>Retail</li>
          <li>Medical offices</li>
          <li>Professional businesses</li>
          <li>Agricultural operations</li>
          <li>Warehousing</li>
          <li>Community facilities</li>
          <li>Guest amenities</li>
          <li>Maintenance and service buildings</li>
        </ul>
        <p>Commercial additions must be planned around deliveries, limited staging space, visitor safety, employee access, and the island’s material logistics. A late change to a finish or specialty product can have a greater schedule impact when replacement materials must be shipped to the island.</p>
        <p>Kauaʻi’s permitting process includes residential and commercial application paths, along with zoning and agency review. Commercial and public projects may require additional plans and specifications, including complete electrical and plumbing drawings.</p>

        <h3>Neighborhood and Market Differences</h3>
        <p>Līhuʻe and other working areas often have demand for practical additions, family space, rental improvements, office expansions, and durable storage. Higher-end work is frequently associated with Poʻipū, Princeville, Hanalei, and select North Shore or ocean-view properties.</p>
        <p>Luxury Kauaʻi additions often emphasize privacy, landscape integration, covered outdoor rooms, pool and spa environments, indoor-outdoor kitchens, guest suites, and quiet entertainment spaces. The best design usually respects the property’s natural setting instead of overpowering it.</p>

        <h2>Residential and Commercial Planning</h2>
        <p>Residential and commercial additions share the same need for sound construction, but the planning process is not identical.</p>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Project Type</th>
              <th>Main Priorities</th>
              <th>Common Addition Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Project Type">Residential</td>
              <td data-label="Main Priorities">Comfort, privacy, family use, resale, and durability</td>
              <td data-label="Common Addition Examples">Bedrooms, kitchens, suites, lanais, garages, and pools</td>
            </tr>
            <tr>
              <td data-label="Project Type">Multifamily or rental</td>
              <td data-label="Main Priorities">Code compliance, maintenance, tenant access, and utility capacity</td>
              <td data-label="Common Addition Examples">Units, laundry, storage, circulation, and parking</td>
            </tr>
            <tr>
              <td data-label="Project Type">Retail</td>
              <td data-label="Main Priorities">Customer flow, visibility, accessibility, and operations</td>
              <td data-label="Common Addition Examples">Sales floor, storefront, service counter, and storage</td>
            </tr>
            <tr>
              <td data-label="Project Type">Restaurant</td>
              <td data-label="Main Priorities">Kitchen systems, ventilation, grease management, and safety</td>
              <td data-label="Common Addition Examples">Dining area, kitchen, bar, patio, and restrooms</td>
            </tr>
            <tr>
              <td data-label="Project Type">Office or medical</td>
              <td data-label="Main Priorities">Accessibility, technology, privacy, and mechanical systems</td>
              <td data-label="Common Addition Examples">Offices, exam rooms, reception, and conference rooms</td>
            </tr>
            <tr>
              <td data-label="Project Type">Hospitality</td>
              <td data-label="Main Priorities">Guest experience, phasing, durability, and amenities</td>
              <td data-label="Common Addition Examples">Suites, pools, spas, restaurants, and event areas</td>
            </tr>
            <tr>
              <td data-label="Project Type">Industrial or agricultural</td>
              <td data-label="Main Priorities">Access, equipment, ventilation, and utility service</td>
              <td data-label="Common Addition Examples">Workshops, warehouses, and maintenance buildings</td>
            </tr>
          </tbody>
        </table>

        <p>For residential clients, we begin by identifying how the space will be used five, ten, or twenty years from now. An addition for a growing family may eventually become a guest suite, office, rental area, or aging-in-place space. Planning for flexible use can make the investment more valuable.</p>
        <p>For commercial clients, we focus on revenue protection and operational continuity. We can coordinate phased construction, temporary access, utility shutdowns, delivery paths, safety separation, and finish schedules around the business. The cheapest construction sequence is not always the least expensive business decision if it causes extended closure or lost customer access.</p>

        <h2>Permitting and Island Logistics</h2>
        <p>Every addition should begin with a feasibility review. This includes confirming ownership information, zoning, setbacks, flood or hazard considerations, existing permits, utility capacity, structural connections, site access, and the scope of county review.</p>
        <p>Honolulu’s Department of Planning and Permitting notes that building permits can apply to construction, alterations, demolitions, pools, solar panels, and certain electrical and plumbing work. Hawaiʻi County guidance identifies the need for construction documents such as site plans, floor plans, framing plans, elevations, schedules, and, when applicable, structural calculations and engineering information.</p>
        <p>Typical project steps include:</p>
        <ul>
          <li>Initial consultation and site review</li>
          <li>Definition of the addition’s purpose and budget level</li>
          <li>Existing-condition measurements and documentation</li>
          <li>Concept planning and preliminary cost evaluation</li>
          <li>Design and engineering coordination</li>
          <li>Permit and zoning review</li>
          <li>Material selection and procurement</li>
          <li>Site preparation and construction</li>
          <li>Inspections and correction of any required items</li>
          <li>Final completion and owner orientation</li>
        </ul>
        <p>Island logistics affect every budget level. Shipping, limited local inventory, weather, workforce availability, remote locations, narrow roads, steep lots, and delivery staging can affect price and schedule. We help clients distinguish between selections that are easy to replace and materials that should be ordered early.</p>
        <p>For coastal and humid environments, we also plan around salt exposure, corrosion, wind-driven rain, mold prevention, drainage, ventilation, waterproofing, and exterior maintenance. These details may not be visible when the project is complete, but they strongly influence its long-term performance.</p>

        <h2>Built for Hawaiʻi</h2>
        <p>After nearly 30 years serving all Hawaiian islands, we understand that successful additions require local awareness, disciplined project management, and respect for how each property is used. A practical builder-grade expansion, a refined select-grade renovation, and a fully custom luxury addition each deserve the same commitment to planning, quality, communication, and durable construction.</p>
        <p>Whether the project is a family addition in Hilo, a resort-style outdoor living space in Wailea, a commercial expansion in Honolulu, a guest suite in Kauaʻi, or a custom garage and entertainment wing in Kona, we help owners move from an idea to a buildable plan. Our work is designed around the island, the property, the budget, and the way the completed space should perform for years to come.</p>
      </article>

      <div className={styles.faqContainer}>
        <InteractiveFAQ faqs={faqs} />
      </div>
    </div>
  );
};

export default HomeAdditionsPage;
