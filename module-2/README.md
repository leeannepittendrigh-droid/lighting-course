# Module 2: Advanced Product Knowledge

> **Estimated Time:** 3–4 hours | **Prerequisites:** Module 1 | **Pass Quiz:** 80% or higher

## What You'll Learn

- Read and interpret manufacturer specification sheets
- Understand LED drivers and their types
- Explain beam angles and light distribution
- Understand power factor and total harmonic distortion (THD)
- Read and use photometric data
- Specify dimming options and controls
- Understand sensor and control integration

---

## Electrical Basics Primer

Before diving into specifications, a quick review of essential electrical concepts.

### Voltage, Current, and Power

Think of electricity like water flowing through pipes:

| Concept | Analogy | Unit | Notes |
|---|---|---|---|
| **Voltage (V)** | Water pressure | Volts | 120V residential, 277V commercial |
| **Current (A)** | Flow rate | Amps / milliamps | More current = more electricity flowing |
| **Power (W)** | Work being done | Watts | **Formula: Watts = Volts × Amps** |

**Example:** A fixture using 120V at 0.5A consumes: 120V × 0.5A = **60 watts**

### AC vs. DC Power

| Type | Description | Use |
|---|---|---|
| **AC** (Alternating Current) | Alternates direction, 60Hz in US | Building power from utility |
| **DC** (Direct Current) | Flows one direction | What LEDs actually use |

> 💡 LEDs need DC power, but buildings have AC power. That's why we need **drivers** to convert AC to DC.

---

## Lesson 1: Reading Specification Sheets

Every fixture manufacturer provides spec sheets containing all technical information. Learning to read these quickly is critical.

**Why you need this skill:**
- Verify fixtures meet project requirements
- Compare products from different manufacturers
- Avoid costly ordering mistakes

---

### Section 1: Product Identification

Model numbers encode information. Example: `HB-UFO-200W-5K-UNV-DIM-DLC`

| Code | Meaning |
|---|---|
| HB | High Bay |
| UFO | UFO style |
| 200W | 200 watts |
| 5K | 5000K color temperature |
| UNV | Universal voltage (120–277V) |
| DIM | Dimmable |
| DLC | DLC listed |

> ⚠️ Model numbers must match **EXACTLY** when ordering. `-DIM` vs. `-ND` (non-dim) means a completely different product.

---

### Section 2: Electrical Specifications

**Input Voltage:**
| Voltage | Use |
|---|---|
| 120V | Residential / light commercial |
| 277V | Commercial (most common in US) |
| 120–277V | Universal voltage (most flexible) ✅ |
| 347V | Canadian commercial |
| 480V | Industrial |

> 💡 When in doubt, specify **120–277V universal voltage** — works in more situations and avoids ordering mistakes.

**Wattage:** Actual power consumption. Remember — wattage is NOT brightness.

**Current (Amps):** `Amps = Watts ÷ Volts`
Example: 40W fixture on 120V = 40 ÷ 120 = **0.33A**

**Power Factor (PF):** Look for PF ≥ 0.90 | Good: 0.90–0.95 | Excellent: 0.95+

**Total Harmonic Distortion (THD):** Look for THD < 20% | Excellent: < 10%

---

### Section 3: Photometric Data

**Lumens (Total Light Output):** The most important number — how bright the fixture is.

**Efficacy (lm/W):** `Lumens ÷ Watts`

| Tier | Efficacy |
|---|---|
| Budget LED | 80–100 lm/W |
| Good LED | 100–130 lm/W |
| Excellent LED | 130–160 lm/W |
| Premium LED | 160+ lm/W |

> 💡 For rebate projects, look for **DLC Premium** fixtures (typically 120+ lm/W). They qualify for higher rebates.

**Color Temperature (CCT):** 2700–3000K warm | 3500–4000K neutral | 5000–6500K cool

**CRI:** 80–89 standard | 90–95 high quality | 95+ premium

**L70 Rated Life:** Hours until LEDs dim to 70% of original output.
- 50,000 hours at 12 hrs/day = **11.4 years**
- 100,000 hours at 12 hrs/day = **22.8 years**

---

### Section 4: Physical Specifications

- **Dimensions:** Always verify before ordering — a 4-ft fixture won't fit in a 3-ft space
- **Weight:** Important for structural support and installation planning
- **Mounting:** Surface, pendant, recessed, pole mount, track mount

---

### Section 5: Environmental Ratings

**IP Rating (Ingress Protection):** Format = IP65

| Rating | Protection | Use |
|---|---|---|
| IP20 | Basic indoor | Offices, dry retail |
| IP44 | Splash-resistant | Some covered outdoor |
| IP54 | Dust + splash | Covered outdoor |
| **IP65** | **Dust-tight + water jet** | **Most outdoor fixtures** ✅ |
| IP66 | Dust-tight + powerful jet | Canopies, harsh weather |
| IP67 | Dust-tight + immersion | Ground level, very wet |

> 💡 For outdoor fixtures, specify **IP65** as the standard minimum.

