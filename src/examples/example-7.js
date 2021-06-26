import React, { useRef, useState } from 'react';
import Instructions from '../components/Instructions';

/**
 * Try:
 * Reduce the amount of rendering to only what's necessary.
 */
function RangeSlider() {
	const ref = useRef(null)
	const name = 'ranger-slider-demo'
	const [trackedSelections, setTrackedSelections] = useState([])

	return (
		<div className='example-outer'>
			<Instructions example={7}/>
			<div className='example-inner range'>
				<label htmlFor={ name }>Current Range Value: {ref.current?.value}</label>
				<input
					ref={ref}
					id={name}
					max={1000}
					min={0}
					name={name}
					onChange={(e) => {
						// Update selected values.
						const updatedArray = [...trackedSelections]
						updatedArray.push(e.target.value);
						setTrackedSelections(updatedArray)
					}}
					type="range"
					/>
				<p>[{trackedSelections && trackedSelections.join(', ')}]</p>
			</div>
		</div>
	);
};

export default RangeSlider
