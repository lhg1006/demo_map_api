import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const SDK_KakaoMap = () => {
    const [level, setLevel] = useState(3);
    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null); // 타입 정의 추가

    const locations = [
		{ title: '카카오', latlng: { lat: 33.450705, lng: 126.570677 } },
		{ title: '생태연못', latlng: { lat: 33.450936, lng: 126.569477 } },
		{ title: '텃밭', latlng: { lat: 33.450879, lng: 126.56994 } },
		{ title: '근린공원', latlng: { lat: 33.451393, lng: 126.570738 } },
	]

	const successHandler = (response: GeolocationPosition): void => {
		const { latitude, longitude } = response.coords;
		setLocation({ latitude, longitude });
	};

	const errorHandler = (error: GeolocationPositionError): void => {
		console.log(error);
	};

	return (
		<Map 
          center={{ lat: location?.latitude || 0, lng: location?.longitude || 0 }} 
          style={{ width: '800px', height: '600px' }}
          level={level} 
        >
			{locations.map((loc, idx) => (
				<MapMarker
					key={`${loc.title}-${loc.latlng}`}
					position={loc.latlng}
					image={{
						src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
						size: { width: 24, height: 35 },
					}}
					title={loc.title}
				/>
			))}
			<button 
				onClick={() => setLevel(level + 1)} 
				className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
			>
				-
			</button>
			<button 
				onClick={() => setLevel(level - 1)} 
				className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-2"
			>
				+
			</button>
            <button 
				onClick={() => {
					navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
				}} 
				className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-2"
			>
				내 위치
			</button>
		</Map>
	);
};

export default SDK_KakaoMap;