**Location Ratings:**
- **Dry Locations:** Indoor only
- **Damp Locations:** Protected from direct water
- **Wet Locations:** Full exposure to weather

> ⚠️ **Common mistake:** Installing a damp-rated fixture in a wet location. It MUST be wet-rated if exposed to rain.

---

### Section 6: Certifications

| Certification | Meaning |
|---|---|
| **UL Listed** | Safety tested by Underwriters Laboratories |
| **ETL Listed** | Safety tested by Intertek (equivalent to UL) |
| **DLC Standard** | Qualifies for utility rebates (basic) |
| **DLC Premium** | Qualifies for higher rebates (often 2× the amount) |
| **ENERGY STAR** | Primarily residential/some commercial |
| **FCC Part 15** | Required for all LED (no radio/TV interference) |
| **RoHS** | Restriction of Hazardous Substances |
| **Title 24** | California energy code compliance |

> 💡 **No DLC = no rebate.** DLC Premium vs. Standard can mean $30–40 more per fixture. On 100 fixtures = $3,000–4,000 difference.

---

### Section 7: Warranty

| Tier | Warranty Period |
|---|---|
| Budget products | 2–3 years |
| Standard commercial | 5 years (most common) |
| Premium products | 7–10 years |

**Warranty types:** Full Replacement (best) | Repair | Prorated (value decreases over time)

> ⚠️ A 10-year prorated warranty that doesn't cover labor may only be worth 30% of parts by year 7. **Read the fine print.**

---

## Lesson 2: LED Drivers Explained

An LED driver is the "power supply" for LED fixtures — it converts AC to DC and regulates power.

**Why drivers matter:**
- **Driver quality = fixture lifespan** — bad driver fails in 2–3 years instead of 10–15
- **Driver type = dimming capability** — wrong driver means no dimming
- **Driver failure = #1 cause of fixture failure** — even if LEDs last 100,000 hours

---

### Constant Current vs. Constant Voltage

| Type | How it Works | Use Case |
|---|---|---|
| **Constant Current** | Fixed current output (mA), voltage adjusts | Most commercial fixtures (high bays, troffers, wall packs) |
| **Constant Voltage** | Fixed voltage (12V or 24V DC), current varies | LED tape/strip lights, under-cabinet |

