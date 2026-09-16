/* ==========================================================================
   Commercial Lighting Essentials — Page Feedback Widget
   Auto-appended to the bottom of every page (see index.html doneEach
   hook). Covers both SME corrections and general learner feedback via
   a single "type" field, so there's one place to review comments
   instead of separate PDF markup per review round. Submits to a
   Netlify Form named "course-feedback" (static hidden stub lives in
   index.html so Netlify's build-time scanner registers the schema)
   via a plain fetch POST — no backend needed.
   ========================================================================== */

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

  window.clcRenderFeedback = function (container, pageId) {
    if (!container || container.querySelector('.clc-feedback-wrap')) return;

    var wrap = el('div', 'clc-feedback-wrap');
    wrap.appendChild(el('p', 'clc-feedback-title', '💬 Feedback on this page'));
    wrap.appendChild(el('p', 'clc-feedback-sub',
      'Spot an error, have a suggestion, or a question? Let us know — it goes straight to LFI, no need to mark up a PDF.'));

    var form = el('form', 'clc-feedback-form');
    form.setAttribute('novalidate', 'novalidate');

    var row = el('div', 'clc-feedback-row');

    var typeField = el('div', 'clc-feedback-field');
    var typeLabel = el('label', 'clc-feedback-label', 'Type');
    var typeSelect = document.createElement('select');
    typeSelect.className = 'clc-feedback-select';
    [
      ['correction', 'Suggest a correction'],
      ['feedback', 'General feedback'],
      ['question', 'Question']
    ].forEach(function (opt) {
      var o = document.createElement('option');
      o.value = opt[0];
      o.textContent = opt[1];
      typeSelect.appendChild(o);
    });
    typeField.appendChild(typeLabel);
    typeField.appendChild(typeSelect);

    var nameField = el('div', 'clc-feedback-field');
    var nameLabel = el('label', 'clc-feedback-label', 'Your name (optional)');
    var nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.className = 'clc-feedback-name-input';
    nameInput.placeholder = 'First and last name';
    nameField.appendChild(nameLabel);
    nameField.appendChild(nameInput);

    row.appendChild(typeField);
    row.appendChild(nameField);
    form.appendChild(row);

    var commentField = el('div', 'clc-feedback-field');
    var commentLabel = el('label', 'clc-feedback-label', 'Comment');
    var commentInput = document.createElement('textarea');
    commentInput.className = 'clc-feedback-textarea';
    commentInput.placeholder = 'What did you notice?';
    commentField.appendChild(commentLabel);
    commentField.appendChild(commentInput);
    form.appendChild(commentField);

    var submitBtn = el('button', 'clc-feedback-submit', 'Submit feedback');
    submitBtn.type = 'submit';
    submitBtn.style.marginTop = '14px';
    form.appendChild(submitBtn);

    var resultBox = el('div', 'clc-feedback-result', 'Thanks — your feedback was submitted.');
    resultBox.hidden = true;

    form.addEventListener('submit', function (evt) {
      evt.preventDefault();

      if (!commentInput.value.trim()) {
        commentInput.focus();
        commentInput.classList.add('clc-feedback-error');
        return;
      }
      commentInput.classList.remove('clc-feedback-error');

      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting…';

      submitToNetlify({
        'form-name': 'course-feedback',
        type: typeSelect.value,
        page: pageId,
        name: nameInput.value.trim(),
        comment: commentInput.value.trim(),
        timestamp: new Date().toISOString()
      }).then(function () {
        form.hidden = true;
        resultBox.hidden = false;
      }).catch(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit feedback';
        resultBox.hidden = false;
        resultBox.className = 'clc-feedback-result clc-feedback-result-fail';
        resultBox.style.background = '#FDF2F2';
        resultBox.style.color = '#C0392B';
        resultBox.style.borderColor = '#F5C6C6';
        resultBox.textContent = 'Something went wrong sending that — please try again in a moment.';
      });
    });

    wrap.appendChild(form);
    wrap.appendChild(resultBox);
    container.appendChild(wrap);
  };
})();
