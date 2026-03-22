

## Plan: Container Sizes in Feet, Venyoo Chat Widget, Footer Year Update

### 1. Add feet sizes to container names in Pricing.tsx

Update the `containers` array labels:
- `"5 м²"` → `"5 м² (7 ft)"`
- `"15 м²"` → `"15 м² (20 ft)"`
- `"30 м²"` → `"30 м² (40 ft)"`

**File:** `src/components/Pricing.tsx` (lines 12, 19, 26)

### 2. Replace Wheel of Fortune with Venyoo chat widget

**a) Create `src/components/VenyooChat.tsx`**
- A floating green pulsing button (styled like current WheelTrigger — `fixed bottom-6 right-6`, green bg, pulse animation)
- Icon: `MessageCircle` from lucide-react instead of `Gift`
- Text: "Написать нам" (hidden on small screens)
- On click: load the Venyoo widget script dynamically (append `<script src="//api.venyoo.ru/wnew.js?wc=venyoo/default/science&widget_id=6459940496605192843">` to document body)
- The script auto-opens the chat widget once loaded

**b) Update `src/pages/Index.tsx`**
- Remove `WheelTrigger` import and usage
- Import and render `<VenyooChat />` instead

### 3. Update footer year

**File:** `src/components/Footer.tsx` (line 81)
- Change `© 2025` → `© 2026`

### Summary of files changed
- `src/components/Pricing.tsx` — feet sizes added to container type labels
- `src/components/VenyooChat.tsx` — new component replacing WheelTrigger
- `src/pages/Index.tsx` — swap WheelTrigger for VenyooChat
- `src/components/Footer.tsx` — year 2025 → 2026

