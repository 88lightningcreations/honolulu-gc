
import React from 'react';
import styles from '../page.module.css';
import InteractiveFAQ from '@/components/InteractiveFAQ';
import JsonLdFaq from '@/components/JsonLdFaq';

const faqs = [
  {
    question: "My house took wind-driven rain and rising water. How should the estimate separate them?",
    answer: "Start by documenting where water entered and which building components were affected. Ask for photographs, location-specific descriptions, and separate scope items where the evidence supports a distinction. Coverage can differ between wind-related damage and inundation from rising floodwater; your policy wording and the insurer&apos;s assessment control the outcome. Our construction documentation can describe observed damage and the proposed repair, but it should not invent a cause, guarantee coverage, or replace the adjuster&apos;s determination.",
  },
  {
    question: "Can emergency work start before permits or the insurance inspection?",
    answer: "Emergency protection and permanent reconstruction are different decisions. Hawai&apos;i DCCA advises owners to prevent further damage when safe, retain receipts, and avoid beginning permanent repairs until the adjuster has inspected the damage or the insurer has approved the work. Permit rules also matter; for example, Honolulu allows qualifying emergency repairs to start before permit issuance when the application is submitted on the next working day and the work satisfies its stated conditions. We would document protective work, confirm the applicable county procedure, and coordinate the permanent scope separately.",
  },
  {
    question: "Why does a flood-zone repair trigger questions about 50 percent of the building’s value?",
    answer: "The substantial-damage threshold can change what rebuilding requires. Under FEMA&apos;s general rule, a structure is substantially damaged when the cost to restore it to its pre-damage condition equals or exceeds 50 percent of its pre-damage market value. For example, a building valued at $400,000 with $220,000 in qualifying restoration costs exceeds that general threshold. Floodplain compliance can affect the rebuilding plan even when flood insurance was not in place, so we flag this issue before committing to a like-for-like reconstruction scope.",
  },
  {
    question: "Can I add a pool, water feature, game room, or large garage while rebuilding?",
    answer: "Yes, those features can be explored—but as separately evaluated improvements, not automatic storm-repair items. We would first establish the restoration scope, then review the proposed addition&apos;s design, site fit, utilities, structural needs, and applicable approvals. For flood-zone properties, improvements may also affect substantial-improvement review, as FEMA&apos;s framework considers reconstruction, additions, and other improvements against the applicable building-value threshold. Our proposal should make the distinction explicit: required repair, required compliance, and elective enhancement.",
  },
  {
    question: "How do I compare quotes without choosing the one that missed half the work?",
    answer: "Compare the scopes before comparing the totals. Look for consistent quantities, specified materials, trade responsibilities, allowances, exclusions, debris handling, and the treatment of concealed damage. Hawai&apos;i guidance emphasizes license verification and written contracts identifying the scope, materials, timeline, price, and payment schedule. Insurance payments also deserve care: DCCA warns against signing your entire claim check over to a contractor.",
  },
];

