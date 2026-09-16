# Module 2B: Lighting Controls & Sensors

> **Estimated Time:** 1–1.5 hours | **Prerequisites:** Module 2 – Advanced Product Knowledge | **Pass Quiz:** 80% or higher

## Why This Matters

Lighting controls can add 30–60% additional energy savings on top of an LED upgrade — and energy codes increasingly require them, not just recommend them. Specifying controls correctly is an additional profit opportunity; specifying the wrong ones means a system that doesn't work, callbacks, and complaints. This module covers occupancy and daylight sensors, how to choose between them, and how modern lighting networks tie it all together.

## What You'll Learn

- Understand why controls matter and the basic control types
- Choose the right occupancy sensor technology for a space
- Explain occupancy vs. vacancy mode
- Understand daylight harvesting, multi-level switching, and task tuning
- Understand networked lighting controls and wired vs. wireless options

---

## Lessons in This Module

| # | Lesson | Topics Covered |
|---|--------|---------------|
| 1 | [Why Controls Matter & Basic Control Types](#lesson-1-why-controls-matter-basic-control-types) | Energy savings potential, manual switches, timers, occupancy/daylight sensors, dimmers |
| 2 | [Occupancy & Vacancy Sensors](#lesson-2-occupancy-vacancy-sensors) | PIR, ultrasonic, dual-tech, occupancy vs. vacancy mode |
| 3 | [Daylight, Time-Based & Multi-Level Controls](#lesson-3-daylight-time-based-multi-level-controls) | Time clocks, daylight harvesting, multi-level switching, task tuning |
| 4 | [Networked Lighting Controls](#lesson-4-networked-lighting-controls) | Wired vs. wireless, DALI/BACnet, Bluetooth Mesh, Zigbee, PoE |

---

## Lesson 1: Why Controls Matter & Basic Control Types

### Why Controls Matter

Lighting controls can add **30–60% additional energy savings** beyond LED efficiency alone.

**Example:** Replace a 400W metal halide with a 150W LED = 62% savings. Add occupancy sensors and daylight harvesting = another 40% savings on the remainder. **Total: 77% reduction.**

Energy codes increasingly REQUIRE controls, rebates often require them for the maximum incentive, and customers want "smart" buildings. Specifying controls correctly is an additional profit opportunity — specifying the wrong controls means a system that doesn't work, callbacks, and complaints.

### Basic Control Types

- **Manual Switches** — traditional on/off wall switches; simple and cheap, but no energy savings unless people actually turn lights off. Still required by code (a space can't have only automatic controls).
- **Timers** — turn lights on/off at set times; good for consistent schedules (retail stores, offices), but don't respond to actual occupancy or daylight.
- **Occupancy Sensors** — detect presence and control lights automatically; the most common control type for energy savings, and required by most energy codes.
- **Daylight Sensors** — detect natural light levels and dim or turn off electric lights when daylight is sufficient; required by energy codes near windows (typically within a 15 ft perimeter).
- **Dimmers** — allow manual adjustment of light levels for ambiance (restaurants, hotels) or task tuning; can also be automatic, controlled by sensors.

---

## Lesson 2: Occupancy & Vacancy Sensors

### Occupancy Sensors Explained

Occupancy sensors detect people and control lighting automatically, saving energy because lights turn off when a space is unoccupied — people forget to turn lights off. Typical savings: **20–50%** depending on usage patterns.

| Type | How It Works | Best For | Not Ideal For | Range |
|---|---|---|---|---|
| **PIR** (Passive Infrared) | "Sees" infrared heat and detects when a heat source moves through the space; does NOT detect stationary people well | Private offices, restrooms, break rooms, smaller spaces with clear movement | Large open areas (limited range); spaces where people sit still, since PIR might not detect them and turn lights off while they're working | 500–2,000 sq ft |
| **Ultrasonic** | Bounces sound waves off objects, like sonar, and detects any movement — even small movements like typing; better at detecting stationary people than PIR | Spaces with obstructions (cubicles, storage racks), spaces where people are still for long periods, restrooms with stalls (PIR misses people in stalls) | Areas with lots of air movement — HVAC can cause false triggers | 1,000–3,000 sq ft |
| **Dual-Technology** (PIR + Ultrasonic) | Requires BOTH technologies to agree before turning lights on (reduces false triggers); uses either technology to keep lights on (prevents false-off) | Any application where reliability is critical — the most versatile option | — | Higher cost than single-technology, but worth it for reliability |

> 💡 **Decision Guide:** Private offices → PIR or Dual-tech | Open offices (cubicles) → Dual-tech or Ultrasonic | Restrooms → Ultrasonic (detects in stalls) | Warehouses → Dual-tech high-bay sensors | Classrooms → Dual-tech | Break rooms → PIR or Dual-tech

### Occupancy vs. Vacancy Mode

- **Occupancy Mode (Auto-On):** Lights turn ON automatically when you enter and OFF automatically when you leave — no manual action required. Best for restrooms, break rooms, storage areas, stairwells.
- **Vacancy Mode (Manual-On, Auto-Off):** You manually turn lights ON when entering; they turn OFF automatically when you leave — this prevents nuisance activation. Best for private offices, classrooms, and spaces with windows where daylight may be sufficient.

Some energy codes REQUIRE vacancy mode in certain spaces to prevent unnecessary activation.

---

## Lesson 3: Daylight, Time-Based & Multi-Level Controls

### Time-Based Controls

- **Time Clocks** — turn lights on/off at preset times; good for retail stores (open 9am–9pm every day), offices (on at 6am, off at 7pm), and exterior lighting (on at dusk, off at dawn).
- **Astronomical Time Clocks** — automatically adjust for sunrise/sunset changes throughout the year; ideal for exterior lighting (parking lots, building facades), since they don't need manual adjustment for daylight saving time.

### Daylight Harvesting

A system that dims or turns off electric lights when sufficient daylight is available. A photosensor measures light level — as daylight provides enough light, electric fixtures dim; as daylight fades, fixtures brighten back up, continuously and automatically.

**Where required:** Areas within 15 feet of windows (perimeter zones), areas under skylights, and sometimes the entire space if it's a daylight zone. Required by ASHRAE 90.1, IECC, Title 24, and most energy codes.

**Typical savings:** 20–40% in daylight zones.

### Multi-Level Switching

The ability to reduce lighting power by at least 50% using manual or automatic controls — via bi-level switching (two switches, turn half off), three-level switching (33%/66%/100%), or continuous dimming (dim to any level). Energy codes require multi-level control in most spaces.

**Example:** An office with 20 fixtures — all on = 100%, half on = 50%, meeting the code requirement. Or with dimming, all fixtures dimmed to 50% meets the same requirement.

### Task Tuning

Reducing light levels to the appropriate amount for the task, rather than over-lighting. Example: an office designed for 50 fc, where the IES requirement is 30–50 fc, can be dimmed to 35 fc for **30% energy savings** while still meeting code. Many offices are over-lit — reducing to comfortable levels within the IES range saves energy and often improves occupant comfort.

---

## Lesson 4: Networked Lighting Controls

Advanced systems where all fixtures and sensors communicate via a network, enabling central control from a computer or app, scheduling by zone, real-time occupancy data, energy usage monitoring, and integration with building automation. Examples: DALI networks, BACnet integration, proprietary systems (Lutron, Acuity Controls).

**Communication technologies:**

**Wired protocols:**
- **DALI** — digital control via dedicated wires, fixture-level addressability
- **BACnet** — integration protocol connecting lighting with HVAC, security, and other building systems
- **0–10V** — analog dimming signal (covered in Module 2, Lesson 3)

**Wireless protocols:**
- **Bluetooth Mesh** — wireless fixture control; fixtures form a "mesh" network communicating with each other, controlled via smartphone apps or cloud systems. Good for retrofits where new control wiring is difficult. Range: 30–100 ft per node.
- **Zigbee** — low-power wireless protocol for building automation, often integrated with comprehensive building management systems, connecting lighting with HVAC, security, and access control. Range: 30–100 ft per node.

**Emerging technology:**
- **PoE (Power over Ethernet)** — delivers both power AND data through standard Ethernet cables, enabling deep integration with IT networks and fixture-level monitoring/control. Not yet mainstream, but growing — good for new construction, tech-forward companies, and data centers.

**When to use wired vs. wireless:** Wired (0–10V, DALI) is the most reliable, proven technology — use it for most commercial projects. Wireless (Bluetooth, Zigbee) is best for retrofits where running new control wires is difficult or expensive. PoE is emerging — consider it for new construction when IT integration is a priority.

> 💡 **Beginner Tip:** For most commercial projects, stick with proven wired controls — 0–10V for basic dimming, DALI for advanced control. Wireless and PoE are rapidly evolving, so always verify current manufacturer capabilities and compatibility before specifying.

Networked systems are best for large commercial buildings, campuses, buildings with a building automation system (BAS), and projects wanting data/analytics. Cost is higher upfront but provides ongoing operational insights.

> 💡 **Beginner Tip — control specification for most projects:** (1) Occupancy sensors in all enclosed spaces (dual-tech recommended). (2) Daylight sensors in perimeter zones (15 ft from windows). (3) Time scheduling for the overall building. (4) Manual dimming in conference rooms. This meets most energy codes and provides good savings.

---

## Module 2B Quiz

Test your understanding of this module — 80% (8 of 10) required to pass.

<div class="clc-quiz" data-quiz-id="module-2b"></div>

---

## Key Takeaways

- ✅ Controls add 30–60% additional savings beyond the LED upgrade itself
- ✅ PIR for clear-motion spaces, ultrasonic for stillness/obstructions, dual-tech when reliability matters most
- ✅ Occupancy mode (auto-on) for high-traffic/hands-full spaces; vacancy mode (manual-on) for private offices and classrooms
- ✅ Daylight harvesting is required within 15 ft of windows on most energy codes
- ✅ Multi-level switching must reduce power by at least 50% in most spaces
- ✅ Wired controls (0–10V, DALI) are the safe default for most commercial projects; wireless suits retrofits

---

## Glossary

| Term | Definition |
|---|---|
| Occupancy Sensor | Detects presence and controls lighting automatically |
| Vacancy Sensor / Mode | Manual-on, auto-off control — prevents nuisance activation |
| PIR | Passive Infrared sensor (detects heat/movement) |
| Ultrasonic | Sensor using sound waves to detect movement |
| Dual-Technology Sensor | Combines PIR + Ultrasonic for reliability |
| Daylight Harvesting | Dimming electric lights when daylight is sufficient |
| Multi-Level Switching | Ability to reduce lighting power by at least 50% |
| Task Tuning | Reducing light to appropriate levels within the IES range |
| DALI | Digital dimming protocol with individual fixture addressability |
| BACnet | Integration protocol connecting lighting with HVAC/security systems |
| Bluetooth Mesh | Wireless fixture control via a mesh network of fixtures |
| Zigbee | Low-power wireless protocol for building automation |
| PoE (Power over Ethernet) | Delivers power and data through Ethernet cables |

---

*Next: [Module 3 — Codes & Certifications](/module-3/)*
