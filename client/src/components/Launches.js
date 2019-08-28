import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
    }
  }
`;

function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if (loading) return <h4>Loading...</h4>;
  if (error) console.log(error);

  return (
    <React.Fragment>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      <div>
        {data.launches.map(launch => (
          <LaunchItem key={launch.flight_number} launch={launch} />
        ))}
      </div>
    </React.Fragment>
  );
}

export default Launches;