> 💡 **Simple rule:** Complete fixtures → Constant Current (built-in, you don't choose). LED tape → Constant Voltage (you buy separate).

---

### Internal vs. External Drivers

| Type | Pros | Cons | When Used |
|---|---|---|---|
| **Internal (integral)** | Cleaner install, fewer components | Harder to replace | Most commercial fixtures |
| **External (remote)** | Easy to replace, accessible location | More wiring | High-temp environments, hard-to-reach locations |

---

## Lesson 3: Dimming Protocols

### Why Dimming Matters
- **Energy savings:** 50% dimmed ≈ 50% energy savings
- **Code compliance:** Many energy codes REQUIRE dimming
- **Ambiance control:** Restaurants, hotels, conference rooms

> 💡 In practice: **90% of commercial projects use 0–10V dimming.** 8% use DALI. 2% use other protocols.

---

### 0–10V Dimming — Most Common ✅

Uses a low-voltage control signal to tell the fixture how bright to be.
- 10V = 100% brightness
- 5V = 50% brightness
- 0V = minimum brightness (usually ~10%, not completely off)

**Advantages:** Low cost | Simple install | Reliable | Works with occupancy/daylight sensors

**Limitations:** Can't control individual fixtures | Minimum ~10% brightness | All fixtures on same wire dim together

**Cost impact:** +$10–30/fixture vs. non-dim | +$50–200/zone for dimmer/controller

---

### DALI — Advanced Control

Each fixture has a unique digital "address." You control each fixture individually.

**Advantages:** Individual fixture control | Two-way communication | Complex scenes | Regroup in software (no rewiring)

**Limitations:** Higher cost | Requires programming | DALI-compatible drivers required

**Cost impact:** +$30–80/fixture vs. non-dim

---

### TRIAC/Phase-Cut Dimming

Works with standard residential dimmers. Most LED drivers are NOT compatible.

> 💡 For commercial projects, **avoid TRIAC** unless using residential-style products. Stick with 0–10V or DALI.

---

### Choosing the Right Protocol

| Need | Protocol | Cost | Complexity |
|---|---|---|---|
| Basic dimming, zones | 0–10V | $ | Low |
| Individual control | DALI | $$$ | Medium |
| Residential integration | TRIAC | $ | Low |
| Color-changing/effects | DMX512 | $$$$ | High |

> ⚠️ Always verify driver compatibility BEFORE ordering. 0–10V controls need 0–10V dimmable drivers. Non-dimmable drivers can't be dimmed — ever.

---

## Lesson 4: Beam Angles & Light Distribution

Beam angle = how focused or spread out the light is.

| Range | Type | Effect |
|---|---|---|
| < 40° | Narrow | Spotlight, accent lighting |
| 40–80° | Medium | Versatile, general lighting |
| > 80° | Wide | Area coverage, spread |

### Beam Angle by Application

| Application | Typical Beam Angle |
|---|---|
| Accent lighting | 15–40° |
| Track lighting (retail) | 25–40° |
| Office downlights | 60–90° |
| High bays (warehouse) | 90–120° |
| Exterior area lights | Type III or V |

> 💡 **Defaults:** Offices/classrooms: 60–80° | Retail accent: 25–40° | Warehouses: 90–120°

---

## Lesson 5: Outdoor Light Distribution Types (IES)

For outdoor pole-mounted fixtures, use IES Type classifications instead of beam angles.

| Type | Pattern | Use |
|---|---|---|
| Type I | Very narrow | Narrow walkways |
| Type II | Medium-narrow | Paths, bike paths, narrow roads |
| **Type III** | **Medium-wide** | **Most parking lots** ✅ |
| Type IV | Wide asymmetric | Perimeter lighting, building walls |
| Type V | Circular | Large open areas, intersections |

> 💡 **Quick guide:** Parking rows → Type III | Building perimeter → Type IV | Open area → Type V | Walkways → Type II

---

## Lesson 6: Power Factor & THD

### Power Factor (PF)

Measures how efficiently electrical power is being used.

- **Perfect PF (1.0)** = 100% efficient
- **Low PF (0.70)** = 70% efficient (utility charges for wasted power)

**LED fixtures should have:** Minimum 0.90 | Good: 0.90–0.95 | Excellent: 0.95+

> 💡 When reviewing spec sheets, just verify **PF ≥ 0.90**. If it meets that, you're good.

---

### Total Harmonic Distortion (THD)

Measures how "clean" the electrical current is.

**LED fixtures should have:**
- Excellent: < 10% THD
- Good: 10–20% THD
- **Acceptable: < 20% THD**
- Poor: > 20% (avoid)

> 💡 If the spec sheet doesn't list THD, that's a **red flag** about driver quality.

---

## Lesson 7: Photometric Data & IES Files

### What Is an IES File?

A standardized digital file (`.ies`) containing all photometric data for a fixture.

**Why IES files matter:**
- Required for lighting design software (AGi32, Dialux, Relux)
- Used to create photometric layouts
- Often required for permit applications
- Rebate applications may require them

**Where to get them:** Manufacturer website (usually free download)

### Spacing Criteria (SC)

`Maximum Spacing = SC × Mounting Height`

**Example:** SC = 1.2 | Mounting height = 10 ft | Max spacing = **12 ft apart**

| SC Value | Distribution |
|---|---|
| 0.8–1.0 | Narrow |
| 1.0–1.3 | Medium (most offices) |
| 1.3–1.5 | Wide |
| 1.5+ | Very wide (high bays, area lights) |

---

## Lesson 8: Lighting Controls & Sensors

Lighting controls can add **30–60% additional energy savings** beyond LED efficiency alone.

> **Example:** Replace 400W MH with 150W LED = 62% savings. Add occupancy sensors + daylight harvesting = another 40%. **Total: 77% reduction.**

---

### Occupancy Sensors

| Type | How It Works | Best For |
|---|---|---|
| **PIR** (Passive Infrared) | Detects heat movement | Private offices, restrooms, break rooms |
| **Ultrasonic** | Bounces sound waves | Spaces with obstructions, cubicles, restroom stalls |
| **Dual-Technology** (PIR + Ultrasonic) | Both must agree to turn on | Any reliability-critical space ✅ |

**Occupancy vs. Vacancy Mode:**
- **Occupancy (Auto-On):** Lights turn on AND off automatically. Best for restrooms, storage, stairwells.
- **Vacancy (Manual-On, Auto-Off):** You turn lights on, they turn off automatically. Best for private offices, classrooms.

---

### Daylight Harvesting

Dims electric lights when natural daylight is sufficient.

- Required by energy codes within **15 ft of windows** and under skylights
- Typical savings: **20–40%** in daylight zones
- Required by ASHRAE 90.1, IECC, Title 24

---

### Control Specification for Most Projects

1. Occupancy sensors in all enclosed spaces (dual-tech recommended)
2. Daylight sensors in perimeter zones (15 ft from windows)
3. Time scheduling for overall building
4. Manual dimming in conference rooms

---

## Key Takeaways

- ✅ Read spec sheets by section: electrical → photometric → physical → environmental → certifications
- ✅ Drivers determine lifespan AND dimming capability — specify correctly
- ✅ 0–10V for most projects; DALI when you need individual fixture control
- ✅ Match beam angle to application — wrong angle wastes energy or creates dark spots
- ✅ PF ≥ 0.90 and THD < 20% are your quality checkboxes
- ✅ IES files are needed for photometric layouts and many permit applications
- ✅ Controls add 30–60% additional savings beyond the LED upgrade itself

---

*Next: [Module 3 — Codes & Certifications](/module-3/)*
