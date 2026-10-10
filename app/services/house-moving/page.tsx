
import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../page.module.css';
import InteractiveFAQ from '../../../components/InteractiveFAQ';
import JsonLdFaq from '../../../components/JsonLdFaq';

const faqs = [
  {
    question: 'What are the most critical first steps when planning a house move in Hawaiʻi?',
    answer: 'Before considering transportation, it is crucial to assess both the house&apos;s structural integrity and the suitability of the destination property. This involves inspecting the building for its ability to withstand being moved and evaluating the receiving lot for any constraints like setbacks or utility issues. A thorough route survey is also essential to identify any potential obstructions that could make the move impractical. This initial dual-ended investigation prevents committing to a move that isn&apos;t feasible from the start.',
  },
  {
    question: 'How does the house moving process differ across the Hawaiian Islands?',
    answer: 'Each island has unique planning priorities, from Oʻahu&apos;s explicit relocation permit process to Hawaiʻi Island&apos;s focus on destination site readiness, including foundation and wastewater solutions. On Maui, a key challenge is navigating layered approvals for building, coastal, and flood-related regulations. For islands like Molokaʻi and Lānaʻi, the logistical plan for mobilizing equipment and confirming site access becomes a primary hurdle to address upfront.',
  },
  {
    question: 'What kind of professional assessment is needed before moving a house?',
    answer: 'A proper assessment goes beyond a surface-level look, focusing on the building&apos;s structural ability to be lifted and transported. It should determine if the house can be moved as is or if parts need to be removed, what repairs are mandatory before the lift, and what work will be needed after placement. In places like Honolulu, this evaluation is critical, as a relocation request can be denied if the structure is too deteriorated or repair costs are excessive.',
  },
  {
    question: 'What should a comprehensive house-moving budget include beyond just the transportation cost?',
    answer: 'A reliable budget must break down every phase of the project, not just the physical move. This includes costs for assessment and engineering, permit application fees, building preparation, and all receiving-site construction like the new foundation and utility connections. The proposal should clearly distinguish between included costs, allowances for variable expenses, and items that are excluded, ensuring a transparent financial picture.',
  },
    {
    question: 'Why is a simple mileage-based estimate for a house move often insufficient?',
    answer: 'A route survey is about more than just distance; it evaluates the entire path for the house as a transported load, including its temporary support structure. This assessment identifies critical choke points like tight turns, low clearances, bridge weight limits, or even the final driveway entrance. Overlooking these specific obstacles can render a seemingly short and simple route completely impractical for an oversized load.',
  },
];

