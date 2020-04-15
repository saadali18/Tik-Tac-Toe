import React,{useState} from 'react';
import Square from './Square.js';
import './Box.css';
import Reset from './reset.js';
import 'tachyons';

const Box=()=>
{
	const [BoxSquares, SetBoxSquares]=useState(Array(9).fill(null));
	const [IsXnext, SetNext]=useState(true);
	const winner=()=>
	{
		const win_combinations=[
			[0,1,2],
			[3,4,5],
			[6,7,8],
			[0,3,6],
			[1,4,7],
			[2,5,8],
			[0,4,8],
			[2,4,6]
		];
		for(let i=0;i<win_combinations.length;i++)
		{
			let [a ,b ,c]=win_combinations[i];
			if(BoxSquares[a]===BoxSquares[b] && BoxSquares[b]===BoxSquares[c])
			{
				return BoxSquares[a];
			}
		}
		return null;
	}
	const Draw=(BoxSquares)=>
 	{
 		let count=0;
 		for(let i=0;i<BoxSquares.length;i++)
 		{
 			if(BoxSquares[i])
 			{
 				count++;
 			}
 		}
 		if(count===BoxSquares.length)
 		{
 			return true;
 		}
 		return null;
 	}
 	let draw=Draw(BoxSquares);
	let win=winner();
	let status=win?	`Winner is ${win}`: 
	draw? `No Result`:
	IsXnext? `Player X Turn`: `Player O turn`;
	// if(win)
	// {
	// 	BoxSquares.fill(" ");
 // 		SetBoxSquares(BoxSquares);
	// }
	const handleGame=(index)=>
	{
		const squares=BoxSquares;
		if(BoxSquares[index]) return;
		squares[index]=IsXnext ? "X" : "O";
		SetBoxSquares(squares);
		SetNext(!IsXnext);
	}
	const renderSquare=(index)=>
 	{
 		return <Square value={BoxSquares[index]} Onclick={()=>handleGame(index)}/>
 	}
 	const Restart=()=>
 	{
 		const squares=Array(9).fill(null);
		SetBoxSquares(squares);
 	}
 	return (
 	<div className="tc">
 		<h1>Tic-Tac-Toe</h1>
	 	<div className="Row">{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</div>
		<div className="Row">{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</div>
	    <div className="Row">{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</div>
		<div className="buffer">{status}</div>
		<Reset Restart={()=>Restart()}/>
	</div>
 	);

}
export default Box;