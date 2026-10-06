import { Metadata } from 'next';
import styles from '../page.module.css';
import Faq from '../../../components/InteractiveFAQ';
import { faqData } from '../../../lib/services';

export const metadata: Metadata = {
  title: 'Pest Damage Repair Services in Hawaii | Dumore Construction',
  description: 'Expert pest damage repair for homes and businesses in Hawaii. We repair damage from termites, ants, and more, offering budget-friendly and luxury options.',
  keywords: ['pest damage repair Hawaii', 'termite repair Hawaii', 'construction repair Hawaii', 'Dumore Construction'],
};

const PestRepairPage = () => {
  const pageFaqs: faqData[] = [
    {
      question: 'My pest inspector found damage. What determines if the repair is simple or a major structural problem?',
      answer: 'The true extent of pest damage often reveals itself only after we begin work. A small sign like termite pellets might lead to a minor trim replacement, or it could expose extensive damage within your walls requiring structural support. Our process involves careful, exploratory openings to define the full scope of repairs before proceeding with major work. This ensures we address the root problem, not just the visible signs.',
    },
    {
      question: 'How do you decide what materials to use for my repair, and how does that affect the cost?',
      answer: 'We offer three finish levels—Builder, Select, and Luxury—to match your budget and property needs. Builder Grade uses standard, readily available materials for essential, cost-effective restoration suitable for rentals or utility spaces. Select Grade offers upgraded, durable products for a more coordinated appearance in primary homes and offices. Luxury Grade involves custom-fabricated materials to seamlessly match the unique finishes of high-end properties.',
    },
    {
      question: 'I live on a neighbor island. Does that make my pest damage repair project more complicated?',
      answer: 'Yes, island logistics are a significant factor in planning and cost. We meticulously plan projects on the neighbor islands to minimize travel and shipping delays. This includes detailed pre-mobilization documentation, material procurement, and scheduling to ensure efficiency. While a remote location can add complexity, our thorough planning process is designed to deliver a smooth and predictable repair experience.',
    },
    {
      question: 'My property is a condominium. How does that change the pest damage repair process?',
      answer: 'In a condominium, we must first determine which building components are your responsibility versus the association\'s. Shared walls, framing, and other elements are often governed by your condo documents. We review these requirements early to clarify the scope of work you can authorize and to coordinate with the association. This ensures the repair process is smooth and complies with all building rules.',
    },
  ];

  return (
    <div className={styles.servicePageContainer}>
      <header>
        <h1 className={styles.servicePageTitle}>Pest Damage Repair in Hawaii</h1>
        <p className={styles.servicePageDescription}>Restoring the strength and beauty of your property, not just covering the evidence.</p>
      </header>

      <article className={styles.servicePageContent}>
        <section>
          <h2>Pest Damage Repair Across Hawaii</h2>
          <p>
            Pest damage repair should restore the strength of your property—not just cover the evidence. For nearly 30 years, we have served property owners across the Hawaiian Islands with a practical approach: understand the damage, coordinate pest control, repair what matters, and match the finished work to your budget.
          </p>
          <p>
            Whether you own a family home, manage rental housing, operate a restaurant, or maintain a resort property, the right repair starts with separating two jobs. Pest treatment addresses the infestation; construction repair addresses the materials and building components left damaged. Hawaii’s licensing requirements distinguish pest inspection and treatment from general construction, so qualified pest-control professionals belong in that process.
          </p>
          <p>
            Our residential and commercial repair options follow three finish levels: Builder Grade, Select Grade, and Luxury Grade. The difference is material selection, finish detail, and project scope—not whether your building deserves safe, properly executed repairs.
          </p>
        </section>

        <section>
          <h2>Repair Beyond the Surface</h2>
          <p>
            A small pile of termite pellets beneath a window can lead to a limited trim replacement—or reveal damage extending into the surrounding wall. Mud tubes near a foundation can point toward a different termite problem requiring a different treatment strategy. University of Hawaii guidance identifies drywood termite pellets and subterranean termite mud tubes as important clues, but professional identification determines the appropriate response.
          </p>
          <p>
            That distinction matters before demolition begins. Replacing a damaged door jamb without addressing an active infestation can leave the larger problem unresolved. Painting over damaged wood does not restore its strength.
          </p>
          <p>
            Our proposed repair scope separates visible finish damage from concealed structural concerns. Depending on the findings, that can include opening selected areas, documenting affected materials, determining whether engineering is needed, and coordinating treatment access before reconstruction.
          </p>
        </section>

        <section>
          <h2>What Repair Can Include</h2>
          <p>
            Residential scopes may involve damaged door frames, window surrounds, cabinets, flooring, wall framing, roof framing, soffits, fascia, stairs, or lanai components. Commercial scopes may involve those same components alongside tenant improvements, service counters, storage areas, guest rooms, and back-of-house spaces.
          </p>
          <p>
            Not every pest problem requires carpentry. A pest professional should determine the infestation and treatment needs; the construction scope should identify actual building damage rather than assume every sighting means structural loss. Hawaii requires licensing for pest identification, inspections, reports, and treatment-related recommendations.
          </p>
          <p>
            Where moisture is present, we also want the repair plan to address its source. Hawaiian subterranean termites can establish aboveground colonies where leaking roofs or plumbing provide water. That makes leak investigation especially important when termite damage appears away from obvious ground contact.
          </p>
        </section>

        <section>
          <h2>Our Repair Sequence</h2>
          <ol>
            <li>Define the reported problem, affected rooms, occupancy needs, and access restrictions.</li>
            <li>Coordinate a licensed pest inspection and treatment plan where needed.</li>
            <li>Develop an exploratory opening plan to establish the repair boundaries.</li>
            <li>Address immediate safety concerns and determine permit or engineering requirements.</li>
            <li>Provide a written construction scope with finish choices and concealed-condition procedures.</li>
            <li>Coordinate treatment, reconstruction, inspections, and finish restoration in the appropriate sequence.</li>
            <li>Deliver photographs, scope documentation, and maintenance recommendations relevant to the completed work.</li>
          </ol>
          <p>The sequence can change when a building needs urgent stabilization. Treatment scheduling should never become a reason to leave a potentially unsafe condition unassessed.</p>
        </section>

        <section>
          <h2>Three Repair Budget Levels</h2>
          <p>A repair budget should tell you what you are buying. “Basic,” “upgraded,” and “premium” mean very little unless the proposal explains materials, finish boundaries, access work, and exclusions.</p>
          <p>We organize our options around the property’s use and your priorities. A rental owner may need durable, replaceable finishes. A homeowner may want the repaired room to feel cohesive. A luxury property manager may need custom millwork recreated without a visible transition.</p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Repair Decision</th>
                <th>Builder Grade</th>
                <th>Select Grade</th>
                <th>Luxury Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Main priority</td>
                <td>Essential restoration and cost control</td>
                <td>Durability and coordinated appearance</td>
                <td>Custom matching and refined detail</td>
              </tr>
              <tr>
                <td>Finish approach</td>
                <td>Standard, readily available products</td>
                <td>Upgraded products and broader blending</td>
                <td>Specialty materials and custom fabrication</td>
              </tr>
              <tr>
                <td>Typical fit</td>
                <td>Rentals, utility spaces, budget-focused homes</td>
                <td>Primary residences, offices, established rentals</td>
                <td>Custom homes, premium hospitality, executive spaces</td>
              </tr>
              <tr>
                  <td>Scope strategy</td>
                  <td>Repair defined affected areas</td>
                  <td>Repair plus selected adjacent improvements</td>
                  <td>Integrated restoration across connected finishes</td>
              </tr>
              <tr>
                  <td>Budget pressure</td>
                  <td>Minimize optional work</td>
                  <td>Balance appearance and lifecycle value</td>
                  <td>Protect architectural and design continuity</td>
              </tr>
            </tbody>
          </table>
          <p>These are proposed service packages, not fixed-price promises. Actual pricing depends on the extent of damage, structural requirements, access, island logistics, material availability, and the finish scope you approve.</p>
        </section>

        <section>
            <h3>Builder Grade</h3>
            <p>Builder Grade focuses spending on necessary repairs and straightforward restoration. It is appropriate when your priority is getting an affected area back into service without turning the project into a full remodel.</p>
            <p>For a residence, that might mean replacing damaged framing where required, restoring the wall surface, installing standard trim, and painting a clearly defined area. In a rental, it may mean retaining sound cabinets and flooring while replacing only the affected components.</p>
            <p>For a commercial property, Builder Grade can suit storage rooms, utility areas, employee spaces, and other locations where dependable function matters more than decorative detail. Customer-facing areas can also use this package when standard finishes meet the business’s needs.</p>
            <p>The proposal should make finish limitations explicit. A repaired wall may need corner-to-corner painting for an acceptable result. An unavailable flooring product may require an agreed transition rather than an unrealistic promise of an invisible patch.</p>
            <p>Builder Grade does not mean skipping required permits, leaving compromised members in place, or concealing unresolved damage. Lower spending should come from controlled scope and standard finishes—not reduced construction responsibility.</p>
        </section>

        <section>
            <h3>Select Grade</h3>
            <p>Select Grade balances repair, appearance, and longer-term usability. It suits owners who want the damaged area restored thoughtfully without paying for custom work everywhere.</p>
            <p>A residential scope might include coordinated trim replacement across a room, upgraded cabinet components, or a broader flooring replacement that eliminates awkward patchwork. It can also combine the repair with a targeted improvement, such as correcting a troublesome exterior detail while that area is already open.</p>
            <p>For offices, retail spaces, and professionally managed rentals, Select Grade can provide a consistent appearance across adjoining spaces. The goal is to avoid a repair that looks unfinished or creates unnecessary maintenance complications.</p>
            <p>Material choices should follow the actual exposure. Best practices in Hawaii means treated wood or steel framing as preventive measures and discusses physical or chemical barriers for subterranean termite management. Those measures require project-specific design and coordination; they are not interchangeable upgrades selected from a finish catalog.</p>
            <p>Select Grade works best when owners distinguish useful improvements from unrelated remodeling. We want the added spending to solve a defined problem.</p>
        </section>
        
        <section>
            <h3>Luxury Grade</h3>
            <p>Luxury Grade is for properties where architectural continuity is part of the asset’s value. The challenge is not simply replacing damaged material; it is recreating proportions, profiles, textures, and transitions that make the property feel complete.</p>
            <p>A custom residence may require specially fabricated trim, coordinated cabinetry, carefully matched wood finishes, or restoration of a distinctive ceiling treatment. A hospitality property may need replacement components that align with an established guest-room or public-space design.</p>
            <p>This package also allows more detailed planning around protection, samples, approvals, and finish mockups. Owners should approve the intended appearance before specialty products are ordered or fabricated.</p>
            <p>Luxury does not make a building immune to termites. Hawaiian drywood termites as capable of living in dry wood without an external moisture source, so a dry-looking custom interior still requires appropriate pest evaluation.</p>
            <p>The strongest luxury repair is disciplined rather than extravagant: protect what is sound, replace what is damaged, and spend on the details that genuinely matter.</p>
        </section>

        <section>
            <h2>Island-Specific Repair Planning</h2>
            <p>Hawaii is not one uniform construction market. Property type, neighborhood, exposure, access, and logistics all influence a repair plan.</p>
            <p>The locations below provide useful planning context—not labels for residents or claims that an entire community is “cheap” or wealthy. More attainable housing areas can contain expensive custom properties, and premium neighborhoods can contain modest homes. Local real-estate guidance also emphasizes that value and luxury vary substantially between islands and neighborhoods.</p>
            <p>The service priorities described here are practical inspection and scope considerations, not island-by-island pest incidence rankings. The condition of your building matters more than its address.</p>
            
            <h4>Oahu</h4>
            <p>On Oahu, we would tailor residential repair planning around the building type first: detached home, older wood-frame residence, townhouse, or condominium. Each creates different questions about access, shared components, finish matching, and occupied work.</p>
            <p>For budget-sensitive projects in areas such as Kalihi, Waipahu, and Waianae, our starting conversation is scope control—not assumptions about what an owner can afford. Which components are actually damaged? Can sound cabinetry remain? Where should painting stop? Would standard materials reduce replacement delays?</p>
            <p>At the premium end, Kahala, Diamond Head, Portlock, and luxury condominium pockets in Kakaako offer examples of properties where custom finishes or coordinated interiors may be central to the repair. These locations are identified in local luxury-market guidance, though specifications still depend on the individual building.</p>
            <p>Residential inspection priorities include damaged window and door assemblies, accessible framing, interior wood finishes, and exterior components reported by the owner. For condominiums, association requirements and responsibility boundaries need review before assuming a unit owner can authorize every affected component.</p>
            <p>Commercial planning should distinguish a Honolulu office from a Waikiki guest room or a warehouse service area. The repair may be similar, but the access window, protection plan, and acceptable finish differ.</p>
            <p>Our Oahu approach is to define those constraints early. A lower-cost trim choice saves little if the project loses days waiting for building access or elevator arrangements.</p>

            <h4>Maui</h4>
            <p>Maui repair planning should account for both everyday housing and high-finish hospitality properties. A family home and a resort condominium can have similar termite damage but very different restoration expectations.</p>
            <p>Wailuku and Kahului are useful starting points for conversations about practical, centrally located housing and business properties. Local guidance highlights Wailuku’s access to employment, medical services, county offices, and daily essentials; that does not make every property inexpensive.</p>
            <p>For premium restoration, Wailea, Makena, Kapalua, and Kaanapali are established luxury and resort-market examples. Custom interiors, coordinated condominium finishes, and guest-facing spaces may justify Select or Luxury Grade work, depending on the property.</p>
            <p>Residential priorities can include damaged trim, cabinetry, wall framing, exterior woodwork, and lanai components. We would also investigate reported leaks rather than attribute every deteriorated board to termites.</p>
            <p>Commercial scopes should identify room-release schedules, guest separation, deliveries, and storage before committing to a construction calendar. A property manager needs to know not only when carpentry finishes, but when the room is ready for its intended use.</p>
            <p>For Lahaina-area work, we would avoid treating every project as a routine repair. Existing damage, rebuilding status, property-specific approvals, and the owner’s broader recovery plans should be established before defining a pest-repair scope.</p>

            <h4>Hawaii Island</h4>
            <p>Hawaii Island requires especially careful travel and procurement planning. A repair near the crew’s staging point and a remote property with limited delivery access should not receive identical scheduling assumptions.</p>
            <p>For cost-conscious owners comparing locations, island-level guidance identifies Hawaii Island as generally offering lower home prices than the other major markets. That is not a guarantee of a lower repair bill: property access, material transport, and the actual scope still control construction cost.</p>
            <p>We would discuss scope-focused options with owners in Hilo and Puna without automatically assigning a finish tier. On the higher-end side, the Kohala Coast, Kohanaiki, and custom Kona-area estates are established luxury-market examples. Waimea and upcountry properties can also involve substantial custom homes and land-based estates.</p>
            <p>Residential planning should examine reported termite damage alongside roof, plumbing, and exterior moisture concerns. For a property with damaged floor framing, the proposal should explain access and structural repair boundaries before discussing finish upgrades.</p>
            <p>Commercial priorities may include rental-unit restoration, retail interiors, hospitality spaces, and agricultural support buildings. Each needs a clear distinction between essential building repairs and optional appearance improvements.</p>
            <p>For larger or remote projects, we would favor thorough documentation before mobilization. Measurements, product selections, equipment needs, and disposal arrangements should be settled as early as practical.</p>

            <h4>Kauai</h4>
            <p>On Kauai, the repair conversation should account for location, exposure, and limited replacement choices—not assume that every property needs the same exterior specification.</p>
            <p>Lihue and Puhi are practical community examples for owners prioritizing everyday convenience. Local guidance contrasts their access to services with the vacation-home appeal associated with places such as Princeville, Hanalei, Koloa, and Poipu. That distinction is more useful than calling one side of the island “cheap.”</p>
            <p>Princeville and Hanalei on the North Shore, and Poipu and Koloa on the South Shore, are established premium-market examples. Local property guidance also notes regional rainfall differences, reinforcing the need to assess the actual site rather than use one island-wide assumption.</p>
            <p>Residential repair priorities can include exterior trim, window surrounds, lanai components, and concealed framing wherever inspection identifies damage. Where water entry accompanies the damage, the scope should separate pest treatment, moisture correction, and reconstruction.</p>
            <p>Commercial owners should plan for guest-facing appearance, operating hours, and protected access routes. A restaurant’s back-of-house repair and a resort lobby restoration require different containment and finish strategies.</p>
            <p>Select Grade often provides a useful middle path: restore the affected assembly, improve an identified weak detail, and coordinate adjacent finishes without making the entire property a custom-restoration project.</p>
            
            <h4>Molokai</h4>
            <p>On Molokai, we would emphasize repair practicality, material planning, and respect for the property’s existing character. A well-scoped project should not require repeated trips simply because basic measurements or finish decisions were left unresolved.</p>
            <p>Kaunakakai provides a central-convenience reference point. Kaluakoi and Kepuhi on the West End offer examples of more private, destination-oriented properties, but they should not automatically be described as uniformly wealthy neighborhoods. Local guidance notes that Molokai’s smaller market makes pricing comparisons less predictable.</p>
            <p>Residential work can focus on preserving sound portions of the home while repairing confirmed damage to framing, trim, flooring, or exterior components. Builder Grade may be the right fit for an owner prioritizing essential restoration; Select Grade may help where visible repairs cross several connected finishes.</p>
            <p>Commercial and community-property scopes should identify who authorizes the work, when spaces can close, and where materials can be staged. Straightforward documentation is particularly valuable when several people share maintenance responsibilities.</p>
            <p>Custom finishes remain an option, but owners should understand procurement and replacement implications. A premium product only earns its place when it fits the building, the budget, and the maintenance plan.</p>

            <h4>Lanai</h4>
            <p>Lanai benefits from coordinated procurement and a clear distinction between everyday residential needs and resort-level restoration.</p>
            <p>Lanai City represents the island’s community-centered residential setting, while the Manele area is associated with luxury and resort-oriented properties. Local guidance describes Lanai’s housing options and services as limited compared with larger islands; “more attainable” should therefore remain a relative description, not a promise of affordability.</p>
            <p>For residential repairs, we would prioritize accurate measurements, agreed finish boundaries, and materials that can be supported after installation. A simple trim repair should not become a prolonged project because the selected profile is difficult to replace.</p>
            <p>For resort or other commercial work, scheduling should integrate procurement, room access, finish approvals, and the property’s operating calendar. Luxury Grade may be appropriate where repairs must align with distinctive cabinetry or architectural woodwork.</p>
            <p>Combining compatible repairs into a planned visit can be worth discussing. The decision should follow actual condition and approved scope, not pressure to add unnecessary work.</p>

            <h4>Niihau and Kahoolawe</h4>
            <p>“All islands” should not imply unrestricted access or ordinary residential service everywhere. For Niihau or Kahoolawe, we would first establish authorization, property purpose, transportation, and whether the proposed work is appropriate.</p>
            <p>We do not assign these islands conventional budget neighborhoods or resort-market categories. Any specialized project requires a site-specific conversation rather than a standard residential estimate.</p>
        </section>

        <section>
            <h2>Residential and Commercial Priorities</h2>
            <p>The repair itself is only part of the project. People still need to live, work, receive deliveries, and move safely around the property.</p>
            <p>For residential owners, we start with household disruption. Which rooms become unavailable? Can belongings remain protected in place? Does the repair affect the only bathroom, kitchen access, stairs, or an entry? These questions belong in the proposal rather than appearing after demolition starts.</p>
            <p>For commercial owners, we start with operations. Which work can happen during business hours? Which areas require shutdown? Who controls access? What must be completed before employees, customers, tenants, or guests return?</p>
            
            <table className={styles.table}>
                <thead>
                    <tr>
                    <th>Planning issue</th>
                    <th>Residential priority</th>
                    <th>Commercial priority</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Access</td>
                    <td>Household routines and privacy</td>
                    <td>Operating hours and authorized work windows</td>
                    </tr>
                    <tr>
                    <td>Protection</td>
                    <td>Furniture, belongings, pets</td>
                    <td>Inventory, equipment, guest or tenant areas</td>
                    </tr>
                    <tr>
                    <td>Phasing</td>
                    <td>Keep essential rooms usable where feasible</td>
                    <td>Release completed zones in an agreed sequence</td>
                    </tr>
                    <tr>
                    <td>Finish selection</td>
                    <td>Owner preference and room continuity</td>
                    <td>Brand standards and maintenance consistency</td>
                    </tr>
                    <tr>
                    <td>Closeout</td>
                    <td>Clear explanation of completed repairs</td>
                    <td>Documentation for facilities and management teams</td>
                    </tr>
                </tbody>
            </table>

            <p>For restaurants and food-service spaces, the project needs additional care around equipment, cleanable finishes, and the planned work area. Honolulu’s permitting guidance identifies Department of Health food-safety review among possible additional approvals for food-service establishments; applicability must be established for the specific scope.</p>
            <p>For landlords and condominium managers, responsibility should be resolved before construction authorization. A wall opened inside one unit may involve components whose ownership or maintenance responsibility is defined elsewhere in the building documents.</p>
            <p>Our written proposals should separate construction, pest-control coordination, permits, engineering, optional upgrades, and exclusions. If concealed damage appears, the owner should receive photographs and a defined change proposal before additional non-emergency work proceeds.</p>
            <p>A useful budget conversation is therefore not simply, “What is your cheapest price?” It is, “What must be repaired, what can remain, and what finish result are we agreeing to?”</p>
            <p>For nearly 30 years, our service approach has centered on a straightforward commitment: respect the property, explain the work, and give owners meaningful choices. From essential Builder Grade repairs to detailed Luxury Grade restoration, the goal is the same—a properly repaired space with a clear record of what was done.</p>
        </section>

        <Faq faqs={pageFaqs} />
      </article>
    </div>
  );
};

export default PestRepairPage;