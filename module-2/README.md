# Module 2: Advanced Product Knowledge

> **Estimated Time:** 2.5–3 hours | **Prerequisites:** Module 1 – Lighting Fundamentals | **Pass Quiz:** 80% or higher

## Why This Matters

Module 1 taught you the fundamentals. Now it's time to get technical. This module teaches you how to read spec sheets like a pro, understand the components inside fixtures, and speak confidently with engineers, contractors, and lighting designers.

## What You'll Learn

- Read and interpret manufacturer specification sheets
- Understand LED drivers and their types
- Explain beam angles and light distribution
- Understand power factor and total harmonic distortion (THD)
- Read and use photometric data
- Specify dimming options and controls

---

## Lessons in This Module

| # | Lesson | Topics Covered |
|---|--------|---------------|
| 1 | [Reading Specification Sheets](#lesson-1) | Product ID, electrical specs, photometric data, physical specs, environmental ratings, certifications, warranty |
| 2 | [LED Drivers Explained](#lesson-2) | Constant current vs. voltage, internal vs. external, driver specs |
| 3 | [Dimming Protocols](#lesson-3) | 0–10V, DALI, TRIAC, DMX512 — when to use each |
| 4 | [Beam Angles & Light Distribution](#lesson-4) | Narrow/medium/wide beam, field angle, application defaults |
| 5 | [Outdoor Light Distribution Types](#lesson-5) | IES Type I–V, how to choose for parking lots and walkways |
| 6 | [Power Factor & THD](#lesson-6) | What PF and THD mean, why they matter, what to look for |
| 7 | [Photometric Data & IES Files](#lesson-7) | Candela, polar curves, spacing criteria, IES files |

> Lighting controls and sensors — occupancy sensing, daylight harvesting, networked controls — now have their own short module: [Module 2B — Lighting Controls & Sensors](/module-2b/).

---

## Electrical Basics Primer

Before diving into specifications, a quick review of essential electrical concepts. If you're already comfortable with these, skip ahead to Lesson 1.

### Understanding Voltage, Current, and Power

Think of electricity like water flowing through pipes:

| Concept | Analogy | Unit | Notes |
|---|---|---|---|
| **Voltage (V)** — Electrical Pressure | Water pressure in a pipe; pushes electricity through wires | Volts | Common in buildings: 120V (residential), 277V (commercial). Higher voltage = more "push." |
| **Current (A)** — Electrical Flow | Water flow rate (gallons per minute) | Amps / milliamps (mA = 1/1000 amp) | More current = more electricity flowing |
| **Power (W)** — Work Being Done | The actual work the water does (turning a water wheel) | Watts | **Formula: Watts = Volts × Amps.** This is what you pay for on your electric bill. |

**Example:** A fixture using 120V at 0.5 amps consumes 120V × 0.5A = **60 watts**.

### AC vs. DC Power

| Type | Description | Think of it as |
|---|---|---|
| **AC** (Alternating Current) | What comes from the wall outlet; voltage alternates direction — 60Hz in the U.S. (changes direction 60 times per second) | Power from the utility company |
| **DC** (Direct Current) | Flows in one direction only; what LEDs and batteries actually use | Power from a battery |

**Why this matters for LED:** LEDs need DC power, but buildings have AC power. That's why we need **drivers** (covered in Lesson 2) to convert AC to DC.

> 💡 **Beginner Tip:** Don't worry about memorizing all the electrical theory. Focus on understanding that voltage = pressure (how strong), current = flow (how much), and power = work done (what you pay for) — and that LEDs need a driver to convert building power (AC) to LED power (DC).

---

## Lesson 1: Reading Specification Sheets :id=lesson-1

<details class="clc-lesson-details" open>
<summary class="clc-lesson-summary">Show / hide this lesson</summary>

Every fixture manufacturer provides specification sheets (spec sheets) containing all the technical information about their products. Learning to read these quickly and accurately is critical.

**Why you need this skill:**
- Verify fixtures meet project requirements
- Compare products from different manufacturers
- Answer customer questions accurately
- Avoid costly ordering mistakes

A typical spec sheet contains: product description and image, electrical specifications, photometric data, physical dimensions, ordering information, and certifications/compliance. Let's break down each section.

---

### Section 1: Product Identification

**Model/Part Number:** Every fixture has a unique identifier. Model numbers often encode fixture type, wattage or lumen output, color temperature, voltage, and special features.

**Example:** `HB-UFO-200W-5K-UNV-DIM-DLC`

| Code | Meaning |
|---|---|
| HB | High Bay |
| UFO | UFO style |
| 200W | 200 watts |
| 5K | 5000K color temperature |
| UNV | Universal voltage (120–277V) |
| DIM | Dimmable |
| DLC | DLC listed |

> ⚠️ **Why this matters:** Model numbers must match **EXACTLY** when ordering. A small difference — like `-DIM` vs. `-ND` (non-dim) — means you'll get the wrong product.

**Product Family/Series:** Manufacturers group similar products into families. Knowing the series helps you find related products with different specs.

---

### Section 2: Electrical Specifications

This is where you find the key performance data.

**Input Voltage** — what building voltage the fixture works with:

| Voltage | Use |
|---|---|
| 120V | Residential and light commercial |
| 277V | Commercial (most common in U.S.) |
| 120–277V | Universal voltage — works with either, most flexible ✅ |
| 347V | Canadian commercial |
| 480V | Industrial/high-power applications |

> 💡 **Beginner Tip:** When in doubt, specify **120–277V universal voltage** fixtures — they work in more situations and avoid ordering mistakes.

**Wattage:** The actual power consumption (what you pay for in electricity).

> ⚠️ **Important:** Wattage is NOT brightness. Check lumens for brightness — a 100W LED can be much brighter than a 400W metal halide.

**Current (Amps):** How much current the fixture draws. Useful for calculating circuit loads.

**Formula:** `Amps = Watts ÷ Volts`

**Example:** 40W fixture on 120V = 40 ÷ 120 = **0.33 amps**

**Why you care:** Electricians need to know total amps to size circuits. Too many fixtures on one circuit = tripped breakers.

**Frequency:** 50Hz or 60Hz (U.S. is 60Hz, Europe is 50Hz). Most modern LED drivers work with both, so this is usually not a concern on U.S. projects.

**Power Factor (PF):** Covered in detail in Lesson 6 — for now, just know: look for PF ≥ 0.90 (good: 0.90–0.95, excellent: 0.95+). Higher is better.

**Total Harmonic Distortion (THD):** Also covered in detail in Lesson 6. Quick reference: look for THD < 20% (excellent: < 10%). Lower is better.

---

### Section 3: Photometric Data

This section tells you about the light output and quality.

**Lumens (Total Light Output):** The most important number — this tells you how bright the fixture is.

**Efficacy (lm/W):** How efficient the fixture is at converting watts to light.

**Formula:** `Efficacy = Lumens ÷ Watts`

**Example:** 4,000 lumens ÷ 40 watts = **100 lm/W**

| Tier | Efficacy |
|---|---|
| Budget LED | 80–100 lm/W |
| Good LED | 100–130 lm/W |
| Excellent LED | 130–160 lm/W |
| Premium LED | 160+ lm/W |

**Why you care:** Higher efficacy = lower energy costs forever. A fixture at 140 lm/W versus 110 lm/W saves about 20% on energy — that adds up over 10–15 years.

> 💡 **Beginner Tip:** For rebate projects, look for **DLC Premium** fixtures (typically 120+ lm/W for most types). They qualify for higher rebates.

**Color Temperature (CCT):** Measured in Kelvin (K) — the "warmth" or "coolness" of white light.
- 2700–3000K: Warm white (yellowish, like old bulbs)
- 3500–4000K: Neutral white (clean, professional)
- 5000–6500K: Cool white/daylight (bluish-white, crisp)

**Color Rendering Index (CRI):** How accurately colors appear, on a 0–100 scale.
- 80–89: Standard commercial (acceptable for most uses)
- 90–95: High quality (retail, healthcare)
- 95+: Premium (museums, high-end retail)

**Why you care:** Specify 90+ CRI for retail (merchandise must look good) and 95+ CRI for restaurants (food must look appetizing).

**L70 Rated Life:** Hours until the LEDs dim to 70% of original output. Typical range: 50,000–100,000 hours.
- 50,000 hours at 12 hrs/day = **11.4 years**
- 100,000 hours at 12 hrs/day = **22.8 years**

The fixture still works after this time — it will just be noticeably dimmer.

---

### Section 4: Physical Specifications

**Dimensions:** Length × width × height, usually shown in both inches and millimeters. Always verify before ordering — a 4-foot fixture won't fit in a 3-foot space.

**Weight:** Matters for structural support requirements, shipping costs, and installation planning (heavier fixtures need more installers).

**Mounting:** Surface mount, pendant (cable/chain hung), recessed, pole mount (outdoor), track mount.

---

### Section 5: Environmental Ratings

**IP Rating (Ingress Protection):** A two-digit code showing protection against dust and water — format `IP65`. First digit (0–6) = dust protection, higher is better. Second digit (0–9) = water protection, higher is better.

| Rating | Protection | Where to Use |
|---|---|---|
| IP20 | Basic indoor | Offices, retail (dry locations) |
| IP44 | Splash-resistant | Some covered outdoor |
| IP54 | Dust + splash | Covered outdoor |
| **IP65** | **Dust-tight + water jet** | **Most outdoor fixtures** ✅ |
| IP66 | Dust-tight + powerful jet | Canopies, harsh weather |
| IP67 | Dust-tight + immersion | Ground level, very wet |

> 💡 **Beginner Tip:** For outdoor fixtures, specify **IP65** as the standard minimum — it handles rain, snow, and hose-down. Don't use IP20 outdoors; it will fail.

**Operating Temperature:** The range where the fixture works properly (e.g., -40°F to 104°F / -40°C to 40°C). Important for outdoor fixtures in extreme climates.

**UL/ETL Wet/Damp Location Rating:**
- **Dry Locations Only:** Indoor only
- **Damp Locations:** Protected from direct water (covered areas)
- **Wet Locations:** Full exposure to weather

> ⚠️ **Common mistake:** Installing a damp-rated fixture in a wet location. It MUST be wet-rated if exposed to rain.

---

### Section 6: Certifications

| Certification | Meaning |
|---|---|
| **UL Listed / ETL Listed** | Safety tested (UL = Underwriters Laboratories, ETL = Intertek — equally acceptable). One of these is required for most commercial installations in the U.S. |
| **DLC Standard** | DesignLights Consortium listing, basic qualification — required for most rebate programs |
| **DLC Premium** | Higher efficiency, qualifies for better rebates (often 2× the rebate) |
| **ENERGY STAR** | Primarily residential/some commercial — less common than DLC for commercial projects |
| **FCC Part 15 (Class A/B)** | Required for all LED fixtures — ensures no radio/TV interference. Class A = commercial/industrial, Class B = residential (more stringent) |
| **RoHS Compliant** | Restriction of Hazardous Substances — environmental compliance, especially for international markets or California projects |
| **Title 24** | California energy code compliance |
| **LM-79 / LM-80** | Industry-standard testing methods for LED performance — quality manufacturers reference these tests |

**Why you care:** Inspectors can reject fixtures without UL or ETL listing — no listing means failed inspection, which means the building can't open. And no DLC means no rebate: DLC Premium vs. Standard can mean **$30–40 more per fixture** in rebates — on 100 fixtures, that's a **$3,000–4,000** difference.

---

### Section 7: Warranty

| Tier | Warranty Period |
|---|---|
| Budget products | 2–3 years |
| Standard commercial | 5 years (most common) |
| Premium products | 7–10 years |

**What's typically covered:** LED arrays/chips, drivers, housing and components.
**What's usually NOT covered:** Installation errors, physical damage, environmental abuse (e.g., using an indoor fixture outdoors), electrical surges (unless specified).

**Warranty types:**
- **Full Replacement** — manufacturer sends a new fixture (best option)
- **Repair** — manufacturer repairs the fixture (you pay shipping both ways, more hassle)
- **Prorated** — warranty value decreases over time (e.g., a 10-year prorated warranty might hold 100% value in years 1–2, then decrease 10% per year)
- **Labor Coverage** — some warranties include installation labor costs (rare, but very valuable — e.g., "5-year parts + labor warranty")

> ⚠️ A 10-year prorated warranty that doesn't cover labor may only be worth 30% of parts by year 7. **Read the fine print.**

> 💡 **Beginner Tip:** For commercial projects, a 5-year warranty is standard. Anything less is suspicious; anything more is a bonus.

---

</details>

## Lesson 2: LED Drivers Explained :id=lesson-2

<details class="clc-lesson-details">
<summary class="clc-lesson-summary">Show / hide this lesson</summary>

An LED driver is the "power supply" for LED fixtures. Buildings have AC power, but LEDs need DC power — the driver converts AC to DC and regulates the power to keep the LEDs running properly. Think of it like the voltage regulator in your phone charger: it takes wall power and converts it to exactly what your phone needs.

**Why drivers matter:**
- **Driver quality = fixture lifespan** — a bad driver fails in 2–3 years instead of 10–15, leading to warranty claims and customer complaints
- **Driver type = dimming capability** — the wrong driver means a customer who wants dimming doesn't get it, resulting in a lost sale or a costly replacement
- **Driver failure = #1 cause of fixture failure** — even if the LEDs themselves last 100,000 hours, the fixture is dead if the driver fails at 20,000 hours
- **Driver compatibility = controls integration** — some controls only work with certain driver types

---

### Constant Current vs. Constant Voltage

LEDs need a specific amount of electrical "flow" (current) to work properly — too much and they burn out, too little and they're dim. There are two main driver types.

| Type | How It Works | Characteristics | When You'll See It |
|---|---|---|---|
| **Constant Current** | Maintains a fixed current output (mA); voltage adjusts as needed — like cruise control in a car, holding a steady speed regardless of hills | Most common in commercial fixtures; better for high-power LEDs; more stable performance over the fixture's lifetime | High bays, troffers, wall packs — basically any complete fixture |
| **Constant Voltage** | Maintains a fixed voltage (usually 12V or 24V DC); current adjusts based on what's connected — like a battery, where voltage stays the same and current depends on what you plug in | Allows parallel connection of multiple LED modules; simpler design | LED tape lights, under-cabinet lighting, accent lighting systems |

**Example spec (constant current):** Output: 700mA @ 30–42V DC — delivers exactly 700 milliamps; voltage adjusts between 30–42V as the LEDs require.

**Example spec (constant voltage):** Output: 24V DC @ 5A — always outputs 24 volts; can supply up to 5 amps depending on what's connected.

> 💡 **Beginner Tip — Which type do I need?** Simple rule: complete fixtures (high bays, troffers, wall packs) use Constant Current, already built in — you don't choose it. LED tape/strip lights you're connecting use Constant Voltage, which you buy separately (usually 12V or 24V). Most of the time the driver is already inside the fixture and you don't specify it separately — you just need to know if the fixture is dimmable or not.

---

### Internal vs. External Drivers

| Type | Pros | Cons | When Used |
|---|---|---|---|
| **Internal (integral)** — built into the fixture housing | Cleaner install, fewer components | Harder to replace if it fails | Most commercial fixtures |
| **External (remote)** — separate from the fixture, connected by wires | Easier to replace, can be located in an accessible area | More wiring, more components to install | High-temperature environments (kitchen canopy hoods), hard-to-access locations, multiple fixtures on one driver |

---

### Driver Specifications to Look For

When reviewing spec sheets, check:

- **Input Voltage** — should match building power (120–277V most common); universal voltage is most flexible
- **Output** — mA rating for constant current (e.g., 700mA) or voltage rating for constant voltage (e.g., 24V DC)
- **Power Factor (PF)** — look for ≥ 0.90 (covered in detail in Lesson 6)
- **Dimming Compatibility** — "Non-Dim," "0–10V," "TRIAC," or "DALI" — MUST match your control system. A common mistake is specifying 0–10V dimming controls with non-dimmable drivers.
- **Operating Temperature Range** — important for extreme environments (typical: -40°F to 122°F)
- **Warranty** — should match the fixture warranty; the driver is often the weak link, so verify its warranty is covered

---

</details>

## Lesson 3: Dimming Protocols :id=lesson-3

<details class="clc-lesson-details">
<summary class="clc-lesson-summary">Show / hide this lesson</summary>

### Why Dimming Matters

Dimming isn't just about adjusting brightness:

- **Energy savings** — 50% dimmed ≈ 50% energy savings
- **Ambiance control** — restaurants, hotels, and conference rooms need adjustable lighting
- **Code compliance** — many energy codes REQUIRE dimming capability
- **Occupant comfort** — employees often want personal light-level control

Specify the wrong dimming protocol and the controls won't work — an expensive fix. Forget to specify dimming and a customer who wants it later can't add it without new fixtures. Understanding dimming lets you offer energy-saving solutions that competitors miss.

> 💡 **Beginner Tip:** Don't panic about all the options. In practice, **90% of commercial projects use 0–10V dimming**, **8% use DALI**, and **2% use other protocols**.

---

### 0–10V Dimming — Most Common ✅

Uses a low-voltage control signal (0–10 volts) to tell the fixture how bright to be — 10V = 100% brightness, 5V = 50% brightness, 0V = minimum brightness (usually ~10%, not completely off). Think of it like a volume knob: the knob (0–10V controller) tells the speaker (LED driver) how loud to be.

**Typical applications:** Offices, classrooms, warehouses with controls, retail stores.

**Advantages:** Low cost (lowest dimming option) | Simple installation | Reliable and proven | Compatible with most LED drivers | Works with occupancy and daylight sensors

**Limitations:** Not addressable — can't control individual fixtures in a group | Minimum brightness usually 10%, can't go to 0% | Requires separate control wires | All fixtures on the same control wire dim together

**Wiring:** 2 wires for power (hot + neutral, or hot + hot for 277V) plus 2 wires for the dimming signal (DIM+ and DIM–) — purple and gray wires are standard for dimming.

**Cost impact:** +$10–30 per fixture vs. non-dim | +$50–200 per zone for the dimmer/controller

> 💡 **Decision Guide:** Use 0–10V for basic dimming needs, budget-conscious projects, zones of fixtures dimming together, and compatibility with occupancy/daylight sensors. Don't use it if you need individual fixture control.

---

### DALI (Digital Addressable Lighting Interface) — Advanced Control

Each fixture has a unique digital "address" — like a street address — so you can control each fixture individually using digital commands. Think of it like a computer network for lighting.

**Typical applications:** Retail with complex lighting scenes, buildings with advanced automation, projects needing individual fixture control, museums and galleries.

**Advantages:** Individual fixture control (fixture #47 can be 30%, #48 can be 70%) | Two-way communication — the system knows if a fixture is on/off/dimmed | Complex scenes and programming | Regroup fixtures in software, no rewiring | Integration with building management systems

**Limitations:** Higher cost (fixture + controls) | More complex installation | Requires programming/commissioning | Requires DALI-compatible drivers, which are more expensive

**Wiring:** 2 wires for power, 2 wires for the DALI signal (can share across multiple fixtures). DALI signal can run up to 300 meters.

**Cost impact:** +$30–80 per fixture vs. non-dim, plus a higher control system cost (DALI controller + programming)

> 💡 **Decision Guide:** Use DALI when you need individual fixture control, complex scenes (e.g., retail stores changing seasonally), integration with building automation, or feedback from fixtures on their status. Don't use it if budget is tight or needs are simple.

---

### TRIAC/Phase-Cut Dimming

Dims by "chopping" parts of the AC power wave — this is how traditional incandescent dimmers work. Works with standard residential dimmers, but most LED drivers are NOT compatible, and mismatches can cause flickering or buzzing.

**When you'll see it:** Residential applications, small commercial spaces with residential-style fixtures, retrofit lamps (LED bulbs replacing incandescent).

**Advantages:** Works with existing residential dimmer switches | Only 2 wires needed (standard power wiring) | Familiar to electricians

**Limitations:** Compatibility problems are common | Not recommended for commercial fixtures | Limited dimming range | Can cause noise/flicker

> 💡 **Beginner Tip:** For commercial projects, avoid TRIAC dimming unless specifically using residential-style products. Stick with 0–10V or DALI.

---

### DMX512 (Entertainment/Theatrical)

A digital protocol originally designed for stage lighting — very fast, and able to control color-changing RGB/RGBW fixtures. Think of it as a high-speed communication system for entertainment lighting, like the controls behind a concert light show.

**When you'll see it:** Retail feature displays, hospitality accent lighting, museums with dynamic displays, entertainment venues.

**Why you care:** If a customer mentions "color-changing" or "dynamic lighting," they may need DMX — but **95% of commercial projects don't need this.**

---

### Choosing the Right Dimming Protocol

| Need | Protocol | Cost | Complexity |
|---|---|---|---|
| Basic dimming, zones | 0–10V | $ | Low |
| Individual control | DALI | $$$ | Medium |
| Residential integration | TRIAC | $ | Low |
| Color-changing/effects | DMX512 | $$$$ | High |

**Quick decision tree:**
1. Need to control individual fixtures separately? **No** → 0–10V (simplest, cheapest). **Yes** → DALI.
2. Residential, or using residential-style products? **Yes** → consider TRIAC (verify compatibility). **No** → 0–10V or DALI.
3. Need color-changing or dynamic effects? **Yes** → DMX. **No** → 0–10V or DALI.

> ⚠️ **Critical mistake to avoid:** Always verify driver compatibility with controls BEFORE ordering. 0–10V controls need 0–10V dimmable drivers, DALI controls need DALI drivers, and non-dimmable drivers can never be dimmed.

---

</details>

## Lesson 4: Beam Angles & Light Distribution :id=lesson-4

<details class="clc-lesson-details">
<summary class="clc-lesson-summary">Show / hide this lesson</summary>

### Understanding Beam Angles

Beam angle determines how focused or spread out the light is from a fixture — think of a flashlight: a narrow beam is a spotlight (focused on a small area), a wide beam is a floodlight (spread over a large area).

**Why it matters:** The wrong beam angle creates dark spots or overlapping bright spots. A narrow beam in a warehouse means you need twice as many fixtures; a wide beam for accent lighting kills the highlighting effect. Getting it right means proper coverage with the minimum number of fixtures.

### How Beam Angle Is Defined

**Beam angle** is the angle where light intensity falls to 50% of the peak (center) intensity. Picture standing directly under a downlight, looking up — the beam angle is the cone of bright light you see; outside that cone, light drops to 50% or less of center brightness.

| Beam Angle | Description |
|---|---|
| **Narrow** (< 40°) | Focused, concentrated light — creates a "spotlight" effect. Light goes far but covers a small area. |
| **Medium** (40–80°) | Balanced distribution — the most versatile, covering a moderate area. |
| **Wide** (> 80°) | Spread out, dispersed light — covers a large area, but light doesn't travel as far. |

### Beam Angle by Application

| Application | Typical Beam Angle | Why |
|---|---|---|
| Accent lighting | 15–40° | Highlight specific objects |
| Track lighting (retail) | 25–40° | Feature products on displays |
| Downlights (offices) | 60–90° | Even coverage at desk level |
| High bays (warehouse) | 90–120° | Spread light to the floor from a high mount |
| Parking lot area lights | Type III or V | Even distribution across the lot |

### Common Beam Angle Mistakes

1. **Using a narrow beam for general lighting** — e.g., 25° downlights in an office create bright spots directly under fixtures with dark areas between. Fix: use 60–90° for general office lighting.
2. **Using a wide beam for accent lighting** — e.g., 90° track heads for retail displays give no highlighting effect. Fix: use 25–40° for accent lighting.
3. **Not accounting for mounting height** — the same beam angle at 10 ft vs. 30 ft ceiling behaves very differently. At 30 ft, even a wide beam creates a small coverage area. Fix: consider mounting height when selecting beam angle.

### Field Angle vs. Beam Angle

**Beam angle** = light intensity to 50% of peak. **Field angle** = light intensity to 10% of peak (a wider angle). Field angle shows where usable light actually stops — the area between beam angle and field angle is dimmer but still contributes light. When spacing fixtures, consider field angle overlap for even lighting, not just beam angle.

> 💡 **Beginner Tip — start with these defaults:** Offices/classrooms: 60–80° beam | Retail accent: 25–40° beam | Warehouses: 90–120° beam | Exterior wall packs: 90–120° beam. Then adjust based on specific needs.

---

</details>

## Lesson 5: Outdoor Light Distribution Types (IES) :id=lesson-5

<details class="clc-lesson-details">
<summary class="clc-lesson-summary">Show / hide this lesson</summary>

### Understanding IES Distribution Types

For outdoor pole-mounted fixtures (parking lots, roadways, etc.), we use standardized distribution patterns called IES Types instead of beam angles, because outdoor fixtures need to distribute light over large areas efficiently. Beam angles tell you the cone shape; distribution types tell you the pattern shape on the ground.

### The Five Basic Types

| Type | Pattern | Use |
|---|---|---|
| **Type I** | Very narrow, perpendicular to the fixture — like a "stripe" of light | Narrow walkways, building perimeters |
| **Type II** | Medium-narrow, longer than it is wide | Walkways, bike paths, narrow roadways |
| **Type III** | Medium-wide, pattern perpendicular to the pole | **Most parking lots** ✅ — parking rows, roadways |
| **Type IV** | Wide asymmetric, throws most light AWAY from the pole to one side | Perimeter lighting, building walls, property lines |
| **Type V** | Circular/square, equal distribution in all directions | Large open areas, intersections, parking lot centers |

### How to Choose Distribution Type

**Step 1 — understand the space layout:**
- Parking lot with poles between rows → Type III (light perpendicular to the pole lights the rows on both sides)
- Parking lot with poles along the perimeter → Type IV (throws light away from the pole onto the lot)
- Large open area → Type V (circular coverage)
- Walkway → Type II (narrow → Type I)
- Wall-mounted building perimeter → Type IV (throws light away from the building onto the parking area/walkway)

**Step 2 — consider mounting height:**
- Lower mounting (15–20 ft): can use narrower distributions, more fixtures with less spread
- Higher mounting (25–35 ft): need wider distributions, fewer poles but more spread

### Common Application Examples

| Scenario | Details | Solution |
|---|---|---|
| Retail parking lot | 100 spaces in rows, poles between rows, 25-ft mounting | Type III area lights |
| Perimeter walkway | Along building wall, wall-mounted, 15-ft mounting | Type IV wall packs (light goes away from the building) |
| Large campus open area | No defined rows, central poles, 30-ft mounting | Type V area lights |

> 💡 **Quick reference:** Between parking rows → Type III (90% of parking lots) | Along building/property line → Type IV | Open area/intersection → Type V | Walkways → Type II

> ⚠️ **Common mistake:** Using Type V everywhere "because it covers all directions." This creates less efficient lighting and may need more fixtures — Type III is usually more efficient for rows.

---

</details>

## Lesson 6: Power Factor & THD :id=lesson-6

<details class="clc-lesson-details">
<summary class="clc-lesson-summary">Show / hide this lesson</summary>

### Understanding Power Factor (PF)

Power factor measures how efficiently electrical power is being used by a device. Think of it like fuel efficiency in a car: perfect PF (1.0) is like a car using every drop of gas to move forward; low PF (0.70) is like a car wasting 30% of its gas on heat and friction.

**Why it matters:** Low PF means higher electricity bills (utilities charge for wasted power) and more stressed electrical systems. Many utilities require PF ≥ 0.90 for commercial installations, and low PF can affect rebate eligibility.

**What good PF looks like:** Minimum 0.90 | Good: 0.90–0.95 | Excellent: 0.95+ (some reach 0.98). Most building codes and utility rebates require ≥ 0.90.

> 💡 **Beginner Tip:** When reviewing spec sheets, just verify PF ≥ 0.90. If it meets that, you're good — don't worry about the technical details below.

<details>
<summary>🔍 Going deeper: the math behind Power Factor</summary>

In AC systems there are three kinds of power:
- **Real Power (kW)** — actual work done; this is what lights up your LEDs
- **Reactive Power (kVAR)** — wasted energy that sloshes back and forth without doing useful work, created by motors, transformers, and some LED drivers
- **Apparent Power (kVA)** — the total power the utility has to provide (real + reactive)

**Formula:** `PF = Real Power ÷ Apparent Power`

**Example:** A fixture uses 50 kW of real power, but the utility has to supply 55 kVA total. PF = 50 ÷ 55 = **0.91** (91% efficient).

**PF in practice — 100 fixtures at 100W each:**

| Power Factor | Real Power | Apparent Power | Wasted |
|---|---|---|---|
| 0.95 (good) | 10 kW | 10 ÷ 0.95 = 10.5 kVA | 0.5 kVA |
| 0.70 (bad) | 10 kW | 10 ÷ 0.70 = 14.3 kVA | 4.3 kVA |

At 0.70 PF, the building's electrical system has to handle 14.3 kVA instead of 10.5 kVA — more load on wiring, panels, and transformers, and higher demand charges from the utility.

</details>

### Understanding Total Harmonic Distortion (THD)

THD measures how "clean" the electrical current is. Think of it like noise in an audio system: low THD (< 10%) is a clean, crystal-clear signal; high THD (> 30%) is noisy, like static-filled audio. Perfect AC power is a smooth sine wave; poor LED drivers distort this into a choppy, irregular wave.

**What good THD looks like:** Excellent: < 10% | Good: 10–20% | Acceptable: < 20% | Poor: > 20% (avoid if possible).

> 💡 **Beginner Tip:** Look for THD < 20% as a minimum. If the spec sheet doesn't list THD at all, that's a red flag about driver quality.

<details>
<summary>🔍 Going deeper: why THD matters and what it looks like in practice</summary>

High THD causes overheating of transformers and neutral wires, equipment malfunction, reduced electrical system efficiency, and potential resonance issues. Building electrical engineers, utility companies, and electrical inspectors (in some jurisdictions) all care about THD.

Low THD (< 10%) means premium LED drivers, cleaner power draw, and better compatibility with the building electrical system — usually at a slightly higher cost. High THD (> 25%) usually means budget LED drivers, which can cause problems in large installations and may violate codes or utility requirements.

</details>

### Power Factor & THD Together

Quality LED fixtures will have **both** PF ≥ 0.90 **and** THD < 20%.

✅ **Good example:** Power Factor: 0.95, THD: < 15%
❌ **Poor example:** Power Factor: 0.70, THD: 30% — don't specify this fixture

> ⚠️ **Common mistakes:** Ignoring PF and THD completely (can lead to rebate rejection or failed inspections) | Assuming all LED is automatically good (cheap LEDs can have PF as low as 0.60 and THD over 30%) | Not checking before quoting (customer specifies a low-quality product, then can't get the rebate)

---

</details>

## Lesson 7: Photometric Data & IES Files :id=lesson-7

<details class="clc-lesson-details">
<summary class="clc-lesson-summary">Show / hide this lesson</summary>

### What Is Photometric Data?

Photometric data tells you how light is distributed from a fixture — where the light goes and how much. You need this to verify fixtures meet IES illumination requirements, calculate how many fixtures are needed, ensure proper light distribution, prove compliance to inspectors, and avoid dark spots or over-lit areas.

### Key Photometric Concepts

**Total Lumens:** The complete light output from the fixture (you already know this from Module 1).

**Zonal Lumens:** How lumens are distributed in different directions — 0–30° (straight down, high for task lighting), 30–60° (diagonal, spreads light), 60–90° (horizontal, wall washing), 90–180° (upward, ceiling bounce for indirect fixtures).

**Candela (cd):** Light intensity in a specific direction — different from lumens (total output), and shows how "concentrated" light is in one direction. Think of lumens as the total amount of water from a hose, and candela as how concentrated the stream is (a jet vs. a spray).

### Polar Curves (Candela Distribution)

A polar curve is a graph showing how light intensity varies in different directions from the fixture — narrow curves mean focused light, wide curves mean spread light.

> 💡 **Beginner Tip:** Don't stress about reading polar curves in detail — lighting designers use software to interpret these. You mainly need to know: narrow curve = focused light, wide curve = spread light, and to match curve type to application (narrow for accent, wide for general).

<details>
<summary>🔍 Going deeper: how to actually read a polar curve</summary>

Picture standing directly under the fixture, looking up: 0° is straight down (nadir), 45° is diagonal, 90° is horizontal (straight out to the sides), 180° is straight up. The curve plots candela values at each angle.

- **Narrow distribution:** high candela at 0°, drops off quickly at wider angles — a focused "spotlight" effect
- **Wide distribution:** more even candela across many angles — a broad "floodlight" effect

</details>

### Spacing Criteria (SC)

Spacing Criteria tells you how far apart to space fixtures for even lighting.

**Formula:** `Maximum Spacing = SC × Mounting Height`

**Example:** SC = 1.3, mounting height = 10 ft → maximum spacing = 1.3 × 10 = **13 feet apart**. Space fixtures further than that and you'll get dark spots between them.

| SC Value | Distribution |
|---|---|
| 0.8–1.0 | Narrow |
| 1.0–1.3 | Medium (most common for offices) |
| 1.3–1.5 | Wide |
| 1.5+ | Very wide (high bays, area lights) |

<details>
<summary>🔍 Going deeper: using spacing criteria to calculate fixture count</summary>

Spacing criteria helps you calculate fixture count. Example: a 60 ft × 40 ft room, SC = 1.2, mounting height = 10 ft → maximum spacing = 12 ft. That's 5 rows lengthwise (60 ÷ 12, rounded up) and 4 rows widthwise (40 ÷ 12, rounded up) — **24 fixtures total.**

</details>

### IES Files

An **IES file** (`.ies`) is a standardized digital file containing all photometric data for a fixture — candela distribution, lumens by zone, lamp information, fixture dimensions, test lab information, and electrical data.

**Why they matter:** Required for lighting design software (AGi32, Dialux, Relux), used to create photometric layouts, often required for permit applications, and sometimes required for rebate applications.

**Where to get them:** The manufacturer's website (usually a free download) — include the model number to match the exact fixture. Sometimes provided as a link on the spec sheet itself.

**Using them:** Designers input room dimensions and fixture locations, and the software uses the IES file to calculate light levels throughout the space — the output shows foot-candle values on a grid, proving compliance with IES illumination requirements.

**Example output:** Office space photometric calculation — average illumination 42 fc, minimum 28 fc, maximum 58 fc — meets the IES 30–50 fc requirement. ✓

> 💡 **Beginner Tip:** You don't need to master lighting design software yet, but knowing IES files exist and what they do helps you request them from manufacturers, provide them to lighting designers/engineers, and understand photometric layouts.

### Common Photometric Terms on Spec Sheets

- **CCT Uniformity** — how consistent color temperature is across the light pattern. "5-step MacAdam ellipse" = very consistent color; important for retail, less important for warehouses.
- **Initial Lumens** — light output when new (what's listed on the spec sheet).
- **Maintained Lumens** — light output after 50,000 hours (typically 90–95% of initial). L70 = 70% of initial lumens (end of rated life), L80 = 80%, L90 = 90%.
- **Utilization** — the percentage of lumens that reach the work surface. Direct fixtures: 70–90%. Indirect fixtures: 50–70%. Depends on room size, reflectances, and mounting height.

---

</details>

## Module 2 Quiz :id=quiz

Test your understanding of this module — 80% (8 of 10) required to pass.

<div class="clc-quiz" data-quiz-id="module-2"></div>

---

## Key Takeaways :id=key-takeaways

- ✅ Read spec sheets by section: electrical → photometric → physical → environmental → certifications → warranty
- ✅ Drivers determine lifespan AND dimming capability — specify correctly
- ✅ 0–10V for most projects; DALI when you need individual fixture control
- ✅ Match beam angle to application — the wrong angle wastes energy or creates dark spots
- ✅ For outdoor fixtures, match IES distribution type to the space layout (Type III for most parking rows)
- ✅ PF ≥ 0.90 and THD < 20% are your quality checkboxes
- ✅ IES files are needed for photometric layouts and many permit applications

---

## Glossary :id=glossary

| Term | Definition |
|---|---|
| Voltage (V) | Electrical pressure that pushes current through wires |
| Current (A) | Flow of electricity, measured in amps or milliamps |
| Power (W) | Work being done, measured in watts (Volts × Amps) |
| AC (Alternating Current) | Power from wall outlets, alternates direction |
| DC (Direct Current) | Power that flows in one direction — what LEDs use |
| Driver | Converts AC to DC and regulates power for LEDs |
| Constant Current Driver | Maintains a fixed current output; most common in complete fixtures |
| Constant Voltage Driver | Maintains a fixed voltage; used for LED tape/strips |
| 0–10V Dimming | Analog dimming protocol, most common for commercial |
| DALI | Digital dimming protocol with individual fixture addressability |
| TRIAC Dimming | Phase-cut dimming for residential applications |
| DMX512 | Digital protocol for entertainment/color-changing lighting |
| Beam Angle | Cone angle where light drops to 50% of peak intensity |
| Field Angle | Cone angle where light drops to 10% of peak intensity |
| Distribution Type | IES classification for outdoor light patterns (Type I–V) |
| Power Factor (PF) | Ratio of useful power to total power (want ≥ 0.90) |
| Total Harmonic Distortion (THD) | Measure of power quality (want < 20%) |
| IES File | Standardized photometric data file (.ies extension) |
| Candela (cd) | Light intensity in a specific direction |
| Polar Curve | Graph showing light distribution by angle |
| Spacing Criteria (SC) | Maximum spacing-to-mounting-height ratio |

---

*Next: [Module 2B — Lighting Controls & Sensors](/module-2b/)*
