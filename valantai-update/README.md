# valantai-update.zip

7 files. Drop them into the repo at the paths shown below.

## Files

```
components/zones/OpeningZone.tsx          (replace)  hero + Core Intelligence Field, planet at CY = H * 0.50
components/zones/ThesisZone.tsx           (replace)  founders' manifesto, justified body
components/zones/EngagementsZone.tsx      (replace)  "From current engagements" section
lib/solutions.ts                          (NEW)     copy data for Build, Capital, Counsel
app/solutions/[slug]/page.tsx             (replace)  reads lib/solutions.ts, no compact prop
app/team/tom-speechley/page.tsx           (NEW)     Tom Speechley bio page
patchcomp/app/solutions/[slug]/page.tsx   (replace)  neutralises the stale-folder TS error
```

## How to apply

**Preferred: GitHub web editor, one file at a time.**

1. Open the repo on GitHub.
2. Press `.` to open the web editor.
3. For each file in this zip:
   - Navigate to the matching path (or create the folder if marked NEW).
   - Open the file, select all, paste the contents from this zip.
   - Commit.

This is the same workflow we've been using. It avoids the stale-folder
problem that ZIP uploads have caused on this repo before.

**Avoid: uploading this zip directly via "Add file -> Upload files".**

GitHub will unpack it and the folder structure will be applied. That's
fine in theory, but every prior ZIP upload to this repo has left junk
folders behind. If you must upload as a zip, confirm afterwards that
no new top-level folders appeared.

## What the patchcomp file is for

The repo contains a stale folder `patchcomp/` left over from an earlier
ZIP. Inside it, `app/solutions/[slug]/page.tsx` still references a
`compact` prop on `PageHero` that doesn't exist, which fails the
TypeScript build. Replacing its contents with `export {};` makes it
a valid but empty TypeScript module so the build passes.

Long-term, the whole `patchcomp/` folder (and `patchfix/`, `patchfinal/`,
`onefix/`, `one/`, `verified/`, `clean/`) should be deleted from the
repo. The web editor can delete folders one file at a time, or the
GitHub UI's "Delete file" works.

## Copy changes from Tom's doc

All em-dashes removed.
Body paragraphs justified.
Typos fixed: "survice" -> "survive", "ond" -> "and".
"5+ year horizon" -> "five-year-plus horizon".
"6-12 weeks" -> "6 to 12 weeks".
"UK-GCC corridor" -> "UK and GCC corridor".
One rhetorical "not X" inversion trimmed on the Capital page; flag if you want it back.

Everything else is Tom's wording verbatim.
