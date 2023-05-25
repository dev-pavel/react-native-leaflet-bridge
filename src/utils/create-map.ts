const createMap = () => `
<!DOCTYPE html>
<html lang="en">
<head>
    <base target="_top">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link
         rel="stylesheet"
         href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
         integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
         crossorigin=""
     />
    <script
        src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
        integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
        crossorigin=""
    ></script>
    <script src="https://unpkg.com/flatted@3.2.7/min.js" crossorigin=""></script>
    <style>
        html, body {
            height: 100%;
            margin: 0;
        }
    </style>
</head>
<body>
<div id="map" style="width: 100vw; height: 100vh;"></div>
<script>
    try {
        var variables = new Map()
    } catch (e) {
        //todo: create better error handling
        alert(e)
    }
</script>
</body>
</html>
`

export default createMap;
