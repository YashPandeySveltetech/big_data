/** @format */

'use client';
import React, { useState, useCallback, useRef } from 'react';
import dynamic from 'next/dynamic';
import { ForceGraphMethods } from 'react-force-graph-2d';

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
	ssr: false,
});

interface NodeData {
	id: string;
	name: string;
	val: number;
	img: string;
}

interface LinkData {
	source: string;
	target: string;
}

interface GraphData {
	nodes: NodeData[];
	links: LinkData[];
}

const NetworkChart: React.FC = () => {
	const [graphData, setGraphData] = useState<GraphData>({
		nodes: [
			{
				id: '1',
				name: 'Yash 5',
				val: 40,
				img: 'https://www.shutterstock.com/shutterstock/photos/2114399534/display_1500/stock-vector-big-data-globe-logo-design-vector-symbol-icon-pixel-globe-icon-2114399534.jpg',
			},
			{
				id: '2',
				name: 'Criminal Dossier',
				val: 15,
				img: 'https://www.shutterstock.com/shutterstock/photos/2114399534/display_1500/stock-vector-big-data-globe-logo-design-vector-symbol-icon-pixel-globe-icon-2114399534.jpg',
			},
			{
				id: '3',
				name: 'Yash 1',
				val: 20,
				img: 'https://www.shutterstock.com/shutterstock/photos/2114399534/display_1500/stock-vector-big-data-globe-logo-design-vector-symbol-icon-pixel-globe-icon-2114399534.jpg',
			},
			{
				id: '4',
				name: 'Rahul',
				val: 10,
				img: 'https://www.shutterstock.com/shutterstock/photos/2114399534/display_1500/stock-vector-big-data-globe-logo-design-vector-symbol-icon-pixel-globe-icon-2114399534.jpg',
			},
			{
				id: '5',
				name: 'Parveen 3',
				val: 20,
				img: 'https://www.shutterstock.com/shutterstock/photos/2114399534/display_1500/stock-vector-big-data-globe-logo-design-vector-symbol-icon-pixel-globe-icon-2114399534.jpg',
			},
			{
				id: '6',
				name: 'VISA Application',
				val: 15,
				img: 'https://www.shutterstock.com/shutterstock/photos/2114399534/display_1500/stock-vector-big-data-globe-logo-design-vector-symbol-icon-pixel-globe-icon-2114399534.jpg',
			},
			{
				id: '7',
				name: 'Padmakar',
				val: 10,
				img: 'https://www.shutterstock.com/shutterstock/photos/2114399534/display_1500/stock-vector-big-data-globe-logo-design-vector-symbol-icon-pixel-globe-icon-2114399534.jpg',
			},
			{
				id: '8',
				name: 'Travel Records',
				val: 10,
				img: 'https://www.shutterstock.com/shutterstock/photos/2114399534/display_1500/stock-vector-big-data-globe-logo-design-vector-symbol-icon-pixel-globe-icon-2114399534.jpg',
			},
			{
				id: '9',
				name: 'Mobile Applications',
				val: 15,
				img: 'https://www.shutterstock.com/shutterstock/photos/2114399534/display_1500/stock-vector-big-data-globe-logo-design-vector-symbol-icon-pixel-globe-icon-2114399534.jpg',
			},
			{
				id: '10',
				name: 'Youtube Videos',
				val: 10,
				img: 'https://www.shutterstock.com/shutterstock/photos/2114399534/display_1500/stock-vector-big-data-globe-logo-design-vector-symbol-icon-pixel-globe-icon-2114399534.jpg',
			},
			{
				id: '11',
				name: 'Suspect ',
				val: 20,
				img: 'https://www.shutterstock.com/shutterstock/photos/2114399534/display_1500/stock-vector-big-data-globe-logo-design-vector-symbol-icon-pixel-globe-icon-2114399534.jpg',
			},
			{
				id: '12',
				name: 'Criminal Dossier',
				val: 15,
				img: 'https://www.shutterstock.com/shutterstock/photos/2114399534/display_1500/stock-vector-big-data-globe-logo-design-vector-symbol-icon-pixel-globe-icon-2114399534.jpg',
			},
			{
				id: '13',
				name: 'Deepak',
				val: 20,
				img: 'https://www.shutterstock.com/shutterstock/photos/2114399534/display_1500/stock-vector-big-data-globe-logo-design-vector-symbol-icon-pixel-globe-icon-2114399534.jpg',
			},
			{
				id: '14',
				name: 'OSINT',
				val: 10,
				img: 'https://www.shutterstock.com/shutterstock/photos/2114399534/display_1500/stock-vector-big-data-globe-logo-design-vector-symbol-icon-pixel-globe-icon-2114399534.jpg',
			},
			{
				id: '15',
				name: 'Suspect 3',
				val: 20,
				img: 'https://www.shutterstock.com/shutterstock/photos/2114399534/display_1500/stock-vector-big-data-globe-logo-design-vector-symbol-icon-pixel-globe-icon-2114399534.jpg',
			},
			{
				id: '16',
				name: 'VISA Application',
				val: 15,
				img: 'https://www.shutterstock.com/shutterstock/photos/2114399534/display_1500/stock-vector-big-data-globe-logo-design-vector-symbol-icon-pixel-globe-icon-2114399534.jpg',
			},
			{
				id: '17',
				name: 'Dead Bodies',
				val: 10,
				img: 'https://www.shutterstock.com/shutterstock/photos/2114399534/display_1500/stock-vector-big-data-globe-logo-design-vector-symbol-icon-pixel-globe-icon-2114399534.jpg',
			},
			{
				id: '18',
				name: 'Travel Records',
				val: 10,
				img: 'https://www.shutterstock.com/shutterstock/photos/2114399534/display_1500/stock-vector-big-data-globe-logo-design-vector-symbol-icon-pixel-globe-icon-2114399534.jpg',
			},
			{
				id: '19',
				name: 'Mobile Applications',
				val: 15,
				img: 'https://www.shutterstock.com/shutterstock/photos/2114399534/display_1500/stock-vector-big-data-globe-logo-design-vector-symbol-icon-pixel-globe-icon-2114399534.jpg',
			},
			{
				id: '20',
				name: 'Youtube Videos',
				val: 10,
				img: 'https://www.shutterstock.com/shutterstock/photos/2114399534/display_1500/stock-vector-big-data-globe-logo-design-vector-symbol-icon-pixel-globe-icon-2114399534.jpg',
			},
		],
		links: [
			{ source: '1', target: '2' },
			{ source: '1', target: '3' },
			{ source: '2', target: '4' },
			{ source: '3', target: '5' },
			{ source: '4', target: '6' },
			{ source: '5', target: '6' },
			{ source: '6', target: '7' },
			{ source: '7', target: '8' },
			{ source: '8', target: '9' },
			{ source: '9', target: '10' },
			{ source: '10', target: '2' },
			{ source: '11', target: '3' },
			{ source: '12', target: '4' },
			{ source: '13', target: '5' },
			{ source: '14', target: '6' },
			{ source: '15', target: '6' },
			{ source: '16', target: '7' },
			{ source: '17', target: '8' },
			{ source: '18', target: '9' },
			{ source: '19', target: '10' },
            { source: '20', target: '10' },
		],
	});

	const [highlightNodes, setHighlightNodes] = useState(new Set<string>());
	const [highlightLinks, setHighlightLinks] = useState(new Set<string>());
	const [hoverNode, setHoverNode] = useState<NodeData | null>(null);
	const [stopEngine, setStopEngine] = useState(false);
	const fgRef = useRef();

	const updateHighlight = () => {
		setHighlightNodes(new Set(hoverNode ? [hoverNode.id] : []));
		setHighlightLinks(
			new Set(
				graphData.links
					.filter(
						(link) =>
							link.source === hoverNode?.id || link.target === hoverNode?.id
					)
					.map((link) => `${link.source}>${link.target}`)
			)
		);
	};

	const handleNodeHover = (node: NodeData | null) => {
		setHoverNode(node || null);
		updateHighlight();
	};

	const handleLinkHover = (link: LinkData | null) => {
		setHighlightNodes(new Set(link ? [link.source, link.target] : []));
		setHighlightLinks(new Set(link ? [`${link.source}>${link.target}`] : []));
	};

	const nodeCanvasObject = useCallback(
		(node: NodeData, ctx: CanvasRenderingContext2D) => {
            
			const { x, y } = node as any;
			const size = node.val;

			ctx.beginPath();
			ctx.arc(x, y, size, 0, 2 * Math.PI, false);
			ctx.fillStyle = highlightNodes.has(node.id)
				? 'white'
				: 'rgba(255,255,255,0.6)';
			ctx.fill();

			const img = new Image();
			img.src = node.img;

			ctx.drawImage(img, x - size / 2, y - size / 2, size, size);
            ctx.fillStyle = 'white';
			ctx.font = `${size / 3}px Sans-Serif`;
            
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.fillText(node.name, x, y + size + 10);
            ctx.drawImage(img, x - size / 2,y - size / 2, size, size);
            return ctx;
          
		
		},
		[highlightNodes]
	);

	return (
		<div className='w-full h-screen bg-gray-900'>
			<h1 className='absolute top-4 left-4 text-2xl font-bold text-white z-10'>
				Advanced Interactive Suspect Network Chart
			</h1>
			<ForceGraph2D
				graphData={graphData}
				nodeRelSize={6}
				nodeVal='val'
				nodeLabel='name'
                
				nodeCanvasObject={nodeCanvasObject}
				nodeCanvasObjectMode={() => 'replace'}
                maxZoom={8}
				linkWidth={(link: any) =>
					highlightLinks.has(
						`${link.source.id ?? link.source}>${link.target.id ?? link.target}`
					)
						? 2
						: 1
				}
             
				// linkDirectionalParticleWidth={(link: any) =>
				// 	highlightLinks.has(
				// 		`${link.source.id ?? link.source}>${link.target.id ?? link.target}`
				// 	)
				// 		? 2
				// 		: 0
				// }
				onNodeHover={handleNodeHover}
				onLinkHover={handleLinkHover}
				linkColor={() => 'white'}
				cooldownTicks={100}
				onEngineStop={() => {
					// if (!stopEngine) {
					// 	fgRef.current.zoomToFit(1000, 10);
					// 	setStopEngine(true);
					// }
				}}
				linkDirectionalParticles={(link) => 5}
                   linkDirectionalParticleColor={["lightgrey"]}
                   linkDirectionalParticleWidth={(link) => (link.current_case ? 0 : 3)}
                   linkDirectionalParticleSpeed={() => 1 * 0.01}
                   width={1550}
			/>
		</div>
	);
};

export default NetworkChart;
