#!/usr/bin/env node
/* sentinel:skip-file — this is a test fixture; it references placeholder tokens
   (REPLACE_ME / __PLACEHOLDER__) inside detection regexes, not as unfilled content. */
/* Minimal smoke test for the Dapa_AcuteHF_LivingMeta dashboard.
 *
 * Run: node smoke.test.js
 *
 * This is a single-file HTML app, so the smoke test validates the deployable
 * surface rather than internal browser-only engine functions:
 *   1) all shipped JS assets and the index.html redirect shim parse (no syntax errors);
 *   2) the patient-facing template literals in the main dashboard do NOT contain the
 *      broken "' + (RapidMeta...) + '" concat-in-template literal that renders verbatim
 *      to patients (regression guard for the 2026-06 sweep fix);
 *   3) no unfilled base-template tokens leak into the shipped HTML.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const vm = require('vm');

const ROOT = __dirname;
let pass = 0, fail = 0;
function ok(name) { pass++; console.log('  ok   - ' + name); }
function bad(name, msg) { fail++; console.log('  FAIL - ' + name + (msg ? ' :: ' + msg : '')); }

// 1) JS assets parse
const jsFiles = [];
for (const dir of ['assets', 'assets/js']) {
  const d = path.join(ROOT, dir);
  if (fs.existsSync(d)) for (const f of fs.readdirSync(d)) if (f.endsWith('.js')) jsFiles.push(path.join(dir, f));
}
for (const rel of jsFiles) {
  try { cp.execFileSync(process.execPath, ['--check', path.join(ROOT, rel)], { stdio: 'pipe' }); ok('parses: ' + rel); }
  catch (e) { bad('parses: ' + rel, String(e.stderr || e).slice(0, 200)); }
}

// 1b) index.html redirect shim parses as a script
const idx = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const m = idx.match(/<script>([\s\S]*?)<\/script>/);
if (m) {
  try { new vm.Script(m[1]); ok('parses: index.html shim'); }
  catch (e) { bad('parses: index.html shim', String(e).slice(0, 200)); }
} else { ok('index.html has no inline script (nothing to parse)'); }

// 2) regression guard: no broken concat-in-template in patient text.
// The original bug pasted single-quote concatenation ("' + (expr) + '") INTO a
// backtick template literal, so the operators rendered verbatim to patients. The
// signature is a line that uses ${...} interpolation AND ALSO contains a literal
// "' + (" — a real concat would never sit next to a template interpolation.
const main = fs.readFileSync(path.join(ROOT, 'DAPA_ACUTE_HF_REVIEW.html'), 'utf8');
// Exact signature of the original bug: backtick-template prose "patients, " followed by a
// stray "' + (RapidMeta..." concat operator that rendered verbatim to patients.
if (/patients,\s*'\s*\+\s*\(RapidMeta/.test(main)) {
  bad('no concat-in-template in patient text', "broken \"patients, ' + (RapidMeta...\" template found");
} else {
  ok('no concat-in-template in patient text');
}

// 3) no unfilled base-template tokens
if (/\{\{[a-zA-Z_]+\}\}|REPLACE_ME|__PLACEHOLDER__/.test(main)) {
  bad('no unfilled template tokens in shipped HTML');
} else {
  ok('no unfilled template tokens in shipped HTML');
}

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail === 0 ? 0 : 1);
