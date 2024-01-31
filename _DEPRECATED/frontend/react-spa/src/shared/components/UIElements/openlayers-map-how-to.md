# Continuing without a Credit Card

To use the Google Maps JS SDK, you unfortunately need a credit card - event though you're most likely staying within the free tier Google offers.

There's no way around that and since we later in the course also use another Google API, there also is no great alternative service we could use instead.

**BUT: This of course is just a small detail in the course project** - it does not affect what you learn about the MERN stack. It's just an example of what you could do in the frontend.

So as a workaround, you can simply render a modal with just the address and a placeholder instead of the map (e.g. simply a <div> which is styled to have a simple background color).

**If you absolutely want a map, you can also have a look at OpenLayers, which does NOT require a credit card: https://openlayers.org/doc/quickstart.html**

## **You can render a map with OpenLayers like this:**

Make sure you got the following imports in your `<head>` section in the `public/index.html` file:

```html
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.1.1/css/ol.css"
    type="text/css"
/>
<script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.1.1/build/ol.js"></script>
```

In `Map.js`:

```javascript
import React, { useRef, useEffect } from 'react';

import './Map.css';

const Map = (props) => {
    const mapRef = useRef();

    const { center, zoom } = props;

    useEffect(() => {
        new window.ol.Map({
            target: mapRef.current.id,
            layers: [
                new window.ol.layer.Tile({
                    source: new window.ol.source.OSM(),
                }),
            ],
            view: new window.ol.View({
                center: window.ol.proj.fromLonLat([center.lng, center.lat]),
                zoom: zoom,
            }),
        });
    }, [center, zoom]);

    return <div ref={mapRef} className={`map ${props.className}`} style={props.style} id="map"></div>;
};

export default Map;
```

> Don't overlook the part where I added the `id` prop to the `<div>`!
