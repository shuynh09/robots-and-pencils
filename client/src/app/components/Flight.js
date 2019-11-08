import React from 'react';
import moment from 'moment';
import linkIcon from '../../assets/images/link.svg';

const Flight = props => {
    const flights = props.flights;
    return (
        <React.Fragment>
            {flights.map(flight =>
                <tr key={flight.flight_number}>
                    <td className={"text-center"}><img src={flight.links.mission_patch_small} alt={"badge"} height={"24px"} width={"24px"} /></td>
                    <td>{flight.rocket.rocket_name}</td>
                    <td>{flight.rocket.rocket_type}</td>
                    <td>{moment(flight.launch_date_utc).format('L')}</td>
                    {flight.details == null ? <td></td> :
                        flight.details.length > 40
                            ? <td>{flight.details.substring(0, Math.min(flight.details.length, 40))} ...</td>
                            : <td>{flight.details}</td>
                    }

                    <td className={"text-center"}>{flight.flight_number}</td>
                    {
                        flight.links.article_link
                            ? <td className={"text-center"}><a href={flight.links.article_link} target="_blank"><img src={linkIcon} alt="article link" height={"24px"} width={"24px"} /></a></td>
                            : <td></td>
                    }
                </tr>
            )}
        </React.Fragment>
    )
}

export default Flight;