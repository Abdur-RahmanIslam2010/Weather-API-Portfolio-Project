import './Table.css';

function TempTable(props) {
    return (
    <div className='temp-table'>
        <div>
            <button id={'left-arrow'} onClick={props.leftClick}></button>
            <h2>{props.date}</h2>
            <button id={'right-arrow'} onClick={props.rightClick}></button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                </tr>
            </thead>
            <tbody>
                {props.time.map((_, i) => {return (
                    <tr key={i}>
                        <td>{props.time[i]}</td>
                        <td>{props.temp[i]}</td>
                        <td>{props.hum[i]}</td>
                    </tr>
                );})}
            </tbody>
        </table>
    </div>
    );
}

export default TempTable;