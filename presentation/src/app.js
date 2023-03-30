import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { LayersControl } from "react-leaflet/LayersControl";
import { Pane } from "react-leaflet/Pane";

import { useMap } from "react-leaflet/hooks";

import "./css/style.css";

export default function App() {
	return (
		<div className="container">
			{/* Basic with marker */}
			<MapContainer center={[40, -75]} zoom={13} scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[40, -75]}>
					<Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
				</Marker>
			</MapContainer>

			{/* Multiple Tile Layers */}
			<MapContainer id="map" center={[35, -75]} zoom={5}>
				<LayersControl position="topleft">
					<Pane name="base" style={{ zIndex: 1 }}>
						<LayersControl.BaseLayer name="Streets">
							<TileLayer
								url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
								maxZoom={20}
								subdomains={["mt0","mt1","mt2","mt3"]}
								attribution="Google"
							></TileLayer>
						</LayersControl.BaseLayer>
						<LayersControl.BaseLayer checked name="Hybrid">
							<TileLayer
								url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
								maxZoom={20}
								subdomains={["mt0","mt1","mt2","mt3"]}
								attribution="Google"
							></TileLayer>
						</LayersControl.BaseLayer>
						<LayersControl.BaseLayer name="Satellite">
							<TileLayer
								url="http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
								maxZoom={20}
								subdomains={["mt0","mt1","mt2","mt3"]}
								attribution="Google"
							></TileLayer>
						</LayersControl.BaseLayer>
						<LayersControl.BaseLayer name="Terrain">
							<TileLayer
								url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}"
								maxZoom={20}
								subdomains={["mt0","mt1","mt2","mt3"]}
								attribution="Google"
							></TileLayer>
						</LayersControl.BaseLayer>
					</Pane>
				</LayersControl>
			</MapContainer>
		</div>
	);
}