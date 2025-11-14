# How to Update Donation Progress

Your website now displays the current donation amount from your [Room to Read fundraising page](https://fundraise.roomtoread.org/fundraiseusd/bloom-literacy-project).

## Quick Update Instructions

### Step 1: Check Your Room to Read Page
Visit your fundraising page: https://fundraise.roomtoread.org/fundraiseusd/bloom-literacy-project

Look for the "Raised" amount at the top of the page.

### Step 2: Update Your Website

1. **Open the file:** `donate.html`

2. **Find this section** (near the bottom of the file, around line 294):

```javascript
// ===== UPDATE THIS SECTION WHEN DONATIONS COME IN =====
// Simply change the number below to match your Room to Read page
const CURRENT_AMOUNT_RAISED = 0;  // Update this with current amount
const GOAL_AMOUNT = 5000;
// ======================================================
```

3. **Change the number:**

For example, if you've raised $150:
```javascript
const CURRENT_AMOUNT_RAISED = 150;  // Update this with current amount
```

If you've raised $2,350:
```javascript
const CURRENT_AMOUNT_RAISED = 2350;  // Update this with current amount
```

4. **Save the file**

5. **Refresh your website** - The progress bar will automatically update!

## What Gets Updated

When you change the `CURRENT_AMOUNT_RAISED` number, the website automatically updates:

✅ The dollar amount displayed ("$150", "$2,350", etc.)  
✅ The progress bar percentage  
✅ The visual progress bar fills accordingly

## Examples

### Example 1: You've raised $500
```javascript
const CURRENT_AMOUNT_RAISED = 500;
const GOAL_AMOUNT = 5000;
```
**Result:** Shows "$500" and progress bar is 10% filled

### Example 2: You've raised $3,250
```javascript
const CURRENT_AMOUNT_RAISED = 3250;
const GOAL_AMOUNT = 5000;
```
**Result:** Shows "$3,250" and progress bar is 65% filled

### Example 3: You've reached your goal!
```javascript
const CURRENT_AMOUNT_RAISED = 5000;
const GOAL_AMOUNT = 5000;
```
**Result:** Shows "$5,000" and progress bar is 100% filled

## Changing Your Goal

If you decide to increase your fundraising goal:

```javascript
const CURRENT_AMOUNT_RAISED = 3000;
const GOAL_AMOUNT = 10000;  // New goal!
```

## Tips

1. **Update Regularly:** Check your Room to Read page weekly and update your website
2. **Round Numbers:** You can round to the nearest dollar (e.g., use `150` instead of `149.99`)
3. **Don't Use Commas:** Write `5000` not `5,000` (the website adds commas automatically)
4. **Don't Use Dollar Signs:** Write `150` not `$150`

## Where the Donation Button Goes

All "Donate" buttons on your website now link to:
**https://fundraise.roomtoread.org/fundraiseusd/bloom-literacy-project**

This ensures all donations are processed securely through Room to Read's official platform.

## Need Help?

If you have any issues updating the donation progress:
1. Make sure you save the file after editing
2. Clear your browser cache (Cmd/Ctrl + Shift + R)
3. Check that you only changed the number, not the rest of the code

---

## Quick Reference

**File to Edit:** `donate.html`  
**Line Number:** Around line 294  
**What to Change:** The number after `CURRENT_AMOUNT_RAISED =`  
**Save & Refresh:** Your changes appear immediately

🌸 Keep up the great work with the Bloom Literacy Project! 🌸

