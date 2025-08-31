import { useEffect } from "react";
import { useMap } from "react-leaflet";

function ResizeHandler() {
  const map = useMap();
  useEffect(() => {
    const onResize = () => map.invalidateSize();
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [map]);
  return null;
}

function Recenter({ lat, lng }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng, map]);
  return null;
}

export default function MapSection({
  ipData,
  MapContainer,
  TileLayer,
  Marker,
  Popup,
}) {
  return (
    <>
      <div className="relative w-full">
        {ipData && (
          <>
            <div className="absolute inset-x-0 -top-25 mx-auto max-w-5xl bg-white shadow-md rounded-xl p-6 flex md:flex-row flex-col justify-between gap-4 z-[1000]">
              <div className="flex flex-col md:flex-row items-stretch divide-y divide-gray-200 md:divide-y-0 md:divide-x overflow-hidden">
                <div className="flex-1 px-6 py-2 ">
                  <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide mb-2">
                    IP Address
                  </p>
                  <p className="text-3xl font-semibold">{ipData.ip}</p>
                </div>
                <div className="flex-1 px-6 py-2">
                  <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide mb-2">
                    Location
                  </p>
                  <p className="text-3xl font-semibold">
                    {ipData.location.city}, {ipData.location.region}{" "}
                    {ipData.location.postalCode}
                  </p>
                </div>
                <div className="flex-1 px-6 py-2">
                  <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide mb-2">
                    Timezone
                  </p>
                  <p className="text-3xl font-semibold">
                    {ipData.location.timezone}
                  </p>
                </div>
                <div className="flex-1 px-6 py-2">
                  <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide mb-2">
                    ISP
                  </p>
                  <p className="text-3xl font-semibold">{ipData.isp}</p>
                </div>
              </div>
            </div>
            <div className="relative z-0">
              <MapContainer
                center={[ipData.location.lat, ipData.location.lng]}
                zoom={15}
                scrollWheelZoom={true}
                className="w-full rounded-xl min-h-[300px] h-[62vh] md:h-[66vh] lg:h-[68vh] xl:h-[70vh] shadow-md"
                style={{ zIndex: 0 }}
              >
                <ResizeHandler />
                <Recenter lat={ipData.location.lat} lng={ipData.location.lng} />
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[ipData.location.lat, ipData.location.lng]}>
                  <Popup>{ipData.location.city}</Popup>
                </Marker>
              </MapContainer>
            </div>
          </>
        )}
      </div>
    </>
  );
}
