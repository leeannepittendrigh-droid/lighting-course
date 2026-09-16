/* ==========================================================================
   Commercial Lighting Essentials — Module Quizzes
   Question banks + rendering/scoring logic. Results (name, module, score,
   pass/fail) submit to a Netlify Form named "quiz-results" (the static,
   hidden stub form lives in index.html so Netlify's build-time scanner
   registers the field schema) via a plain fetch POST — no backend needed.
   ========================================================================== */

window.CLC_QUIZZES = {

  'module-1': {
    title: 'Module 1 Quiz — Lighting Fundamentals',
    passPercent: 80,
    questions: [
      {
        q: 'A customer says "I need something as bright as my old 400W metal halide." What number should you focus on?',
        choices: ['Wattage', 'Lumens', 'Voltage', 'CRI'],
        correct: 1
      },
      {
        q: 'What is the formula for efficacy?',
        choices: ['Watts ÷ Lumens', 'Lumens ÷ Watts', 'Lumens × Watts', 'Watts ÷ Volts'],
        correct: 1
      },
      {
        q: 'A fixture rated 110 lm/W falls into which efficacy tier?',
        choices: ['Budget LED', 'Good LED', 'Old fluorescent', 'Old metal halide'],
        correct: 1
      },
      {
        q: 'Which CCT range is best for a restaurant or hotel lobby?',
        choices: ['2700–3000K (warm white)', '3500–4000K (neutral)', '5000–6500K (cool/daylight)', '6500K+'],
        correct: 0
      },
      {
        q: 'A retail customer needs merchandise to look accurate and appealing. What CRI range should you specify?',
        choices: ['60–79', '80–89', '90–95', 'CRI does not matter for retail'],
        correct: 2
      },
      {
        q: 'What does a foot-candle (fc) measure?',
        choices: ['Total light output from a fixture', 'The amount of light falling on a surface', 'Electrical power consumption', 'Color accuracy'],
        correct: 1
      },
      {
        q: 'IES publishes the recommended lighting-level standards used across the industry. What does IES stand for?',
        choices: ['Institute of Electrical Standards', 'Illuminating Engineering Society', 'International Energy Society', 'Indoor Environmental Standards'],
        correct: 1
      },
      {
        q: 'Which lighting technology has a 5–10 minute warm-up time and takes 10–15 minutes to restart after a power interruption?',
        choices: ['LED', 'Fluorescent', 'Metal Halide (HID)', 'Halogen'],
        correct: 2
      },
      {
        q: 'What is the minimum required runtime for battery-backup emergency lighting?',
        choices: ['30 minutes', '60 minutes', '90 minutes', '120 minutes'],
        correct: 2
      },
      {
        q: 'What size and type of troffer does LFI currently stock?',
        choices: ['2×2 ft, Direct/Indirect', '2×4 ft, Volumetric', '1×4 ft, Volumetric', '2×4 ft, Direct/Indirect'],
        correct: 1
      }
    ]
  },

  'module-2': {
    title: 'Module 2 Quiz — Advanced Product Knowledge',
    passPercent: 80,
    questions: [
      {
        q: 'What is the formula for calculating current (amps)?',
        choices: ['Amps = Watts × Volts', 'Amps = Watts ÷ Volts', 'Amps = Volts ÷ Watts', 'Amps = Lumens ÷ Watts'],
        correct: 1
      },
      {
        q: 'What is the minimum power factor (PF) you should look for on an LED spec sheet?',
        choices: ['0.70', '0.80', '0.90', '0.99'],
        correct: 2
      },
      {
        q: 'Which driver type is used inside most complete commercial fixtures like high bays and troffers?',
        choices: ['Constant Voltage', 'Constant Current', 'Variable Frequency', 'Triac'],
        correct: 1
      },
      {
        q: 'About what percentage of commercial projects use 0–10V dimming?',
        choices: ['50%', '70%', '90%', '100%'],
        correct: 2
      },
      {
        q: 'Which dimming protocol lets you control each fixture individually by digital address?',
        choices: ['0–10V', 'TRIAC', 'DALI', 'None of these'],
        correct: 2
      },
      {
        q: 'Which IES distribution type is most commonly used for parking lot rows with poles between the rows?',
        choices: ['Type I', 'Type II', 'Type III', 'Type V'],
        correct: 2
      },
      {
        q: 'A "wide" beam angle is generally considered to be:',
        choices: ['Less than 40°', '40–80°', 'Greater than 80°', 'Exactly 90°'],
        correct: 2
      },
      {
        q: 'Using the spacing criteria formula (Maximum Spacing = SC × Mounting Height), what is the max spacing for SC = 1.2 and a 10 ft mounting height?',
        choices: ['8 feet', '10 feet', '12 feet', '15 feet'],
        correct: 2
      },
      {
        q: 'What THD (Total Harmonic Distortion) should you look for as a minimum quality bar?',
        choices: ['Under 10%', 'Under 20%', 'Under 40%', 'THD does not matter'],
        correct: 1
      },
      {
        q: 'What is the standard minimum IP rating for outdoor fixtures?',
        choices: ['IP20', 'IP44', 'IP65', 'IP20 is fine if it is under a roof'],
        correct: 2
      }
    ]
  },

  'module-2b': {
    title: 'Module 2B Quiz — Lighting Controls & Sensors',
    passPercent: 80,
    questions: [
      {
        q: 'Roughly how much additional energy savings can lighting controls add on top of an LED upgrade?',
        choices: ['5–10%', '10–20%', '30–60%', '90%+'],
        correct: 2
      },
      {
        q: 'Which occupancy sensor technology detects body heat movement and struggles with stationary people?',
        choices: ['Ultrasonic', 'PIR (Passive Infrared)', 'Dual-Technology', 'Photocell'],
        correct: 1
      },
      {
        q: 'Which sensor type is best for a restroom with stalls, since it can detect movement PIR would miss?',
        choices: ['PIR only', 'Ultrasonic', 'Manual switch', 'Time clock'],
        correct: 1
      },
      {
        q: 'In Vacancy Mode, how do lights turn on?',
        choices: ['Automatically, when someone enters', 'Manually — the person must turn them on', 'They never turn on automatically or manually', 'By voice command'],
        correct: 1
      },
      {
        q: 'Energy codes generally require daylight-responsive controls within how many feet of windows?',
        choices: ['5 feet', '15 feet', '30 feet', '50 feet'],
        correct: 1
      },
      {
        q: 'Multi-level switching requirements generally require the ability to reduce lighting power by at least:',
        choices: ['10%', '25%', '50%', '75%'],
        correct: 2
      },
      {
        q: 'What is "task tuning"?',
        choices: ['Increasing brightness beyond code minimums', 'Reducing light levels to the appropriate amount for the task, within the IES range', 'Programming a DALI network', 'Replacing HID with LED'],
        correct: 1
      },
      {
        q: 'Which wireless technology uses a "mesh" network where fixtures communicate with each other, controlled via a smartphone app?',
        choices: ['DALI', 'BACnet', 'Bluetooth Mesh', '0–10V'],
        correct: 2
      },
      {
        q: 'For most commercial projects, which type of controls is recommended as the most reliable, proven choice?',
        choices: ['Wireless (Bluetooth/Zigbee)', 'Wired (0–10V, DALI)', 'PoE', 'Whichever is cheapest'],
        correct: 1
      },
      {
        q: 'What does PoE (an emerging lighting-controls technology) stand for?',
        choices: ['Power over Ethernet', 'Point of Entry', 'Photocell over Ethernet', 'Power on Exit'],
        correct: 0
      }
    ]
  },

  'module-3': {
    title: 'Module 3 Quiz — Codes & Certifications',
    passPercent: 80,
    questions: [
      {
        q: 'Which NEC article is the primary reference for lighting fixtures (luminaires)?',
        choices: ['Article 110', 'Article 250', 'Article 410', 'Article 700'],
        correct: 2
      },
      {
        q: 'Per NFPA 101, what is the minimum AVERAGE illumination required along a path of egress during an emergency?',
        choices: ['0.1 foot-candle', '1 foot-candle', '5 foot-candles', '10 foot-candles'],
        correct: 1
      },
      {
        q: 'What is the minimum runtime required for emergency lighting after normal power fails?',
        choices: ['30 minutes', '60 minutes', '90 minutes', '4 hours'],
        correct: 2
      },
      {
        q: 'What is the formula for Lighting Power Density (LPD)?',
        choices: ['Total Watts ÷ Total Square Feet', 'Total Lumens ÷ Total Watts', 'Total Square Feet ÷ Total Watts', 'Total Watts × Total Square Feet'],
        correct: 0
      },
      {
        q: 'Which U.S. energy code is generally considered the most stringent?',
        choices: ['ASHRAE 90.1', 'IECC', 'Title 24 (California)', 'NFPA 70'],
        correct: 2
      },
      {
        q: 'Can a building inspector require a fixture to be UL listed specifically, and reject an equivalent ETL-listed product?',
        choices: ['Yes, UL is always required', 'No — inspectors must accept either UL or ETL', 'Only for emergency lighting', 'Only in California'],
        correct: 1
      },
      {
        q: 'Which UL standard specifically covers emergency lighting (exit signs, battery packs)?',
        choices: ['UL 1598', 'UL 8750', 'UL 924', 'UL 2108'],
        correct: 2
      },
      {
        q: 'Which DLC tier qualifies for the highest utility rebates?',
        choices: ['DLC Standard', 'DLC Premium', 'They are the same', 'Neither — only ENERGY STAR affects rebates'],
        correct: 1
      },
      {
        q: 'In an IP rating like IP65, what does the second digit indicate?',
        choices: ['Dust/solid protection', 'Liquid/water protection', 'Impact resistance', 'Operating temperature range'],
        correct: 1
      },
      {
        q: 'What IK rating is the standard for outdoor commercial fixtures like parking lot lights and wall packs?',
        choices: ['IK04', 'IK08', 'IK10', 'IK rating does not apply outdoors'],
        correct: 1
      }
    ]
  }

};

