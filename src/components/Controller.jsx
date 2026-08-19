const Controller = ({theFunction}) => {
    return (
        <div>
            <button onClick={()=>{theFunction(-1)}} >-1</button>
            <button onClick={()=>{theFunction(-10)}}>-10</button>
            <button onClick={()=>{theFunction(-100)}}>-100</button>
            <button onClick={()=>{theFunction(+100)}}>+100</button>
            <button onClick={()=>{theFunction(+10)}}>+10</button>
            <button onClick={()=>{theFunction(+1)}}>+1</button>
        </div>
    )
}

export default Controller;