const HouseMovingPage: NextPage = () => {
  return (
    <div className={styles.servicePageContainer}>
      <Head>
        <title>House Moving Services in Hawaii | Dumore Construction</title>
        <meta
          name="description"
          content="Professional house moving and relocation services across the Hawaiian Islands. From repositioning a home on your property to inter-island moves, our experienced team ensures a safe and efficient process."
        />
        <JsonLdFaq faqs={faqs} />
      </Head>

      <header>
        <h1 className={styles.servicePageTitle}>House Moving in Hawaiʻi</h1>
        <p className={styles.servicePageDescription}>Planning Your Relocation Island by Island</p>
      </header>

      <article className={styles.servicePageContent}>
        <p>
          Moving a house in Hawaiʻi takes more than lifting equipment and a clear stretch of road. It takes a workable destination, a carefully surveyed route, coordinated approvals, and a construction team that understands how those pieces fit together.
        </p>
        <p>
          For almost 30 years, our company has served clients across the Hawaiian Islands. Our approach to house moving reflects that experience: investigate the difficult questions early, explain the options plainly, and build a plan around the property—not around a promise that every house can be moved.
        </p>
        <p>
          This guide covers moving the actual structure, rather than packing furniture and household belongings. Whether you want to reposition a family home on the same property, relocate a plantation-era house to another parcel, or investigate an interisland move, the first job is determining what is feasible.
        </p>

        <section>
          <h2>Start With the Whole Project</h2>
          <p>A house-moving project has two ends: the building you want to preserve and the property where it will ultimately stand. Both need to work before transportation makes sense.</p>
          <p>A house may appear sound from the street but need substantial repairs underneath. A receiving lot may look spacious but have setbacks, access limitations, drainage problems, or wastewater constraints that change where the house can go. A short route may still contain one turn or overhead obstruction that makes the proposed move impractical.</p>
          <p>We approach those issues together. Planning the lift without confirming the destination leaves too much unresolved.</p>
        </section>

        <section>
          <h2>What are you actually moving?</h2>
          <p>“House moving” can describe several different scopes:</p>
          <table className={styles.table}>
              <thead>
                  <tr>
                      <th>Project Type</th>
                      <th>What Changes</th>
                      <th>First Planning Priority</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Repositioning on the same property</td>
                      <td>The house’s location or orientation</td>
                      <td>Approved placement and equipment access</td>
                  </tr>
                  <tr>
                      <td>Moving to another parcel</td>
                      <td>The site, foundation, and utility connections</td>
                      <td>Receiving-lot suitability and route</td>
                  </tr>
                  <tr>
                      <td>Raising and resetting</td>
                      <td>The foundation or floor elevation</td>
                      <td>Engineered support and applicable approvals</td>
                  </tr>
                  <tr>
                      <td>Moving between islands</td>
                      <td>The site plus a marine transportation leg</td>
                      <td>Structural feasibility and freight acceptance</td>
                  </tr>
              </tbody>
          </table>
          <p>These are planning categories, not permit exemptions. Do not assume a move avoids review because the house stays on the same parcel or travels only a few feet. Maui County, for example, expressly includes moving a building among activities requiring a building permit.</p>
        </section>

        <section>
          <h2>Inspect the structure before committing</h2>
          <p>The first inspection should focus on the building’s ability to withstand temporary support, lifting, transportation, and placement onto a new foundation.</p>
          <p>That means looking beyond finishes. Floor framing, connections, previous alterations, deterioration, and the relationship between additions and the original structure all belong in the assessment. Where conditions are concealed, the proposal should explain what investigation is needed and how newly discovered repairs will be handled.</p>
          <p>A useful assessment answers specific questions:</p>
          <ul>
            <li>Can the building be supported and moved in its present configuration?</li>
            <li>Would a porch, stairway, roof section, or addition need to be removed?</li>
            <li>Which repairs must happen before lifting?</li>
            <li>What work will be required after the house is reset?</li>
            <li>What findings would make relocation financially unreasonable?</li>
          </ul>
          <p>Honolulu has a particularly important eligibility requirement: its published relocation process includes an inspector’s evaluation, and a relocation request may be denied if the structure is deteriorated or repairs exceed 50% of replacement cost. That makes early evaluation essential for an Oʻahu house offered cheaply—or even for free.</p>
        </section>

        <section>
          <h2>Confirm the receiving property</h2>
          <p>The destination deserves the same attention as the building.</p>
          <p>Before buying a house to relocate, establish the proposed footprint, access, foundation concept, utility arrangements, and approval pathway. Ask the relevant agencies to confirm unresolved issues rather than relying on what neighboring properties contain.</p>
          <p>For coastal or flood-prone sites, start those conversations early. Maui County requires a Flood Development Permit for development in regulated flood-hazard areas, and its planning guidance calls for shoreline and Special Management Area review where applicable.</p>
          <p>The practical question is not simply, “Will the house fit?” It is, “Can this house be approved, supported, serviced, and occupied in this location?”</p>
        </section>

        <section>
          <h2>Survey the loaded route</h2>
          <p>A route assessment should evaluate the house as a transported load, including its temporary support system—not just its original dimensions.</p>
          <p>We would want the transportation team to document turns, clearances, road access, staging locations, and any proposed removals or utility coordination. Where the route uses state highways, Hawaiʻi DOT requires an oversize or overweight permit application with load information, including dimensions and wheel arrangements. Excessive loads can require additional review.</p>
          <p>This is why a mileage-only estimate is not enough. The most consequential part of a route may be a driveway entrance, a bridge approach, or the final turn onto the receiving property.</p>
        </section>

        <section>
            <h2>Island-by-Island Moving Considerations</h2>
            <p>Serving all the Hawaiian Islands does not mean applying one standard plan everywhere. Each project needs an island-specific assessment, followed by a property-specific one.</p>
            <p>The priorities below are questions to investigate—not blanket claims that every property on an island has the same conditions.</p>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Island</th>
                        <th>Early Planning Emphasis</th>
                        <th>Issue to Resolve Before Committing</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Oʻahu</td>
                        <td>Relocation eligibility and route coordination</td>
                        <td>Required permits and transport access</td>
                    </tr>
                    <tr>
                        <td>Hawaiʻi Island</td>
                        <td>Destination readiness and route scope</td>
                        <td>Foundation, utilities, and wastewater</td>
                    </tr>
                    <tr>
                        <td>Maui</td>
                        <td>Building, coastal, and flood review</td>
                        <td>Applicable development approvals</td>
                    </tr>
                    <tr>
                        <td>Kauaʻi</td>
                        <td>Planning and engineering coordination</td>
                        <td>Floodplain, drainage, and site access</td>
                    </tr>
                     <tr>
                        <td>Molokaʻi &amp; Lānaʻi</td>
                        <td>Island-specific review and mobilization</td>
                        <td>Land-use requirements and equipment plan</td>
                    </tr>
                    <tr>
                        <td>Niʻihau &amp; Kahoʻolawe</td>
                        <td>Authorization and reserve restrictions</td>
                        <td>Whether the project is authorized</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>Oʻahu: Resolve eligibility first</h3>
            <p>On Oʻahu, the relocation process is unusually explicit. Honolulu’s Department of Planning and Permitting states that moving an existing structure from one parcel to another requires relocation permits. Its published process involves three building permits: Relocation From, Relocation To, and Alteration. Once permits are issued, relocation must be completed within 120 days.</p>
            <p>That is not a reason to rush into transportation. It is a reason to prepare the destination and supporting arrangements before entering a time-sensitive phase.</p>
            <p>For an older home in an established neighborhood, we would start by comparing the building’s condition with the likely post-move repair scope. Preserving the original house may be the goal, but the numbers should include the work needed to make it usable at the new location.</p>
            <p>Then examine the route. Rather than assuming a residential street is suitable, ask the moving team to verify loaded clearances, turning space, staging, and any coordination involving roadside infrastructure.</p>
            <p>Honolulu’s relocation guidance identifies several potential agency sign-offs, including water, wastewater, police escort documentation, city street or state highway use, and other parcel-specific issues such as easements or historic registration. Not every project will follow an identical path.</p>
            <p>Our planning priority on Oʻahu is straightforward: establish eligibility, receiving-site approval, and transportation requirements before treating the house as ready to move.</p>

            <h3>Hawaiʻi Island: Price the destination</h3>
            <p>For a Hawaiʻi Island project, we would give receiving-site construction its own detailed budget instead of burying it inside a transportation allowance.</p>
            <p>Start with questions about the proposed foundation area. What investigation does the engineer need? What access will construction equipment require? How will the site handle drainage? Where will water, power, and wastewater connections run?</p>
            <p>Those questions matter whether the proposed destination is near Hilo, in Kona, around Waimea, or elsewhere on the island. Location names alone cannot establish soil conditions, utility availability, or permitting feasibility.</p>
            <p>Hawaiʻi County’s Department of Public Works provides building-permit information and access to its EPIC permit system. Confirm the applicable relocation and receiving-site requirements with the county for the actual scope.</p>
            <p>Wastewater also deserves early attention. The Hawaiʻi Department of Health reports that nearly 50,000 of the state’s approximately 88,000 cesspools are on Hawaiʻi Island. That statewide inventory does not tell you what your property can legally use, but it shows why existing wastewater arrangements should not be treated as an afterthought.</p>
            <p>For a longer-distance move, ask for a surveyed route rather than a distance-based assumption. We would also want a clear plan for temporary support, site preparation, utility work, and weather-related rescheduling before setting the move date.</p>

            <h3>Maui: Separate the approval layers</h3>
            <p>Maui house moving should begin with an approval map: which reviews apply to the building, which apply to the destination, and which apply to transportation?</p>
            <p>Maui County requires a building permit for moving a structure. It also identifies a separate Flood Development Permit for development in regulated flood-hazard areas. Those requirements should not be collapsed into one vague line labeled “permits.”</p>
            <p>For a proposed coastal destination, check whether shoreline assessment or Special Management Area clearance applies. The county states that contemplated construction or activity within the SMA requires clearance, and that structures or activities proposed in shoreline areas require a Shoreline Setback Assessment.</p>
            <p>For an Upcountry property, our assessment would instead begin with the actual access, grade, foundation location, and construction staging needs. For a Central Maui destination, we would still verify the route and receiving parcel rather than assuming a more developed setting simplifies every part of the project.</p>
            <p>The point is to avoid using “Maui” as a substitute for site investigation.</p>
            <p>We would also separate preservation goals from mandatory work. If keeping an existing home matters to your family, document which features must remain and which can change. That helps the design and moving teams evaluate dismantling, repairs, and placement without losing sight of why the house is being saved.</p>

            <h3>Kauaʻi: Bring engineering in early</h3>
            <p>On Kauaʻi, building review and site engineering need to be coordinated from the beginning.</p>
            <p>The county’s permit guide includes building and zoning application steps. Its Engineering Division administers floodplain and sediment-and-erosion requirements and reviews building and land-use applications. A house-moving plan should account for those separate responsibilities.</p>
            <p>For a property near a drainageway or in a mapped flood-hazard area, ask what the proposed move triggers before designing the new foundation.</p>
            <p>Moving a home farther from a visible watercourse may seem like an obvious improvement. It does not, by itself, establish that the new location or foundation satisfies applicable flood requirements. Hawaiʻi’s floodplain guidance specifically addresses permits, elevation certificates, and differing requirements in flood zones.</p>
            <p>Our Kauaʻi planning questions would include access for the loaded structure, space for equipment, receiving-site drainage, and the documentation needed for agency review.</p>
            <p>We would also identify who coordinates any road or utility-related work. A homeowner should not reach the final scheduling stage only to learn that a critical clearance or access issue belongs to an unassigned third party.</p>
            <p>The goal is a coordinated scope: building placement, site engineering, transportation, and reconnecting services all moving toward the same approved plan.</p>

            <h3>Molokaʻi: Plan the complete mobilization</h3>
            <p>For Molokaʻi, we would ask for a complete equipment and labor plan before accepting a preliminary move price.</p>
            <p>Which lifting and transportation resources are included? What must be brought to the island? Where can equipment stage? What happens if additional framing repairs are discovered? Who remains responsible until the house is reset and the receiving-site work is finished?</p>
            <p>These are questions to resolve through quotations and logistics planning, not assumptions about what is or is not locally available.</p>
            <p>Maui County publishes Molokaʻi-specific development applications, including special-use, planned-development, shoreline, and SMA-related processes. It also notes that other county applications may still be needed. That makes it important to identify the requirements for the actual property rather than simply copying a Maui project checklist.</p>
            <p>If the proposed destination is near Kaunakakai, inland, or on a coastal parcel, the same first principle applies: verify the land-use and site conditions before committing to the structure.</p>
            <p>We also recommend agreeing on practical site arrangements early: delivery access, equipment parking, daily work areas, neighbor communication, and restoration of disturbed areas. Those details belong in the project plan because they affect how the work will be carried out, not merely how it will be described in a proposal.</p>

            <h3>Lānaʻi: Confirm access and sequencing</h3>
            <p>For Lānaʻi, receiving-site access and project sequencing should be settled before booking specialist equipment.</p>
            <p>We would ask the owner to establish who controls the destination, who can authorize access, and whether any private agreements affect construction. Then the project team can verify the actual unloading, staging, lifting, and foundation arrangements.</p>
            <p>Maui County provides Lānaʻi-specific development and project-review applications and cautions that other county applications may still apply. Shared county administration does not remove the need for island-specific review.</p>
            <p>If the move involves a marine leg, obtain written freight feasibility before treating transportation as a confirmed cost. The proposal should identify the structure’s transport configuration and who will coordinate acceptance, loading, unloading, and delivery to the site.</p>
            <p>The foundation schedule matters just as much. Our preference is to define the required readiness milestone before mobilization: what must be constructed, inspected, or otherwise approved before the moving team proceeds?</p>
            <p>A clear Lānaʻi plan should also address the return trip for equipment, temporary protection if work pauses, and responsibility for repairs or adjustments after placement. The end of the transport leg is not automatically the end of the contractor’s work.</p>

            <h3>Niʻihau: Authorization comes first</h3>
            <p>Niʻihau should not be presented as an ordinary public-access residential service area. Access is permission-based; reporting on the island describes entry as requiring the owners’ authorization.</p>
            <p>Any proposed project therefore begins with permission and a defined scope. Only after authorization should the team investigate transportation, equipment access, site conditions, and the applicable approval pathway.</p>
            <p>For an all-island contractor, honest communication matters here. “Serving all Hawaiian Islands” should express the ability to discuss and assess authorized projects—not suggest that a crew can freely mobilize to every property.</p>

            <h3>Kahoʻolawe: Not a residential market</h3>
            <p>Kahoʻolawe requires an equally clear distinction. The island and surrounding reserve waters have restricted access, and entry or activity requires authorization from the Kahoʻolawe Island Reserve Commission. Unexploded ordnance remains a hazard.</p>
            <p>This is not a location for a routine residential house-moving offer. Any discussion of structural work must begin with authorized purpose, reserve requirements, and the responsible agencies’ direction.</p>
            <p>Including Kahoʻolawe in an all-island guide should clarify those limits—not imply that ordinary house relocation is available there.</p>
        </section>

        <section>
          <h2>Budget and Schedule Without Guesswork</h2>
          <p>A useful house-moving estimate should let you see the entire path from the original foundation to a completed, usable home.</p>
          <p>The transportation figure may attract the most attention, but it cannot stand in for engineering, site work, foundation construction, utilities, repairs, and closeout.</p>
          <h3>Request a separated scope</h3>
          <p>Every category should state whether it is included, excluded, an allowance, or subject to another quotation.</p>
          <p>That distinction is especially important for utility coordination, route modifications, concealed deterioration, and any marine transportation. An allowance is a budgeting tool; it is not a fixed commitment.</p>
          <p>We recommend asking for a written list of unresolved items alongside the estimate. That makes it easier to compare proposals without mistaking a shorter scope for a better price.</p>

          <h3>Compare moving with alternatives</h3>
          <p>Relocation should be evaluated against realistic alternatives using comparable scopes.</p>
          <p>If you compare moving with new construction, include completed foundations, services, site work, and occupancy-related requirements on both sides. If you compare relocation with renovating in place, include the problems that the move is intended to solve.</p>
          <p>Consider a hypothetical family that can acquire an older house at little cost. The low acquisition price may be appealing, but the decision still depends on structural repairs, transportation, a new foundation, wastewater, and completion work.</p>
          <p>That is not an argument against preserving the house. It is an argument for making the preservation decision with the full cost visible.</p>
          <p>Family history and architectural character can justify a project that is not the cheapest route to floor area. The contractor’s job is to help distinguish that deliberate choice from an incomplete estimate.</p>

          <h3>Schedule by milestones</h3>
          <p>A credible schedule should show dependencies rather than only a promised moving day.</p>
          <p>We would expect milestones for structural assessment, destination feasibility, design, approvals, site readiness, transportation confirmation, lifting, placement, reconnection, inspections, and closeout.</p>
          <p>Where state-highway transport is involved, DOT says review time varies and excessive loads may require further departmental review taking at least three weeks. That is a transportation review consideration—not a guaranteed timeline for the entire project.</p>
          <p>Ask which milestones must be complete before equipment is booked. Also ask who pays for rescheduling if the receiving foundation, approvals, or access are not ready.</p>
        </section>

      </article>

      <InteractiveFAQ faqs={faqs} />
    </div>
  );
};

export default HouseMovingPage;
