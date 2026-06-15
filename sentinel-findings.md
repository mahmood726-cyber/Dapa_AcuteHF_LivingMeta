# sentinel-findings.md

*Written by Sentinel — WARN-tier findings.*

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:2364`
- **Detail:** NCT12345678 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT12345678 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:44:17.840099+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:5080`
- **Detail:** NCT01035255 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01035255 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:44:17.840099+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:5083`
- **Detail:** NCT01920711 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01920711 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:44:17.840099+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:5086`
- **Detail:** NCT02924727 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT02924727 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:44:17.840099+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:5089`
- **Detail:** NCT03988634 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT03988634 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:44:17.840099+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:16133`
- **Detail:** NCT01206062 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01206062 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:44:17.840099+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:22968`
- **Detail:** NCT05901831 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT05901831 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:44:17.840099+00:00

## [WARN] P1-fabrication-round-number-cluster
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:1`
- **Detail:** 4 suspicious round-number categories firing (cohort_round, p_round, or_perfect_null, or_double_round) — possible fabrication tell
- **Fix hint:** verify the quoted values against the source
- **Source:** F:\e156\docs\assurance-standard.md#data-checking  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:44:17.969931+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:7742`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:7742`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:8105`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:8105`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:8378`
- **Detail:** `parseInt(t?.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:8381`
- **Detail:** `parseInt(t?.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9662`
- **Detail:** `parseInt(diff?.originalCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9665`
- **Detail:** `parseInt(diff?.currentCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9668`
- **Detail:** `parseInt(diff?.addedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9671`
- **Detail:** `parseInt(diff?.removedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9683`
- **Detail:** `parseFloat(diff?.bestSimilarity ??    ) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9869`
- **Detail:** `parseInt(rawTrial?.versionCount ?? changes.length, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10007`
- **Detail:** `parseInt(rawTrial?.current?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10034`
- **Detail:** `parseInt(rawTrial?.original?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10049`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.outcomes, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10052`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.primaryOutcomes, 10) ` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10055`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.secondaryOutcomes, 10` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10058`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.enrollmentInfo, 10) |` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10064`
- **Detail:** `parseInt(rawTrial?.outcomesUpdateCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10088`
- **Detail:** `parseInt(rawPack?.summary?.errorCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10520`
- **Detail:** `parseInt(entry?.ctgov ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10523`
- **Detail:** `parseInt(entry?.pubmed ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10526`
- **Detail:** `parseInt(entry?.openalex ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:43875`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:43919`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:43981`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44313`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44313`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44313`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44331`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44331`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:20.116340+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:2364`
- **Detail:** NCT12345678 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT12345678 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:44:35.921686+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:5080`
- **Detail:** NCT01035255 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01035255 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:44:35.921686+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:5083`
- **Detail:** NCT01920711 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01920711 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:44:35.921686+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:5086`
- **Detail:** NCT02924727 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT02924727 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:44:35.921686+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:5089`
- **Detail:** NCT03988634 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT03988634 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:44:35.921686+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:16133`
- **Detail:** NCT01206062 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01206062 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:44:35.921686+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:22968`
- **Detail:** NCT05901831 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT05901831 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:44:35.921686+00:00

## [WARN] P1-fabrication-round-number-cluster
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:1`
- **Detail:** 4 suspicious round-number categories firing (cohort_round, p_round, or_perfect_null, or_double_round) — possible fabrication tell
- **Fix hint:** verify the quoted values against the source
- **Source:** F:\e156\docs\assurance-standard.md#data-checking  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:44:36.072470+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:7742`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:7742`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:8105`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:8105`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:8378`
- **Detail:** `parseInt(t?.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:8381`
- **Detail:** `parseInt(t?.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9662`
- **Detail:** `parseInt(diff?.originalCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9665`
- **Detail:** `parseInt(diff?.currentCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9668`
- **Detail:** `parseInt(diff?.addedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9671`
- **Detail:** `parseInt(diff?.removedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9683`
- **Detail:** `parseFloat(diff?.bestSimilarity ??    ) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9869`
- **Detail:** `parseInt(rawTrial?.versionCount ?? changes.length, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10007`
- **Detail:** `parseInt(rawTrial?.current?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10034`
- **Detail:** `parseInt(rawTrial?.original?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10049`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.outcomes, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10052`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.primaryOutcomes, 10) ` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10055`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.secondaryOutcomes, 10` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10058`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.enrollmentInfo, 10) |` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10064`
- **Detail:** `parseInt(rawTrial?.outcomesUpdateCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10088`
- **Detail:** `parseInt(rawPack?.summary?.errorCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10520`
- **Detail:** `parseInt(entry?.ctgov ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10523`
- **Detail:** `parseInt(entry?.pubmed ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10526`
- **Detail:** `parseInt(entry?.openalex ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:43875`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:43919`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:43981`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44313`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44313`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44313`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44331`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44331`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:38.192257+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:2364`
- **Detail:** NCT12345678 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT12345678 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:44:48.410736+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:5080`
- **Detail:** NCT01035255 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01035255 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:44:48.410736+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:5083`
- **Detail:** NCT01920711 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01920711 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:44:48.410736+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:5086`
- **Detail:** NCT02924727 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT02924727 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:44:48.410736+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:5089`
- **Detail:** NCT03988634 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT03988634 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:44:48.410736+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:16133`
- **Detail:** NCT01206062 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01206062 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:44:48.410736+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:22968`
- **Detail:** NCT05901831 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT05901831 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:44:48.410736+00:00

## [WARN] P1-fabrication-round-number-cluster
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:1`
- **Detail:** 4 suspicious round-number categories firing (cohort_round, p_round, or_perfect_null, or_double_round) — possible fabrication tell
- **Fix hint:** verify the quoted values against the source
- **Source:** F:\e156\docs\assurance-standard.md#data-checking  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:44:48.560472+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:7742`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:7742`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:8105`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:8105`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:8378`
- **Detail:** `parseInt(t?.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:8381`
- **Detail:** `parseInt(t?.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9662`
- **Detail:** `parseInt(diff?.originalCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9665`
- **Detail:** `parseInt(diff?.currentCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9668`
- **Detail:** `parseInt(diff?.addedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9671`
- **Detail:** `parseInt(diff?.removedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9683`
- **Detail:** `parseFloat(diff?.bestSimilarity ??    ) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9869`
- **Detail:** `parseInt(rawTrial?.versionCount ?? changes.length, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10007`
- **Detail:** `parseInt(rawTrial?.current?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10034`
- **Detail:** `parseInt(rawTrial?.original?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10049`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.outcomes, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10052`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.primaryOutcomes, 10) ` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10055`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.secondaryOutcomes, 10` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10058`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.enrollmentInfo, 10) |` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10064`
- **Detail:** `parseInt(rawTrial?.outcomesUpdateCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10088`
- **Detail:** `parseInt(rawPack?.summary?.errorCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10520`
- **Detail:** `parseInt(entry?.ctgov ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10523`
- **Detail:** `parseInt(entry?.pubmed ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10526`
- **Detail:** `parseInt(entry?.openalex ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:43875`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:43919`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:43981`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44313`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44313`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44313`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44331`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44331`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:44:50.999026+00:00

## [WARN] P1-unpopulated-placeholder
- **Location:** `smoke.test.js:59`
- **Detail:** pattern matched: if (/\{\{[a-zA-Z_]+\}\}|REPLACE_ME|__PLACEHOLDER__/.test(main)) {
- **Fix hint:** Populate the placeholder or escape it before shipping. If the braces are intentional template syntax in a non-template file, exclude the file path via the rule's exclude list.

- **Source:** html-apps.md#safety-checks
- **When:** 2026-06-13T11:51:09.661703+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:2364`
- **Detail:** NCT12345678 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT12345678 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:51:10.510566+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:5080`
- **Detail:** NCT01035255 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01035255 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:51:10.510566+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:5083`
- **Detail:** NCT01920711 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01920711 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:51:10.510566+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:5086`
- **Detail:** NCT02924727 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT02924727 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:51:10.510566+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:5089`
- **Detail:** NCT03988634 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT03988634 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:51:10.510566+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:16133`
- **Detail:** NCT01206062 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01206062 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:51:10.510566+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:22968`
- **Detail:** NCT05901831 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT05901831 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:51:10.510566+00:00

## [WARN] P1-fabrication-round-number-cluster
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:1`
- **Detail:** 4 suspicious round-number categories firing (cohort_round, p_round, or_perfect_null, or_double_round) — possible fabrication tell
- **Fix hint:** verify the quoted values against the source
- **Source:** F:\e156\docs\assurance-standard.md#data-checking  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:51:10.695674+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:7742`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:7742`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:8105`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:8105`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:8378`
- **Detail:** `parseInt(t?.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:8381`
- **Detail:** `parseInt(t?.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9662`
- **Detail:** `parseInt(diff?.originalCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9665`
- **Detail:** `parseInt(diff?.currentCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9668`
- **Detail:** `parseInt(diff?.addedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9671`
- **Detail:** `parseInt(diff?.removedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9683`
- **Detail:** `parseFloat(diff?.bestSimilarity ??    ) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9869`
- **Detail:** `parseInt(rawTrial?.versionCount ?? changes.length, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10007`
- **Detail:** `parseInt(rawTrial?.current?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10034`
- **Detail:** `parseInt(rawTrial?.original?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10049`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.outcomes, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10052`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.primaryOutcomes, 10) ` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10055`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.secondaryOutcomes, 10` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10058`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.enrollmentInfo, 10) |` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10064`
- **Detail:** `parseInt(rawTrial?.outcomesUpdateCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10088`
- **Detail:** `parseInt(rawPack?.summary?.errorCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10520`
- **Detail:** `parseInt(entry?.ctgov ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10523`
- **Detail:** `parseInt(entry?.pubmed ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10526`
- **Detail:** `parseInt(entry?.openalex ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:43875`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:43919`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:43981`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44313`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44313`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44313`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44331`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44331`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:12.955746+00:00

## [WARN] P1-unpopulated-placeholder
- **Location:** `smoke.test.js:59`
- **Detail:** pattern matched: if (/\{\{[a-zA-Z_]+\}\}|REPLACE_ME|__PLACEHOLDER__/.test(main)) {
- **Fix hint:** Populate the placeholder or escape it before shipping. If the braces are intentional template syntax in a non-template file, exclude the file path via the rule's exclude list.

- **Source:** html-apps.md#safety-checks
- **When:** 2026-06-13T11:51:21.733652+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:2364`
- **Detail:** NCT12345678 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT12345678 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:51:22.564824+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:5080`
- **Detail:** NCT01035255 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01035255 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:51:22.564824+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:5083`
- **Detail:** NCT01920711 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01920711 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:51:22.564824+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:5086`
- **Detail:** NCT02924727 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT02924727 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:51:22.564824+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:5089`
- **Detail:** NCT03988634 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT03988634 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:51:22.564824+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:16133`
- **Detail:** NCT01206062 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01206062 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:51:22.564824+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:22968`
- **Detail:** NCT05901831 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT05901831 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:51:22.564824+00:00

## [WARN] P1-fabrication-round-number-cluster
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:1`
- **Detail:** 4 suspicious round-number categories firing (cohort_round, p_round, or_perfect_null, or_double_round) — possible fabrication tell
- **Fix hint:** verify the quoted values against the source
- **Source:** F:\e156\docs\assurance-standard.md#data-checking  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:51:22.741783+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:7742`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:7742`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:8105`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:8105`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:8378`
- **Detail:** `parseInt(t?.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:8381`
- **Detail:** `parseInt(t?.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9662`
- **Detail:** `parseInt(diff?.originalCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9665`
- **Detail:** `parseInt(diff?.currentCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9668`
- **Detail:** `parseInt(diff?.addedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9671`
- **Detail:** `parseInt(diff?.removedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9683`
- **Detail:** `parseFloat(diff?.bestSimilarity ??    ) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9869`
- **Detail:** `parseInt(rawTrial?.versionCount ?? changes.length, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10007`
- **Detail:** `parseInt(rawTrial?.current?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10034`
- **Detail:** `parseInt(rawTrial?.original?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10049`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.outcomes, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10052`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.primaryOutcomes, 10) ` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10055`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.secondaryOutcomes, 10` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10058`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.enrollmentInfo, 10) |` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10064`
- **Detail:** `parseInt(rawTrial?.outcomesUpdateCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10088`
- **Detail:** `parseInt(rawPack?.summary?.errorCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10520`
- **Detail:** `parseInt(entry?.ctgov ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10523`
- **Detail:** `parseInt(entry?.pubmed ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10526`
- **Detail:** `parseInt(entry?.openalex ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:43875`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:43919`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:43981`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44313`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44313`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44313`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44331`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44331`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:24.985729+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:2364`
- **Detail:** NCT12345678 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT12345678 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:51:43.753568+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:5080`
- **Detail:** NCT01035255 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01035255 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:51:43.753568+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:5083`
- **Detail:** NCT01920711 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01920711 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:51:43.753568+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:5086`
- **Detail:** NCT02924727 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT02924727 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:51:43.753568+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:5089`
- **Detail:** NCT03988634 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT03988634 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:51:43.753568+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:16133`
- **Detail:** NCT01206062 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01206062 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:51:43.753568+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:22968`
- **Detail:** NCT05901831 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT05901831 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:51:43.753568+00:00

## [WARN] P1-fabrication-round-number-cluster
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:1`
- **Detail:** 4 suspicious round-number categories firing (cohort_round, p_round, or_perfect_null, or_double_round) — possible fabrication tell
- **Fix hint:** verify the quoted values against the source
- **Source:** F:\e156\docs\assurance-standard.md#data-checking  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T11:51:43.963855+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:7742`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:7742`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:8105`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:8105`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:8378`
- **Detail:** `parseInt(t?.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:8381`
- **Detail:** `parseInt(t?.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9662`
- **Detail:** `parseInt(diff?.originalCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9665`
- **Detail:** `parseInt(diff?.currentCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9668`
- **Detail:** `parseInt(diff?.addedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9671`
- **Detail:** `parseInt(diff?.removedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9683`
- **Detail:** `parseFloat(diff?.bestSimilarity ??    ) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:9869`
- **Detail:** `parseInt(rawTrial?.versionCount ?? changes.length, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10007`
- **Detail:** `parseInt(rawTrial?.current?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10034`
- **Detail:** `parseInt(rawTrial?.original?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10049`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.outcomes, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10052`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.primaryOutcomes, 10) ` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10055`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.secondaryOutcomes, 10` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10058`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.enrollmentInfo, 10) |` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10064`
- **Detail:** `parseInt(rawTrial?.outcomesUpdateCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10088`
- **Detail:** `parseInt(rawPack?.summary?.errorCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10520`
- **Detail:** `parseInt(entry?.ctgov ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10523`
- **Detail:** `parseInt(entry?.pubmed ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:10526`
- **Detail:** `parseInt(entry?.openalex ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:43875`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:43919`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:43981`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44313`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44313`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44313`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44331`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `DAPA_ACUTE_HF_REVIEW.html:44331`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T11:51:46.545404+00:00