const StormDamageRepairPage = () => {
  return (
    <div className={styles.servicePageContainer}>
       <JsonLdFaq faqs={faqs} />
      <header>
        <h1 className={styles.servicePageTitle}>Storm Damage Repair Across Hawai&apos;i: Restore Your Property, Rebuild With Purpose</h1>
      </header>

      <article className={styles.servicePageContent}>
        <p>
          For almost 30 years, we have served homeowners and businesses across the Hawaiian Islands with a straightforward approach: understand the damage, protect what matters, and build a repair plan that respects your property and budget. Whether you need practical builder-grade repairs, a select-grade renovation, or a luxury restoration, our focus stays the same—sound construction, clear communication, and a finished space that works for you.
        </p>
        <p>
          Storm recovery is not just about replacing what looks damaged. It&apos;s about finding where water entered, understanding what happened behind the finishes, and deciding what must be repaired before you spend money on improvements.
        </p>
        <p>
          A family home, neighborhood restaurant, condominium building, and oceanfront estate can experience the same storm very differently. Hawai&apos;i’s coastal hazards include storm waves, stream flooding, erosion, and hurricanes; location and site conditions matter as much as the name of the island.
        </p>
        <p>
          Our role is to bring those details together into a workable construction plan—not rush you into the most expensive option.
        </p>

        <section>
          <h2>Start With The Right Repair</h2>
          <h3>Look beyond the visible damage</h3>
          <p>
            A ceiling stain may be the first thing you notice, but it should not become the entire repair scope. We look at the roof assembly, flashing, wall openings, drainage, and affected interior areas to identify the likely entry points and determine what further investigation is necessary.
          </p>
          <p>
            For residential properties, that means organizing repairs around bedrooms, kitchens, bathrooms, family routines, and safe access. For commercial properties, it means considering occupied spaces, customer entrances, deliveries, equipment, tenant coordination, and the sequence needed to restore operations.
          </p>
          <p>
            Hawai&apos;i storms can combine wind, heavy rain, coastal overwash, and slope instability. A property may therefore need several coordinated repairs rather than one isolated trade visit.
          </p>
          <p>Our proposed assessment and repair scope can include:</p>
          <ul>
            <li>Roof coverings, flashing, gutters, and roof penetrations.</li>
            <li>Windows, exterior doors, siding, and weatherproofing.</li>
            <li>Damaged ceilings, wall finishes, flooring, and cabinetry.</li>
            <li>Structural evaluation where movement or significant damage is suspected.</li>
            <li>Electrical, plumbing, and mechanical assessments by the appropriate professionals.</li>
            <li>Site drainage, damaged lanais, exterior stairs, and access improvements.</li>
            <li>Documentation separating storm repairs from owner-requested upgrades.</li>
          </ul>
          <p>
            The final scope depends on inspection, engineering where needed, permit requirements, and the actual condition of the building.
          </p>
        </section>

        <section>
          <h2>Document first, rebuild deliberately</h2>
          <p>
            Photographs, measurements, written scopes, and material records help establish what happened and what restoration requires. Hawai&apos;i’s insurance regulator recommends documenting damage, preventing further damage when safe, keeping receipts, and waiting for adjuster inspection or insurer approval before beginning permanent repairs.
          </p>
          <p>
            That does not mean leaving an opening exposed while you wait. It means distinguishing immediate protection from permanent reconstruction and communicating with your insurer about both.
          </p>
          <p>
            We structure estimates so you can see the difference between necessary restoration, required compliance work, and optional improvements. That separation becomes especially important when you want to upgrade finishes or add new amenities during recovery.
          </p>
        </section>

        <section>
          <h2>A repair sequence that makes sense</h2>
          <p>
            Our preferred construction sequence is to establish safe access, investigate the damage, identify required approvals, protect exposed areas, and then complete the permanent work in a coordinated order.
          </p>
          <p>
            Before closing a damaged wall or ceiling, the project plan should address the source of the intrusion and any necessary assessment of concealed conditions. Beautiful paint is not a substitute for a complete repair.
          </p>
          <p>
            For an occupied home, we discuss temporary kitchen or bathroom arrangements and which rooms construction will affect. For a business, we discuss work zones, shutdowns, delivery access, and what must happen before a particular area can return to service.
          </p>
        </section>

        <section>
          <h2>Three Grades, One Standard</h2>
          <p>
            The difference between builder grade, select grade, and luxury should be your finish level, design flexibility, and amenities—not whether essential repairs receive proper attention.
          </p>
          <p>
            We do not assign a blanket price per square foot to storm damage. A roof-only repair and a building with damaged framing, electrical systems, and interiors are different projects. Your estimate should identify scope, quantities, allowances, exclusions, and the conditions that could change the price.
          </p>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Project decision</th>
                <th>Builder grade</th>
                <th>Select grade</th>
                <th>Luxury</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Main objective</strong></td>
                <td>Restore essential function economically</td>
                <td>Restore and improve everyday performance</td>
                <td>Restore with customized design and amenities</td>
              </tr>
              <tr>
                <td><strong>Finish approach</strong></td>
                <td>Standard sizes and practical selections</td>
                <td>Coordinated finishes and broader choices</td>
                <td>Custom fabrication and designer specifications</td>
              </tr>
              <tr>
                <td><strong>Residential emphasis</strong></td>
                <td>Essential rooms and dependable use</td>
                <td>Comfort, storage, and thoughtful upgrades</td>
                <td>Spa spaces, entertaining, and estate amenities</td>
              </tr>
              <tr>
                <td><strong>Commercial emphasis</strong></td>
                <td>Functional reopening</td>
                <td>Improved customer and staff experience</td>
                <td>Brand-led interiors and premium guest spaces</td>
              </tr>
              <tr>
                <td><strong>Budget control</strong></td>
                <td>Tight scope and limited customization</td>
                <td>Targeted upgrades with clear allowances</td>
                <td>Detailed specifications and disciplined change control</td>
              </tr>
            </tbody>
          </table>

          <h3>Builder grade: practical recovery</h3>
          <p>
            Builder-grade storm damage repair is for owners who need a dependable property back in use without turning restoration into a major redesign.
          </p>
          <p>
            For a family home, the priorities might be repairing the roof, restoring damaged drywall, replacing affected flooring, and returning the kitchen or bathroom to service with standard cabinetry and fixtures. We favor a clear scope and readily identifiable replacement materials rather than unnecessary custom work.
          </p>
          <p>
            For commercial buildings, builder grade can suit a small office, neighborhood shop, storage building, or straightforward tenant space. The objective is functional recovery: repaired walls and ceilings, practical flooring, necessary trade work, and a sensible path back to occupancy.
          </p>
          <p>
            This level still requires attention to the source of damage. Choosing economical finishes should not mean painting over unresolved water intrusion or avoiding an assessment that the damage warrants.
          </p>
          <p>
            Our budget discussion starts with three questions: What must be restored now? What must meet current requirements? What can wait without compromising the completed work?
          </p>

          <h3>Select grade: improve what matters</h3>
          <p>
            Select-grade restoration suits owners who want to recover from the storm while addressing weaknesses or inconveniences in the affected space.
          </p>
          <p>
            For homes, that could mean better-organized cabinetry, upgraded bathroom finishes, coordinated flooring, improved lighting, or revised storage. Rather than customizing everything, we identify the improvements that will make the biggest difference to daily use.
          </p>
          <p>
            For commercial owners, select grade can support refreshed reception areas, better staff spaces, coordinated finishes, and a more polished customer environment. A damaged storefront may become an opportunity to improve the interior without undertaking a complete brand reinvention.
          </p>
          <p>
            The key is intentional spending. We discuss each upgrade separately so you can understand what belongs to the restoration and what is an owner-funded improvement.
          </p>
          <p>
            A select-grade plan might retain an undamaged layout while improving the affected kitchen, or restore a restaurant dining room while adding more durable, easier-to-maintain finishes. The aim is a coherent result, not an expensive collection of unrelated upgrades.
          </p>

          <h3>Luxury: restore the whole experience</h3>
          <p>
            Luxury storm restoration should consider how the property lives, entertains, and operates—not simply replace premium materials with more premium materials.
          </p>
          <p>
            For an estate, that may mean coordinating architecture, interiors, landscape, outdoor living, lighting, and specialist systems. For a commercial property, it may mean restoring the guest experience across suites, reception spaces, dining areas, wellness facilities, and outdoor amenities.
          </p>
          <p>
            We begin with the recovery scope, then develop a separately priced enhancement plan. New amenities are design choices, not automatically part of an insured loss.
          </p>
          <p>
            Luxury options can include the features you want to enjoy every day:
          </p>
          <table className={styles.table}>
            <thead>
                <tr>
                    <th>Luxury feature</th>
                    <th>Proposed scope</th>
                    <th>Planning priority</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Water features</strong></td>
                    <td>Courtyard fountains, reflecting pools, or cascading features</td>
                    <td>Service access, drainage, and equipment placement</td>
                </tr>
                <tr>
                    <td><strong>Jacuzzi-style baths</strong></td>
                    <td>Jetted tubs, soaking baths, and spa bathroom renovations</td>
                    <td>Structure, waterproofing, plumbing, and electrical coordination</td>
                </tr>
                <tr>
                    <td><strong>Pools and spas</strong></td>
                    <td>Restoration or a separately designed new installation</td>
                    <td>Site suitability, engineering, approvals, and maintenance access</td>
                </tr>
                <tr>
                    <td><strong>Game rooms</strong></td>
                    <td>Billiards, gaming, media, or multipurpose recreation spaces</td>
                    <td>Acoustics, lighting, cooling, and equipment storage</td>
                </tr>
                <tr>
                    <td><strong>Large garages</strong></td>
                    <td>Multi-vehicle parking, workshop space, and organized storage</td>
                    <td>Approved footprint, structural design, drainage, and access</td>
                </tr>
                <tr>
                    <td><strong>Outdoor entertaining</strong></td>
                    <td>Covered lanais, outdoor kitchens, and gathering areas</td>
                    <td>Exposure, layout, utilities, and weather protection</td>
                </tr>
            </tbody>
          </table>
          <p>
            A luxury bathroom should receive the same attention behind the tile as it does in the visible finishes. A pool project should include its supporting systems, not just the waterline appearance. A large garage should be designed around vehicles, tools, circulation, and the approved site conditions.
          </p>
          <p>
            Our approach is to make these features part of a coordinated property plan. We will discuss feasibility before presenting them as additions that can simply be built.
          </p>
        </section>

        <section>
          <h2>Island By Island Planning</h2>
          <p>
            Every island contains modest homes, valuable properties, working businesses, and buildings with unusual site conditions. The community examples below describe broad market context—not the wealth of individual residents or a promise that construction will be inexpensive.
          </p>
          <p>
            Relatively lower-cost housing does not automatically mean lower repair costs. Access, material selection, concealed damage, and the complexity of the work can outweigh the neighborhood&apos;s property values.
          </p>

          <h3>O&apos;ahu: neighborhood homes to coastal estates</h3>
          <p>
            O&apos;ahu restoration planning needs to accommodate everything from family houses to condominium buildings and commercial tenant spaces.
          </p>
          <p>
            Waipahu, Kalihi, and Wai&apos;anae are useful examples when discussing comparatively budget-conscious housing markets. Kahala, Diamond Head, Lanikai/Kailua, and parts of Hawai&apos;i Kai are established luxury-market examples. Neither category applies uniformly to every property.
          </p>
          <p>
            For a builder-grade project in an older neighborhood home, we would focus the estimate on the affected building envelope, essential interior repairs, and the rooms the family needs first. The goal is to preserve usable areas rather than make undamaged portions of the house part of an unnecessary renovation.
          </p>
          <p>
            For select-grade owners, storm recovery can support a more coordinated kitchen, bathroom, or interior finish package. In an estate setting, luxury restoration may involve custom openings, detailed finish matching, spa bathrooms, game rooms, and outdoor entertainment areas.
          </p>
          <p>
            Commercial work calls for a different conversation. A shop or office needs a repair sequence tied to access and operations. A condominium project needs clarity about unit interiors, common elements, association responsibilities, and approvals.
          </p>
          <p>
            O&apos;ahu also has specific emergency repair guidance. Honolulu DPP permits qualifying emergency work to begin before a building permit is obtained, but requires an application on the next working day and imposes conditions; this is not a general exemption for redesign or expansion.
          </p>

          <h3>Maui: practical central communities and resort properties</h3>
          <p>
            Maui County identifies coastal erosion, flooding, high winds, storm surge, and drainage-related flooding among its hazards. That makes roof and exterior-envelope work only part of the conversation; the site and surrounding water pathways also matter.
          </p>
          <p>
            Kahului and Wailuku are useful examples of practical, comparatively budget-conscious residential communities. They should not be treated as uniformly inexpensive, and individual neighborhoods and buildings vary considerably.
          </p>
          <p>
            For these homeowners, we can structure builder-grade repairs around restoring essential rooms, limiting custom fabrication, and protecting the budget with clearly defined allowances. Select-grade projects can add coordinated flooring, cabinetry, bathroom finishes, or improved storage in the areas already being repaired.
          </p>
          <p>
            For properties in resort-oriented areas such as Wailea, the conversation may shift toward finish matching, guest expectations, custom interiors, and outdoor amenities. We would treat the individual property&apos;s condition and specifications as the basis for the scope rather than assume every address needs luxury work.
          </p>
          <p>
            Commercial restoration may involve shops, restaurants, lodging, and service businesses. Our planning would address affected public areas, staff spaces, utilities, and the order in which different portions can be completed.
          </p>
          <p>
            For remote projects, we discuss deliveries, site access, material staging, and workforce arrangements before promising a schedule. Luxury features such as pools, water features, and outdoor kitchens need their own feasibility and approval review, even when they are being considered alongside storm recovery.
          </p>

          <h3>Hawai&apos;i Island: different exposures, different priorities</h3>
          <p>
            Hawai&apos;i Island projects need property-specific planning rather than a single island-wide repair package. University of Hawai&apos;i at Hilo guidance identifies hurricane-related wind, storm surge, upland flooding, and debris flows on steep slopes as distinct damage mechanisms.
          </p>
          <p>
            Hilo and parts of Puna are commonly discussed as more budget-conscious housing alternatives within Hawai&apos;i, although the property, location, and available services make a substantial difference.
          </p>
          <p>
            For a Hilo-area or Puna home, our proposed assessment might focus on roof entry points, affected wall assemblies, drainage, access, and the condition of essential interior rooms. Builder-grade restoration can prioritize a usable home; select-grade work can improve the affected spaces without expanding the entire project.
          </p>
          <p>
            On the Kona and Kohala sides, we can also plan for resort-oriented and estate-style scopes. The correct finish level still depends on the owner&apos;s goals, not a blanket assumption about the coast or postal address.
          </p>
          <p>
            Luxury options may include pool and spa restoration, custom bathrooms, covered entertaining areas, game rooms, and substantial garage or workshop spaces. Each addition needs to fit the site, approvals, and maintenance expectations.
          </p>
          <p>
            Commercial owners may need repair planning for retail space, restaurants, offices, agricultural buildings, or hospitality properties. We would identify critical equipment and utility needs early, then organize construction around the areas that must return to service first.
          </p>

          <h3>Kaua&apos;i: drainage and coastal context</h3>
          <p>
            Kaua&apos;i’s property market includes both everyday residential communities and substantial resort or estate properties. Kapaʻa appears in affordability discussions, while Princeville, Hanalei, and the Kōloa area feature prominently in luxury-market discussions; there are exceptions within every community.
          </p>
          <p>
            A builder-grade plan for an affected family home should begin with essential restoration rather than neighborhood-based assumptions. We assess the damaged areas, review relevant site conditions, and discuss the most direct path back to dependable use.
          </p>
          <p>
            Select-grade owners may choose a coordinated interior refresh or targeted improvements in the areas already opened for repair. Luxury projects can expand the design discussion to pool areas, spa bathrooms, custom glazing, outdoor entertaining, and detailed finish matching.
          </p>
          <p>
            For businesses, the scope may involve guest rooms, customer-facing interiors, service spaces, and exterior circulation. We would separate cosmetic restoration from work affecting the building envelope or supporting systems.
          </p>
          <p>
            Flood-zone and shoreline rules can materially affect the project. Kaua&apos;i’s published storm-repair guidance directs flood-zone owners to obtain individual review and identifies shoreline-related assessment requirements; event-specific relief should never be assumed to apply to every future storm or every property.
          </p>
          <p>
            That is why we review the applicable requirements before promising that a damaged building can be rebuilt exactly as it stood.
          </p>

          <h3>Moloka&apos;i: measured scopes and careful logistics</h3>
          <p>
            Moloka&apos;i deserves a restoration plan centered on the actual household or business, not an oversized resort template.
          </p>
          <p>
            Kaunakakai, Kualapuʻu, and Maunaloa provide useful community reference points, but available real-estate information does not support neatly dividing them into “cheap” and “wealthy” areas. Listings show a range of property types and prices, so we would compare individual properties rather than label entire communities.
          </p>
          <p>
            For residential work, our proposed assessment would include roofs, exterior openings, damaged finishes, essential plumbing and electrical coordination, and relevant site drainage. Builder-grade repairs may be the right fit when the priority is restoring dependable use with limited customization.
          </p>
          <p>
            Select-grade work can offer an intentional middle ground: better storage, coordinated interiors, and upgraded fixtures without an estate-scale renovation.
          </p>
          <p>
            For higher-specification properties, luxury planning can include custom bathrooms, game rooms, garage improvements, and outdoor amenities. We would discuss the servicing and maintenance requirements alongside the appearance.
          </p>
          <p>
            Commercial projects need realistic planning around materials, access, and the spaces necessary for business operations. Our proposal should make delivery assumptions and staging requirements visible.
          </p>
          <p>
            Across all three grades, we favor early decisions on major materials. A clearly coordinated package gives the owner a better basis for evaluating scope and schedule than a low headline estimate with unanswered logistical questions.
          </p>

          <h3>Lāna&apos;i: town properties and Manele estates</h3>
          <p>
            Lāna&apos;i calls for a distinction between town-based restoration and resort-area estate work without pretending the island has a simple low-cost housing market.
          </p>
          <p>
            Lāna&apos;i City has varied housing, including an identified affordable-housing property in the state inventory. Manele Bay is a documented luxury residential setting with single-family homes, building lots, and condominiums.
          </p>
          <p>
            For a town home or small commercial property, builder-grade work can focus on essential repairs and standard materials. Select grade can add coordinated finishes and practical improvements to the affected rooms.
          </p>
          <p>
            For a Manele-area estate, luxury restoration may require detailed coordination among custom interiors, exterior spaces, pools, water features, and specialist equipment. Our proposed scope would separate restoring an existing amenity from designing a new one.
          </p>
          <p>
            A jetted bath, expansive game room, or large garage should be considered within the overall approved property plan. We would review installation requirements and maintenance access before finalizing specifications.
          </p>
          <p>
            For commercial owners, we would organize the repair scope around the actual operational priorities: occupied rooms, guest-facing areas, staff facilities, or service spaces.
          </p>
          <p>
            Delivery arrangements and material staging belong in the initial discussion. We would not represent island access or a specialty-product delivery date as settled until the necessary arrangements are confirmed.
          </p>

          <h3>Ni&apos;ihau and Kaho&apos;olawe: access comes first</h3>
          <p>
            Serving across Hawai&apos;i does not mean unrestricted access to every island.
          </p>
          <p>
            Ni&apos;ihau is privately owned and access is controlled. Any potential work must begin with owner authorization and agreed arrangements, not a standard service appointment.
          </p>
          <p>
            Kaho&apos;olawe is not a conventional residential or commercial construction market. Access to the reserve requires authorization because of continuing unexploded-ordnance hazards, and permitted access is tied to specific approved purposes.
          </p>
          <p>
            For these islands, we would discuss only authorized, appropriate project opportunities. We would not advertise ordinary home renovations, speculative neighborhood pricing, or unrestricted site visits.
          </p>
        </section>

        <section>
          <h2>Residential And Commercial Delivery</h2>
          <h3>Homes: organize around real life</h3>
          <p>
            Home restoration needs a plan that respects the people living through it.
          </p>
          <p>
            Before construction, we discuss which areas are affected, whether the planned work allows continued occupancy, what professional assessments are needed, and how access will be managed. We do not promise that a home is safe to occupy solely because the damage appears confined to one room.
          </p>
          <p>
            A builder-grade household may want the fastest practical route to essential function. A select-grade owner may want to improve the affected kitchen or bathroom. A luxury owner may want a comprehensive design package with specialist amenities.
          </p>
          <p>
            In every case, our communication should explain the sequence, allowances, exclusions, and decisions required from you.
          </p>

          <h3>Businesses: plan the reopening sequence</h3>
          <p>
            Commercial restoration must account for more than the visible finishes. The construction plan needs to reflect the building’s use, the affected systems, tenant responsibilities, and any approvals necessary for reoccupancy.
          </p>
          <p>
            For a restaurant, we would coordinate the damaged dining or service spaces with the relevant trade work. For an office, we would discuss employee access and affected work areas. For lodging, we would consider whether work can be organized into defined sections without making unsupported promises about continued operation.
          </p>
          <p>
            Builder grade emphasizes functional recovery. Select grade adds targeted customer and staff improvements. Luxury work can include custom reception interiors, premium suites, wellness spaces, and carefully coordinated outdoor amenities.
          </p>

          <table className={styles.table}>
            <thead>
                <tr>
                    <th>Project concern</th>
                    <th>Residential discussion</th>
                    <th>Commercial discussion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Priority areas</strong></td>
                    <td>Essential living spaces</td>
                    <td>Critical operating spaces</td>
                </tr>
                <tr>
                    <td><strong>Access</strong></td>
                    <td>Family routines and occupied rooms</td>
                    <td>Customers, staff, tenants, and deliveries</td>
                </tr>
                <tr>
                    <td><strong>Finish decisions</strong></td>
                    <td>Comfort and household preferences</td>
                    <td>Durability and brand requirements</td>
                </tr>
                <tr>
                    <td><strong>Upgrade planning</strong></td>
                    <td>Lifestyle improvements</td>
                    <td>Operational or guest-experience improvements</td>
                </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Make the financial decisions visible</h2>
          <p>
            A useful proposal should show more than a final total.
          </p>
          <p>
            We aim to separate emergency protection, permanent repairs, professional services, required compliance work, finish allowances, and optional upgrades. Unknown concealed conditions should be identified as uncertainties rather than quietly buried in assumptions.
          </p>
          <p>
            For example, replacing damaged bathroom finishes belongs to the restoration discussion. Adding a jetted tub and expanding the room belongs to a separate design and pricing discussion.
          </p>
          <p>
            That clarity allows you to choose builder grade, select grade, or luxury without losing sight of what the storm actually damaged.
          </p>
        </section>

        <p>
          After almost 30 years serving across Hawai&apos;i, our message remains straightforward: choose the repair plan you can understand. Whether the finish is builder grade, select grade, or luxury, the work should begin with the damage, respect the property, and make every major decision visible.
        </p>

      </article>
      <div className={styles.faqContainer}>
        <InteractiveFAQ faqs={faqs} />
      </div>
    </div>
  );
};

export default StormDamageRepairPage;
