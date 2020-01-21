import React, { useState } from 'react'
import { Stage, Layer, Line, Rect, Text } from 'react-konva'
import Konva from 'konva'

const ColoredRect = () => {
	const [color, setColor] = useState('green')

	const handleClick = () => setColor(Konva.Util.getRandomColor())

	return (
		<Rect
			x={20}
			y={20}
			width={50}
			height={50}
			fill={color}
			shadowBlur={5}
			onClick={handleClick}
		/>
	)
}

export default () => (
	<Stage width={window.innerWidth} height={window.innerHeight}>
		<Layer>
			<Line points={[1, 1, window.innerWidth, 50]} stroke={'black'} />
			<Text text="Try click on rect" />
			<ColoredRect />
			<Line points={[1, 50, window.innerWidth, 50]} stroke={'black'} />
		</Layer>
	</Stage>
)
