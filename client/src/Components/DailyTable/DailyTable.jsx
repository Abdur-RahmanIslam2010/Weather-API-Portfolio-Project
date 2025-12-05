import './DailyTable.css';

function DailyTable(props) {
    return (
        <div className='daily-table'>
            <table>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Max. Temperature</th>
                        <th>Min. Temperature</th>
                        <th>Sunrise</th>
                        <th>Sunset</th>
                    </tr>
                </thead>
                <tbody>
                    {props.days.map((_, i) => {return (
                        <tr>
                            <td>{props.days[i]}</td>
                            <td>{props.maxTemp[i]}</td>
                            <td>{props.minTemp[i]}</td>
                            <td>{props.sunrise[i]}</td>
                            <td>{props.sunset[i]}</td>
                        </tr>
                    )})}
                </tbody>
            </table>
        </div>
    );
}

export default DailyTable;