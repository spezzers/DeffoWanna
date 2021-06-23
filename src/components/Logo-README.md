# Logo Component

So. Thanks to SVG filter effects, I can take a black and white WebM video, *with **no** transparency*, and produce a colourized version **with** transparency. Yay!

This is exciting because it will allow me to use more complex animations in the smaller video file but still adjust the colour dynamically.

## However...
*(as of 23/06/2021)*
### iOS doesn't support the following
- WebM video
- These SVG filter effects:
  - `feColorMatrix`
  - `feComponentTransfer`
  - `feFlood` seems to work but support is considered 'unknown'
  - *...and probably a few more I haven't tried using*

**Takeaway:** I should have checked '[Can I Use](https:caniuse.com)' more thoroughly before spending so long on this.

### What *can I use* on with iOS
- `feComposite` has pretty acceptable [browser support](https://caniuse.com/mdn-svg_elements_fecomposite)

## What next?
- [ ] Try exporting animation video with alpha channel
> [we need to serve HEVC for Safari and WebM for other browsers](https://css-tricks.com/overlaying-video-with-transparency-while-wrangling-cross-browser-support/#serving-transparent-videos-for-all-browsers)

