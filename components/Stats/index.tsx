export const Stats = (props: any) => {

    return (
        <div className="w-full shadow stats">
            <div className="stat">
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                <div className="stat-title">NFTs</div>

                {props.total>0 ?
                <div className="stat-value text-success">Total  {props.total}</div>
                : <div className="stat-value text-danger">Total  {props.total}</div>}
                
                {props.available>0 ? 
                <div className="stat-desc text-success">Available  {props.available}</div>
                : <div className="stat-desc text-error ">Available  {props.available}</div>}

                {props.minted>0 ?
                <div className="stat-desc text-success">Minted  {props.minted}</div>
                : <div className="stat-desc text-error">Minted  {props.minted}</div>}

            </div>
            
        </div>
    )
}
