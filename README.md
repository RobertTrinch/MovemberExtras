![Movember Extras logo](https://github.com/RobertTrinch/MovemberExtras/blob/master/public/android-chrome-192x192.png?raw=true)

# Movember Extras: Goal and Donation Alerts Overlays

Movember Extras provides tools to help you fundraise for Movember, such as browser overlays. Add a live fundraising goal bar or donation alerts to a livestream in OBS or another streaming app via your Mo Space. Not affiliated with Movember.

Try it out at [moextras.trinch.net](https://moextras.trinch.net).

## Goal Overlay

1. Open the [Goal Overlay setup page](https://moextras.trinch.net/goal-overlay).
2. Enter your Movember Mo Space ID. Find it in your Mo Space sharing link, such as `https://ie.movember.com/mo-space/15270946`; the ID here is `15270946`.
3. Choose your theme then select **Start Overlay**.
4. Copy the overlay URL and add it to your streaming software as a browser source.

## Donation Alerts Overlay

1. Open the [Alerts Overlay setup page](https://moextras.trinch.net/alerts-overlay).
2. Enter your Movember Mo Space ID. Find it in your Mo Space sharing link, such as `https://ie.movember.com/mo-space/15270946`; the ID here is `15270946`.
3. Copy the URL and add it to your streaming software as a browser source.

## Add an Overlay to OBS

1. In OBS, add a **Browser** source to the scene where the overlay should appear.
2. Paste the overlay URL into the source's URL field.
3. Set the width and height to fit your stream layout, then confirm the source. (It should show as normal using the default dimensions)
4. Position and resize the source in the scene. Keep the alerts source's audio enabled if you want to hear donation sounds.