(function () {
  'use strict';

  function submitToNetlify(fields) {
    var body = Object.keys(fields)
      .map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(fields[k]); })
      .join('&');
    return fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body
    });
  }

  function el(tag, className, html) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  window.clcRenderQuiz = function (container, quizId) {
    if (!container || container.dataset.clcQuizRendered) return;
    container.dataset.clcQuizRendered = '1';

    var quiz = window.CLC_QUIZZES[quizId];
    if (!quiz) {
      container.appendChild(el('p', 'clc-quiz-empty', 'Quiz not found for "' + quizId + '".'));
      return;
    }

    var wrap = el('div', 'clc-quiz-wrap');
    var storageKey = 'clc-quiz-passed-' + quizId;
    var alreadyPassed = false;
    try { alreadyPassed = window.localStorage.getItem(storageKey) === '1'; } catch (e) {}

    var header = el('div', 'clc-quiz-header');
    header.appendChild(el('h4', 'clc-quiz-title', quiz.title));
    header.appendChild(el('p', 'clc-quiz-sub',
      quiz.questions.length + ' questions &middot; ' + quiz.passPercent + '% required to pass' +
      (alreadyPassed ? ' &middot; <span class="clc-quiz-badge">✓ Previously passed on this device</span>' : '')
    ));
    wrap.appendChild(header);

    var form = el('form', 'clc-quiz-form');
    form.setAttribute('novalidate', 'novalidate');

    var nameLabel = el('label', 'clc-quiz-name-label', 'Your name');
    var nameInput = el('input', 'clc-quiz-name-input');
    nameInput.type = 'text';
    nameInput.placeholder = 'First and last name';
    nameInput.required = true;
    nameLabel.appendChild(nameInput);
    form.appendChild(nameLabel);

    quiz.questions.forEach(function (item, qIdx) {
      var qBlock = el('div', 'clc-quiz-question');
      qBlock.appendChild(el('p', 'clc-quiz-q-text', (qIdx + 1) + '. ' + item.q));
      var choicesWrap = el('div', 'clc-quiz-choices');
      item.choices.forEach(function (choice, cIdx) {
        var optLabel = el('label', 'clc-quiz-choice');
        var radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'clc-q-' + quizId + '-' + qIdx;
        radio.value = String(cIdx);
        optLabel.appendChild(radio);
        optLabel.appendChild(document.createTextNode(' ' + choice));
        choicesWrap.appendChild(optLabel);
      });
      qBlock.appendChild(choicesWrap);
      form.appendChild(qBlock);
    });

    var submitBtn = el('button', 'clc-quiz-submit', 'Submit Quiz');
    submitBtn.type = 'submit';
    form.appendChild(submitBtn);

    var resultBox = el('div', 'clc-quiz-result');
    resultBox.hidden = true;

    form.addEventListener('submit', function (evt) {
      evt.preventDefault();

      if (!nameInput.value.trim()) {
        nameInput.focus();
        nameInput.classList.add('clc-quiz-error');
        return;
      }
      nameInput.classList.remove('clc-quiz-error');

      var unanswered = [];
      var correctCount = 0;

      quiz.questions.forEach(function (item, qIdx) {
        var selected = form.querySelector('input[name="clc-q-' + quizId + '-' + qIdx + '"]:checked');
        if (!selected) {
          unanswered.push(qIdx);
        } else if (parseInt(selected.value, 10) === item.correct) {
          correctCount++;
        }
      });

      if (unanswered.length) {
        var firstUnanswered = form.querySelectorAll('.clc-quiz-question')[unanswered[0]];
        firstUnanswered.classList.add('clc-quiz-error');
        firstUnanswered.scrollIntoView({ behavior: 'smooth', block: 'center' });
        resultBox.hidden = false;
        resultBox.className = 'clc-quiz-result clc-quiz-result-warn';
        resultBox.textContent = 'Please answer all ' + quiz.questions.length + ' questions before submitting (' + unanswered.length + ' remaining).';
        return;
      }

      var total = quiz.questions.length;
      var percent = Math.round((correctCount / total) * 100);
      var passed = percent >= quiz.passPercent;

      resultBox.hidden = false;
      resultBox.className = 'clc-quiz-result ' + (passed ? 'clc-quiz-result-pass' : 'clc-quiz-result-fail');
      resultBox.innerHTML = (passed ? '✅ ' : '❌ ') +
        '<strong>' + correctCount + ' / ' + total + ' correct (' + percent + '%)</strong> — ' +
        (passed ? 'You passed!' : 'Not quite — ' + quiz.passPercent + '% is required to pass. Review the lesson and try again.');

      if (passed) {
        try { window.localStorage.setItem(storageKey, '1'); } catch (e) {}
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitted';

      submitToNetlify({
        'form-name': 'quiz-results',
        name: nameInput.value.trim(),
        module: quizId,
        score: correctCount + '/' + total,
        percent: String(percent),
        passed: passed ? 'Yes' : 'No',
        timestamp: new Date().toISOString()
      }).catch(function () {
        /* Silent — the trainee's result is still shown on-screen even if
           the background submission fails (e.g. offline). */
      });

      var retakeBtn = el('button', 'clc-quiz-retake', 'Retake Quiz');
      retakeBtn.type = 'button';
      retakeBtn.addEventListener('click', function () {
        container.dataset.clcQuizRendered = '';
        container.innerHTML = '';
        window.clcRenderQuiz(container, quizId);
      });
      resultBox.appendChild(document.createElement('br'));
      resultBox.appendChild(retakeBtn);
    });

    wrap.appendChild(form);
    wrap.appendChild(resultBox);
    container.appendChild(wrap);
  };
})();
